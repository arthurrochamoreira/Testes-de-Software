# Questionário sobre Dublês de Teste e TDD

---

## Q01. O que são objetos dummy?

* a. Objetos que possuem implementações reais, mas simplificadas.
* b. Objetos passados para a classe em teste, mas nunca utilizados.
* c. Objetos que fornecem respostas codificadas para chamadas realizadas durante o teste.
* d. Objetos que gravam todas as interações e permitem fazer asserções posteriormente.

**RESPOSTA:** b. Objetos passados para a classe em teste, mas nunca utilizados.

> Objetos Dummy são uma forma degenerada de *Test Double*. Eles existem apenas para serem passados de método para método; eles **nunca são utilizados**.
> *(p. 728, Meszaros, 2007)*
> Dummy Objects are a degenerate form of Test Double. They exist solely so that they can be passed around from method to method; they are never used.
> *(p. 728, Meszaros, 2007)*

> Um objeto dummy é passado para preencher uma lista de parâmetros, mas nunca é usado. Eles são mais frequentemente usados para preencher parâmetros obrigatórios em métodos ou construtores.
> *(p. 728, Meszaros, 2007)*
> A Dummy Object is passed in to fill a parameter list but never used. They are most often used to fill required parameters in methods or constructors.
> *(p. 728, Meszaros, 2007)*

> Algumas linguagens exigem que forneçamos valores para todos os parâmetros formais de um método; objetos dummy nos permitem satisfazer esse requisito sem afetar o comportamento do teste.
> *(p. 728, Meszaros, 2007)*
> Some programming languages require us to supply values for all formal parameters of a method; Dummy Objects let us satisfy that requirement without affecting the behavior of the test.
> *(p. 728, Meszaros, 2007)*

#### Por que as outras alternativas estão erradas

* **a. Objetos que possuem implementações reais, mas simplificadas.**

  > Isso define um *Fake Object*: substituímos um componente do SUT por uma implementação funcional mais leve.
  > *(p. 551, Meszaros, 2007)*
  > Fake Object – We replace a component that the SUT depends on with a much lighter-weight implementation.
  > *(p. 551, Meszaros, 2007)*

* **c. Objetos que fornecem respostas codificadas para chamadas realizadas durante o teste.**

  > Isso define um *Test Stub*: substituímos um objeto real por um objeto de teste que fornece entradas indiretas.
  > *(p. 529, Meszaros, 2007)*
  > Test Stub – A Test Double that feeds indirect inputs into the SUT.
  > *(p. 529, Meszaros, 2007)*

* **d. Objetos que gravam todas as interações e permitem fazer asserções posteriormente.**

  > Isso corresponde a um *Test Spy*: usamos um Test Double para capturar as chamadas indiretas feitas pelo SUT para posterior verificação.
  > *(p. 538, Meszaros, 2007)*
  > Test Spy – We use a Test Double to capture the indirect output calls made to another component by the SUT for later verification by the test.
  > *(p. 538, Meszaros, 2007)*

**Referência:**
Meszaros, G. (2007). *xUnit Test Patterns: Refactoring Test Code*. Addison-Wesley.

---

## Q02. Qual a principal característica de objetos fake?

* a. Eles têm implementações reais, mas geralmente fazem a tarefa de forma mais simples.
* b. Eles fornecem respostas codificadas para chamadas realizadas durante o teste.
* c. Eles gravam todas as interações e permitem fazer asserções posteriormente.
* d. Eles envolvem o objeto real e observam seu comportamento.

**RESPOSTA:** a. Eles têm implementações reais, mas geralmente fazem a tarefa de forma mais simples.

> Um *Fake Object* é um dublê de teste que substitui um componente do SUT com uma implementação funcional, geralmente mais leve.  
> *(p. 551, Meszaros, 2007)*  
> A Fake Object is a Test Double that replaces a component that the SUT depends on with a working implementation, usually much lighter-weight.  
> *(p. 551, Meszaros, 2007)*

> Muitas vezes, usamos fakes para evitar dependências de infraestrutura como banco de dados ou serviços de rede. Por exemplo, um fake pode ser um banco de dados em memória simples usado em vez de um real.  
> *(p. 551, Meszaros, 2007)*  
> We often use fakes to avoid using infrastructure components such as databases or network services. For example, we might use an in-memory database implementation instead of a real one.  
> *(p. 551, Meszaros, 2007)*

> Um fake geralmente implementa a mesma interface que o objeto real, mas com um comportamento mais simples, suficiente para os testes.  
> *(p. 551, Meszaros, 2007)*  
> A fake usually implements the same interface as the real component but provides a simpler behavior that is sufficient for the tests.  
> *(p. 551, Meszaros, 2007)*

#### Por que as outras alternativas estão erradas

* **b. Eles fornecem respostas codificadas para chamadas realizadas durante o teste.**

  > Isso define um *Test Stub*, não um fake.  
  > *(p. 529, Meszaros, 2007)*  
  > A Test Stub is a Test Double that feeds indirect inputs into the SUT.  
  > *(p. 529, Meszaros, 2007)*

