# TPI/TPE(3) - Questões de Testes de Software 

---

## Q01. Qual é a representação de programa mais comumente utilizada nos critérios de teste estrutural?

- a. Grafo de Causa-Efeito.  
- b. Grafo de Fluxo de Dados.  
- c. Grafo de Caminhos Independentes.  
- d. Grafo de Fluxo de Controle.  

**RESPOSTA:** d. Grafo de Fluxo de Controle.

> “The diagram is a control-flow graph. Each node or circle represents a segment of statements that execute sequentially, possibly terminating with a branching statement. Each edge or arc represents a transfer of control (branch) between segments.”  
> *(p. 11, The Art of Software Testing – 3rd Edition)*

> Tradução:  
> “O diagrama é um grafo de fluxo de controle. Cada nó ou círculo representa um segmento de instruções que executam sequencialmente, podendo terminar com uma instrução de desvio. Cada aresta ou arco representa uma transferência de controle (desvio) entre segmentos.”

**Referência:** *The Art of Software Testing – 3rd Edition*, página 11.

---

## Q02. Qual das seguintes afirmações é MAIS VERDADEIRA sobre o teste de unidade?

- a. É uma abordagem de teste de caixa preta onde a estrutura interna do módulo não é considerada.  
- b. É uma abordagem de teste de caixa branca que foca nos componentes individuais de um programa.  
- c. Só é usado para grandes programas com mais de 500 instruções.  
- d. É o mesmo que teste de integração, que combina vários componentes.

**RESPOSTA:** b. É uma abordagem de teste de caixa branca que foca nos componentes individuais de um programa.

> “O teste de unidade é amplamente orientado à caixa-branca.” (p. 86)  
> Module testing is largely white-box oriented.

---

## Q03. Quais são os dois principais motivos para realizar o teste de unidade?

- a. Documentar a funcionalidade do programa e identificar erros no início do processo de desenvolvimento.  
- b. Reduzir a complexidade de testar programas grandes e facilitar a depuração.  
- c. Atender aos requisitos do usuário e garantir que o programa esteja livre de erros.  
- d. Melhorar a cobertura do código e testar o desempenho do programa.  

**RESPOSTA:** b. Reduzir a complexidade de testar programas grandes e facilitar a depuração.

> “The motivations for doing this are threefold. First, module testing is a way of managing the combined elements of testing, since attention is focused initially on smaller units of the program. Second, module testing eases the task of debugging since attention is focused on a small unit of code and since the interface to the rest of the program is often simulated by a stub module.”  
> *(p. 85, The Art of Software Testing – 3rd Edition)*

> “As motivações para fazer isso são três. Primeiro, o teste de módulo é uma forma de gerenciar os elementos combinados do teste, já que a atenção é focada inicialmente em unidades menores do programa. Segundo, o teste de módulo facilita a tarefa de depuração, já que a atenção está concentrada em uma pequena unidade de código e, frequentemente, a interface com o restante do programa é simulada por um módulo stub.” (p. 85)

---

## Q04. Por que a cobertura de condição pode não satisfazer a cobertura de decisão?

- a. Porque a cobertura de condição não testa todas as instruções.  
- b. Porque algumas condições podem mascarar outras.  
- c. Porque a cobertura de condição não inclui os pontos de entrada do programa.  
- d. Porque a cobertura de condição não testa todas as combinações de condições.  

**RESPOSTA:** b. Porque algumas condições podem mascarar outras.

> “Um ponto fraco da cobertura de condição/decisão é que, embora pareça exercitar todos os resultados de todas as condições, frequentemente não o faz, porque certas condições mascaram outras condições.”  
> *“A weakness with decision/condition coverage is that although it may appear to exercise all outcomes of all conditions, it frequently does not, because certain conditions mask other conditions.”* (p. 46)

> “Por exemplo, se uma condição ‘and’ for falsa, nenhuma das condições subsequentes na expressão precisa ser avaliada. Da mesma forma, se uma condição ‘or’ for verdadeira, as condições subsequentes também não precisam ser avaliadas.”  
> *“For instance, if an and condition is false, none of the subsequent conditions in the expression need be evaluated. Likewise, if an or condition is true, none of the subsequent conditions need be evaluated.”* (p. 47)

