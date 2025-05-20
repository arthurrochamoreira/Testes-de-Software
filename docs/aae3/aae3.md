# AAE3 - Questões de Testes de Software 

## Q01. Qual é a representação de programa mais comumente utilizada nos critérios de teste estrutural?

- a. Grafo de Causa-Efeito.  
- b. Grafo de Fluxo de Dados.  
- c. Grafo de Caminhos Independentes.  
- d. Grafo de Fluxo de Controle.  

**RESPOSTA:** d. Grafo de Fluxo de Controle.

> “Uma representação de programa muito comum nos critérios de teste estrutural é o Grafo de Fluxo de Controle, em que cada nó representa um bloco básico de código e cada arco representa um possível fluxo de execução.” (p. 34)  
> A very common program representation in structural test criteria is the Control Flow Graph, where each node represents a basic block of code and each arc represents a possible execution flow.

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

> “Primeiro, o teste de unidade é uma forma de gerenciar os elementos combinados de teste, já que a atenção é inicialmente focada em unidades menores do programa. Segundo, o teste de unidade facilita a tarefa de depuração (o processo de localizar e corrigir um erro descoberto), pois, quando um erro é encontrado, sabe-se que ele existe em um módulo específico.” (p. 85)  
> First, module testing is a way of managing the combined elements of testing [...] Second, module testing eases the task of debugging [...] since, when an error is found, it is known to exist in a particular module.

---

## Q04. Por que a cobertura de condição pode não satisfazer a cobertura de decisão?

- a. Porque a cobertura de condição não testa todas as instruções.  
- b. Porque algumas condições podem mascarar outras.  
- c. Porque a cobertura de condição não inclui os pontos de entrada do programa.  
- d. Porque a cobertura de condição não testa todas as combinações de condições.

**RESPOSTA:** b. Porque algumas condições podem mascarar outras.

> “O motivo [...] é que os resultados das condições nas expressões and e or podem mascarar ou bloquear a avaliação de outras condições.” (p. 47)  
> The reason [...] is that results of conditions in the and and the or expressions can mask or block the evaluation of other conditions.

---

## Q05. Qual é a principal limitação da cobertura de decisão?

- a. Não garante que todas as instruções sejam executadas.  
- b. Não considera as múltiplas condições dentro de uma decisão.  
- c. Não testa todas as possíveis combinações de condições.  
- d. Não identifica erros em decisões aninhadas.

**RESPOSTA:** b. Não considera as múltiplas condições dentro de uma decisão.

> “A cobertura de decisão exige apenas que cada decisão tenha um resultado verdadeiro e um resultado falso, e que cada instrução seja executada pelo menos uma vez.” (p. 45)  
> Decision coverage requires that each decision have a true and a false outcome, and that each statement be executed at least once.

---

## Q06. Qual dos critérios de cobertura de lógica é considerado o mais fraco?

- a. Cobertura de condição.  
- b. Cobertura de decisão.  
- c. Cobertura de múltiplas condições.  
- d. Cobertura de instrução.

**RESPOSTA:** d. Cobertura de instrução.

> “Se você se afastar completamente do teste de caminhos, pode parecer que um objetivo válido seria executar cada instrução no programa pelo menos uma vez. Infelizmente, esse é um critério muito fraco para um teste caixa-branca razoável.” (p. 43)  
> If you back completely away from path testing, it may seem that a worthy goal would be to execute every statement in the program at least once. Unfortunately, this is a weak criterion for a reasonable white-box test.

---

## Q07. O que o método MC/DC visa alcançar?

- a. Testar todas as instruções do programa pelo menos uma vez.  
- b. Testar todas as combinações de decisões em um programa.  
- c. Garantir que cada condição em uma decisão tenha um resultado verdadeiro e falso pelo menos uma vez.  
- d. Garantir que cada condição independente em uma decisão tenha um efeito independente na saída da decisão.

**RESPOSTA:** d. Garantir que cada condição independente em uma decisão tenha um efeito independente na saída da decisão.

> “O Modified Condition/Decision Coverage procura demonstrar que cada condição, isoladamente, afeta o resultado da decisão.” (p. 47)  
> The Modified Condition/Decision Coverage seeks to show that each condition, independently, affects the outcome of the decision.

---

## Q08. Qual é uma das principais vantagens do método MC/DC em relação a outros critérios de cobertura?

- a. Requer menos casos de teste para ser implementado.  
- b. É mais fácil de entender e aplicar em programas grandes.  
- c. Garante uma cobertura mais robusta ao testar condições de decisão.  
- d. Não requer testes de múltiplas condições dentro de uma decisão.

**RESPOSTA:** a. Requer menos casos de teste para ser implementado.