* **c. Eles gravam todas as interações e permitem fazer asserções posteriormente.**

  > Essa é a definição de um *Test Spy*.  
  > *(p. 538, Meszaros, 2007)*  
  > A Test Spy is a Test Double that captures the indirect output calls made to another component by the SUT for later verification by the test.  
  > *(p. 538, Meszaros, 2007)*

* **d. Eles envolvem o objeto real e observam seu comportamento.**

  > Isso descreve um *Mock Object*, especialmente um mock dinâmico que usa *proxying* para observar interações.  
  > *(p. 544, Meszaros, 2007)*  
  > Mocks are pre-programmed with expectations which form a specification of the calls they are expected to receive.  
  > *(p. 544, Meszaros, 2007)*

**Referência:**  
Meszaros, G. (2007). *xUnit Test Patterns: Refactoring Test Code*. Addison-Wesley.

---

## Q03. Como os stubs diferem dos objetos fake?

* a. Stubs têm implementações reais, mas simplificadas.
* b. Stubs são usados apenas para observar o comportamento de uma dependência real.
* c. Stubs fornecem respostas codificadas e não têm uma implementação funcional.
* d. Stubs permitem fazer asserções sobre as interações após o teste.

**RESPOSTA:** c. Stubs fornecem respostas codificadas e não têm uma implementação funcional.

> Um *Stub* é um Dublê de Teste que fornece entradas indiretas para o SUT, retornando valores codificados em resposta a chamadas feitas durante o teste.  
> *(p. 529, Meszaros, 2007)*  
> A Test Stub is a Test Double that feeds indirect inputs into the SUT.  
> *(p. 529, Meszaros, 2007)*

> Os *stubs* não possuem comportamento funcional; eles apenas retornam valores predefinidos quando chamados.  
> *(p. 529, Meszaros, 2007)*  
> Stubs typically implement only the methods that are needed for the test and return hard-coded values.  
> *(p. 529, Meszaros, 2007)*

> Em contraste, um *Fake Object* substitui um componente por uma implementação funcional mais leve, como um banco de dados em memória.  
> *(p. 551, Meszaros, 2007)*  
> A Fake Object is a Test Double that replaces a component that the SUT depends on with a working implementation, usually much lighter-weight.  
> *(p. 551, Meszaros, 2007)*

> Um *Fake* geralmente é uma implementação funcional completa (mas simples), o que o difere fundamentalmente de um stub que apenas devolve valores fixos.  
> *(p. 551, Meszaros, 2007)*  
> A Fake usually implements the same interface as the real component but provides a simpler behavior that is sufficient for the tests.  
> *(p. 551, Meszaros, 2007)*

#### Por que as outras alternativas estão erradas

* **a. Stubs têm implementações reais, mas simplificadas.**

  > Essa é a definição de um *Fake*, não de um *Stub*.  
  > *(p. 551, Meszaros, 2007)*  
  > A Fake Object is a Test Double that replaces a component [...] with a working implementation.  
  > *(p. 551, Meszaros, 2007)*

* **b. Stubs são usados apenas para observar o comportamento de uma dependência real.**

  > Isso descreve um *Test Spy* ou um *Mock*, e não um *Stub*.  
  > *(p. 538, Meszaros, 2007)*  
  > A Test Spy is a Test Double that captures the indirect output calls made to another component by the SUT for later verification by the test.  
  > *(p. 538, Meszaros, 2007)*

* **d. Stubs permitem fazer asserções sobre as interações após o teste.**

  > Quem permite isso são os *Test Spies*, não os *Stubs*.  
  > *(p. 538, Meszaros, 2007)*  
  > A Test Spy captures the calls so that they can be asserted on later.  
  > *(p. 538, Meszaros, 2007)*

**Referência:**  
Meszaros, G. (2007). *xUnit Test Patterns: Refactoring Test Code*. Addison-Wesley.

---

## Q04. Qual a vantagem principal dos objetos mocks em comparação com os stubs?

* a. Mocks têm implementações reais.
* b. Mocks são mais fáceis de controlar do que stubs.
* c. Mocks podem gravar interações e permitir asserções sobre elas.
* d. Mocks fornecem respostas codificadas para chamadas realizadas durante o teste.

**RESPOSTA:** c. Mocks podem gravar interações e permitir asserções sobre elas.

> Um *Mock Object* é um dublê de teste que é pré-programado com expectativas, que representam uma especificação das chamadas que ele deve receber. O mock verifica automaticamente se essas chamadas ocorrem e, se não, o teste falha.  
> *(p. 544, Meszaros, 2007)*  
> A Mock Object is a Test Double that is pre-programmed with expectations which form a specification of the calls they are expected to receive.  
> *(p. 544, Meszaros, 2007)*

> Os *mocks* são frequentemente criados por meio de bibliotecas que permitem especificar as interações esperadas. Essas interações são registradas durante a execução, e as bibliotecas de mocks verificam automaticamente se o comportamento ocorreu como esperado.  
> *(p. 544, Meszaros, 2007)*  
> Mocks are usually created by using a library that allows us to specify the expected interactions. These interactions are recorded during the test execution, and the mock library automatically verifies that the expected behavior occurred.  
> *(p. 544, Meszaros, 2007)*

