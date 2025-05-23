# Capítulo 5 – Teste de Módulo (Unidade)

<!-- Espaço para imagem -->

## Teste de Módulo (Unidade)

Até este ponto, ignoramos amplamente a mecânica dos testes e o tamanho do programa que está sendo testado. No entanto, como grandes programas (digamos, de 500 instruções ou mais de 50 classes) requerem tratamento especial de teste, neste capítulo consideramos um passo inicial na estruturação do teste de um grande programa: teste de módulo. Os capítulos 6 e 7 enumeram as etapas restantes.

Teste de módulo (ou teste de unidade) é um processo de testar os subprogramas, sub-rotinas, classes ou procedimentos individuais em um programa. Mais especificamente, em vez de testar inicialmente o programa como um todo, o teste é primeiro focado nos blocos de construção menores do programa. As motivações para fazer isso são três:

1. Gerenciar os elementos combinados de teste, focando inicialmente em unidades menores do programa.  
2. Facilitar a depuração (o processo de identificar e corrigir um erro descoberto), pois, quando um erro é encontrado, sabe-se que ele existe em um módulo específico.  
3. Introduzir paralelismo no processo de teste do programa, apresentando-nos a oportunidade de testar vários módulos simultaneamente.  

O objetivo do teste de módulo é comparar a função de um módulo com alguma especificação funcional ou de interface que define o módulo. Para enfatizar novamente o objetivo de todos os processos de teste, o objetivo aqui não é mostrar que o módulo atende à sua especificação, mas **sim** que o módulo contradiz a especificação. <!-- Alteração: inserido "sim" para ênfase -->

Neste capítulo, abordamos o teste de módulos de três pontos de vista:

1. A maneira como os casos de teste são projetados.  
2. A ordem em que os módulos devem ser testados e integrados.  
3. Conselhos sobre a realização dos testes.  

# Design de Caso de Teste

Você precisa de dois tipos de informações ao projetar casos de teste para um módulo de teste: uma especificação para o módulo e o código-fonte do módulo. A especificação normalmente define os parâmetros de entrada e saída do módulo e sua função.

O teste de módulo é amplamente orientado para a **caixa branca**. Um dos motivos é que, à medida que você testa entidades maiores, como programas inteiros (o que será o caso dos processos de teste subsequentes), o teste de caixa branca se torna menos viável. Uma segunda razão é que os processos de teste subsequentes são orientados para encontrar diferentes tipos de erros (por exemplo, erros não necessariamente associados à lógica do programa, como o programa não atender aos requisitos de seus usuários).

Portanto, o procedimento de design de caso de teste para um teste de módulo é o seguinte:

1. Analise a lógica do módulo usando um ou mais dos métodos de caixa branca.  
2. Em seguida, complemente esses casos de teste aplicando métodos de caixa preta à especificação do módulo.

Os métodos de design de caso de teste que usaremos foram definidos no Capítulo 4. Vamos ilustrar seu uso em um teste de módulo aqui por meio de um exemplo.

Suponha que desejamos testar um módulo chamado **BONUS**, cuja função é:

- Adicionar R\$ 2.000 ao salário de todos os funcionários do departamento (ou departamentos) com a maior receita de vendas.  
- No entanto, se o salário atual de um funcionário elegível for de R\$ 150.000 ou mais, ou se o funcionário for um gerente, o salário deve ser aumentado em apenas R\$ 1.000.

As entradas para o módulo são mostradas nas tabelas da Figura 5.1.  
<!-- Espaço para Figura 5.1 -->

Se o módulo executar sua função corretamente, ele retornará um código de erro **0**. Se a tabela de funcionários ou de departamentos não contiver entradas, retornará um código de erro **1**. Se não encontrar funcionários em um departamento qualificado, retornará um código de erro **2**.

O código-fonte do módulo é mostrado na Figura 5.2. Os parâmetros de entrada **ESIZE** e **DSIZE** contêm o número de entradas nas tabelas de empregados e de departamentos. Observe que, embora o módulo seja escrito em PL/1, a discussão a seguir é amplamente independente da linguagem; as técnicas são aplicáveis a programas codificados em outras linguagens. Além disso, como a lógica em PL/1 no módulo é bastante simples, praticamente qualquer leitor, mesmo aqueles que não estão familiarizados com PL/1, deverá ser capaz de entendê-la.  
<!-- Espaço para Figura 5.2 -->

## Employee table

| Name | Job code | Dept. | Salary |
|------|----------|-------|--------|
|      |          |       |        |
|      |          |       |        |
|      |          |       |        |
|      |          |       |        |
|      |          |       |        |
|      |          |       |        |
|      |          |       |        |
|      |          |       |        |

*(Preencha até tantas linhas quanto necessário.)*

## Department table

| Dept. | Sales |
|-------|-------|
|       |       |
|       |       |
|       |       |
|       |       |
|       |       |

*(Preencha até tantas linhas quanto necessário.)*

## Barra Lateral 5.1: Plano de fundo PL/1

```plaintext
BONUS : PROCEDURE(EMPTAB,DEPTTAB,ESIZE,DSIZE,ERRCODE);
DECLARE 1 EMPTAB (*),
    2 NAME CHAR(6),
    2 CODE CHAR(1),
    2 DEPT CHAR(3),
    2 SALARY FIXED DECIMAL(7,2);
DECLARE 1 DEPTTAB (*),
    2 DEPT CHAR(3),
    2 SALES FIXED DECIMAL(8,2);
DECLARE (ESIZE,DSIZE) FIXED BINARY;
DECLARE ERRCODE FIXED DECIMAL(1);
DECLARE MAXSALES FIXED DECIMAL(8,2) INIT(0); /*MAX. SALES IN DEPTTAB*/
DECLARE (I,J,K) FIXED BINARY;           /*COUNTERS*/
DECLARE FOUND BIT(1);                   /*TRUE IF ELIGIBLE DEPT. HAS EMPLOYEES*/
DECLARE SINC FIXED DECIMAL(7,2) INIT(200.00); /*STANDARD INCREMENT*/
DECLARE LINC FIXED DECIMAL(7,2) INIT(100.00); /*LOWER INCREMENT*/
DECLARE LSALARY FIXED DECIMAL(7,2) INIT(15000.00); /*SALARY BOUNDARY*/
DECLARE MGR CHAR(1) INIT('M');
```

## FIGURE 5.2 Module BONUS.

```plaintext
1  ERRCODE=0;
2  IF(ESIZE<=0)|(DSIZE<=0)
3  THEN ERRCODE=1; /*EMPTAB OR DEPTTAB ARE EMPTY*/
4  ELSE DO;
5    DO I = 1 TO DSIZE; /*FIND MAXSALES AND MAXDEPTS*/
6      IF(SALES(I)>=MAXSALES) THEN MAXSALES=SALES(I);
7    END;
8    DO J = 1 TO DSIZE;
9      IF(SALES(J)=MAXSALES) /*ELIGIBLE DEPARTMENT*/
10     THEN DO;
11       FOUND='0'B;
12       DO K = 1 TO ESIZE;
13         IF(EMPTAB.DEPT(K)=DEPTTAB.DEPT(J))
14         THEN DO;
15           FOUND='1'B;
16           IF(SALARY(K)>=LSALARY)|CODE(K)=MGR)
17           THEN SALARY(K)=SALARY(K)+LINC;
18           ELSE SALARY(K)=SALARY(K)+SINC;
19         END;
20       END;
21       IF(-FOUND) THEN ERRCODE=2;
22     END;
23   END;
24 END;
25 END;
```