> “Embora o critério de múltiplas condições seja o mais completo, ele pode exigir muitos casos de teste. O MC/DC atinge robustez testando dependências entre condições com um número reduzido de casos, comparado ao múltiplo-de-condições.” (p. 47)  
> Although multiple-condition coverage is most complete, it may require many test cases. MC/DC achieves robustness by testing condition dependencies with fewer cases compared to multiple-condition coverage.

---

## Q09. Qual das seguintes afirmações melhor descreve o primeiro passo ao usar técnicas de cobertura lógica no teste de software?

- a. Identificar todas as variáveis no programa e garantir que cada uma seja testada em diferentes condições.  
- b. Listar as decisões condicionais no programa, focando em declarações IF, DO e similares.  
- c. Criar casos de teste para todas as funcionalidades do software sem considerar a estrutura interna do código.  
- d. Garantir que todas as declarações IF no programa sejam testadas de forma isolada para verificar seu comportamento.

**RESPOSTA:** b. Listar as decisões condicionais no programa, focando em declarações IF, DO e similares.

> “O primeiro passo é identificar todas as decisões de controle (IF, loops, switch) antes de derivar casos de teste.” (p. 42)  
> The first step is to identify all control decisions (IF, loops, switch) before deriving test cases.

---

## Q10. Qual das seguintes afirmações melhor descreve uma característica do critério de cobertura de múltiplas condições?

- a. O critério de cobertura de múltiplas condições é suficiente para detectar todos os erros possíveis em uma unidade.  
- b. Mesmo testes que satisfazem o critério de cobertura de múltiplas condições podem não detectar certos erros, como valores iniciais incorretos.  
- c. O critério de cobertura de múltiplas condições se concentra apenas em testes de caixa-preta.  
- d. O critério de cobertura de múltiplas condições garante que todos os caminhos de execução do código sejam testados.

**RESPOSTA:** b. Mesmo testes que satisfazem o critério de cobertura de múltiplas condições podem não detectar certos erros, como valores iniciais incorretos.

> “É importante perceber que mesmo um teste satisfazendo o critério de múltiplas condições pode não detectar todos os erros; por exemplo, não gera a situação em que ERRCODE é retornado com valor 0.” (p. 94)  
> It is important to realize that even multiple-condition coverage tests may not detect all errors; for instance, they do not generate the situation where ERRORCODE is returned with a value of 0.

---

## Q11. Qual é uma vantagem importante do teste incremental sobre o teste não incremental?

- a. Requer menos módulos de driver e stub.  
- b. Necessita de menos tempo de máquina.  
- c. Permite que todos os módulos sejam testados simultaneamente.  
- d. Reduz a possibilidade de detectar erros nas interfaces dos módulos.

**RESPOSTA:** a. Requer menos módulos de driver e stub.

> “No incremental bottom-up são necessários drivers, mas não stubs; top-down exige stubs mas não drivers. Já no ‘big-bang’ não incremental precisa de ambos.” (p. 98–99)  
> In bottom-up incremental, drivers are needed but not stubs; top-down needs stubs but not drivers; nonincremental big-bang requires both.

---

## Q12. Qual das seguintes observações é uma vantagem do teste não incremental?

- a. Detecta erros de interfaces de módulos mais cedo.  
- b. Reduz a necessidade de drivers e stubs.  
- c. Permite mais atividades paralelas no início da fase de testes de módulo.  
- d. Resulta em testes mais completos dos módulos.

**RESPOSTA:** c. Permite mais atividades paralelas no início da fase de testes de módulo.

> “Como cada módulo é testado isoladamente (sem dependências), múltiplas equipes podem trabalhar em paralelo.” (p. 98)  
> Because each module is tested independently (without dependencies), multiple teams can work in parallel.

---

## Q13. Qual é uma das principais vantagens do teste top-down?

- a. Não requer a criação de stubs.  
- b. Facilita a representação de casos de teste uma vez que as funções de entrada e saída são adicionadas.  
- c. Permite a identificação de todos os erros possíveis no programa.  
- d. Garante que todos os módulos são testados simultaneamente.

**RESPOSTA:** d. Garante que todos os módulos são testados simultaneamente.

> “No top-down, à medida que o esqueleto do programa cresce, vários módulos podem ser testados em paralelo, usando stubs.” (p. 108)  
> In top-down, as the program skeleton grows, multiple modules can be tested in parallel using stubs.

---

## Q14. Qual é uma desvantagem do teste bottom-up?

- a. A produção de módulos driver é mais difícil que a produção de stubs.  
- b. Não permite a criação de um esqueleto inicial do programa.  
- c. Requer que todos os módulos sejam testados simultaneamente.  
- d. Aumenta a possibilidade de erros humanos durante a fase de design.

**RESPOSTA:** a. A produção de módulos driver é mais difícil que a produção de stubs.

> “No bottom-up, cada módulo de entrada requer um driver personalizado, o que costuma ser mais trabalhoso do que escrever stubs.” (p. 109)  
> In bottom-up, each input module requires a custom driver, which is usually more laborious than writing stubs.