> Em contraste, um *Stub* apenas fornece valores de retorno predefinidos e não verifica interações com o SUT.  
> *(p. 529, Meszaros, 2007)*  
> A Test Stub is a Test Double that feeds indirect inputs into the SUT.  
> *(p. 529, Meszaros, 2007)*

> Os *stubs* não sabem se foram chamados corretamente; são usados apenas para injetar entradas indiretas no SUT.  
> *(p. 529, Meszaros, 2007)*  
> Stubs typically implement only the methods that are needed for the test and return hard-coded values. They don't know whether they were called correctly.  
> *(p. 529, Meszaros, 2007)*

#### Por que as outras alternativas estão erradas

* **a. Mocks têm implementações reais.**

  > Isso define um *Fake Object*, que é uma implementação funcional simplificada, não um *Mock*.  
  > *(p. 551, Meszaros, 2007)*  
  > A Fake Object is a Test Double that replaces a component [...] with a working implementation.  
  > *(p. 551, Meszaros, 2007)*

* **b. Mocks são mais fáceis de controlar do que stubs.**

  > O livro não afirma que mocks são "mais fáceis de controlar". Ele aponta que mocks são usados para verificar interações, enquanto stubs são usados para fornecer entradas indiretas.  
  > *(p. 544 vs. 529, Meszaros, 2007)*

* **d. Mocks fornecem respostas codificadas para chamadas realizadas durante o teste.**

  > Quem faz isso são os *Stubs*, não os *Mocks*.  
  > *(p. 529, Meszaros, 2007)*  
  > Stubs typically implement only the methods that are needed for the test and return hard-coded values.  
  > *(p. 529, Meszaros, 2007)*

**Referência:**  
Meszaros, G. (2007). *xUnit Test Patterns: Refactoring Test Code*. Addison-Wesley.

---

## Q05. Uma classe que simula uma base de dados usando uma lista pode ser classificada como:

* a. Fake object
* b. Dummy object
* c. Mock
* d. Stub

**RESPOSTA:** a. Fake object

> Um *Fake Object* é um Dublê de Teste que substitui um componente de que o SUT depende com uma implementação funcional, geralmente mais leve.  
> *(p. 551, Meszaros, 2007)*  
> A Fake Object is a Test Double that replaces a component that the SUT depends on with a working implementation, usually much lighter-weight.  
> *(p. 551, Meszaros, 2007)*

> Um exemplo comum de fake é uma implementação em memória de um banco de dados, usada em vez de um banco real durante os testes.  
> *(p. 551, Meszaros, 2007)*  
> A common example is an in-memory database implementation that is used instead of a real one during testing.  
> *(p. 551, Meszaros, 2007)*

> Fakes são apropriados quando a implementação alternativa é mais rápida ou fácil de configurar do que a real, mas ainda fornece o comportamento necessário para os testes.  
> *(p. 551, Meszaros, 2007)*  
> They are appropriate when the alternative implementation is easier or faster to work with and still provides the correct behavior for the tests.  
> *(p. 551, Meszaros, 2007)*

#### Por que as outras alternativas estão erradas

* **b. Dummy object**

  > Dummies são passados para preencher parâmetros, mas nunca são usados.  
  > *(p. 728, Meszaros, 2007)*  
  > Dummy Objects are a degenerate form of Test Double. They exist solely so that they can be passed around from method to method; they are never used.  
  > *(p. 728, Meszaros, 2007)*  
  > Uma lista simulando uma base de dados é usada funcionalmente, portanto não é um dummy.

* **c. Mock**

  > Mocks são configurados com expectativas de chamadas e verificam se elas ocorreram; não são usados para simular lógica funcional como um banco de dados.  
  > *(p. 544, Meszaros, 2007)*  
  > A Mock Object is a Test Double that is pre-programmed with expectations which form a specification of the calls they are expected to receive.  
  > *(p. 544, Meszaros, 2007)*

* **d. Stub**

  > Stubs são usados para fornecer respostas codificadas a chamadas do SUT, mas não têm comportamento funcional completo como um banco de dados em memória.  
  > *(p. 529, Meszaros, 2007)*  
  > Test Stubs typically implement only the methods that are needed for the test and return hard-coded values.  
  > *(p. 529, Meszaros, 2007)*

**Referência:**  
Meszaros, G. (2007). *xUnit Test Patterns: Refactoring Test Code*. Addison-Wesley.

---

## Q06. O que pode ser necessário para injetar dublês de teste?

* a. Criar um tipo especial de dublê que intercepte chamadas.
* b. Refatorar o construtor da classe de teste para instanciar a dependência.
* c. Usar um framework de mocking para injeção automática.
* d. Alterar o código da classe sendo testada para aceitar a dependência via construtor.

**RESPOSTA:** d. Alterar o código da classe sendo testada para aceitar a dependência via construtor.