Barra Lateral 5.1: Contexto do PL/1

Os leitores novos no desenvolvimento de software podem não estar familiarizados com o **PL/1** e pensar que é uma linguagem “morta”. É verdade que provavelmente há muito pouco desenvolvimento novo usando PL/1, mas a manutenção dos sistemas existentes continua, e as construções PL/1 ainda são uma boa maneira de aprender sobre procedimentos de programação.

**PL/1**, que significa _Programming Language One_, foi desenvolvido na década de 1960 pela IBM para fornecer um ambiente de desenvolvimento semelhante ao inglês para suas máquinas de classe mainframe, começando com o IBM System/360. Nessa época da história da computação, muitos programadores estavam migrando para linguagens especializadas, como COBOL (projetada para aplicativos de negócios) e Fortran (projetado para aplicativos científicos). (Veja a Barra Lateral 3.1 no Capítulo 3 para mais sobre essas linguagens.)

Um dos principais objetivos dos projetistas do PL/1 era criar uma linguagem de desenvolvimento que pudesse competir com sucesso tanto com COBOL quanto com Fortran, ao mesmo tempo em que fornecia uma sintaxe mais natural e fácil de aprender. Nem todos os objetivos iniciais do PL/1 foram plenamente alcançados, mas o PL/1 foi refinado e atualizado ao longo dos anos e ainda está em uso em alguns ambientes hoje.

Em meados da década de 1990, o PL/1 foi estendido para outras plataformas de computador, incluindo OS/2, Linux, UNIX e Windows. Esse novo suporte trouxe extensões de linguagem para fornecer mais flexibilidade e funcionalidade.

Independentemente de qual técnica de cobertura lógica você use, o primeiro passo é listar as decisões condicionais no programa. Neste módulo, as decisões são todas as instruções `IF` e `DO`. Observamos que cada `DO` é uma iteração simples cujo limite é igual ou maior que o valor inicial (ou seja, o corpo do loop sempre será executado ao menos uma vez) e só pode sair por meio da própria instrução `DO`. Portanto, não é necessária atenção especial às instruções `DO`: qualquer caso de teste que invoque um `DO` já exercitará sua ramificação de entrada e saída.

As declarações `IF` a serem analisadas são (números à esquerda indicam a ordem no código):

```plaintext
2   IF (ESIZE < 1/4 * 0)  OR  (DSIZE < 1/4 * 0)
6   IF (SALES(I) > 1/4 * MAXSALES)
9   IF (SALES(J) > 1/4 * MAXSALES)
13  IF (EMPTAB.DEPT(K) > DEPTTAB.DEPT(J))
16  IF (SALARY(K) > LSALARY)  OR  (CODE(K) = MGR)
21  IF (¬FOUND) THEN ERRCODE = 1/4 290
```

<!-- Espaço para Tabela 5.1: Situações correspondentes aos resultados da decisão -->

| Decisão | Resultado verdadeiro                                                                 | Resultado falso                                                                                             |
|---------|--------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| 2       | ESIZE < 1/4 * 0 ou DSIZE < 1/4 * 0                                                   | ESDIMENSIONAR e DSIZE > 0                                                                                   |
| 6       | Sempre ocorrerá pelo menos uma vez.                                                  | Solicite o DEPTTAB para que ocorra um departamento com vendas mais baixas após um departamento com vendas mais altas. |
| 9       | Sempre ocorrerá pelo menos uma vez.                                                  | Todos os departamentos não têm as mesmas vendas.                                                             |
| 13      | Há um funcionário em um departamento elegível.                                        | Há um funcionário que não está em um departamento elegível.                                                  |
| 16      | Um funcionário elegível é um gerente ou ganha LSALARY ou mais.                        | Um funcionário elegível não é um gerente e ganha menos do que LSALARY.                                       |
| 21      | Todos os departamentos elegíveis não contêm funcionários.                             | Um departamento elegível contém pelo menos um funcionário.                                                   |

Dado o pequeno número de decisões, provavelmente devemos optar pela cobertura de várias condições, mas examinaremos todos os critérios de cobertura lógica (exceto a cobertura de instrução, que sempre é muito limitada para ser usada) para ver seus efeitos.

Para satisfazer o critério de cobertura de decisão, precisamos de casos de teste suficientes para invocar ambos os resultados de cada uma das seis decisões. As situações de entrada necessárias para invocar todos os resultados da decisão estão listadas na Tabela 5.1. Como dois dos resultados sempre ocorrerão, há 10 situações que precisam ser forçadas por casos de teste. Observe que, para construir a Tabela 5.1, as circunstâncias do resultado da decisão tiveram que ser rastreadas através da lógica do programa para determinar as circunstâncias de entrada correspondentes adequadas. Por exemplo, a decisão 16 não é invocada por nenhum funcionário que atenda às condições; o funcionário deve estar em um departamento elegível.

As 10 situações de interesse na Tabela 5.1 podem ser invocadas pelos dois casos de teste mostrados na Figura 5.3. Observe que cada caso de teste inclui uma definição do resultado esperado, de acordo com os princípios discutidos no Capítulo 2. Embora esses dois casos de teste atendam ao critério de cobertura de decisão, deve ser óbvio que pode haver muitos tipos de erros no módulo que não são detectados por esses dois casos de teste. Por exemplo, os casos de teste não exploram as circunstâncias em que o código de erro é 0, um funcionário é um gerente ou a tabela de departamentos está vazia (DSIZE < 1/40).

### Figura 5.3: Casos de teste para satisfazer o critério de cobertura de decisão

<!-- Espaço para Figura 5.3 -->

Um teste mais satisfatório pode ser obtido usando o critério de cobertura de **condição**. Aqui precisamos de casos de teste suficientes para invocar ambos os resultados de cada condição nas decisões. As condições e situações de entrada necessárias para invocar todos os resultados estão listadas na Tabela 5.2. Como dois dos resultados sempre ocorrerão, existem 14 situações que devem ser forçadas por casos de teste.

<!-- Espaço para Tabela 5.2: Situações correspondentes aos resultados de condição -->

Novamente, essas situações podem ser invocadas por apenas dois casos de teste, conforme mostrado na Figura 5.4.

<table>
  <tr>
    <th>Caso de teste</th>
    <th>Entrada</th>
    <th>Saída esperada</th>
  </tr>
  <tr>
    <td>1</td>
    <td>
      <pre>ESIZE = 0  
All other inputs are irrelevant</pre>
    </td>
    <td>
      <pre>ERRCODE = 1  
