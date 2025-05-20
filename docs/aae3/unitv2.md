# Testes de Unidade e Testes de Integração

## Sumário
1. Apresentação da Disciplina  
2. Conceitos-Chaves  
3. Pirâmide de Testes  
4. Outros Formatos de Estratégia de Testes  
5. Níveis de Teste – Benefícios  
6. Níveis de Teste – Considerações  

---

## 1. Apresentação da Disciplina

**Universidade de Brasília**  
**Faculdade Gama**  
**Engenharia de Software**

**Disciplina:** `206580 – Testes de Software`  
**Tema:** *Testes de Software: Testes de Unidade e Testes de Integração*

**Docente:**  
**Elaine Venson**  
*elainevenson@unb.br*

---

## 2. Conceitos-Chaves

**NÍVEL**  
- Unitário  
- Integração  
- Sistema  
- Aceitação

**OBJETIVO (tipo de testes)**  
- Função  
- Segurança  
- Estresse  
- Usabilidade  
- Avaliação desempenho

**TÉCNICA**  
- Caixa-branca  
- Caixa-preta  
- Particionamento de equivalência  
- Análise de valor limite

**AMBIENTE**  
- mainframe  
- Cliente-servidor  
- web  
- outros

**Eixos**  
- ONDE TESTAR  
- QUANDO TESTAR  
- COMO TESTAR  
- O QUE TESTAR  

---

## 3. Pirâmide de Testes

**Hierarquia de testes com base em velocidade, custo e quantidade:**

- **Topo (menos quantidade, maior custo, menor velocidade):**  
  - Aceitação

- **Intermediários:**  
  - Sistema  
  - Integração  

- **Base (mais quantidade, menor custo, maior velocidade):**  
  - Unidade

**Eixos laterais:**  
- Esquerda: Velocidade (decrescente de cima para baixo)  
- Direita: Custo (crescente de baixo para cima)  
- Inferior: Quantidade (crescente da direita para a esquerda)

---

## 4. Outros Formatos

**A. The Testing Trophy**  
- Static  
- Unit  
- Integration  
- End to End  