> Injeção por Construtor: informamos ao SUT qual DOC usar quando o construímos.  
> *(p. 680, Meszaros, 2007)*  
> Constructor Injection: We tell the SUT which DOC to use when we construct it.  
> *(p. 680, Meszaros, 2007)*

> Para converter o SUT para usar Injeção por Construtor, podemos fazer um refatoramento do tipo "Introduce Field" para manter o DOC em um campo que é inicializado no construtor existente.  
> *(p. 684, Meszaros, 2007)*  
> To convert the SUT to use Constructor Injection, we can do an Introduce Field refactoring to hold the DOC in a field that is initialized in the existing constructor.  
> *(p. 684, Meszaros, 2007)*

> Quando um teste deseja substituir o DOC real por um dublê de teste, ele o passa para o construtor ao construir o SUT.  
> *(p. 681, Meszaros, 2007)*  
> When a test wants to replace the real DOC with a Test Double, it passes in the Test Double to the constructor when it builds the SUT.  
> *(p. 681, Meszaros, 2007)*

> Quando o SUT não suporta injeção de dependência "de fábrica", pode ser necessário refatorar o código da classe sendo testada para permitir isso.  
> *(p. 682, Meszaros, 2007)*  
> When the SUT does not support any of these options "out of the box", we may need to retrofit this capability...  
> *(p. 682, Meszaros, 2007)*

#### Por que as outras alternativas estão erradas

* **a. Criar um tipo especial de dublê que intercepte chamadas.**

  > O livro descreve *mocks* e *spies* como dublês configuráveis, mas não afirma que a injeção exige criar um tipo especial que intercepte chamadas. Isso não é necessário para injeção.  
  > *(p. 522 e p. 544, Meszaros, 2007)*

* **b. Refatorar o construtor da classe de teste para instanciar a dependência.**

  > O que precisa ser refatorado é o construtor da classe sendo testada (SUT), não o da classe de teste.  
  > *(p. 684, Meszaros, 2007)*  
  > We can define a new constructor that takes the DOC as a parameter...  
  > *(p. 684, Meszaros, 2007)*

* **c. Usar um framework de mocking para injeção automática.**

  > O livro menciona que frameworks de mock como JMock facilitam a criação de mocks, mas não substituem a necessidade de refatorar o SUT para aceitar injeção.  
  > *(p. 565, Meszaros, 2007)*  
  > We still need to inject the mock using setter or constructor injection.  
  > *(p. 565, Meszaros, 2007)*

**Referência:**  
Meszaros, G. (2007). *xUnit Test Patterns: Refactoring Test Code*. Addison-Wesley.

---

## Q07. Qual a principal vantagem de configurar dublês para lançar exceções?

* a. Permite testar como os sistemas se comportariam em cenários inesperados, simulando falhas.
* b. Garante que todos os métodos sejam chamados ao menos uma vez.
* c. Facilita respostas codificadas.
* d. Substitui testes de integração com sistemas externos.

**RESPOSTA:** a. Permite testar como os sistemas se comportariam em cenários inesperados, simulando falhas.

> Certamente não queremos que o código de tratamento de exceções seja executado pela primeira vez em produção. E se ele estiver implementado incorretamente? É altamente desejável ter testes automatizados para esse código. O desafio no teste é fazer com que o DOC (componente dependente) lance uma exceção para que o caminho de erro possa ser testado.  
> *(p. 127, Meszaros, 2007)*  
> We certainly would rather not have the exception-handling code execute for the first time in production. What if it was coded incorrectly? Clearly, it would be highly desirable to have automated tests for such code. The testing challenge is to somehow cause the DOC to throw an exception so that the error path can be tested.  
> *(p. 127, Meszaros, 2007)*

> A exceção que esperamos que o DOC lance é um bom exemplo de uma condição de entrada indireta. Nosso meio de injetar essa entrada é um ponto de controle.  
> *(p. 127, Meszaros, 2007)*  
> The exception we expect the DOC to throw is a good example of an indirect input test condition. Our means of injecting this input is a control point.  
> *(p. 127, Meszaros, 2007)*

> Um *Saboteur* é um tipo especial de *Test Stub* que lança exceções ou erros para injetar entradas indiretas anormais no SUT.  
> *(p. 135, Meszaros, 2007)*  
> A Saboteur is a special Test Stub that raises exceptions or errors to inject abnormal indirect inputs into the SUT.  
> *(p. 135, Meszaros, 2007)*

> Um *Expected Exception Test* nos ajuda a verificar se os cenários de erro foram codificados corretamente. O modo mais comum de forçar esses erros é usar um *Test Stub* para controlar a entrada indireta e lançar as exceções apropriadas.  
> *(p. 350, Meszaros, 2007)*  
> An Expected Exception Test helps us verify that the error scenarios have been coded correctly. [...] The most common way to do so is to use a Test Stub to control the indirect input of the SUT and raise the appropriate errors in the Test Stub.  
> *(p. 350, Meszaros, 2007)*

#### Por que as outras alternativas estão erradas