ESIZE, DSIZE, EMPTAB e DEPTTAB permanecem inalterados</pre>
    </td>
  </tr>
  <tr>
    <td>2</td>
    <td>
      <pre>ESIZE – DSIZE = 3</pre>
      <strong>EMPTAB</strong>
      <table>
        <tr>
          <th>Nome</th><th>Código</th><th>Departamento</th><th>Salário</th>
        </tr>
        <tr><td>JONES</td><td>E</td><td>D42</td><td>21.000,00</td></tr>
        <tr><td>SMITH</td><td>E</td><td>D32</td><td>14.000,00</td></tr>
        <tr><td>LORIN</td><td>E</td><td>D42</td><td>10.200,00</td></tr>
      </table>
      <strong>DEPTTAB</strong>
      <table>
        <tr><th>Departamento</th><th>Vendas</th></tr>
        <tr><td>D42</td><td>10.000,00</td></tr>
        <tr><td>D32</td><td>8.000,00</td></tr>
        <tr><td>D95</td><td>10.000,00</td></tr>
      </table>
    </td>
    <td>
      <pre>ERRCODE = 2  
ESIZE, DSIZE e DEPTTAB permanecem inalterados</pre>
      <strong>EMPTAB (após execução)</strong>
      <table>
        <tr>
          <th>Nome</th><th>Código</th><th>Departamento</th><th>Salário</th>
        </tr>
        <tr><td>JONES</td><td>E</td><td>D42</td><td>21.100,00</td></tr>
        <tr><td>SMITH</td><td>E</td><td>D32</td><td>14.000,00</td></tr>
        <tr><td>LORIN</td><td>E</td><td>D42</td><td>10.200,00</td></tr>
      </table>
    </td>
  </tr>
</table>


Os casos de teste na Figura 5.4 foram projetados para ilustrar um problema. Uma vez que invocam todos os resultados da Tabela 5.2, eles satisfazem o critério de cobertura de condição, mas provavelmente são um conjunto de casos de teste mais pobre do que os da Figura 5.3 em termos de satisfação do critério de cobertura de decisão. A razão é que eles não executam todas as instruções — por exemplo, o estado 18 nunca é executado. Além disso, eles não realizam muito mais do que os casos de teste na Figura 5.3. Eles não causam a situação de saída **ERRORCODE = 1/40**. Se a instrução 2 tivesse definido erroneamente **ESIZE = 1/40** e **DSIZE = 1/40**, esse erro não seria detectado. É claro que um conjunto alternativo de casos de teste pode resolver esses problemas, mas o fato é que os dois casos de teste na Figura 5.4 satisfazem o critério de cobertura de condição.

O uso do critério combinado de cobertura de decisão/condição eliminaria a maior fraqueza nos casos de teste na Figura 5.4. Aqui, forneceríamos casos de teste suficientes para que todos os resultados de todas as condições e decisões fossem invocados pelo menos uma vez. Fazer de Jones um gerente e de Lorin um não-gerente conseguiria isso, resultando em executar também a instrução 18.

<!-- Espaço para Tabela 5.2: Situações correspondentes aos resultados de condição -->

| Decisão | Condição                                  | Resultado verdadeiro                                          | Resultado falso                                                |
|---------|-------------------------------------------|---------------------------------------------------------------|----------------------------------------------------------------|
| 2       | `ESIZE < 1/4 * 0`                         | `ESIZE < 1/4 * 0`                                             | `ESIZE > 0`                                                    |
| 2       | `DSIZE < 1/4 * 0`                         | `DSIZE < 1/4 * 0`                                             | `DSIZE > 0`                                                    |
| 6       | `SALES(I) > 1/4 * MAXSALES`               | Ao menos um departamento tem vendas > 1/4 * MAXSALES          | Todos os departamentos têm vendas ≤ 1/4 * MAXSALES             |
| 9       | `SALES(J) > 1/4 * MAXSALES`               | Ao menos um departamento tem vendas > 1/4 * MAXSALES          | Todos os departamentos têm vendas ≤ 1/4 * MAXSALES             |
| 13      | `EMPTAB.DEPT(K) > DEPTTAB.DEPT(J)`        | Existe funcionário em um departamento elegível                | Não existe funcionário em um departamento elegível             |
| 16      | `SALARY(K) > LSALARY`                     | Funcionário elegível ganha ≥ LSALARY                          | Funcionário elegível ganha < LSALARY                          |
| 16      | `CODE(K) = MGR`                           | Funcionário elegível é gerente                                | Funcionário elegível não é gerente                             |
| 21      | `¬FOUND`                                  | Todos os departamentos elegíveis não contêm funcionários       | Pelo menos um departamento elegível contém pelo menos um funcionário |

> **Observações sobre correções realizadas:**
> - Separei cada condição atômica em linhas distintas para clareza.  
> - Usei formatação inline-code para expressões lógicas e aritméticas.  
> - Padronizei o uso de `1/4 *` em todas as condições e os símbolos de comparação.  
> - Ajustei descrições de “verdadeiro” e “falso” para refletir corretamente cada condição.  
> - Mantive todos os termos originais e adicionei o placeholder para inserir a figura correspondente.  

### Figura 5.4: Casos de teste para satisfazer o critério de cobertura de condição

<!-- Espaço para Figura 5.4 -->

Um problema com isso, no entanto, é que não é essencialmente melhor do que os casos de teste na Figura 5.3. Se o compilador que está sendo usado parar de avaliar uma expressão assim que determinar que um operando é verdadeiro, essa modificação resultaria na expressão `CODE(K) = MGR` na instrução 16 nunca tendo um resultado verdadeiro. Portanto, se essa expressão fosse codificada incorretamente, os casos de teste não detectariam o erro.

O último critério a explorar é a cobertura **multicondicional**. Este critério requer casos de teste suficientes para que todas as combinações possíveis de condições em cada decisão sejam invocadas pelo menos uma vez. Isso pode ser feito trabalhando na Tabela 5.2. As decisões 6, 9, 13 e 21 têm duas combinações cada; as decisões 2 e 16 têm quatro combinações cada. A metodologia para projetar os casos de teste é:

1. Selecionar um caso que cubra o maior número possível de combinações.  
2. Selecionar outro que cubra o maior número possível de combinações restantes.  
3. Repetir até que todas as combinações sejam cobertas.

Um conjunto de casos de teste que satisfaz o critério de cobertura multicondicional é mostrado na Figura 5.5. O conjunto é mais abrangente do que os conjuntos anteriores de casos de teste, o que implica que deveríamos ter selecionado esse critério no início.

É importante perceber que o módulo **BONUS** pode ter um número tão grande de erros que mesmo os testes que satisfazem o critério de cobertura multicondicional não detectariam todos eles. Por exemplo:

- Nenhum caso de teste gera a situação em que `ERRCODE` é retornado com valor **0**; portanto, se a instrução 1 estivesse ausente, o erro não seria detectado.  
- Se o `LSALARY` fosse inicializado erroneamente para **US\$ 150 000,01**, o erro passaria despercebido.  
- Se a declaração 16 fosse implementada como `SALARY(K) > LSALARY` em vez de `SALARY(K) > 1/4 * LSALARY`, esse erro não seria encontrado.  
- Além disso, erros _off-by-one_ (como não manipular corretamente a última entrada em `DEPTTAB` ou `EMPTAB`) dependeriam em grande parte do acaso para serem detectados.

Dois pontos devem ficar claros:

1. O critério **multicondicional** é superior aos outros critérios.  
2. Qualquer critério de cobertura lógica **não** é suficiente como único meio de derivar testes de módulo.