**Referência:** *The Art of Software Testing – 3rd Edition*, páginas 46–47.

---

## Q05. Qual é a principal limitação da cobertura de decisão?

- a. Não garante que todas as instruções sejam executadas.  
- b. Não considera as múltiplas condições dentro de uma decisão.  
- c. Não testa todas as possíveis combinações de condições.  
- d. Não identifica erros em decisões aninhadas.  

**RESPOSTA:** b. Não considera as múltiplas condições dentro de uma decisão.

> “Decision coverage is a stronger criterion than statement coverage, but it still is rather weak.”  
> “A criterion that is sometimes stronger than decision coverage is condition coverage. [...] But, as with decision coverage, this does not always lead to the execution of each statement.”  
> “Although the condition coverage criterion appears, at first glance, to satisfy the decision coverage criterion, it does not always do so. [...] The condition coverage tests for the earlier example covered all condition outcomes but only two of the four decision outcomes...”  
> *(p. 45–46, The Art of Software Testing – 3rd Edition)*

> Tradução:  
> “A cobertura de decisão é um critério mais forte do que a cobertura de instruções, mas ainda é bastante fraco.”  
> “Um critério que às vezes é mais forte do que a cobertura de decisão é a cobertura de condição. [...] Mas, assim como a cobertura de decisão, isso nem sempre leva à execução de cada instrução.”  
> “Embora o critério de cobertura de condição pareça, à primeira vista, satisfazer o critério de cobertura de decisão, isso nem sempre acontece. [...] Os testes de cobertura de condição do exemplo anterior cobriram todos os resultados das condições, mas apenas dois dos quatro resultados das decisões...”

**Referência:** *The Art of Software Testing – 3rd Edition*, páginas 45–46.

---

## Q06. Qual dos critérios de cobertura de lógica é considerado o mais fraco?

- a. Cobertura de condição.  
- b. Cobertura de decisão.  
- c. Cobertura de múltiplas condições.  
- d. Cobertura de instrução.  

**RESPOSTA:** d. Cobertura de instrução.

> “Embora você possa executar todas as instruções com um único teste, esse critério é bastante fraco.”  
> *“You could execute every statement by writing a single test case [...] Unfortunately, this criterion is a rather poor one.”*  
> [...]  
> “Em outras palavras, o critério de cobertura de instrução é tão fraco que geralmente é inútil.”  
> *“In other words, the statement coverage criterion is so weak that it generally is useless.”* (p. 44)

**Referência:** *The Art of Software Testing – 3rd Edition*, página 44

---

## Q07. O que o método MC/DC visa alcançar?

- a. Testar todas as instruções do programa pelo menos uma vez.  
- b. Testar todas as combinações de decisões em um programa.  
- c. Garantir que cada condição em uma decisão tenha um resultado verdadeiro e falso pelo menos uma vez.  
- d. Garantir que cada condição independente em uma decisão tenha um efeito independente na saída da decisão.  

**RESPOSTA:** d. Garantir que cada condição independente em uma decisão tenha um efeito independente na saída da decisão.

> “Modified condition/decision coverage (MC/DC) requires that every point of entry and exit in the program has been invoked at least once, every condition in a decision takes on all possible outcomes at least once, and each condition in a decision has been shown to independently affect the decision’s outcome.”  
> *(p. 47, The Art of Software Testing – 3rd Edition)*

> Tradução:  
> “A cobertura de condição/decisão modificada (MC/DC) exige que cada ponto de entrada e saída do programa tenha sido invocado pelo menos uma vez, que cada condição em uma decisão assuma todos os resultados possíveis pelo menos uma vez e que cada condição em uma decisão tenha mostrado afetar de forma independente o resultado da decisão.”

**Referência:** *The Art of Software Testing – 3rd Edition*, página 47.

---

## Q08. Qual é uma das principais vantagens do método MC/DC em relação a outros critérios de cobertura?

- a. Requer menos casos de teste para ser implementado.  
- b. É mais fácil de entender e aplicar em programas grandes.  
- c. Garante uma cobertura mais robusta ao testar condições de decisão.  
- d. Não requer testes de múltiplas condições dentro de uma decisão.  