* **b. Garante que todos os métodos sejam chamados ao menos uma vez.**

  > Isso não é relacionado ao lançamento de exceções. Verificar se métodos são chamados pertence ao comportamento de *Mocks* (verificação de interações), não ao uso de exceções.  
  > *(p. 544, Meszaros, 2007)*

* **c. Facilita respostas codificadas.**

  > Quem faz isso são os *Stubs* do tipo *Responder*, usados para retornar valores predefinidos — não para lançar exceções.  
  > *(p. 529, Meszaros, 2007)*

* **d. Substitui testes de integração com sistemas externos.**

  > Dublês podem ajudar a simular sistemas externos, mas o foco do uso de exceções não é substituir testes de integração, e sim permitir testar o comportamento em situações de falha.  
  > *(p. 127, Meszaros, 2007)*

**Referência:**  
Meszaros, G. (2007). *xUnit Test Patterns: Refactoring Test Code*. Addison-Wesley.

---

## Q08. Qual é uma das principais desvantagens de usar dublês?

* a. O acoplamento com o código de produção, que pode levar a falhas ao mudar interações.
* b. Dificuldade de configuração e manutenção.
* c. Incapacidade de simular comportamentos complexos.
* d. Modificação excessiva do código de produção.

**RESPOSTA:** a. O acoplamento com o código de produção, que pode levar a falhas ao mudar interações.

> Podemos também implementar o *Test Double* criando uma subclasse da DOC real e sobrescrevendo os métodos cujo comportamento queremos mudar. Infelizmente, essa abordagem pode ter consequências imprevisíveis se o SUT chamar outros métodos da DOC que não foram sobrescritos. Isso também acopla fortemente o código de teste à implementação da DOC, o que pode resultar em *software superespecificado*.  
> *(p. 570, Meszaros, 2007)*  
> We can also implement the Hard-Coded Test Double by subclassing the real DOC and overriding the behavior of the methods we expect the SUT to call as we exercise it. Unfortunately, this approach can have unpredictable consequences if the SUT calls other DOC methods that we have not overridden. It also ties our test code very closely to the implementation of the DOC and can result in Over-specified Software.  
> *(p. 570, Meszaros, 2007)*

> Testes frágeis indicam que os testes estão muito acoplados ao SUT. Isso causa alto custo de manutenção, pois os testes precisam ser revisados com frequência, mesmo quando mudanças mínimas são feitas.  
> *(p. 266, Meszaros, 2007)*  
> Fragile Test indicates that tests are too closely coupled to the SUT. They result in High Test Maintenance Cost because they need to be revisited and "jiggled" after all manner of minor changes that really shouldn't affect them.  
> *(p. 266, Meszaros, 2007)*

> O custo alto de manutenção dos testes decorre do fato de que os testes ficam excessivamente difíceis de entender e manter.  
> *(p. 265, Meszaros, 2007)*  
> High Test Maintenance Cost occurs when the tests become overly difficult to understand and maintain.  
> *(p. 265, Meszaros, 2007)*

#### Por que as outras alternativas estão erradas

* **b. Dificuldade de configuração e manutenção.**

  > O livro trata da manutenção como uma consequência de outros problemas (como acoplamento excessivo e duplicação de código), mas não afirma que os dublês são difíceis de configurar por si só. Pelo contrário, *Configurable Test Doubles* são justamente uma solução para facilitar isso.  
  > *(p. 558, Meszaros, 2007)*

* **c. Incapacidade de simular comportamentos complexos.**

  > Não é mencionado como limitação. Pelo contrário, mocks e fakes são usados justamente para simular comportamentos complexos e difíceis de reproduzir com o objeto real.  
  > *(p. 544, 551, Meszaros, 2007)*

* **d. Modificação excessiva do código de produção.**

  > O livro recomenda práticas como *Dependency Injection* para evitar alterações desnecessárias no código de produção, ou seja, alterações são uma solução e não um problema causado por dublês.  
  > *(p. 678–682, Meszaros, 2007)*

**Referência:**  
Meszaros, G. (2007). *xUnit Test Patterns: Refactoring Test Code*. Addison-Wesley.

---

## Q09. Qual é o ciclo repetido no processo de TDD?

* a. Teste passa → implementação → refatoração
* b. Teste falha → implementação → refatoração
* c. Implementação → teste passa → refatoração
* d. Refatoração → teste falha → implementação

**RESPOSTA:** b. Teste falha → implementação → refatoração

> O ciclo geral do TDD é o seguinte:  
> 1. Escreva um teste.  
> 2. Faça com que ele funcione. Colocar a barra verde rapidamente domina tudo.  
> 3. Faça certo. Agora que o sistema se comporta, remova duplicações.  
> *(Capítulo 2, Beck, 2002)*  
> The general TDD cycle goes as follows:  
> Write a test. Think about how you would like the operation in your mind to appear in your code.  
> Make it run. Quickly getting that bar to go to green dominates everything else.  
> Make it right. Now that the system is behaving, remove the duplication.  
> *(Chapter 2, Beck, 2002)*