**Por Kent C. Dodds**  
- End to end com [Cypress](https://www.cypress.io)  
- Integration & Unit com [Jest](https://jestjs.io)  
- Static com [Flowtype](https://flow.org) e [ESLint](https://eslint.org)

**B. Microservices Test Strategy (Spotify Labs)**  
- Integrated  
- Integration  
- Implementation Detail

*Nota:* Priorizar testes de Integração. Menos testes de detalhe de implementação e menos ainda testes integrados (idealmente nenhum).

---

## 5. Níveis de Teste – Benefícios

- Evita redundância de testes: cada nível trata uma classe específica de defeitos.
- Aplicação conforme o tamanho do software:
  - Software para uso do próprio autor → até nível de integração.
  - Softwares comerciais em larga escala → requerem testes em níveis mais elevados.

---

## 6. Níveis de Teste – Considerações

- Os níveis **não são necessariamente sequenciais**.
- As características do sistema a ser testado irão determinar:
  - Níveis de teste  
  - Tipos de testes  
  - Técnicas de derivação de casos de teste

---
## 7. Níveis de Teste

1. Testes de unidade  
2. Testes de integração  
3. Testes de função  
4. Testes de sistema  
5. Testes de aceitação

---

## 8. Níveis de Teste – Diagrama

Fonte: [Myers]

[End User]
↓
[Requirements] → [Acceptance Test]
↓
[Objectives] → [System Test]
↓
[External Specification] → [Function Test]
↓
[System Design] → [Integration Test]
↓
[Program Structure Design]
↓
[Module Interface Specifications] → [Module Test]
↓
[Code]


Esse diagrama mostra como os diferentes níveis de teste correspondem a diferentes etapas do desenvolvimento de software, desde o código até a interação com o usuário final.

---

## 9. Testes de Unidade

- Processo de testar funções, métodos, procedimentos, sub-rotinas ou subprogramas **individualmente**.
- Objetivo: verificar o **menor elemento testável** de um software.
  - Em linguagens procedurais: pode ser uma função ou procedimento.
  - Em linguagens orientadas a objeto: geralmente é um método.
- Geralmente realizado pelo **desenvolvedor**.
- Casos de teste com foco nos **algoritmos** e **lógica de programação**.
- Tipicamente **caixa-branca**, podendo ser complementado com **caixa-preta**.

**Motivações:**
- Gerenciar os elementos do teste, começando pelo menor nível.
- Facilitar a **depuração** (identificação do defeito).
- Permitir **paralelismo** na execução dos testes.

---

## 10. Testes de Unidade – Considerações

- **Objetivo:** comparar a unidade com sua especificação funcional ou de interface, demonstrando que ela **não atende** a essa especificação, se for o caso.

**Questões importantes:**
- Como elaborar os casos de teste?  
- Qual a ordem em que as unidades devem ser testadas e integradas?  
- Como será a execução dos testes?

---

## 11. Elaboração dos Casos de Teste

**Informações necessárias:**
- A **especificação da unidade** (entradas e saídas esperadas).
- O **código-fonte** da unidade.

**Procedimento:**
1. Analisar o código utilizando **métodos caixa-branca**.
2. Complementar com **casos de teste caixa-preta** baseados na especificação da unidade.

---

## 12. Exemplo: função BONUS

**Especificação:**

- A função `BONUS` adiciona `$200` ao salário de todos os funcionários do(s) departamento(s) com o maior resultado de vendas.
- Se o salário de um funcionário elegível for **$15.000 ou mais**, ou se o funcionário for um **gerente**, o bônus é **reduzido para $100**.
- Em caso de sucesso, a função **retorna 0**.
- Se **alguma das tabelas estiver vazia**, a função **retorna código de erro 1**.
- Se **nenhum funcionário elegível** for encontrado, **retorna código de erro 2**.

---

## 13. Exemplo: função BONUS (variante)

- Especificação da função BONUS:
  - Adiciona **\$2 000** ao salário de todos os funcionários no departamento ou departamentos com o maior resultado de vendas.
  - Se o salário de um funcionário elegível for **\$15 000** ou mais, ou se o funcionário for um **gerente**, o salário é adicionado em apenas **\$1 000**.
- Retorno:
  - `0`: sucesso.
  - `1`: se ao menos uma das tabelas estiver vazia.
  - `2`: se a função não encontrar funcionários em um departamento elegível.

---

## 14. Primeiro passo: listar as decisões do programa

> *Obs.:* as instruções `DO` não precisam de atenção especial, pois qualquer caso de teste que execute um `DO` cobrará ambas as ramificações (entrar e pular o corpo do loop).

---

## 15. Relembrando: critérios caixa-branca

- Cobertura de instruções  
- Cobertura de decisões  
- Cobertura de condições  
- Cobertura de decisões-condições  
- Cobertura de múltiplas condições  

---

## 16. Cobertura de decisões

| Decisão | Situação para True                                                                                     | Situação para False                                               |
|---------|--------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| 2       | `ESIZE ≤ 0` **ou** `DSIZE ≤ 0`                                                                          | `ESIZE > 0` **e** `DSIZE > 0`                                     |
| 6       | Vai sempre ocorrer pelo menos uma vez (ordenar DEPTTAB para que um dept. menor em vendas venha depois) |                                                                   |
| 9       | Vai sempre ocorrer pelo menos uma vez (departamentos com vendas diferentes)                            |                                                                   |
| 13      | Há um empregado em um departamento elegível                                                             | Há um empregado em um departamento **não** elegível               |
| 16      | Um empregado de dept. elegível é gerente **ou** recebe ≥ `LSALARY`                                     | Um empregado de dept. elegível não é gerente **e** recebe < `LSALARY` |
| 21      | Um departamento elegível **não** contém empregados                                                      | Um departamento elegível contém ao menos um empregado            |

---

## 17. Cobertura de decisões (continuação)

- Elaborar casos de teste suficientes para invocar ambos os resultados de cada uma das decisões.  
- Como duas situações (decisões 6 e 9) sempre ocorrem, são **10** situações que precisam ser consideradas.

---

## 18. Cobertura de condições

| D  | Condição                     | Situação para True                                                                                | Situação para False                                      |
|----|-------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| 2  | `ESIZE ≤ 0`                   | `ESIZE ≤ 0`                                                                                       | `ESIZE > 0`                                              |
| 2  | `DSIZE ≤ 0`                   | `DSIZE ≤ 0`                                                                                       | `DSIZE > 0`                                              |
| 6  | `SALES(I) ≥ MAXSALES`         | Vai sempre ocorrer pelo menos uma vez (ordenar DEPTTAB…)                                          |                                                          |
| 9  | `SALES(J) = MAXSALES`         | Vai sempre ocorrer pelo menos uma vez (departamentos com vendas diferentes)                       |                                                          |
| 13 | `EMPTAB.DEPT(K) = DEPTTAB.DEPT(J)` | Há um empregado em um departamento elegível                                                    | Há um empregado em um departamento não elegível          |
| 16 | `SALARY(K) ≥ LSALARY`         | Empregado de dept. elegível recebe ≥ `LSALARY`                                                    | Empregado de dept. elegível recebe < `LSALARY`          |
| 16 | `CODE(K) = MGR`               | Empregado de dept. elegível é gerente                                                             | Empregado de dept. elegível não é gerente                |
| 21 | `¬FOUND`                      | Um departamento elegível não contém empregados                                                   | Um departamento elegível contém ao menos um empregado    |

---

## 19. Cobertura de condições (continuação)

- Elaborar casos de teste suficientes para invocar ambos os resultados de cada condição em cada decisão.  
- Apenas decisões 2 e 16 possuem mais de uma condição.  
- Como duas situações vão sempre ocorrer, são **14** situações que precisam ser consideradas.

---

## 20. Cobertura de decisões/condições

- A cobertura combinada decisões/condições elimina a maioria das fraquezas dos casos de teste baseados apenas em condições.  
- Todos os resultados de todas as condições **E** de todas as decisões seriam considerados.  
- *Exemplo:* Para a decisão 16 gerar ambos resultados, bastaria fazer um funcionário elegível gerente e outro não gerente.  
- **Observação:** se o compilador usa _short-circuit_ para `OR`, a condição `CODE(K)=MGR` nunca seria avaliada para `TRUE` se o primeiro termo já for `TRUE`.

---

## 21. Cobertura MC/DC

- **Objetivo:** cada condição que afeta independentemente o resultado de uma decisão deve assumir todos os valores possíveis pelo menos uma vez.

| D  | Condição                     | Situação para True                                                                                | Situação para False                                      |
|----|-------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| 2  | `ESIZE ≤ 0`                   |                                                                                                   |                                                          |
| 2  | `DSIZE ≤ 0`                   |                                                                                                   |                                                          |
| 6  | `SALES(I) ≥ MAXSALES`         |                                                                                                   |                                                          |
| 9  | `SALES(J) = MAXSALES`         |                                                                                                   |                                                          |
| 13 | `EMPTAB.DEPT(K) = DEPTTAB.DEPT(J)` |                                                                                               |                                                          |
| 16 | `SALARY(K) ≥ LSALARY`         |                                                                                                   |                                                          |
| 16 | `CODE(K) = MGR`               |                                                                                                   |                                                          |
| 21 | `¬FOUND`                      |                                                                                                   |                                                          |

---

## 22. Cobertura MC/DC (continuação)

- Decisões 2 e 16 têm duas condições → são necessários **3 casos de teste** cada (nº de condições + 1).  
- **Decisão 2:**
  1. (V F) → V  &nbsp; e &nbsp; (F F) → F  
  2. (F V) → V  &nbsp; e &nbsp; (F F) → F  
- **Decisão 16:**
  1. (V F) → V  &nbsp; e &nbsp; (F F) → F  
  2. (F V) → V  &nbsp; e &nbsp; (F F) → F  

---

## 23. Cobertura de múltiplas condições

- **Definição:** invocar **todas** as combinações possíveis de condições em cada decisão pelo menos uma vez.  
- Decisões 6, 9, 13 e 21 → 2 combinações cada.  
- Decisões 2 e 16 → 4 combinações cada.  

| D  | Condição                     | Situação para True                                                                                | Situação para False                                      |
|----|-------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| 2  | `ESIZE ≤ 0`                   |                                                                                                   |                                                          |
| 2  | `DSIZE ≤ 0`                   |                                                                                                   |                                                          |
| …  | …                             | …                                                                                                 | …                                                        |
| 16 | `CODE(K) = MGR`               |                                                                                                   |                                                          |
| 21 | `¬FOUND`                      |                                                                                                   |                                                          |

---

## 24. Cobertura de múltiplas condições (continuação)

- Alguns problemas permanecem:
  - Retorno = 0 não testado.  
  - Defeitos de inicialização de variáveis (ex.: `LSALARY = 15000.01`) podem passar despercebidos.  
  - Comparações (ex.: `>` vs `≥`) podem não ser detectadas.  
  - Defeitos ao acessar o último registro das tabelas não seriam detectados.  
- **Conclusão:** cobertura de múltiplas condições é superior a outros critérios, mas não suficiente isoladamente.

---

## 25. Exemplo: função BONUS – Próximos passos (caixa-preta)

**Valores de entrada (análise de valor limite):**
1. `EMPTAB` tem 1 registro.  
2. `EMPTAB` tem o número máximo de registros.  
3. `EMPTAB` tem 0 registros.  
4. `DEPTTAB` tem 1 registro.  
5. `DEPTTAB` tem o número máximo de registros.  
6. `DEPTTAB` tem 0 registros.  
7. Departamento elegível com 1 funcionário.  
8. Departamento elegível com número máximo de funcionários.  
9. Departamento elegível sem funcionários.  
10. Todos os departamentos têm o mesmo valor de venda.  
11. Departamento elegível é a primeira entrada em `DEPTTAB`.  
12. Departamento elegível é a última entrada em `DEPTTAB`.  
13. Funcionário elegível é a primeira entrada em `EMPTAB`.  
14. Funcionário elegível é a última entrada em `EMPTAB`.  
15. Funcionário elegível é gerente.  
16. Funcionário elegível não é gerente.  
17. Funcionário elegível (não gerente) recebe \$ 14 999,99.  
18. Funcionário elegível (não gerente) recebe \$ 15 000.  
19. Funcionário elegível (não gerente) recebe \$ 15 000,01.  

**Limites de saída:**
20. `ERRCODE = 0`  
21. `ERRCODE = 1`  
22. `ERRCODE = 2`  
23. Salário aumentado = \$ 299 999,99  

**Baseado em Error-Guessing:**
24. Dois departamentos com vendas máximas, um sem funcionários seguido por outro com funcionários.

---

## 26. Refino dos casos de teste caixa-preta

1. Excluir situações impraticáveis (ex.: situações 2, 5, 8).  
2. Confrontar situações remanescentes com casos já existentes para identificar valor-limite não cobertos (situações 1, 4, 7, 10, 14, 17, 18, 19, 20, 23, 24).  
3. Adicionar novos casos (menor conjunto necessário).  
   > *Obs.:* não alterar casos existentes para não comprometer cobertura.

---

## 27. A ordem dos testes

- **Teste Não-Incremental:** cada unidade testada isoladamente.  
- **Teste Incremental:** combinar com unidades já testadas:
  - **Bottom-up**  
  - **Top-down**

---

## 28. A ordem dos testes de unidade – Comparação

| Critério          | Não-incremental                              | Incremental                                |
|-------------------|-----------------------------------------------|--------------------------------------------|
| Esforço           | Mais (criar drivers & stubs)                  | Menos (reusar unidades testadas)           |
| Tempo de execução | Menor                                        | Maior                                     |
| Paralelismo       | Maior                                        | Menor                                     |
| Defeitos de integração | Descobertos tardiamente                  | Detectados mais cedo                       |
| Depuração         | Mais difícil                                 | Mais fácil                                 |

---

## 29. A execução dos testes

- A saída esperada faz parte do caso de teste. Discrepâncias podem apontar:
  1. Defeito na unidade.  
  2. Expectativa de saída incorreta.  
- Verificar **efeitos colaterais** inesperados (valores alterados indevidamente).  
- Ferramentas de teste podem automatizar:
  - Geração de drivers.  
  - Análise de fluxo.  

---

## 30. A execução dos testes (continuação)

- Desenvolvedores podem trocar as unidades testadas para facilitar.  
- Evitar casos de teste descartáveis; torná-los **reutilizáveis**.  
- Se muitos defeitos são encontrados em uma unidade, testar **ainda mais**.  
- Lembrar: objetivo não é provar que funciona, mas **demonstrar defeitos**.

---

## 31. Testes de Integração – Definições

1. Garantir que componentes funcionem corretamente quando combinados.  
2. Detectar defeitos nas especificações das **interfaces** dos componentes integrados.

---

## 32. Testes de Integração – Características

1. Normalmente **incremental**.  
2. Testa partes do sistema e então as integra até completar o produto.  
3. Estratégias: **top-down**, **bottom-up** ou **mista**, baseadas em acoplamento/coesão.

---

## 33. Testes de Integração – Drivers e Stubs

- Quando nem todos os componentes estão disponíveis:
  - Criar **Drivers** e **Stubs** para simular funcionamento e interfaces.

---

## 34. Testes de Integração – Stub

- Stub (esboço de método):  
  - Substitui componente não operacional.  
  - Não implementa lógica, apenas responde a entradas predefinidas.  
  - Relação estímulo/resposta programada.

---

## 35. Testes de Integração – Motivações para Drivers e Stubs

- Componente em desenvolvimento ou não implementado.  
- Componente com muitos defeitos que bloqueiam testes.  
- Componentes que dificultam testes (autenticação, janela de tempo, etc.).  
- Componentes que tornam os testes lentos (ex.: inicialização de BD).  
- Provocar situações excepcionais (erros de rede, falta de espaço em disco).

---

## 36. Testes de Integração – Estratégia Top-Down

- Inicia hierarquia pelos níveis mais altos de controle.  
- **Requer stubs** para substituir componentes ainda não integrados.

---

## 37. Testes de Integração – Diretrizes Top-Down

- Priorizar unidades críticas.  
- Priorizar unidades que implementam E/S de dados (simplificar criação e verificação de casos).

---

## 38. Testes de Integração – Vantagens Top-Down

- Detecta erros de fatores humanos cedo.  
- Permite apresentar versão inicial ao usuário.  
- Confirma solidez da arquitetura.  
- Eleva a moral da equipe.

---

## 39. Testes de Integração – Problemas Top-Down

- Dificuldade em representar casos de módulos nos níveis mais baixos.  
- Difícil correlacionar saída com resultados de unidades distantes.  
- Mudanças nos módulos do topo exigem retrabalho.  
- Risco de esquecer testes no topo após criar stubs.

---

## 40. Testes de Integração – Estratégia Bottom-Up

- Inicia pelos componentes de níveis mais baixos, subindo na hierarquia.  
- **Requer drivers** para substituir componentes ainda não integrados.

---

## 41. Testes de Integração – Drivers

- Disparam testes, fornecem dados, controlam execução e relatam resultados.  
- Controlam execução de um ou mais testes, passando informações ao componente alvo.  
- **Vantagens:**  
  - Geralmente mais fáceis de implementar que stubs.  
  - Não precisam de múltiplas versões.

---

## 42. Referências

- **Myers, G. J. et al.** _The Art of Software Testing_. John Wiley & Sons, 2012. (Cap. 5)