**RESPOSTA:** c. Garante uma cobertura mais robusta ao testar condições de decisão.

> “A criterion that covers this problem, and then some, is multiple-condition coverage.”  
> “This criterion requires that you write sufficient test cases such that all possible combinations of condition outcomes in each decision, and all points of entry, are invoked at least once.”  
> “Although MC/DC does not require all combinations, it improves upon decision/condition coverage by ensuring that each condition independently affects the decision’s outcome.”  
> *(p. 47, The Art of Software Testing – 3rd Edition)*

> Tradução:  
> “Um critério que cobre esse problema, e vai além, é a cobertura de múltiplas condições.”  
> “Esse critério exige que você escreva casos de teste suficientes para que todas as combinações possíveis de resultados de condições em cada decisão, e todos os pontos de entrada, sejam invocados pelo menos uma vez.”  
> “Embora o MC/DC não exija todas as combinações, ele melhora a cobertura de decisão/condição ao garantir que cada condição afete independentemente o resultado da decisão.”

**Referência:** *The Art of Software Testing – 3rd Edition*, página 47.

---

## Q09. Qual das seguintes afirmações melhor descreve o primeiro passo ao usar técnicas de cobertura lógica no teste de software?

- a. Identificar todas as variáveis no programa e garantir que cada uma seja testada em diferentes condições.  
- b. Listar as decisões condicionais no programa, focando em declarações IF, DO e similares.  
- c. Criar casos de teste para todas as funcionalidades do software sem considerar a estrutura interna do código.  
- d. Garantir que todas as declarações IF no programa sejam testadas de forma isolada para verificar seu comportamento.  

**RESPOSTA:** b. Listar as decisões condicionais no programa, focando em declarações IF, DO e similares.

> “Regardless of which of the logic coverage techniques you use, the first step is to list the conditional decisions in the program. Candidates in this program are all IF and DO statements.”  
> *(p. 89, The Art of Software Testing – 3rd Edition)*

> Tradução:  
> “Independentemente da técnica de cobertura lógica utilizada, o primeiro passo é listar as decisões condicionais no programa. Os candidatos neste programa são todas as instruções IF e DO.”

**Referência:** *The Art of Software Testing – 3rd Edition*, página 89.

---

## Q10. Qual das seguintes afirmações melhor descreve uma característica do critério de cobertura de múltiplas condições?

- a. O critério de cobertura de múltiplas condições é suficiente para detectar todos os erros possíveis em uma unidade.  
- b. Mesmo testes que satisfazem o critério de cobertura de múltiplas condições podem não detectar certos erros, como valores iniciais incorretos.  
- c. O critério de cobertura de múltiplas condições se concentra apenas em testes de caixa-preta.  
- d. O critério de cobertura de múltiplas condições garante que todos os caminhos de execução do código sejam testados.  

**RESPOSTA:** b. Mesmo testes que satisfazem o critério de cobertura de múltiplas condições podem não detectar certos erros, como valores iniciais incorretos.

> “Although these two test cases meet the decision coverage criterion, it should be obvious that there could be many types of errors in the module that are not detected by these two test cases. For instance, the test cases do not explore the circumstances where the error code is 0, an employee is a manager, or the department table is empty (DSIZE <= 0).”  
> *(p. 90, The Art of Software Testing – 3rd Edition)*

> Tradução:  
> “Embora esses dois casos de teste atendam ao critério de cobertura de decisão, deve ser óbvio que pode haver muitos tipos de erros no módulo que não são detectados por esses dois casos. Por exemplo, os casos de teste não exploram circunstâncias como quando o código de erro é 0, um funcionário é gerente ou a tabela de departamentos está vazia (DSIZE ≤ 0).”

**Referência:** *The Art of Software Testing – 3rd Edition*, página 90.

---

## Q11. Qual é uma vantagem importante do teste incremental sobre o teste não incremental?

- a. Requer menos módulos de driver e stub.  
- b. Necessita de menos tempo de máquina.  
- c. Permite que todos os módulos sejam testados simultaneamente.  
- d. Reduz a possibilidade de detectar erros nas interfaces dos módulos.  