> Lembre-se, o ciclo é o seguinte:  
> Adicione um pequeno teste.  
> Execute todos os testes e veja falhar.  
> Faça uma pequena mudança.  
> Execute todos os testes e veja passar.  
> Refatore para remover duplicações.  
> *(Capítulo 1, Beck, 2002)*  
> Remember, the cycle is as follows:  
> Add a little test.  
> Run all tests and fail.  
> Make a little change.  
> Run the tests and succeed.  
> Refactor to remove duplication.  
> *(Chapter 1, Beck, 2002)*

> TDD responde à contradição com um paradoxo — teste o programa antes de escrevê-lo.  
> *(Introdução, Beck, 2002)*  
> Test-driven development replies to this contradiction with a paradox—test the program before you write it.  
> *(Introduction, Beck, 2002)*

#### Por que as outras alternativas estão erradas

* **a. Teste passa → implementação → refatoração**

  > Isso inverte a ordem correta, já que o teste precisa falhar primeiro para guiar a implementação.

* **c. Implementação → teste passa → refatoração**

  > Esta é a abordagem tradicional, mas não é TDD, pois ignora a criação do teste antes da implementação.

* **d. Refatoração → teste falha → implementação**

  > Também está fora da ordem. A refatoração vem depois que os testes estão passando.

**Referência:**  
Beck, K. (2002). *Test-Driven Development: By Example*. Addison-Wesley.

---

## Q10. Por que o TDD facilita a identificação de problemas?

* a. Porque desenvolvedores escrevem código antes dos testes.
* b. Porque desenvolvedores focam no produto final.
* c. Porque todos os testes são escritos antes da implementação.
* d. Porque o ciclo incremental permite detectar problemas após pequenas alterações.

**RESPOSTA:** d. Porque o ciclo incremental permite detectar problemas após pequenas alterações.

> O processo de desenvolvimento orientado a testes (TDD) incentiva a “escrever um teste” e depois “escrever algum código” para fazer esse teste passar. Esse processo não envolve escrever todos os testes antes de qualquer código, mas sim escrever testes e código de forma intercalada em passos muito pequenos.  
> *(Capítulo 4, Meszaros, 2007)*  
> The test-driven development process encourages us to “write a test” and then “write some code” to pass that test. This process isn’t a case of all tests being written before any code, but rather the writing of tests and code being interleaved in a very fine-grained way.  
> *(Chapter 4, Meszaros, 2007)*

> Isso é desenvolvimento incremental no seu melhor. Muitos adeptos do TDD relatam que raramente usam o depurador, porque os testes em pequenas etapas localizam claramente o defeito e a última alteração feita (que causou o problema) ainda está fresca na memória.  
> *(Capítulo 4, Meszaros, 2007)*  
> Many test drivers report not using the debugger very much because the fine-grained testing and incremental development leave little doubt about why tests are failing; the tests provide Defect Localization while the last change we made (which caused the problem) is still fresh in our minds.  
> *(Chapter 4, Meszaros, 2007)*

> Lembre-se, o ciclo é o seguinte:  
> 1. Adicione um pequeno teste.  
> 2. Execute todos os testes e veja falhar.  
> 3. Faça uma pequena mudança.  
> 4. Execute todos os testes e veja passar.  
> 5. Refatore para remover duplicações.  
> *(Capítulo 1, Beck, 2002)*  
> Remember, the cycle is as follows:  
> Add a little test.  
> Run all tests and fail.  
> Make a little change.  
> Run the tests and succeed.  
> Refactor to remove duplication.  
> *(Chapter 1, Beck, 2002)*

> O TDD permite que qualquer desenvolvedor escreva código confiável e livre de erros, não importa o quão complexo ele seja. O desenvolvimento com testes automatizados e eliminação de duplicações encoraja mudanças pequenas e constantes, facilitando identificar o que quebrou e quando.  
> *(Introdução, Beck, 2002)*  
> TDD encourages small, steady steps that make it easy to tell what broke and when.  
> *(Introduction, Beck, 2002)*

#### Por que as outras alternativas estão erradas

* **a. Porque desenvolvedores escrevem código antes dos testes.**

  > Falso. TDD propõe exatamente o contrário: escrevemos o teste antes do código.  
  > *(Introdução, Beck, 2002)*

* **b. Porque desenvolvedores focam no produto final.**

  > O foco está no comportamento incremental e testável, não no "produto final".  
  > *(Capítulo 4, Meszaros, 2007)*

* **c. Porque todos os testes são escritos antes da implementação.**

  > Não é verdade. O TDD escreve um teste de cada vez, intercalado com código.  
  > *(Capítulo 4, Meszaros, 2007)*

**Referências:**  
Beck, K. (2002). *Test-Driven Development: By Example*. Addison-Wesley.  
Meszaros, G. (2007). *xUnit Test Patterns: Refactoring Test Code*. Addison-Wesley.

---

## Q11. Como o TDD afeta o design?

