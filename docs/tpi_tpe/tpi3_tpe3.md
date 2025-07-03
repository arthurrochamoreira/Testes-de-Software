# Questionário - TPI/TPE 3

## Questão 1

**Enunciado:**  
Qual é a representação de programa mais comumente utilizada nos critérios de teste estrutural?

**Alternativas:**  
a) Grafo de Causa-Efeito  
b) Grafo de Fluxo de Dados  
c) Grafo de Caminhos Independentes  
d) Grafo de Fluxo de Controle

**Resposta correta:** d

> O diagrama é um grafo de fluxo de controle. Cada nó ou círculo representa um segmento de instruções que executam sequencialmente, podendo terminar com uma instrução de desvio. Cada aresta ou arco representa uma transferência de controle (desvio) entre segmentos.

**Referência:** _The Art of Software Testing – 3rd Edition_, página 11.

---

## Questão 2

**Enunciado:**  
Qual das seguintes afirmações é MAIS VERDADEIRA sobre o teste de unidade?

**Alternativas:**  
a) É uma abordagem de teste de caixa preta onde a estrutura interna do módulo não é considerada  
b) É uma abordagem de teste de caixa branca que foca nos componentes individuais de um programa  
c) Só é usado para grandes programas com mais de 500 instruções  
d) É o mesmo que teste de integração, que combina vários componentes

**Resposta correta:** b

> O teste de unidade é amplamente orientado à caixa-branca. (p. 86)

**Referência:** _The Art of Software Testing – 3rd Edition_, página 86.

---

## Questão 3

**Enunciado:**  
Quais são os dois principais motivos para realizar o teste de unidade?

**Alternativas:**  
a) Documentar a funcionalidade do programa e identificar erros no início do processo de desenvolvimento  
b) Reduzir a complexidade de testar programas grandes e facilitar a depuração  
c) Atender aos requisitos do usuário e garantir que o programa esteja livre de erros  
d) Melhorar a cobertura do código e testar o desempenho do programa

**Resposta correta:** b

> As motivações para fazer isso são três. Primeiro, o teste de módulo é uma forma de gerenciar os elementos combinados do teste, já que a atenção é focada inicialmente em unidades menores do programa. Segundo, o teste de módulo facilita a tarefa de depuração, já que a atenção está concentrada em uma pequena unidade de código e, frequentemente, a interface com o restante do programa é simulada por um módulo stub. (p. 85)

**Referência:** _The Art of Software Testing – 3rd Edition_, página 85.

---

## Questão 4

**Enunciado:**  
Por que a cobertura de condição pode não satisfazer a cobertura de decisão?

**Alternativas:**  
a) Porque a cobertura de condição não testa todas as instruções  
b) Porque algumas condições podem mascarar outras  
c) Porque a cobertura de condição não inclui os pontos de entrada do programa  
d) Porque a cobertura de condição não testa todas as combinações de condições

**Resposta correta:** b

> Um ponto fraco da cobertura de condição/decisão é que, embora pareça exercitar todos os resultados de todas as condições, frequentemente não o faz, porque certas condições mascaram outras condições.

> Por exemplo, se uma condição ‘and’ for falsa, nenhuma das condições subsequentes na expressão precisa ser avaliada. Da mesma forma, se uma condição ‘or’ for verdadeira, as condições subsequentes também não precisam ser avaliadas.

**Referência:** _The Art of Software Testing – 3rd Edition_, páginas 46–47.

---

## Questão 5

**Enunciado:**  
Qual é a principal limitação da cobertura de decisão?

**Alternativas:**  
a) Não garante que todas as instruções sejam executadas  
b) Não considera as múltiplas condições dentro de uma decisão  
c) Não testa todas as possíveis combinações de condições  
d) Não identifica erros em decisões aninhadas

**Resposta correta:** b