**RESPOSTA:** a. Requer menos módulos de driver e stub.

> “Nonincremental testing requires more work. For the program in Figure 5.7, five drivers and five stubs must be prepared [...]. The bottom-up incremental test would require five drivers but no stubs. A top-down incremental test would require five stubs but no drivers. Less work is required because previously tested modules are used instead of the driver modules (if you start from the top) or stub modules (if you start from the bottom) needed in the nonincremental approach.”  
> *(p. 99, The Art of Software Testing – 3rd Edition)*

> Tradução:  
> “O teste não incremental exige mais trabalho. Para o programa da Figura 5.7, cinco drivers e cinco stubs devem ser preparados [...]. O teste incremental bottom-up exigiria cinco drivers, mas nenhum stub. Um teste incremental top-down exigiria cinco stubs, mas nenhum driver. Menos trabalho é necessário porque os módulos previamente testados são usados em vez dos módulos driver (se começar do topo) ou dos módulos stub (se começar pela base) exigidos na abordagem não incremental.”

**Referência:** *The Art of Software Testing – 3rd Edition*, página 99.

---

## Q12. Qual das seguintes observações é uma vantagem do teste não incremental?

- a. Detecta erros de interfaces de módulos mais cedo.  
- b. Reduz a necessidade de drivers e stubs.  
- c. Permite mais atividades paralelas no início da fase de testes de módulo.  
- d. Resulta em testes mais completos dos módulos.  

**RESPOSTA:** c. Permite mais atividades paralelas no início da fase de testes de módulo.

> “At the beginning of the module testing phase, there is more opportunity for parallel activities when nonincremental testing is used (that is, all the modules can be tested simultaneously). This might be of significance in a large project (many modules and people), since the head count of a project is usually at its peak at the start of the module test phase.”  
> *(p. 100, The Art of Software Testing – 3rd Edition)*

> Tradução:  
> “No início da fase de testes de módulo, há mais oportunidade para atividades paralelas quando se utiliza o teste não incremental (isto é, todos os módulos podem ser testados simultaneamente). Isso pode ser significativo em projetos grandes (com muitos módulos e pessoas), já que o número de integrantes do projeto geralmente atinge seu pico no início dessa fase.”

**Referência:** *The Art of Software Testing – 3rd Edition*, página 100.

---

## Q13. Qual é uma das principais vantagens do teste top-down?

- a. Não requer a criação de stubs.  
- b. Facilita a representação de casos de teste uma vez que as funções de entrada e saída são adicionadas.  
- c. Permite a identificação de todos os erros possíveis no programa.  
- d. Garante que todos os módulos são testados simultaneamente.  

**RESPOSTA:** b. Facilita a representação de casos de teste uma vez que as funções de entrada e saída são adicionadas.

> “Once the I/O functions are added, representation of cases is easier.”  
> *(p. 109, The Art of Software Testing – 3rd Edition)*

> Tradução:  
> “Uma vez que as funções de entrada/saída são adicionadas, a representação dos casos é facilitada.”

**Referência:** *The Art of Software Testing – 3rd Edition*, página 109.

---

## Q14. Qual é uma desvantagem do teste bottom-up?

- a. A produção de módulos driver é mais difícil que a produção de stubs.  
- b. Não permite a criação de um esqueleto inicial do programa.  
- c. Requer que todos os módulos sejam testados simultaneamente.  
- d. Aumenta a possibilidade de erros humanos durante a fase de design.  

**RESPOSTA:** b. Não permite a criação de um esqueleto inicial do programa.

> “A drawback of the bottom-up strategy is that there is no concept of an early skeletal program. In fact, the working program does not exist until the last module (module A) is added, and this working program is the complete program.”  
> *(p. 107, The Art of Software Testing – 3rd Edition)*

> Tradução:  
> “Uma desvantagem da estratégia bottom-up é que não há conceito de um programa esquelético inicial. De fato, o programa funcional não existe até que o último módulo (módulo A) seja adicionado, e esse programa funcional é o programa completo.”

**Referência:** *The Art of Software Testing – 3rd Edition*, página 107.

---