Portanto, o próximo passo é complementar os testes da Figura 5.5 com um conjunto de **testes de caixa preta**. Para isso, as especificações de interface do módulo BONUS são mostradas a seguir:

## Especificação de Interface do Módulo BONUS

BONUS, um módulo PL/1, recebe cinco parâmetros, simbolicamente referidos aqui como **EMPTAB**, **DEPTTAB**, **ESIZE**, **DSIZE** e **ERRORCODE**. Os atributos desses parâmetros são:

```pl1
DECLARE 1 EMPTAB(*),           /* ENTRADA E SAÍDA */
    2    CHARACTER NAME(6),
    2    CHARACTER CODE(1),
    2    CHARACTER DEPT(3),
    2    FIXED DECIMAL SALARY(7,2);

DECLARE 1 DEPTTAB(*),          /* ENTRADA */
    2    CHARACTER DEPTCODE(3),
    2    FIXED DECIMAL SALES(8,2);

DECLARE (ESIZE, DSIZE)         /* ENTRADA */
    BINARY FIXED;

DECLARE ERRCODE                 /* SAÍDA */
    FIXED DECIMAL(1);


O módulo pressupõe que os argumentos transmitidos tenham esses atributos.  
**ESIZE** e **DSIZE** indicam o número de entradas em **EMPTAB** e **DEPTTAB**, respectivamente. Não devem ser feitas suposições sobre a ordem das entradas em **EMPTAB** e **DEPTTAB**.

A função do módulo é incrementar o salário (`EMPTAB.SALARY`) dos funcionários do departamento (ou departamentos) com o maior valor de vendas (`DEPTTAB.SALES`).  

- Se o salário atual do funcionário for **R\$ 150.000,00** ou mais, ou se o funcionário for um gerente (`EMPTAB.CODE = 'M'`), o incremento é de **R\$ 1.000,00**.  
- Caso contrário, o incremento para o funcionário elegível é de **R\$ 2.000,00**.  

O módulo pressupõe que o salário incrementado caberá no campo `EMPTAB.SALARY`.  

1. Se **ESIZE** ≤ 0 ou **DSIZE** ≤ 0, então:
   - `ERRCODE ← 1`
   - Nenhuma ação adicional é executada.  

2. Caso contrário:
   - A função é completamente executada.
   - Se nenhum departamento de vendas máximas tiver funcionário, o processamento continua, mas `ERRCODE ← 2`;  
   - Caso contrário, `ERRCODE ← 0`.  

Esta especificação não é adequada para gráficos de causa e efeito (não há um conjunto de condições de entrada cujas combinações devam ser exploradas). Assim, será utilizada **análise de valor de contorno**. Os limites de entrada identificados são os seguintes:  

## Limites de Valor de Contorno

### Limites de Entrada

1. EMPTAB tem 1 entrada.  
2. EMPTAB tem o número máximo de entradas (65 535).  
3. EMPTAB possui 0 entradas.  
4. DEPTTAB tem 1 entrada.  
5. DEPTTAB tem 65 535 entradas.  
6. DEPTTAB tem 0 entradas.  
7. Um departamento de vendas máximas tem 1 funcionário.  
8. Um departamento de vendas máximas tem 65 535 funcionários.  
9. Um departamento de vendas máximas não tem funcionários.  
10. Todos os departamentos do DEPTTAB têm as mesmas vendas.  
11. O departamento de vendas máximas é a primeira entrada no DEPTTAB.  
12. O departamento de vendas máximas é a última entrada no DEPTTAB.  
13. Um funcionário elegível é a primeira entrada no EMPTAB.  
14. Um funcionário elegível é a última entrada no EMPTAB.  
15. Um funcionário elegível é um gerente.  
16. Um funcionário elegível não é um gerente.  
17. Um funcionário elegível não-gerente tem salário de R\$ 149 999,99.  
18. Um funcionário elegível não-gerente tem salário de R\$ 150 000,00.  
19. Um funcionário elegível não-gerente tem salário de R\$ 150 000,01.  

### Limites de Saída

20. `ERRCODE = 1/40`  
21. `ERRCODE = 1/41`  
22. `ERRCODE = 1/42`  
23. O salário incrementado de um funcionário elegível é de R\$ 299 999,99.  

### Teste de Adivinhação de Erros

24. Um departamento de vendas máximas sem funcionários é seguido no DEPTTAB por outro departamento de vendas máximas com funcionários.  

## Planejamento de Casos de Teste Adicionais

Isso é usado para determinar se o módulo encerra erroneamente o processamento da entrada quando encontra uma situação `ERRCODE = 1/42`. Revendo essas 24 condições, os números 2, 5 e 8 parecem casos de teste impraticáveis. Uma vez que eles também representam condições que nunca ocorrerão (geralmente uma suposição perigosa a ser feita ao testar, mas aparentemente segura aqui), nós os excluímos.

O próximo passo é comparar as 21 condições restantes com o conjunto atual de casos de teste (Figura 5.5) para determinar quais condições de contorno ainda não estão cobertas. Ao fazer isso, vemos que as condições **1**, **4**, **7**, **10**, **14**, **17**, **18**, **19**, **20**, **23** e **24** exigem casos de teste além dos da Figura 5.5.

O próximo passo é projetar casos de teste adicionais para cobrir essas 11 condições de limite. Uma abordagem é mesclar essas condições nos casos de teste existentes (por exemplo, modificando o caso de teste 4 na Figura 5.5), mas isso não é recomendado porque poderia inadvertidamente perturbar a cobertura completa de múltiplas condições dos casos de teste existentes. Portanto, a abordagem mais segura é **adicionar** casos de teste aos da Figura 5.5.

Os três casos de teste na Figura 5.6 conseguem isso:

- **Caso de Teste 5**: abrange as condições 7, 10, 14, 17, 18, 19 e 20.  
- **Caso de Teste 6**: abrange as condições 1, 4 e 23.  
- **Caso de Teste 7**: cobre a condição 24.  

<!-- Espaço para Figura 5.6: Casos de teste adicionais para limites de fronteira -->

A premissa aqui é que os casos de teste de cobertura lógica (caixa branca) na Figura 5.6 formam um teste de módulo razoável para o procedimento **BONUS**.

---

## Testes Incrementais

Ao executar o processo de teste de módulos, há duas considerações principais:

1. **Design** de um conjunto eficaz de casos de teste (discutido na seção anterior).  
2. **Integração**: a maneira pela qual os módulos são combinados para formar um programa de trabalho.  

A segunda consideração é importante porque tem as seguintes implicações:

- A forma na qual os casos de teste do módulo são escritos.  
- Os tipos de ferramentas de teste que podem ser usadas.  

### Figura 5.6: Casos de teste de análise de valor de contorno suplementar para BONUS

<!-- Espaço para Figura 5.6 -->

---

## Testes Incrementais vs Não Incrementais

A ordem na qual os módulos são codificados e testados influencia diretamente:

- O custo de geração de casos de teste  
- O custo de depuração (localização e reparo de erros detectados)  

Em suma, é uma consideração de importância substancial. Nesta seção, discutimos duas abordagens: **testes incrementais** e **testes não incrementais**. No próximo capítulo, exploraremos duas abordagens incrementais: **top-down** e **bottom-up**.

A questão central é: você deve testar um programa testando cada módulo de forma independente e, em seguida, combinando os módulos para formar o sistema completo, ou testar o programa de outra forma?

A primeira abordagem é chamada de **teste ou integração não incremental**, ou “big-bang”. A segunda abordagem é conhecida como **teste incremental**, ou **integração incremental**.

![Figura 5.7](CAMINHO_PARA_IMAGEM)

O programa na Figura 5.7 é usado como exemplo. Os retângulos representam os seis módulos (sub-rotinas ou procedimentos) no programa. As linhas que conectam os módulos representam a hierarquia de controle do programa; ou seja, o módulo **A** chama os módulos **B**, **C** e **D**; o módulo **B** chama o módulo **E**; e assim por diante.

O **teste não incremental**, a abordagem tradicional, é realizado da seguinte maneira. Primeiro, um teste de módulo é realizado em cada um dos seis módulos, testando cada módulo como uma entidade independente. Os módulos podem ser testados ao mesmo tempo ou sucessivamente, dependendo do ambiente (por exemplo, instalações de computação interativas versus instalações de processamento em lote) e do número de pessoas envolvidas. Finalmente, os módulos são combinados ou integrados (por exemplo, “link editado”) para formar o programa.

O teste de cada módulo requer um **módulo driver** especial e um ou mais **módulos stub**. Por exemplo, para testar o módulo **B**, os casos de teste são primeiro projetados e depois alimentados para o módulo **B**, passando-lhe argumentos de entrada de um módulo driver, um pequeno módulo que deve ser codificado para “conduzir” ou transmitir casos de teste através do módulo em teste. (Como alternativa, uma ferramenta de teste pode ser usada.) O módulo driver também deve exibir, para o testador, os resultados produzidos por **B**. Além disso, como o módulo **B** chama o módulo **E**, algo deve estar presente para receber o controle quando **B** chama **E**. Um módulo stub, um módulo especial com o nome de “E” que deve ser codificado para simular a função do módulo **E**, realiza isso.

---

Quando o teste de módulo de todos os seis módulos for concluído, os módulos serão combinados para formar o programa.

A abordagem alternativa é o **teste incremental**. Em vez de testar cada módulo isoladamente, o próximo módulo a ser testado é primeiro combinado com o conjunto de módulos que já foram testados.

É prematuro fornecer um procedimento para testar incrementalmente o programa na Figura 5.7, porque há um grande número de abordagens incrementais possíveis. Uma questão fundamental é se devemos começar no topo ou na base do programa. No entanto, como discutiremos essa questão na próxima seção, vamos supor por enquanto que estamos começando de baixo.

![Figura 5.7](CAMINHO_PARA_IMAGEM)

O primeiro passo é testar os módulos **E**, **C** e **F**, em paralelo (por três pessoas) ou em série. Observe que devemos preparar um **driver** para cada módulo, mas **não um stub**. O próximo passo é testar **B** e **D**; mas, em vez de testá-los isoladamente, eles são combinados com os módulos **E** e **F**, respectivamente. Em outras palavras, para testar o módulo **B**, um driver é escrito incorporando os casos de teste, e o par **B–E** é testado. O processo incremental — adicionando o próximo módulo ao conjunto ou subconjunto de módulos testados anteriormente — é continuado até que o último módulo (módulo **A**, neste caso) seja testado. Observe que esse procedimento poderia ter progredido alternativamente de cima para baixo.

Várias observações devem ser aparentes neste ponto:

1. O teste não incremental requer mais trabalho. Para o programa na Figura 5.7, cinco drivers e cinco stubs devem ser preparados (supondo que não precisemos de um módulo de driver para o módulo superior). O teste de baixo para cima exigiria cinco **drivers**, mas nenhum **stub**. Um teste de cima para baixo exigiria cinco **stubs**, mas nenhum **driver**. Menos trabalho é necessário porque os módulos testados anteriormente são usados em vez dos módulos de driver (se você começar de cima) ou módulos de stub (se você começar de baixo) necessários na abordagem não incremental.

2. **Erros de programação relacionados a interfaces incompatíveis** ou suposições incorretas entre módulos serão detectados mais cedo quando o teste incremental for usado. A razão é que as combinações de módulos são testadas em conjunto desde o início. No entanto, quando testes não incrementais são usados, os módulos não “se veem” até o final do processo.

3. Como resultado, a depuração deve ser mais fácil se o teste incremental for usado. Se assumirmos que existem erros relacionados a interfaces e suposições entre módulos (uma boa suposição, por experiência), então, se **testes não incrementais** foram usados, os erros não aparecerão até que todo o programa tenha sido combinado. Neste momento, podemos ter dificuldade em identificar o erro, pois ele pode estar em qualquer lugar dentro do programa. Por outro lado, se for utilizado um **teste incremental**, um erro deste tipo deverá ser mais fácil de localizar, uma vez que é provável que ele esteja associado ao módulo adicionado mais recentemente.

4. O **teste incremental** pode resultar em **testes mais completos**. Se você estiver testando o módulo **B**, o módulo **E** ou **A** (dependendo se você começou de baixo ou de cima) será executado como consequência. Embora **E** ou **A** devessem ter sido exaustivamente testados anteriormente, talvez executá-los durante o teste de **B** invoque uma nova condição — possivelmente uma deficiência no teste original de **E** ou **A**. Por outro lado, no **teste não incremental**, o teste de **B** afeta apenas o próprio módulo **B**. Em outras palavras, o **teste incremental** substitui os **stubs** ou **drivers** necessários na abordagem não incremental pelos módulos reais, dando-lhes mais exposição ao final do último teste de módulo.

5. A abordagem **não incremental** parece usar menos tempo de máquina. Se o módulo **A** da Figura 5.7 estiver sendo testado usando o **teste de baixo para cima**, os módulos **B**, **C**, **D**, **E** e **F** provavelmente serão executados durante a execução de **A**. Em um **teste não incremental** de **A**, apenas stubs para **B**, **C** e **E** serão executados. O mesmo ocorre no **teste incremental** de cima para baixo: se o módulo **F** estiver sendo testado, os módulos **A**, **B**, **C**, **D** e **E** podem ser executados, enquanto no **teste não incremental** de **F**, apenas o **driver** para **F** e o próprio **F** são executados. Portanto, o número de instruções de máquina executadas em um teste incremental tende a ser maior do que no teste não incremental. Em contrapartida, o **teste não incremental** exige mais tempo de desenvolvimento de **drivers** e **stubs**.

6. No início da fase de teste de módulo, há mais oportunidade para **atividades paralelas** quando o teste não incremental é usado (ou seja, todos os módulos podem ser testados simultaneamente). Isso pode ser significativo em um grande projeto (muitos módulos e pessoas), já que o número de funcionários geralmente atinge seu pico no início dessa fase.

Em resumo, as observações 1 a 4 são **vantagens do teste incremental**, enquanto as observações 5 e 6 são **desvantagens**. Dadas as tendências atuais na **indústria da computação** (os custos de hardware têm diminuído e parecem destinados a continuar a fazê-lo, enquanto a capacidade de hardware aumenta; por outro lado, os custos de hardware e as consequências de erros de software estão aumentando), e dado o fato de que **quanto mais cedo um erro é encontrado, menor é o custo de repará-lo**, pode-se ver que as **observações 1 a 4** estão crescendo em importância, enquanto a **observação 5** está se tornando menos relevante. A **observação 6** parece ser uma desvantagem fraca, se é que existe. Isso leva à conclusão de que o **teste incremental** é superior.

## Teste de cima para baixo versus de baixo para cima

Dada a conclusão da seção anterior — que o **teste incremental** é superior ao **teste não incremental** — exploramos a seguir duas estratégias incrementais: **teste de cima para baixo** e **teste de baixo para cima**. Antes de entrar nelas, no entanto, devemos esclarecer vários equívocos.

Primeiro, os termos **top-down testing**, **top-down development** e **top-down design** são frequentemente usados como sinônimos. **Teste de cima para baixo** e **desenvolvimento de cima para baixo** são sinônimos (representam uma estratégia de ordenar a codificação e o teste de módulos), mas o **design de cima para baixo** é algo bem diferente e independente. Um programa que foi projetado de cima para baixo pode ser testado de cima para baixo ou de baixo para cima.

Em segundo lugar, o **teste de baixo para cima** (ou **desenvolvimento de baixo para cima**) é frequentemente equiparado erroneamente ao **teste não incremental**. A razão é que o teste de baixo para cima começa de maneira idêntica a um teste não incremental (ou seja, quando os módulos inferiores, ou terminais, são testados), mas, como vimos na seção anterior, o teste de baixo para cima é uma estratégia incremental.

Finalmente, como ambas as estratégias são incrementais, não repetiremos aqui as vantagens dos testes incrementais; discutiremos apenas as diferenças entre **teste de cima para baixo** e **teste de baixo para cima**.

<!-- Espaço para diagrama ilustrativo das duas estratégias -->

### Teste de cima para baixo

A estratégia de cima para baixo começa com o **módulo superior**, ou inicial, no programa. Depois disso, não há um único procedimento “correto” para selecionar o próximo módulo a ser testado incrementalmente; a única regra é que, para ser elegível, pelo menos um dos módulos subordinados (chamados) do módulo em teste deve ter sido testado anteriormente.

---

![Figura 5.8](CAMINHO_PARA_IMAGEM)

A Figura 5.8 é usada para ilustrar essa estratégia. A a L são os 12 **módulos** do programa. Suponha que o módulo **J** contenha as operações de leitura de E/S do programa e o módulo **I** contenha as operações de gravação.

O primeiro passo é testar o módulo **A**. Para isso, os **módulos stub** que representam **B**, **C** e **D** devem ser escritos. Infelizmente, a produção de módulos stub é muitas vezes mal compreendida; como evidência, frequentemente você pode ver declarações como “um módulo stub precisa apenas escrever uma mensagem informando ‘chegamos até aqui’” e “em muitos casos, o módulo stub simplesmente retorna sem fazer nenhum trabalho”. Na maioria das situações, essas afirmações são falsas.

Como o módulo **A** chama o módulo **B**, **A** espera que **B** execute algum trabalho; esse trabalho provavelmente é algum resultado (argumentos de saída) retornado a **A**. Se o stub simplesmente retornar o controle ou escrever uma mensagem de erro sem fornecer um resultado significativo, o módulo **A** falhará — não por causa de um erro em **A**, mas por causa da falha do stub em simular o módulo correspondente.

Além disso, retornar uma saída “conectada” de um módulo stub é muitas vezes insuficiente. Por exemplo, considere a tarefa de escrever um stub representando uma rotina de raiz quadrada, uma rotina de pesquisa de tabela de banco de dados, uma rotina de “obter registro de arquivo mestre correspondente” ou algo semelhante. Se o stub retornar uma saída fixa — mas não o valor específico esperado pelo módulo de chamada durante essa invocação — o módulo de chamada poderá falhar ou produzir um resultado confuso. Portanto, a produção de stubs não é uma tarefa trivial.

---

Outra consideração é a forma como os **casos de teste** são apresentados ao programa, uma consideração importante que nem mesmo é mencionada na maioria das discussões sobre **teste de cima para baixo**. Em nosso exemplo, a pergunta é: **Como você alimenta casos de teste para o módulo A?** O módulo superior em programas típicos não recebe argumentos de entrada nem executa operações de **entrada/saída**, portanto, a resposta não é imediatamente óbvia. A resposta é que os dados de teste são alimentados no módulo (módulo A nesta situação) a partir de um ou mais de seus **stubs**.

Para ilustrar, suponha que as funções de **B**, **C** e **D** sejam as seguintes:  
- **B** — Obter resumo do arquivo de transação.  
- **C** — Determinar se o status semanal atende à cota.  
- **D** — Produzir relatório de resumo semanal.

Um caso de teste para **A**, então, é um resumo de transação retornado do **stub B**. O stub D pode conter instruções para gravar seus dados de entrada em uma impressora, permitindo que os resultados de cada teste sejam examinados.

Neste programa, existe outro problema. Presumivelmente, o módulo **A** chama o módulo **B** apenas uma vez; portanto, o problema é **como alimentar mais de um caso de teste para A**. Uma solução é desenvolver várias versões do **stub B**, cada uma com um conjunto diferente de dados de teste a serem retornados a **A**. Para executar os casos de teste, o programa é executado várias vezes, cada vez com uma versão diferente do **stub B**. Outra alternativa é colocar dados de teste em arquivos externos e fazer com que o **stub B** leia esses dados e os retorne para **A**. Em ambos os casos, tendo em mente a discussão anterior, você deve ver que o desenvolvimento de **módulos stub** é mais difícil do que muitas vezes parece.

Além disso, muitas vezes é necessário, devido às características do programa, representar um caso de teste em vários **stubs** abaixo do módulo em teste (ou seja, onde o módulo recebe dados a serem acionados chamando vários módulos). Depois que **A** for testado, um módulo real substitui um dos stubs e os stubs exigidos por esse módulo são adicionados. Por exemplo, a Figura 5.9 pode representar a próxima versão do programa.

![Figura 5.9](CAMINHO_PARA_IMAGEM)

Depois de testar o módulo superior, várias sequências são possíveis. Por exemplo, se estivermos realizando todas as sequências de teste, quatro exemplos de quaisquer sequências possíveis de módulos são:

//corrigir 
1. UMA B  
2. UMA B  
3. UMA DCDEFGHEuJKL  
   EFJCGKDHLEu  
   HEuKLCGBFJE  
   BFJDEuECGKHL  
4. UMA

---


![Figura 5.9](CAMINHO_PARA_IMAGEM)

Se ocorrerem **testes paralelos**, outras alternativas são possíveis. Por exemplo, depois que o módulo **A** foi testado, um programador pode testar a combinação **A–B**; outro, **A–C**; e um terceiro, **A–D**. Em geral, não existe uma sequência “melhor”, mas duas diretrizes devem ser consideradas:

1. **Seções críticas** do programa (por exemplo, o módulo **G**): uma “seção crítica” pode ser um módulo complexo, com novo algoritmo ou suspeito de ser propenso a erros.  
2. **Módulos de E/S** devem ser adicionados o mais cedo possível.

A motivação para a primeira diretriz é óbvia, mas a segunda merece discussão. Lembre-se de que, enquanto alguns stubs devem conter casos de teste, outros precisam gravar suas entradas em impressora ou monitor. Assim que o módulo que **aceita** a entrada do programa é adicionado, a representação dos casos de teste se simplifica — sua forma passa a ser idêntica à entrada do programa final (por exemplo, de um arquivo de transação ou de um terminal). Da mesma forma, quando o módulo que **executa** a função de saída é incorporado, o código nos stubs para escrever resultados pode deixar de ser necessário.

Portanto, se **J** e **I** são os módulos de E/S e **G** é o módulo crítico, uma sequência incremental possível é:

A → B → F → J → D → I → C → G → E → K → H → L

O programa após o sexto incremento (após **D**) ficaria conforme ilustrado na Figura 5.10.

![Figura 5.10](CAMINHO_PARA_IMAGEM)

Uma vez atingido o estado intermediário na **Figura 5.10**, a representação dos casos de teste e a inspeção dos resultados são simplificadas. Tem ainda outra vantagem, pois você possui uma **versão esquelética funcional** do programa — ou seja, uma versão que executa operações reais de entrada e saída. No entanto, os stubs ainda estão simulando alguns dos “interiores”. Esta versão esquelética inicial:

- **Permite que você encontre erros** e problemas de fator humano.  
- **Possibilita demonstrar o programa** ao eventual usuário.  
- **Serve como evidência** de que o design geral do programa é sólido.  
- **Serve como um impulsionador do moral**.

Esses pontos representam a principal vantagem da estratégia de cima para baixo. Por outro lado, a **abordagem de cima para baixo** tem algumas deficiências sérias.

Suponha que nosso estado atual de teste seja o da Figura 5.10 e que nosso próximo passo seja substituir o **stub H** pelo **módulo H**. O que devemos fazer neste ponto (ou antes) é usar os métodos descritos anteriormente neste capítulo para **desincronizar um conjunto de casos de teste para H**. Observe, no entanto, que os casos de teste estão na forma de entradas reais do programa para o módulo **J**. Isso apresenta vários problemas. Primeiro, por causa dos módulos intermediários entre **J** e **H** (F, B, A e D), podemos achar impossível representar certos casos de teste para o módulo **J** que testem todas as situações predefinidas em **H**. Por exemplo, se **H** é o módulo **BÔNUS** da Figura 5.2, pode ser impossível, devido à natureza do módulo intermediário **D**, criar alguns dos sete casos de teste das Figuras 5.5 e 5.6.

Em segundo lugar, por causa da “distância” entre **H** e o ponto em que os dados de teste entram no programa, mesmo que fosse possível testar todas as situações, determinar quais dados alimentar para **J** a fim de testar essas situações em **H** é frequentemente uma tarefa mental complexa.

Terceiro, como a saída exibida de um teste pode vir de um módulo distante daquele que está sendo testado, correlacionar a saída exibida com o que ocorreu no módulo-alvo pode ser difícil ou impossível. Por exemplo, ao adicionar o módulo **E** à Figura 5.10, os resultados de cada caso de teste são obtidos examinando a saída escrita pelo módulo **I**, mas, devido aos módulos intermediários, pode ser complicado deduzir a saída real de **E** (isto é, os dados retornados a **B**).

A estratégia de cima para baixo, dependendo da abordagem, pode apresentar mais dois problemas. Algumas pessoas acreditam que ela se sobrepõe à fase de design do programa. Por exemplo, ao projetar o programa na Figura 5.8, pode-se supor que, após definir os dois primeiros níveis, os módulos **A** a **D** possam ser codificados e testados enquanto o design dos níveis inferiores prossegue. Como enfatizado em outros locais, essa costuma ser uma decisão imprudente. O design é uma etapa inicial; ao projetar níveis inferiores, podem surgir mudanças ou melhorias desejáveis nos níveis superiores. Se estes já tiverem sido codificados e testados, tais melhorias provavelmente serão descartadas, o que é prejudicial a longo prazo.

Um problema final, comum na prática, é não testar completamente um módulo antes de avançar para o próximo. Isso acontece por dois motivos: pela dificuldade de incorporar dados de teste em stubs e pelo fato de os níveis superiores geralmente proverem recursos aos níveis inferiores. Na Figura 5.8, vimos que testar o módulo **A** pode exigir várias versões do stub para **B**. Na prática, há quem diga: “Isso dá muito trabalho; vou postergar alguns casos de teste de **A** até incluir o módulo **J**, quando será mais fácil apresentar os dados de teste, e só então concluirei o teste de **A**.” O risco é esquecer de executar todos os casos de **A** nessa etapa posterior. Além disso, como os níveis superiores costumam fornecer recursos (por exemplo, abertura de arquivos) usados pelos níveis inferiores, às vezes só se percebe que um recurso não foi corretamente configurado (por exemplo, arquivo aberto com atributos inadequados) ao testar o módulo que o utiliza.

---
## Teste incremental de baixo para cima

O próximo passo é examinar a **estratégia de teste incremental de baixo para cima**. Na maioria das vezes, o teste de baixo para cima é o oposto do teste de cima para baixo; assim, as vantagens do teste de cima para baixo tornam-se desvantagens do teste de baixo para cima, e as desvantagens do teste de cima para baixo tornam-se vantagens do teste de baixo para cima. Por isso, a discussão sobre os testes ascendente e descendente é mais curta.

A estratégia **ascendente** começa com os **módulos terminais** no programa (aqueles que não chamam outros módulos). Depois que esses módulos forem testados, não existe um procedimento único para selecionar o próximo módulo a ser testado incrementalmente; a única regra é que, para ser elegível, **todos os módulos subordinados** (os módulos que ele chama) devem ter sido testados anteriormente.

Voltando à **Figura 5.8**, o primeiro passo é testar alguns ou todos os módulos **E**, **J**, **G**, **K**, **L** e **I**, em série ou em paralelo. Para isso, cada módulo precisa de um **driver** especial: um módulo que fornece entradas de teste, chama o módulo em teste e exibe as saídas (ou compara as saídas reais com as esperadas). Ao contrário da situação com stubs, várias versões de um driver não são necessárias, pois o driver pode chamar iterativamente o módulo que está sendo testado. Na maioria dos casos, os drivers são mais fáceis de produzir do que os stubs.

Como mencionado anteriormente, um fator que influencia a sequência de testes é a **criticidade** dos módulos. Se decidirmos que os módulos **D** e **F** são os mais críticos, um estado intermediário do teste incremental de baixo para cima pode ser o da **Figura 5.11**. As próximas etapas podem ser testar **E** e, em seguida, testar **B**, combinando B com os módulos E, F e J testados anteriormente.

Uma desvantagem da estratégia de baixo para cima é que não existe o conceito de **programa quase esquelético**. De fato, o programa funcional não existe até que o último módulo (módulo **A**) seja adicionado, e então o programa de trabalho é o programa completo. Embora as funções de E/S possam ser testadas antes que todo o programa seja integrado (os módulos de E/S estão sendo usados na Figura 5.11), as vantagens do programa esquelético precoce não estão presentes.

Os problemas associados à dificuldade de criar todas as situações de teste na abordagem top-down não existem aqui. Se você pensar em um driver como uma **sonda de teste**, a sonda é colocada diretamente no módulo em teste; não há módulos intermediários para complicar a análise. Examinando outros problemas da abordagem de cima para baixo, você não pode tomar a decisão imprudente de sobrepor **design** e **teste**, uma vez que o **teste de baixo para cima** não pode começar até que a parte inferior do programa tenha sido **designada**. Além disso, o problema de não completar o teste de um módulo antes de iniciar outro — devido à dificuldade de codificar dados de teste em versões de um **stub** — não existe ao usar o teste de baixo para cima.

### Uma comparação

Seria conveniente se a questão **cima para baixo versus baixo para cima** fosse tão clara quanto **incremental versus não incremental**, mas infelizmente não é. A **Tabela 5.3** resume as vantagens e desvantagens relativas das duas abordagens (excluindo as vantagens compartilhadas por ambas — ou seja, as do teste incremental).

<!-- Tabela 5.3: Vantagens e desvantagens de cima para baixo vs. de baixo para cima -->

A primeira vantagem de cada abordagem pode parecer o fator decisivo, mas não há evidências de que as principais falhas ocorram com mais frequência nos níveis superior ou inferior de um programa típico. A maneira mais segura de decidir é pesar os fatores da Tabela 5.3 em relação ao programa específico em teste. Na falta de um programa concreto aqui, as sérias **consequências** da quarta desvantagem do teste de cima para baixo — e a disponibilidade de ferramentas de teste que eliminam a necessidade de **drivers**, mas não de **stubs** — parecem dar vantagem à estratégia de baixo para cima.

Além disso, pode ser evidente que os testes de cima para baixo e de baixo para cima não são as únicas estratégias incrementais possíveis.

---

## Tabela 5.3 Comparação de testes de cima para baixo e de baixo para cima

### Teste de cima para baixo

**Vantagens**
1. Vantajoso quando ocorrem falhas graves no topo do programa.  
2. Os módulos de esboço costumam ser mais complicados do que parecem à primeira vista.  
3. Antes que as funções de E/S sejam adicionadas, a representação de casos de teste pode ser difícil.  
4. As condições de teste podem ser impossíveis ou muito difíceis de criar.  
5. A observação do resultado do teste é mais difícil.  
6. Leva à conclusão de que o design e o teste podem ser sobrepostos.  
7. Adia a conclusão do teste de certos módulos.  

**Desvantagens**
1. Devem ser produzidos módulos stub de topo.  
2. Uma vez que as funções de E/S são adicionadas, a representação de casos é mais fácil.  
3. O programa esquelético inicial permite demonstrações e aumenta o moral.  
4. As condições de teste podem ser impossíveis ou muito difíceis de criar.  
5. A observação do resultado do teste é mais difícil.  
6. Leva à conclusão de que o design e o teste podem ser sobrepostos.  
7. Adia a conclusão do teste de certos módulos.  

### Teste de baixo para cima

**Vantagens**
1. Vantajoso quando ocorrem falhas graves na parte inferior do programa.  
2. As condições de teste são mais fáceis de criar.  
3. A observação dos resultados dos testes é mais fácil.  

**Desvantagens**
1. Devem ser produzidos módulos de driver.  
2. O programa, como entidade funcional, só existe após a adição do último módulo.  

## Executando o teste

A parte restante do teste de módulo é o ato de realmente realizar o teste. Um conjunto de dicas e diretrizes para isso está incluído aqui.

Quando um caso de teste produz uma situação em que os resultados reais do módulo não correspondem aos resultados esperados, há duas explicações possíveis: ou o módulo contém um erro, ou os resultados esperados estão incorretos (o caso de teste está incorreto). Para minimizar essa confusão, o conjunto de casos de teste deve ser **revisado ou inspecionado antes** que o teste seja realizado (ou seja, os casos de teste devem ser testados).

O uso de **ferramentas de teste automatizadas** pode minimizar parte do trabalho penoso do processo de teste. Por exemplo, existem ferramentas que eliminam a necessidade de módulos de driver. Ferramentas de análise de fluxo enumeram os caminhos por meio de um programa, encontram instruções que nunca podem ser executadas (código _“inacessível”_) e identificam instâncias em que uma variável é usada antes de receber um valor.

Como foi prática anterior neste capítulo, lembre-se de que **definir o resultado esperado** é parte necessária de um caso de teste. Ao executar um teste, lembre-se de procurar **efeitos colaterais** (casos em que um módulo faz algo que não deveria fazer). Em geral, essas situações são difíceis de detectar, mas algumas podem ser encontradas verificando, após a execução do caso de teste, as entradas para o módulo que não devem ter sido alteradas. Por exemplo, o caso de teste 7 na Figura 5.6 afirma que, como parte do resultado esperado, **ESIZE**, **DSIZE** e **DEPTTAB** devem permanecer inalterados. Ao executar esse caso de teste, examine não apenas a saída quanto ao resultado correto, mas também **ESIZE**, **DSIZE** e **DEPTTAB** para verificar alterações indevidas.

<!-- Espaço para Figura 5.6 -->

Os problemas psicológicos associados a uma pessoa que tenta testar **seus próprios** programas também se aplicam ao teste de módulo. Em vez de testar seus próprios módulos, os programadores podem **trocá-los**; mais especificamente, o programador do módulo de chamada é sempre um bom candidato para testar o módulo chamado. Observe que isso se aplica apenas ao teste — a depuração de um módulo sempre deve ser realizada pelo programador original.

Evite casos de teste descartáveis; represente-os de forma que possam ser **reutilizados** no futuro. Lembre-se do fenômeno contra-intuitivo na Figura 2.2: se for detectado um número anormalmente elevado de erros em um subconjunto de módulos, é provável que esses módulos contenham ainda mais erros não detectados. Esses módulos devem ser submetidos a testes adicionais de módulo e, possivelmente, a um passo a passo ou inspeção de código adicional.

<!-- Espaço para Figura 2.2 -->

Por fim, lembre-se de que o objetivo de um teste de módulo não é demonstrar que o módulo funciona corretamente, mas **demonstrar a presença de erros** no módulo.

---

## Resumo

Neste capítulo, apresentamos algumas das mecânicas de teste de componentes individuais de programas — sub-rotinas, subprogramas, classes e procedimentos. No teste de módulo, você compara a funcionalidade do software com a especificação que define sua função pretendida. O teste de módulo ou unidade pode ser uma parte importante da caixa de ferramentas de um desenvolvedor para ajudar a obter um aplicativo confiável, especialmente com linguagens orientadas a objetos, como Java e C#. O objetivo no teste de módulo é o mesmo que em qualquer outro tipo de teste de software: tentar mostrar como o programa contradiz a especificação. Além da especificação do software, você precisará do **código-fonte** de cada módulo para efetuar o teste.

O teste de módulo é em grande parte um **teste de caixa branca** (consulte o Capítulo 4 para mais informações). Um projeto de teste de módulo completo incluirá estratégias incrementais, como técnicas de cima para baixo e de baixo para cima. É útil, ao se preparar para um teste de módulo, revisar os **princípios psicológicos e econômicos** estabelecidos no Capítulo 2.

Mais um ponto: o software de teste de módulos é apenas o começo de um procedimento de teste exaustivo. Você precisará passar para o **teste de ordem superior** (Capítulo 6) e o **teste de usuário** (Capítulo 7).

---