> A cobertura de decisão é um critério mais forte do que a cobertura de instruções, mas ainda é bastante fraco.  
> Um critério que às vezes é mais forte do que a cobertura de decisão é a cobertura de condição. [...] Mas, assim como a cobertura de decisão, isso nem sempre leva à execução de cada instrução.  
> Embora o critério de cobertura de condição pareça, à primeira vista, satisfazer o critério de cobertura de decisão, isso nem sempre acontece. [...] Os testes de cobertura de condição do exemplo anterior cobriram todos os resultados das condições, mas apenas dois dos quatro resultados das decisões...

**Referência:** _The Art of Software Testing – 3rd Edition_, páginas 45–46.

---

## Questão 6

**Enunciado:**  
Qual dos critérios de cobertura de lógica é considerado o mais fraco?

**Alternativas:**  
a) Cobertura de condição  
b) Cobertura de decisão  
c) Cobertura de múltiplas condições  
d) Cobertura de instrução

**Resposta correta:** d

> Embora você possa executar todas as instruções com um único teste, esse critério é bastante fraco.  
> Em outras palavras, o critério de cobertura de instrução é tão fraco que geralmente é inútil.

**Referência:** _The Art of Software Testing – 3rd Edition_, página 44.

---

## Questão 7

**Enunciado:**  
O que o método MC/DC visa alcançar?

**Alternativas:**  
a) Testar todas as instruções do programa pelo menos uma vez  
b) Testar todas as combinações de decisões em um programa  
c) Garantir que cada condição em uma decisão tenha um resultado verdadeiro e falso pelo menos uma vez  
d) Garantir que cada condição independente em uma decisão tenha um efeito independente na saída da decisão

**Resposta correta:** d

> A cobertura de condição/decisão modificada (MC/DC) exige que cada ponto de entrada e saída do programa tenha sido invocado pelo menos uma vez, que cada condição em uma decisão assuma todos os resultados possíveis pelo menos uma vez e que cada condição em uma decisão tenha mostrado afetar de forma independente o resultado da decisão.

**Referência:** _The Art of Software Testing – 3rd Edition_, página 47.

---

## Questão 8

**Enunciado:**  
Qual é uma das principais vantagens do método MC/DC em relação a outros critérios de cobertura?

**Alternativas:**  
a) Requer menos casos de teste para ser implementado  
b) É mais fácil de entender e aplicar em programas grandes  
c) Garante uma cobertura mais robusta ao testar condições de decisão  
d) Não requer testes de múltiplas condições dentro de uma decisão

**Resposta correta:** c

> Um critério que cobre esse problema, e vai além, é a cobertura de múltiplas condições.  
> Esse critério exige que você escreva casos de teste suficientes para que todas as combinações possíveis de resultados de condições em cada decisão, e todos os pontos de entrada, sejam invocados pelo menos uma vez.  
> Embora o MC/DC não exija todas as combinações, ele melhora a cobertura de decisão/condição ao garantir que cada condição afete independentemente o resultado da decisão.

**Referência:** _The Art of Software Testing – 3rd Edition_, página 47.

---

## Questão 9

**Enunciado:**  
Qual das seguintes afirmações melhor descreve o primeiro passo ao usar técnicas de cobertura lógica no teste de software?

**Alternativas:**  
a) Identificar todas as variáveis no programa e garantir que cada uma seja testada em diferentes condições  
b) Listar as decisões condicionais no programa, focando em declarações IF, DO e similares  
c) Criar casos de teste para todas as funcionalidades do software sem considerar a estrutura interna do código  
d) Garantir que todas as declarações IF no programa sejam testadas de forma isolada para verificar seu comportamento

**Resposta correta:** b

> Independentemente da técnica de cobertura lógica utilizada, o primeiro passo é listar as decisões condicionais no programa. Os candidatos neste programa são todas as instruções IF e DO.

**Referência:** _The Art of Software Testing – 3rd Edition_, página 89.

---

## Questão 10

**Enunciado:**  
Qual das seguintes afirmações melhor descreve uma característica do critério de cobertura de múltiplas condições?