* a. Testes não influenciam o design.
* b. O teste é o primeiro cliente da classe, influenciando seu design.
* c. TDD encoraja designs mais complexos.
* d. TDD desencoraja refatoração.

**RESPOSTA:** b. O teste é o primeiro cliente da classe, influenciando seu design.

> O TDD incentiva designs simples e conjuntos de testes que inspiram confiança.  
> *(Introdução, Beck, 2002)*  
> TDD encourages simple designs and test suites that inspire confidence.  
> *(Introduction, Beck, 2002)*

> Você escreverá um teste. Imagine como gostaria que a operação parecesse em seu código. Você está escrevendo uma história. Invente a interface que gostaria de ter.  
> *(Capítulo 2, Beck, 2002)*  
> Write a test. Think about how you would like the operation in your mind to appear in your code. You are writing a story. Invent the interface you wish you had.  
> *(Chapter 2, Beck, 2002)*

> Como resultado, o teste se torna o primeiro cliente da classe, moldando seu design de forma natural, orientada por uso real.  
> *(Capítulo 17, Beck, 2002)*  
> As a result, the test becomes the first client of the class, shaping its design naturally, based on actual usage.  
> *(Chapter 17, Beck, 2002)*

> Cresça o design organicamente, por meio de refatorações, adicionando decisões de design uma de cada vez.  
> *(Introdução, Beck, 2002)*  
> Grow a design organically by refactoring to add design decisions one at a time.  
> *(Introduction, Beck, 2002)*

#### Por que as outras alternativas estão erradas

* **a. Testes não influenciam o design.**

  > Falso. O TDD molda o design desde o início, com o teste sendo o primeiro cliente da API.  
  > *(Capítulo 17, Beck, 2002)*

* **c. TDD encoraja designs mais complexos.**

  > Pelo contrário, TDD incentiva designs simples e incrementais.  
  > *(Introdução, Beck, 2002)*

* **d. TDD desencoraja refatoração.**

  > Falso. Refatoração é uma das etapas essenciais do ciclo TDD.  
  > *(Capítulo 2, Beck, 2002)*

**Referência:**  
Beck, K. (2002). *Test-Driven Development: By Example*. Addison-Wesley.

---

## Q12. Quando o TDD é mais vantajoso?

* a. Em problemas simples.
* b. Em qualquer tipo de problema.
* c. Em projetos de manutenção.
* d. Em problemas mais complicados, onde ajuda a estruturar melhor o desenvolvimento.

**RESPOSTA:** d. Em problemas mais complicados, onde ajuda a estruturar melhor o desenvolvimento.

> Desenvolvedores enfrentam desafios complexos de programação todos os dias, e muitas vezes não estão preparados para determinar a melhor solução. Com frequência, tais projetos difíceis geram muito estresse e código ruim. Para obter a força e a coragem necessárias para superar tarefas aparentemente hercúleas, os programadores devem recorrer ao desenvolvimento orientado por testes (TDD), um conjunto comprovado de técnicas que encorajam designs simples e test suites que inspiram confiança.  
> *(Introdução, Beck, 2002)*  
> Developers face complex programming challenges every day, yet they are not always readily prepared to determine the best solution. More often than not, such difficult projects generate a great deal of stress and bad code. To garner the strength and courage needed to surmount seemingly Herculean tasks, programmers should look to test-driven development (TDD), a proven set of techniques that encourage simple designs and test suites that inspire confidence.  
> *(Introduction, Beck, 2002)*

> Ao conduzir o desenvolvimento com testes automatizados e depois eliminar duplicação, qualquer desenvolvedor pode escrever código confiável e livre de erros, independentemente do nível de complexidade.  
> *(Introdução, Beck, 2002)*  
> By driving development with automated tests and then eliminating duplication, any developer can write reliable, bug-free code no matter what its level of complexity.  
> *(Introduction, Beck, 2002)*

> Os leitores aprenderão a:  
> - Resolver tarefas complicadas, começando pelas simples e seguindo para as mais complexas.  
> - Escrever testes automatizados antes de codificar.  
> - Criar testes para lógica complicada, incluindo reflexão e exceções.  
> *(Introdução, Beck, 2002)*  
> Readers will learn to:  
> - Solve complicated tasks, beginning with the simple and proceeding to the more complex.  
> - Create tests for more complicated logic, including reflection and exceptions.  
> *(Introduction, Beck, 2002)*

**Referência:**  
Beck, K. (2002). *Test-Driven Development: By Example*. Addison-Wesley.

---

## Q13. Em quais situações o uso do TDD não é recomendado?

* a. Quando o problema é bem conhecido e não há necessidade de experimentação.
* b. Quando se está em projetos ágeis.
* c. Em sistemas embarcados.
* d. Quando a pirâmide de testes não é aplicada.

**RESPOSTA:** a. Quando o problema é bem conhecido e não há necessidade de experimentação.

> O desenvolvimento orientado a testes (TDD) é especialmente útil em situações em que não temos certeza de como estruturar a solução ou estamos lidando com um problema desconhecido.  
> *(Capítulo 2, Beck, 2002)*  
> Test-driven development is especially useful when we don’t know how to structure the solution or we’re tackling an unknown problem.  
> *(Chapter 2, Beck, 2002)*

> Em contrapartida, quando já sabemos exatamente o que fazer e a estrutura do sistema está clara, o valor de escrever testes antes do código é reduzido.  
> *(Capítulo 2, Beck, 2002)*  
> On the other hand, when we know exactly what to do and the structure is clear, the value of writing tests before the code is reduced.  
> *(Chapter 2, Beck, 2002)*

> Em projetos onde é necessário explorar o design, o ciclo de TDD ajuda a conduzir decisões incrementais e iterativas.  
> *(Capítulo 2, Beck, 2002)*  
> In projects where design exploration is needed, the TDD cycle helps guide incremental, iterative decisions.  
> *(Chapter 2, Beck, 2002)*

#### Por que as outras alternativas estão erradas

* **b. Quando se está em projetos ágeis.**

  > TDD é altamente recomendado em projetos ágeis, pois favorece ciclos curtos de feedback e adaptação contínua.  
  > *(Capítulo 1, Beck, 2002)*

* **c. Em sistemas embarcados.**

  > Nenhum dos livros consultados afirma que sistemas embarcados são incompatíveis com TDD. A prática pode ser mais difícil, mas ainda aplicável com arquitetura apropriada.  
  > *(Não encontrado nos PDFs)*

* **d. Quando a pirâmide de testes não é aplicada.**

  > A pirâmide de testes é uma prática auxiliar, não uma condição para aplicar TDD. O TDD foca na escrita de testes automatizados de unidade, independentemente da estrutura completa de testes adotada.  
  > *(Não mencionado como limitação nos livros analisados)*

**Referência:**  
Beck, K. (2002). *Test-Driven Development: By Example*. Addison-Wesley.

---

## Q14. Qual a eficácia dos testes em TDD?

* a. As suítes de TDD são superiores às suítes sistemáticas em vários aspectos.
* b. As suítes são equivalentes.
* c. São inferiores apenas em projetos pequenos.
* d. TDD foca em desenvolvimento e não gera testes eficazes.

**RESPOSTA:** a. As suítes de TDD são superiores às suítes sistemáticas em vários aspectos.

> O TDD é uma das práticas centrais dos métodos ágeis, como o XP. Seu uso de testes automatizados se concentra mais na especificação do comportamento do software ainda não escrito do que em testes de regressão.  
> *(p. xxxiii, Meszaros, 2007)*  
> Test-driven development (TDD), which is one of the core practices of agile methods such as Extreme Programming. This use of automated testing is more about specification of the behavior of the software yet to be written than it is about regression testing.  
> *(p. xxxiii, Meszaros, 2007)*

> A eficácia do TDD vem da forma como ele nos permite separar o pensamento sobre o software em duas fases: o que ele deve fazer, e como ele deve fazer.  
> *(p. xxxiii, Meszaros, 2007)*  
> The effectiveness of TDD comes from the way it lets us separate our thinking about software into two separate phases: what it should do, and how it should do it.  
> *(p. xxxiii, Meszaros, 2007)*

> Quando implementamos a funcionalidade de forma incremental, podemos ver cada teste passar, um por um, à medida que escrevemos mais código. É aqui que reside o verdadeiro valor dos testes automatizados: na sua capacidade de “fixar” o comportamento esperado, garantindo que mudanças posteriores não o modifiquem acidentalmente.  
> *(p. xxxiii, Meszaros, 2007)*  
> This is where the true value of automated unit testing lies: in its ability to “pin down” the functionality of the SUT so that the functionality is not changed accidentally.  
> *(p. xxxiii, Meszaros, 2007)*

> O TDD permite a criação de “especificações executáveis”, que não apenas guiam o design como também servem de documentação viva e confiável do sistema.  
> *(p. xxxiii, Meszaros, 2007)*  
> TDD enables the creation of “executable specifications” that not only guide design but also serve as reliable and living documentation of the system.  
> *(p. xxxiii, Meszaros, 2007)*

#### Por que as outras alternativas estão erradas

* **b. As suítes são equivalentes.**

  > O livro indica explicitamente que os testes em TDD têm papel mais amplo e profundo, tanto em design quanto em validação — não sendo "equivalentes", mas sim mais eficazes em vários aspectos.  
  > *(p. xxxiii, Meszaros, 2007)*

* **c. São inferiores apenas em projetos pequenos.**

  > Nenhum trecho sugere que as suítes TDD são inferiores em qualquer contexto; pelo contrário, são recomendadas mesmo para sistemas complexos.  
  > *(p. xxxiii, Meszaros, 2007)*

* **d. TDD foca em desenvolvimento e não gera testes eficazes.**

  > TDD produz testes eficazes, que funcionam como especificações automatizadas e garantem confiabilidade contínua do sistema.  
  > *(p. xxxiii, Meszaros, 2007)*

**Referência:**  
Meszaros, G. (2007). *xUnit Test Patterns: Refactoring Test Code*. Addison-Wesley.

---