**Alternativas:**  
a) O critério de cobertura de múltiplas condições é suficiente para detectar todos os erros possíveis em uma unidade  
b) Mesmo testes que satisfazem o critério de cobertura de múltiplas condições podem não detectar certos erros, como valores iniciais incorretos  
c) O critério de cobertura de múltiplas condições se concentra apenas em testes de caixa-preta  
d) O critério de cobertura de múltiplas condições garante que todos os caminhos de execução do código sejam testados

**Resposta correta:** b

> Embora esses dois casos de teste atendam ao critério de cobertura de decisão, deve ser óbvio que pode haver muitos tipos de erros no módulo que não são detectados por esses dois casos. Por exemplo, os casos de teste não exploram circunstâncias como quando o código de erro é 0, um funcionário é gerente ou a tabela de departamentos está vazia (DSIZE ≤ 0).

**Referência:** _The Art of Software Testing – 3rd Edition_, página 90.

---

## Questão 11

**Enunciado:**  
Qual é uma vantagem importante do teste incremental sobre o teste não incremental?

**Alternativas:**  
a) Requer menos módulos de driver e stub  
b) Necessita de menos tempo de máquina  
c) Permite que todos os módulos sejam testados simultaneamente  
d) Reduz a possibilidade de detectar erros nas interfaces dos módulos

**Resposta correta:** a

> O teste não incremental exige mais trabalho. Para o programa da Figura 5.7, cinco drivers e cinco stubs devem ser preparados [...]. O teste incremental bottom-up exigiria cinco drivers, mas nenhum stub. Um teste incremental top-down exigiria cinco stubs, mas nenhum driver. Menos trabalho é necessário porque os módulos previamente testados são usados em vez dos módulos driver (se começar do topo) ou dos módulos stub (se começar pela base) exigidos na abordagem não incremental.

**Referência:** _The Art of Software Testing – 3rd Edition_, página 99.

---

## Questão 12

**Enunciado:**  
Qual das seguintes observações é uma vantagem do teste não incremental?

**Alternativas:**  
a) Detecta erros de interfaces de módulos mais cedo  
b) Reduz a necessidade de drivers e stubs  
c) Permite mais atividades paralelas no início da fase de testes de módulo  
d) Resulta em testes mais completos dos módulos

**Resposta correta:** c

> No início da fase de testes de módulo, há mais oportunidade para atividades paralelas quando se utiliza o teste não incremental (isto é, todos os módulos podem ser testados simultaneamente). Isso pode ser significativo em projetos grandes (com muitos módulos e pessoas), já que o número de integrantes do projeto geralmente atinge seu pico no início dessa fase.

**Referência:** _The Art of Software Testing – 3rd Edition_, página 100.

---

## Questão 13

**Enunciado:**  
Qual é uma das principais vantagens do teste top-down?

**Alternativas:**  
a) Não requer a criação de stubs  
b) Facilita a representação de casos de teste uma vez que as funções de entrada e saída são adicionadas  
c) Permite a identificação de todos os erros possíveis no programa  
d) Garante que todos os módulos são testados simultaneamente

**Resposta correta:** b

> Uma vez que as funções de entrada/saída são adicionadas, a representação dos casos é facilitada.

**Referência:** _The Art of Software Testing – 3rd Edition_, página 109.

---

## Questão 14

**Enunciado:**  
Qual é uma desvantagem do teste bottom-up?

**Alternativas:**  
a) A produção de módulos driver é mais difícil que a produção de stubs  
b) Não permite a criação de um esqueleto inicial do programa  
c) Requer que todos os módulos sejam testados simultaneamente  
d) Aumenta a possibilidade de erros humanos durante a fase de design

**Resposta correta:** b

> Uma desvantagem da estratégia bottom-up é que não há conceito de um programa esquelético inicial. De fato, o programa funcional não existe até que o último módulo (módulo A) seja adicionado, e esse programa funcional é o programa completo.

**Referência:** _The Art of Software Testing – 3rd Edition_, página 107.

---
