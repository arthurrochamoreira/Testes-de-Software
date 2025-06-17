# TPI/TPE(4) - Questões de Testes de Software

---

## Q01. O que são objetos dummy?

- a. Objetos que possuem implementações reais, mas simplificadas.
- b. Objetos passados para a classe em teste, mas nunca utilizados.
- c. Objetos que fornecem respostas codificadas para chamadas realizadas durante o teste.
- d. Objetos que gravam todas as interações e permitem fazer asserções posteriormente.

**RESPOSTA:** b. Objetos passados para a classe em teste, mas nunca utilizados.

> Objetos dummy são passados para a classe em teste, mas nunca são utilizados. Isso é comum em aplicações de negócio, onde é necessário preencher uma longa lista de parâmetros, mas o teste utiliza apenas alguns deles.
> Pense em um teste de unidade para uma classe Customer. Talvez essa classe dependa de várias outras, como Address, Email, e assim por diante. Talvez um caso de teste específico (caso A) queira exercitar um comportamento, e esse comportamento não se importa com qual Address o Customer possui. Nesse caso, o testador pode criar um objeto Address dummy e passá-lo para a classe Customer.

> (Tradução Livre de Aniche, 2022, Cap. 6)

> Dummy objects are passed to the class under test but never used. This is common in business applications where you need to fill a long list of parameters, but the test exercises only a few of them. Think of a unit test for a Customer class. Maybe this class depends on several other classes like Address, Email, and so on. Maybe a specific test case A wants to exercise a behavior, and this behavior does not care which Address this Customer has. In this case, a tester can set up a dummy Address object and pass it to the Customer class.

> (Aniche, 2022, Cap. 6)

> Objetos Dummy são uma forma degenerada de _Test Double_. Eles existem apenas para serem passados de método para método; eles **nunca são utilizados**.
> _(Tradução livre de Meszaros, 2007, p. 728)_

> Um objeto dummy é passado para preencher uma lista de parâmetros, mas nunca é usado. Eles são mais frequentemente usados para preencher parâmetros obrigatórios em métodos ou construtores.
> _(Tradução livre de Meszaros, 2007, p. 728)_

> Algumas linguagens exigem que forneçamos valores para todos os parâmetros formais de um método; objetos dummy nos permitem satisfazer esse requisito sem afetar o comportamento do teste.
> _(Tradução livre de Meszaros, 2007, p. 728)_

**Referência:**
Meszaros, G. (2007). _xUnit Test Patterns: Refactoring Test Code_. Addison-Wesley.
Aniche, Maurício. Effective Software Testing: A Developer's Guide. Manning, 26 de abril de 2022. ISBN‑10: 1633439933; ISBN‑13: 978‑1633439931.

#### Por que as outras alternativas estão erradas

- **a. Objetos que possuem implementações reais, mas simplificadas.**

  > Isso define um _Fake Object_: substituímos um componente do SUT por uma implementação funcional mais leve.
  > _(Tradução livre de Meszaros, 2007, p. 551)_

- **c. Objetos que fornecem respostas codificadas para chamadas realizadas durante o teste.**

  > Isso define um _Test Stub_: substituímos um objeto real por um objeto de teste que fornece entradas indiretas.
  > _(Tradução livre de Meszaros, 2007, p. 529)_

- **d. Objetos que gravam todas as interações e permitem fazer asserções posteriormente.**

  > Isso corresponde a um _Test Spy_: usamos um Test Double para capturar as chamadas indiretas feitas pelo SUT para posterior verificação.
  > _(Tradução livre de Meszaros, 2007, p. 538)_

**Referência:**
Meszaros, G. (2007). _xUnit Test Patterns: Refactoring Test Code_. Addison-Wesley.
Aniche, Maurício. Effective Software Testing: A Developer's Guide. Manning, 26 de abril de 2022. ISBN‑10: 1633439933; ISBN‑13: 978‑1633439931.

---

## Q02. Qual a principal característica de objetos fake?

- a. Eles têm implementações reais, mas geralmente fazem a tarefa de forma mais simples.
- b. Eles fornecem respostas codificadas para chamadas realizadas durante o teste.
- c. Eles gravam todas as interações e permitem fazer asserções posteriormente.
- d. Eles envolvem o objeto real e observam seu comportamento.

**RESPOSTA:** a. Eles têm implementações reais, mas geralmente fazem a tarefa de forma mais simples.

> Objetos fake possuem implementações reais e funcionais da classe que estão simulando. No entanto, eles geralmente realizam a mesma tarefa de forma muito mais simples. Imagine uma classe de banco de dados fake que usa uma ArrayList em vez de um banco de dados real. Esse objeto fake é mais fácil de controlar do que o banco verdadeiro.
> Um exemplo comum na prática é usar um banco de dados mais simples durante os testes.
> No mundo Java, os desenvolvedores costumam utilizar o HSQLDB (HyperSQL Database, http://hsqldb.org), um banco de dados em memória que é muito mais rápido e fácil de configurar no código de teste do que um banco de dados real. Falaremos mais sobre bancos de dados em memória quando discutirmos testes de integração no capítulo 9.

> (Tradução Livre de Aniche, 2022, Cap. 6)

> Fake objects have real working implementations of the class they simulate. However, they usually do the same task in a much simpler way. Imagine a fake database class that uses an array list instead of a real database. This fake object is simpler to control than the real database. A common example in real life is to use a simpler database during testing.
> In the Java world, developers like to use HSQLDB (HyperSQL database, http://hsqldb.org), an in-memory database that is much faster and easier to set up in the test code than a real database. We will talk more about in-memory databases when we discuss integration testing in chapter 9.

> (Aniche, 2022, Cap. 6)

> Um _Fake Object_ é um dublê de teste que substitui um componente do SUT com uma implementação funcional, geralmente mais leve.  
> _(Tradução livre de Meszaros, 2007, p. 551)_

> Muitas vezes, usamos fakes para evitar dependências de infraestrutura como banco de dados ou serviços de rede. Por exemplo, um fake pode ser um banco de dados em memória simples usado em vez de um real.  
> _(Tradução livre de Meszaros, 2007, p. 551)_

> Um fake geralmente implementa a mesma interface que o objeto real, mas com um comportamento mais simples, suficiente para os testes.  
> _(Tradução livre de Meszaros, 2007, p. 551)_

#### Por que as outras alternativas estão erradas

- **b. Eles fornecem respostas codificadas para chamadas realizadas durante o teste.**

  > Isso define um _Test Stub_, não um fake.  
  > _(Tradução livre de Meszaros, 2007, p. 529)_

- **c. Eles gravam todas as interações e permitem fazer asserções posteriormente.**

  > Essa é a definição de um _Test Spy_.  
  > _(Tradução livre de Meszaros, 2007, p. 538)_

- **d. Eles envolvem o objeto real e observam seu comportamento.**

  > Isso descreve um _Mock Object_, especialmente um mock dinâmico que usa _proxying_ para observar interações.  
  > _(Tradução livre de Meszaros, 2007, p. 544)_

**Referência:**  
Meszaros, G. (2007). _xUnit Test Patterns: Refactoring Test Code_. Addison-Wesley.
Aniche, Maurício. Effective Software Testing: A Developer's Guide. Manning, 26 de abril de 2022. ISBN‑10: 1633439933; ISBN‑13: 978‑1633439931.

---

## Q03. Como os stubs diferem dos objetos fake?

- a. Stubs têm implementações reais, mas simplificadas.
- b. Stubs são usados apenas para observar o comportamento de uma dependência real.
- c. Stubs fornecem respostas codificadas e não têm uma implementação funcional.
- d. Stubs permitem fazer asserções sobre as interações após o teste.

**RESPOSTA:** c. Stubs fornecem respostas codificadas e não têm uma implementação funcional.

> Stubs fornecem respostas codificadas para as chamadas realizadas durante o teste. Diferente dos objetos fake, stubs não têm uma implementação funcional. Se o código chamar um método stubado como getAllInvoices, o stub retornará uma lista de faturas codificada manualmente.
> Stubs são o tipo mais popular de simulação. Na maioria dos casos, tudo o que você precisa de uma dependência é que ela retorne um valor, permitindo que o método em teste continue sua execução.
> Se estivermos testando um método que depende do getAllInvoices, podemos stubá-lo para retornar uma lista vazia, depois uma lista com um elemento, depois uma lista com vários elementos, e assim por diante. Isso nos permitiria verificar como o método em teste se comporta ao receber listas de diferentes tamanhos, como se estivessem vindo do banco de dados.
> (Tradução Livre de Aniche, 2022, Cap. 6)

> Stubs provide hard-coded answers to the calls performed during the test. Unlike fake objects, stubs do not have a working implementation. If the code calls a stubbed method getAllInvoices, the stub will return a hard-coded list of invoices.
> Stubs are the most popular type of simulation. In most cases, all you need from a dependency is for it to return a value so the method under test can continue its execution. If we were testing a method that depends on this getAllInvoices method, we could stub it to return an empty list, then return a list with one element, then return a list with many elements, and so on. This would enable us to assert how the method under test would work for lists of various lengths being returned from the database.

> (Aniche, 2022, Cap. 6)

> Um _Stub_ é um Dublê de Teste que fornece entradas indiretas para o SUT, retornando valores codificados em resposta a chamadas feitas durante o teste.  
> _(Tradução livre de Meszaros, 2007, p. 529)_

> Os _stubs_ não possuem comportamento funcional; eles apenas retornam valores predefinidos quando chamados.  
> _(Tradução livre de Meszaros, 2007, p. 529)_

> Em contraste, um _Fake Object_ substitui um componente por uma implementação funcional mais leve, como um banco de dados em memória.  
> _(Tradução livre de Meszaros, 2007, p. 551)_

> Um _Fake_ geralmente é uma implementação funcional completa (mas simples), o que o difere fundamentalmente de um stub que apenas devolve valores fixos.  
> _(Tradução livre de Meszaros, 2007, p. 551)_

#### Por que as outras alternativas estão erradas

- **a. Stubs têm implementações reais, mas simplificadas.**

  > Essa é a definição de um _Fake_, não de um _Stub_.  
  > _(Tradução livre de Meszaros, 2007, p. 551)_

- **b. Stubs são usados apenas para observar o comportamento de uma dependência real.**

  > Isso descreve um _Test Spy_ ou um _Mock_, e não um _Stub_.  
  > _(Tradução livre de Meszaros, 2007, p. 538)_

- **d. Stubs permitem fazer asserções sobre as interações após o teste.**

  > Quem permite isso são os _Test Spies_, não os _Stubs_.  
  > _(Tradução livre de Meszaros, 2007, p. 538)_

**Referência:**  
Meszaros, G. (2007). _xUnit Test Patterns: Refactoring Test Code_. Addison-Wesley.
Aniche, Maurício. Effective Software Testing: A Developer's Guide. Manning, 26 de abril de 2022. ISBN‑10: 1633439933; ISBN‑13: 978‑1633439931.

---

## Q04. Qual a vantagem principal dos objetos mocks em comparação com os stubs?

- a. Mocks têm implementações reais.
- b. Mocks são mais fáceis de controlar do que stubs.
- c. Mocks podem gravar interações e permitir asserções sobre elas.
- d. Mocks fornecem respostas codificadas para chamadas realizadas durante o teste.

**RESPOSTA:** c. Mocks podem gravar interações e permitir asserções sobre elas.

> Objetos mock se comportam como stubs no sentido de que você pode configurar como eles devem responder quando um método for chamado — por exemplo, retornar uma lista de faturas quando o método getAllInvoices for invocado. No entanto, os mocks vão além disso. Eles registram todas as interações e permitem que você faça asserções posteriormente.
> Por exemplo, talvez queiramos garantir que o método getAllInvoices seja chamado apenas uma vez. Se a classe em teste o chamar duas vezes, isso é um erro, e o teste deve falhar. No fim do teste, podemos escrever uma asserção do tipo: “verifique se getAllInvoices foi chamado apenas uma vez”.
> Frameworks de mocking permitem verificar diversos tipos de interações, como: “o método nunca foi chamado com este parâmetro específico” ou “o método foi chamado duas vezes com o parâmetro A e uma vez com o parâmetro B”. Mocks também são populares na indústria porque fornecem visibilidade sobre como as classes interagem.
> (Tradução Livre de Aniche, 2022, Cap. 6)

> Mock objects act like stubs in the sense that you can configure how they reply if a method is called: for example, to return a list of invoices when getAllInvoices is called. However, mocks go beyond that. They save all the interactions and allow you to make assertions afterward. For example, maybe we only want the getAllInvoices method to be called once. If the method is called twice by the class under test, this is a bug, and the test should fail. At the end of our test, we can write an assertion along the lines of “verify that getAllInvoices was called just once.”
> Mocking frameworks let you assert all sorts of interactions, such as “the method was never called with this specific parameter” or “the method was called twice with parameter A and once with parameter B.” Mocks are also popular in industry since they can provide insight into how classes interact.

> (Aniche, 2022, Cap. 6)

> Um _Mock Object_ é um dublê de teste que é pré-programado com expectativas, que representam uma especificação das chamadas que ele deve receber. O mock verifica automaticamente se essas chamadas ocorrem e, se não, o teste falha.  
> _(Tradução livre de Meszaros, 2007, p. 544)_

> Os _mocks_ são frequentemente criados por meio de bibliotecas que permitem especificar as interações esperadas. Essas interações são registradas durante a execução, e as bibliotecas de mocks verificam automaticamente se o comportamento ocorreu como esperado.  
> _(Tradução livre de Meszaros, 2007, p. 544)_

> Em contraste, um _Stub_ apenas fornece valores de retorno predefinidos e não verifica interações com o SUT.  
> _(Tradução livre de Meszaros, 2007, p. 529)_

> Os _stubs_ não sabem se foram chamados corretamente; são usados apenas para injetar entradas indiretas no SUT.  
> _(Tradução livre de Meszaros, 2007, p. 529)_

#### Por que as outras alternativas estão erradas

- **a. Mocks têm implementações reais.**

  > Isso define um _Fake Object_, que é uma implementação funcional simplificada, não um _Mock_.  
  > _(Tradução livre de Meszaros, 2007, p. 551)_

- **b. Mocks são mais fáceis de controlar do que stubs.**

  > O livro não afirma que mocks são "mais fáceis de controlar". Ele aponta que mocks são usados para verificar interações, enquanto stubs são usados para fornecer entradas indiretas.  
  > _(p. 544 vs. 529, Meszaros, 2007)_

- **d. Mocks fornecem respostas codificadas para chamadas realizadas durante o teste.**

  > Quem faz isso são os _Stubs_, não os _Mocks_.  
  > _(Tradução livre de Meszaros, 2007, p. 529)_

**Referência:**  
Meszaros, G. (2007). _xUnit Test Patterns: Refactoring Test Code_. Addison-Wesley.
Aniche, Maurício. Effective Software Testing: A Developer's Guide. Manning, 26 de abril de 2022. ISBN‑10: 1633439933; ISBN‑13: 978‑1633439931.

---

## Q05. Uma classe que simula uma base de dados usando uma lista pode ser classificada como:

- a. Fake object
- b. Dummy object
- c. Mock
- d. Stub

**RESPOSTA:** a. Fake object

> Objetos fake têm implementações reais e funcionais da classe que estão simulando. No entanto, geralmente realizam a mesma tarefa de uma forma muito mais simples. Imagine uma classe de banco de dados fake que usa uma ArrayList em vez de um banco de dados real. Esse objeto fake é mais fácil de controlar do que o banco de dados verdadeiro. Um exemplo comum na prática é usar um banco de dados mais simples durante os testes.
> No mundo Java, os desenvolvedores gostam de usar o HSQLDB (HyperSQL Database, http://hsqldb.org), um banco de dados em memória que é muito mais rápido e fácil de configurar no código de teste do que um banco real. Falaremos mais sobre bancos de dados em memória quando discutirmos testes de integração no capítulo 9.
> (Tradução Livre de Aniche, 2022, Cap. 6)

> Fake objects have real working implementations of the class they simulate. However, they usually do the same task in a much simpler way. Imagine a fake database class that uses an array list instead of a real database. This fake object is simpler to control than the real database. A common example in real life is to use a simpler database during testing.
> In the Java world, developers like to use HSQLDB (HyperSQL database, http://hsqldb.org), an in-memory database that is much faster and easier to set up in the test code than a real database. We will talk more about in-memory databases when we discuss integration testing in chapter 9.

> (Aniche, 2022, Cap. 6)

> Um _Fake Object_ é um Dublê de Teste que substitui um componente de que o SUT depende com uma implementação funcional, geralmente mais leve.  
> _(Tradução livre de Meszaros, 2007, p. 551)_

> Um exemplo comum de fake é uma implementação em memória de um banco de dados, usada em vez de um banco real durante os testes.  
> _(Tradução livre de Meszaros, 2007, p. 551)_

> Fakes são apropriados quando a implementação alternativa é mais rápida ou fácil de configurar do que a real, mas ainda fornece o comportamento necessário para os testes.  
> _(Tradução livre de Meszaros, 2007, p. 551)_

#### Por que as outras alternativas estão erradas

- **b. Dummy object**

  > Dummies são passados para preencher parâmetros, mas nunca são usados.  
  > _(Tradução livre de Meszaros, 2007, p. 728)_  
  > Uma lista simulando uma base de dados é usada funcionalmente, portanto não é um dummy.

- **c. Mock**

  > Mocks são configurados com expectativas de chamadas e verificam se elas ocorreram; não são usados para simular lógica funcional como um banco de dados.  
  > _(Tradução livre de Meszaros, 2007, p. 544)_

- **d. Stub**

  > Stubs são usados para fornecer respostas codificadas a chamadas do SUT, mas não têm comportamento funcional completo como um banco de dados em memória.  
  > _(Tradução livre de Meszaros, 2007, p. 529)_

**Referência:**  
Meszaros, G. (2007). _xUnit Test Patterns: Refactoring Test Code_. Addison-Wesley.
Aniche, Maurício. Effective Software Testing: A Developer's Guide. Manning, 26 de abril de 2022. ISBN‑10: 1633439933; ISBN‑13: 978‑1633439931.

---

## Q06. O que pode ser necessário para injetar dublês de teste?

- a. Criar um tipo especial de dublê que intercepte chamadas.
- b. Refatorar o construtor da classe de teste para instanciar a dependência.
- c. Usar um framework de mocking para injeção automática.
- d. Alterar o código da classe sendo testada para aceitar a dependência via construtor.

**RESPOSTA:** d. Alterar o código da classe sendo testada para aceitar a dependência via construtor.

> Precisamos modificar nosso código de produção para facilitar os testes (acostume-se com a ideia de alterar o código de produção para torná-lo mais testável). A forma mais direta de fazer isso é passar IssuedInvoices como uma dependência explícita por meio do construtor da classe, como mostrado na listagem 6.3. A classe não instancia mais as classes DatabaseConnection e IssuedInvoices; em vez disso, ela recebe IssuedInvoices via construtor. Note que não há necessidade de injetar a classe DatabaseConnection, pois InvoiceFilter não precisa dela. Isso é bom: quanto menos precisarmos fazer no código de teste, melhor. A nova implementação funciona tanto para os testes (porque podemos injetar um stub de IssuedInvoices) quanto para a produção (porque podemos injetar a implementação concreta de IssuedInvoices, que acessará o banco de dados, como esperamos em produção).

> (Tradução Livre de Aniche, 2022, Cap. 6)

> We must change our production code to make testing easier (get used to the idea of changing the production code to facilitate testing). The most direct way to do this is to have IssuedInvoices passed in as an explicit dependency through the class constructor, as shown in listing 6.3. The class no longer instantiates the DatabaseConnection and IssuedInvoices classes. Rather, it receives IssuedInvoices via constructor. Note that there is no need for the DatabaseConnection class to be injected, as InvoiceFilter does not need it. This is good: the less we need to do in our test code, the better. The new implementation works for both our tests (because we can inject an IssueInvoices stub) and production (because we can inject the concrete IssueInvoices, which will go to the database, as we expect in production).

> (Aniche, 2022, Cap. 6)

> Injeção por Construtor: informamos ao SUT qual DOC usar quando o construímos.  
> _(Tradução livre de Meszaros, 2007, p. 680)_

> Para converter o SUT para usar Injeção por Construtor, podemos fazer um refatoramento do tipo "Introduce Field" para manter o DOC em um campo que é inicializado no construtor existente.  
> _(Tradução livre de Meszaros, 2007, p. 684)_

> Quando um teste deseja substituir o DOC real por um dublê de teste, ele o passa para o construtor ao construir o SUT.  
> _(Tradução livre de Meszaros, 2007, p. 681)_

> Quando o SUT não suporta injeção de dependência "de fábrica", pode ser necessário refatorar o código da classe sendo testada para permitir isso.  
> _(Tradução livre de Meszaros, 2007, p. 682)_

#### Por que as outras alternativas estão erradas

- **a. Criar um tipo especial de dublê que intercepte chamadas.**

  > O livro descreve _mocks_ e _spies_ como dublês configuráveis, mas não afirma que a injeção exige criar um tipo especial que intercepte chamadas. Isso não é necessário para injeção.  
  > _(p. 522 e p. 544, Meszaros, 2007)_

- **b. Refatorar o construtor da classe de teste para instanciar a dependência.**

  > O que precisa ser refatorado é o construtor da classe sendo testada (SUT), não o da classe de teste.  
  > _(Tradução livre de Meszaros, 2007, p. 684)_

- **c. Usar um framework de mocking para injeção automática.**

  > O livro menciona que frameworks de mock como JMock facilitam a criação de mocks, mas não substituem a necessidade de refatorar o SUT para aceitar injeção.  
  > _(Tradução livre de Meszaros, 2007, p. 565)_

**Referência:**  
Meszaros, G. (2007). _xUnit Test Patterns: Refactoring Test Code_. Addison-Wesley.
Aniche, Maurício. Effective Software Testing: A Developer's Guide. Manning, 26 de abril de 2022. ISBN‑10: 1633439933; ISBN‑13: 978‑1633439931.

---

## Q07. Qual a principal vantagem de configurar dublês para lançar exceções?

- a. Permite testar como os sistemas se comportariam em cenários inesperados, simulando falhas.
- b. Garante que todos os métodos sejam chamados ao menos uma vez.
- c. Facilita respostas codificadas.
- d. Substitui testes de integração com sistemas externos.

**RESPOSTA:** a. Permite testar como os sistemas se comportariam em cenários inesperados, simulando falhas.

> Temos mais controle. Podemos facilmente dizer a esses objetos falsos o que fazer. Se quisermos que um método lance uma exceção, instruímos o método mock a lançá-la. Não há necessidade de configurações complicadas para forçar a dependência a lançar a exceção. Pense em como é difícil forçar uma classe a lançar uma exceção ou retornar uma data falsa. Esse esforço é praticamente zero quando simulamos as dependências com objetos mock.

> (Tradução Livre de Aniche, 2022, Cap. 6)

> We have more control. We can easily tell these fake objects what to do. If we want a method to throw an exception, we tell the mock method to throw it. There is no need for complicated setups to force the dependency to throw the exception. Think of how hard it is to force a class to throw an exception or return a fake date. This effort is close to zero when we simulate the dependencies with mock objects.

> (Aniche, 2022, Cap. 6)

> Certamente não queremos que o código de tratamento de exceções seja executado pela primeira vez em produção. E se ele estiver implementado incorretamente? É altamente desejável ter testes automatizados para esse código. O desafio no teste é fazer com que o DOC (componente dependente) lance uma exceção para que o caminho de erro possa ser testado.  
> _(Tradução livre de Meszaros, 2007, p. 127)_

> A exceção que esperamos que o DOC lance é um bom exemplo de uma condição de entrada indireta. Nosso meio de injetar essa entrada é um ponto de controle.  
> _(Tradução livre de Meszaros, 2007, p. 127)_

> Um _Saboteur_ é um tipo especial de _Test Stub_ que lança exceções ou erros para injetar entradas indiretas anormais no SUT.  
> _(Tradução livre de Meszaros, 2007, p. 135)_

> Um _Expected Exception Test_ nos ajuda a verificar se os cenários de erro foram codificados corretamente. O modo mais comum de forçar esses erros é usar um _Test Stub_ para controlar a entrada indireta e lançar as exceções apropriadas.  
> _(Tradução livre de Meszaros, 2007, p. 350)_

#### Por que as outras alternativas estão erradas

- **b. Garante que todos os métodos sejam chamados ao menos uma vez.**

  > Isso não é relacionado ao lançamento de exceções. Verificar se métodos são chamados pertence ao comportamento de _Mocks_ (verificação de interações), não ao uso de exceções.  
  > _(Tradução livre de Meszaros, 2007, p. 544)_

- **c. Facilita respostas codificadas.**

  > Quem faz isso são os _Stubs_ do tipo _Responder_, usados para retornar valores predefinidos — não para lançar exceções.  
  > _(Tradução livre de Meszaros, 2007, p. 529)_

- **d. Substitui testes de integração com sistemas externos.**

  > Dublês podem ajudar a simular sistemas externos, mas o foco do uso de exceções não é substituir testes de integração, e sim permitir testar o comportamento em situações de falha.  
  > _(Tradução livre de Meszaros, 2007, p. 127)_

**Referência:**  
Meszaros, G. (2007). _xUnit Test Patterns: Refactoring Test Code_. Addison-Wesley.
Aniche, Maurício. Effective Software Testing: A Developer's Guide. Manning, 26 de abril de 2022. ISBN‑10: 1633439933; ISBN‑13: 978‑1633439931.

---

## Q08. Qual é uma das principais desvantagens de usar dublês?

- a. O acoplamento com o código de produção, que pode levar a falhas ao mudar interações.
- b. Dificuldade de configuração e manutenção.
- c. Incapacidade de simular comportamentos complexos.
- d. Modificação excessiva do código de produção.

**RESPOSTA:** a. O acoplamento com o código de produção, que pode levar a falhas ao mudar interações.

> Testes que utilizam mocks são mais acoplados ao código de produção do que testes que não os utilizam. Quando esse acoplamento não é cuidadosamente planejado, ele pode se tornar problemático.

> (Tradução Livre de Aniche, 2022, Cap. 6)

> Tests that use mocks are more coupled with the production code than tests that do not use mocks. When not carefully planned, such coupling can be problematic.

> (Aniche, 2022, Cap. 6)

> Podemos também implementar o _Test Double_ criando uma subclasse da DOC real e sobrescrevendo os métodos cujo comportamento queremos mudar. Infelizmente, essa abordagem pode ter consequências imprevisíveis se o SUT chamar outros métodos da DOC que não foram sobrescritos. Isso também acopla fortemente o código de teste à implementação da DOC, o que pode resultar em _software superespecificado_.  
> _(Tradução livre de Meszaros, 2007, p. 570)_

> Testes frágeis indicam que os testes estão muito acoplados ao SUT. Isso causa alto custo de manutenção, pois os testes precisam ser revisados com frequência, mesmo quando mudanças mínimas são feitas.  
> _(Tradução livre de Meszaros, 2007, p. 266)_

> O custo alto de manutenção dos testes decorre do fato de que os testes ficam excessivamente difíceis de entender e manter.  
> _(Tradução livre de Meszaros, 2007, p. 265)_

#### Por que as outras alternativas estão erradas

- **b. Dificuldade de configuração e manutenção.**

  > O livro trata da manutenção como uma consequência de outros problemas (como acoplamento excessivo e duplicação de código), mas não afirma que os dublês são difíceis de configurar por si só. Pelo contrário, _Configurable Test Doubles_ são justamente uma solução para facilitar isso.  
  > _(Tradução livre de Meszaros, 2007, p. 558)_

- **c. Incapacidade de simular comportamentos complexos.**

  > Não é mencionado como limitação. Pelo contrário, mocks e fakes são usados justamente para simular comportamentos complexos e difíceis de reproduzir com o objeto real.  
  > _(p. 544, 551, Meszaros, 2007)_

- **d. Modificação excessiva do código de produção.**

  > O livro recomenda práticas como _Dependency Injection_ para evitar alterações desnecessárias no código de produção, ou seja, alterações são uma solução e não um problema causado por dublês.  
  > _(p. 678–682, Meszaros, 2007)_

**Referência:**  
Meszaros, G. (2007). _xUnit Test Patterns: Refactoring Test Code_. Addison-Wesley.
Aniche, Maurício. Effective Software Testing: A Developer's Guide. Manning, 26 de abril de 2022. ISBN‑10: 1633439933; ISBN‑13: 978‑1633439931.

---

## Q09. Qual é o ciclo repetido no processo de TDD?

- a. Teste passa → implementação → refatoração
- b. Teste falha → implementação → refatoração
- c. Implementação → teste passa → refatoração
- d. Refatoração → teste falha → implementação

**RESPOSTA:** b. Teste falha → implementação → refatoração

> Refletindo sobre nossa primeira experiência com TDD

> De forma abstrata, o ciclo que repetimos no processo de desenvolvimento da seção anterior foi o seguinte:

> 1. Escrevemos um teste (de unidade) para a próxima funcionalidade que queríamos implementar. O teste falhou.
> 2. Implementamos a funcionalidade. O teste passou.
> 3. Refatoramos nosso código de produção e o código de teste.

> (Tradução Livre de Aniche, 2022, Cap. 8)

> Reflecting on our first TDD experience

> Abstractly, the cycle we repeated in the previous section’s development process was as follows:

> 1.  We wrote a (unit) test for the next piece of functionality we wanted to implement. The test failed.
> 2.  We implemented the functionality. The test passed.
> 3.  We refactored our production and test code.

>     (Aniche, 2022, Cap. 8)

> O ciclo geral do TDD é o seguinte:
>
> 1. Escreva um teste.
> 2. Faça com que ele funcione. Colocar a barra verde rapidamente domina tudo.
> 3. Faça certo. Agora que o sistema se comporta, remova duplicações.  
>    _(Capítulo 2, Beck, 2002)_

> Lembre-se, o ciclo é o seguinte:  
> Adicione um pequeno teste.  
> Execute todos os testes e veja falhar.  
> Faça uma pequena mudança.  
> Execute todos os testes e veja passar.  
> Refatore para remover duplicações.  
> _(Capítulo 1, Beck, 2002)_

> TDD responde à contradição com um paradoxo — teste o programa antes de escrevê-lo.  
> _(Introdução, Beck, 2002)_

#### Por que as outras alternativas estão erradas

- **a. Teste passa → implementação → refatoração**

  > Isso inverte a ordem correta, já que o teste precisa falhar primeiro para guiar a implementação.

- **c. Implementação → teste passa → refatoração**

  > Esta é a abordagem tradicional, mas não é TDD, pois ignora a criação do teste antes da implementação.

- **d. Refatoração → teste falha → implementação**

  > Também está fora da ordem. A refatoração vem depois que os testes estão passando.

**Referência:**  
Beck, K. (2002). _Test-Driven Development: By Example_. Addison-Wesley.
Aniche, Maurício. Effective Software Testing: A Developer's Guide. Manning, 26 de abril de 2022. ISBN‑10: 1633439933; ISBN‑13: 978‑1633439931.

---

## Q10. Por que o TDD facilita a identificação de problemas?

- a. Porque desenvolvedores escrevem código antes dos testes.
- b. Porque desenvolvedores focam no produto final.
- c. Porque todos os testes são escritos antes da implementação.
- d. Porque o ciclo incremental permite detectar problemas após pequenas alterações.

**RESPOSTA:** d. Porque o ciclo incremental permite detectar problemas após pequenas alterações.

> Feedback rápido — Desenvolvedores que não trabalham em ciclos de TDD produzem grandes blocos de código de produção antes de receber qualquer tipo de feedback. Em um ciclo de TDD, os desenvolvedores são forçados a dar um passo de cada vez. Escrevemos um teste, fazemos com que ele passe e refletimos sobre isso. Esses vários momentos de reflexão tornam mais fácil identificar novos problemas à medida que surgem, pois escrevemos apenas uma pequena quantidade de código desde a última vez em que tudo estava sob controle.

> (Tradução Livre de Aniche, 2022, Cap. 8)

> Quick feedback — Developers who do not work in TDD cycles produce large chunks of production code before getting any feedback. In a TDD cycle, developers are forced to take one step at a time. We write one test, make it pass, and reflect on it. These many moments of reflection make it easier to identify new problems as they arise, because we have only written a small amount of code since the last time everything was under control.

> (Aniche, 2022, Cap. 8)

> O processo de desenvolvimento orientado a testes (TDD) incentiva a "escrever um teste e depois "escrever algum código para fazer esse teste passar. Esse processo não envolve escrever todos os testes antes de qualquer código, mas sim escrever testes e código de forma intercalada em passos muito pequenos.  
> _(Capítulo 4, Meszaros, 2007)_

> Isso é desenvolvimento incremental no seu melhor. Muitos adeptos do TDD relatam que raramente usam o depurador, porque os testes em pequenas etapas localizam claramente o defeito e a última alteração feita (que causou o problema) ainda está fresca na memória.  
> _(Capítulo 4, Meszaros, 2007)_

> Lembre-se, o ciclo é o seguinte:
>
> 1. Adicione um pequeno teste.
> 2. Execute todos os testes e veja falhar.
> 3. Faça uma pequena mudança.
> 4. Execute todos os testes e veja passar.
> 5. Refatore para remover duplicações.

> O TDD permite que qualquer desenvolvedor escreva código confiável e livre de erros, não importa o quão complexo ele seja. O desenvolvimento com testes automatizados e eliminação de duplicações encoraja mudanças pequenas e constantes, facilitando identificar o que quebrou e quando.  
> _(Introdução, Beck, 2002)_

#### Por que as outras alternativas estão erradas

- **a. Porque desenvolvedores escrevem código antes dos testes.**

  > Falso. TDD propõe exatamente o contrário: escrevemos o teste antes do código.  
  > _(Introdução, Beck, 2002)_

- **b. Porque desenvolvedores focam no produto final.**

  > O foco está no comportamento incremental e testável, não no "produto final".  
  > _(Capítulo 4, Meszaros, 2007)_

- **c. Porque todos os testes são escritos antes da implementação.**

  > Não é verdade. O TDD escreve um teste de cada vez, intercalado com código.  
  > _(Capítulo 4, Meszaros, 2007)_

**Referências:**  
Beck, K. (2002). _Test-Driven Development: By Example_. Addison-Wesley.  
Meszaros, G. (2007). _xUnit Test Patterns: Refactoring Test Code_. Addison-Wesley.
Aniche, Maurício. Effective Software Testing: A Developer's Guide. Manning, 26 de abril de 2022. ISBN‑10: 1633439933; ISBN‑13: 978‑1633439931.

---

## Q11. Como o TDD afeta o design?

- a. Testes não influenciam o design.
- b. O teste é o primeiro cliente da classe, influenciando seu design.
- c. TDD encoraja designs mais complexos.
- d. TDD desencoraja refatoração.

**RESPOSTA:** b. O teste é o primeiro cliente da classe, influenciando seu design.

> Código testável — Criar os testes primeiro nos faz pensar, desde o início, em uma forma de testar (facilmente) o código de produção antes mesmo de implementá-lo. No fluxo tradicional, os desenvolvedores costumam pensar em testes apenas nas fases finais do desenvolvimento de uma funcionalidade. Nesse ponto, pode ser caro mudar como o código funciona para facilitar os testes.

> (Tradução Livre de Aniche, 2022, Cap. 8)

> Feedback sobre o design — **O código de teste costuma ser o primeiro cliente da classe ou componente que estamos desenvolvendo**. Um método de teste instancia a classe em teste, invoca um método passando todos os parâmetros necessários e verifica se o método produz os resultados esperados. Se isso for difícil de fazer, talvez exista uma forma melhor de projetar a classe. Ao praticar TDD, esses problemas surgem mais cedo no desenvolvimento da funcionalidade. E quanto mais cedo identificamos esses problemas, mais barato é corrigi-los.

> (Tradução Livre de Aniche, 2022, Cap. 8)

> Testable code — Creating the tests first makes us think from the beginning about a way to (easily) test the production code before implementing it. In the traditional flow, developers often think about testing only in the later stages of developing a feature. At that point, it may be expensive to change how the code works to facilitate testing.

> (Aniche, 2022, Cap. 8)

> Feedback about design — The test code is often the first client of the class or component we are developing. A test method instantiates the class under test, invokes a method passing all its required parameters, and asserts that the method produces the expected results. If this is hard to do, perhaps there is a better way to design the class. When doing TDD, these problems arise earlier in the development of the feature. And the earlier we observe such issues, the cheaper it is to fix them.

> (Aniche, 2022, Cap. 8)

> O TDD incentiva designs simples e conjuntos de testes que inspiram confiança.  
> _(Introdução, Beck, 2002)_

> Você escreverá um teste. Imagine como gostaria que a operação parecesse em seu código. Você está escrevendo uma história. Invente a interface que gostaria de ter.  
> _(Capítulo 2, Beck, 2002)_

> Como resultado, o teste se torna o primeiro cliente da classe, moldando seu design de forma natural, orientada por uso real.  
> _(Capítulo 17, Beck, 2002)_

> Cresça o design organicamente, por meio de refatorações, adicionando decisões de design uma de cada vez.  
> _(Introdução, Beck, 2002)_

#### Por que as outras alternativas estão erradas

- **a. Testes não influenciam o design.**

  > Falso. O TDD molda o design desde o início, com o teste sendo o primeiro cliente da API.  
  > _(Capítulo 17, Beck, 2002)_

- **c. TDD encoraja designs mais complexos.**

  > Pelo contrário, TDD incentiva designs simples e incrementais.  
  > _(Introdução, Beck, 2002)_

- **d. TDD desencoraja refatoração.**

  > Falso. Refatoração é uma das etapas essenciais do ciclo TDD.  
  > _(Capítulo 2, Beck, 2002)_

**Referência:**  
Beck, K. (2002). _Test-Driven Development: By Example_. Addison-Wesley.
Aniche, Maurício. Effective Software Testing: A Developer's Guide. Manning, 26 de abril de 2022. ISBN‑10: 1633439933; ISBN‑13: 978‑1633439931.

---

## Q12. Quando o TDD é mais vantajoso?

- a. Em problemas simples.
- b. Em qualquer tipo de problema.
- c. Em projetos de manutenção.
- d. Em problemas mais complicados, onde ajuda a estruturar melhor o desenvolvimento.

**RESPOSTA:** d. Em problemas mais complicados, onde ajuda a estruturar melhor o desenvolvimento.

> Eu uso TDD quando não tenho uma ideia clara de como projetar, arquitetar ou implementar um requisito específico. Nesses casos, gosto de ir devagar e usar meus testes para experimentar diferentes possibilidades. Se estou trabalhando em um problema que conheço bem e já sei a melhor forma de resolvê-lo, não me importo em pular alguns ciclos.

> (Tradução Livre de Aniche, 2022, Cap. 8)

> I use TDD when I don’t have a clear idea of how to design, architect, or implement a specific requirement. In such cases, I like to go slowly and use my tests to experiment with different possibilities. If I am working on a problem I know well, and I already know the best way to solve the problem, I do not mind skipping a few cycles.

> (Aniche, 2022, Cap. 8)

> Eu uso TDD quando estou lidando com um problema complexo ou com um problema para o qual não tenho expertise suficiente para resolver. Sempre que enfrento uma implementação desafiadora, o TDD me ajuda a dar um passo atrás e aprender sobre os requisitos à medida que avanço, escrevendo testes bem pequenos.

> (Tradução Livre de Aniche, 2022, Cap. 8)

> I use TDD when dealing with a complex problem or a problem I lack the expertise to solve. Whenever I face a challenging implementation, TDD helps me take a step back and learn about the requirements as I go by writing very small tests.

> (Aniche, 2022, Cap. 8)

> Desenvolvedores enfrentam desafios complexos de programação todos os dias, e muitas vezes não estão preparados para determinar a melhor solução. Com frequência, tais projetos difíceis geram muito estresse e código ruim. Para obter a força e a coragem necessárias para superar tarefas aparentemente hercúleas, os programadores devem recorrer ao desenvolvimento orientado por testes (TDD), um conjunto comprovado de técnicas que encorajam designs simples e test suites que inspiram confiança.  
> _(Introdução, Beck, 2002)_

> Ao conduzir o desenvolvimento com testes automatizados e depois eliminar duplicação, qualquer desenvolvedor pode escrever código confiável e livre de erros, independentemente do nível de complexidade.  
> _(Introdução, Beck, 2002)_

> Os leitores aprenderão a:
>
> - Resolver tarefas complicadas, começando pelas simples e seguindo para as mais complexas.
> - Escrever testes automatizados antes de codificar.
> - Criar testes para lógica complicada, incluindo reflexão e exceções.  
>   _(Introdução, Beck, 2002)_

**Referência:**  
Beck, K. (2002). _Test-Driven Development: By Example_. Addison-Wesley.
Aniche, Maurício. Effective Software Testing: A Developer's Guide. Manning, 26 de abril de 2022. ISBN‑10: 1633439933; ISBN‑13: 978‑1633439931.

---

## Q13. Em quais situações o uso do TDD não é recomendado?

- a. Quando o problema é bem conhecido e não há necessidade de experimentação.
- b. Quando se está em projetos ágeis.
- c. Em sistemas embarcados.
- d. Quando a pirâmide de testes não é aplicada.

**RESPOSTA:** a. Quando o problema é bem conhecido e não há necessidade de experimentação.

> Eu não uso TDD quando não há nada a ser aprendido no processo. Se eu já conheço o problema e sei a melhor forma de resolvê-lo, fico à vontade para codificar a solução diretamente. (Mesmo que eu não use TDD, sempre escrevo os testes prontamente. Nunca deixo para o final do dia ou para o fim da sprint. Eu escrevo o código de produção e, em seguida, escrevo o código de teste. E, se tiver dificuldades, dou um passo atrás e desacelero.)

> (Tradução Livre de Aniche, 2022, Cap. 8)

> I do not use TDD when there is nothing to be learned in the process. If I already know the problem and how to best solve it, I am comfortable coding the solution directly. (Even if I do not use TDD, I always write tests promptly. I never leave it until the end of the day or the end of the sprint. I code the production code, and then I code the test code. And if I have trouble, I take a step back and slow down.)

> (Aniche, 2022, Cap. 8)

> O desenvolvimento orientado a testes (TDD) é especialmente útil em situações em que não temos certeza de como estruturar a solução ou estamos lidando com um problema desconhecido.  
> _(Capítulo 2, Beck, 2002)_

> Em contrapartida, quando já sabemos exatamente o que fazer e a estrutura do sistema está clara, o valor de escrever testes antes do código é reduzido.  
> _(Capítulo 2, Beck, 2002)_

> Em projetos onde é necessário explorar o design, o ciclo de TDD ajuda a conduzir decisões incrementais e iterativas.  
> _(Capítulo 2, Beck, 2002)_

#### Por que as outras alternativas estão erradas

- **b. Quando se está em projetos ágeis.**

  > TDD é altamente recomendado em projetos ágeis, pois favorece ciclos curtos de feedback e adaptação contínua.  
  > _(Capítulo 1, Beck, 2002)_

- **c. Em sistemas embarcados.**

- **d. Quando a pirâmide de testes não é aplicada.**

  > A pirâmide de testes é uma prática auxiliar, não uma condição para aplicar TDD. O TDD foca na escrita de testes automatizados de unidade, independentemente da estrutura completa de testes adotada.

**Referência:**  
Beck, K. (2002). _Test-Driven Development: By Example_. Addison-Wesley.
Aniche, Maurício. Effective Software Testing: A Developer's Guide. Manning, 26 de abril de 2022. ISBN‑10: 1633439933; ISBN‑13: 978‑1633439931.

---

## Q14. Qual a eficácia dos testes em TDD?

- a. As suítes de TDD são superiores às suítes sistemáticas em vários aspectos.
- b. As suítes são equivalentes.
- c. São inferiores apenas em projetos pequenos.
- d. TDD foca em desenvolvimento e não gera testes eficazes.

**RESPOSTA:** a. As suítes de TDD são superiores às suítes sistemáticas em vários aspectos.

> TDD é uma parte tão significativa do desenvolvimento de software que não é surpresa que pesquisadores tentem avaliar sua efetividade usando métodos científicos. Como muitas pessoas o tratam como uma bala de prata, acredito fortemente que você deve conhecer o que os profissionais pensam, o que eu penso e o que a pesquisa atualmente sabe sobre o assunto.

> Pesquisas mostraram diversas situações em que o TDD pode melhorar o design de classes:

> Janzen (2005) mostrou que praticantes de TDD, em comparação com desenvolvedores que não usam TDD, produziram algoritmos menos complexos e suítes de testes com maior cobertura.

> Janzen e Saiedian (2006) demonstraram que o código produzido com TDD fazia melhor uso de conceitos de orientação a objetos, com responsabilidades melhor distribuídas entre diferentes classes. Em contraste, outras equipes produziram código mais procedural.

> George e Williams (2003) mostraram que, embora o TDD possa inicialmente reduzir a produtividade de desenvolvedores inexperientes, 92% dos desenvolvedores em uma análise qualitativa acreditavam que o TDD ajudava a melhorar a qualidade do código.

> Dogša e Batič (2011) também encontraram uma melhoria no design das classes ao se utilizar TDD. Segundo os autores, essa melhoria resultava da simplicidade que o TDD adiciona ao processo.

> Erdogmus et al. (2005) realizaram um experimento com 24 estudantes de graduação e mostraram que o TDD aumentou a produtividade deles, mas não alterou a qualidade do código produzido.

> Nagappan e colegas (2008) realizaram três estudos de caso na Microsoft e mostraram que a densidade de defeitos antes do lançamento em projetos que usaram TDD caiu entre 40% e 90% em comparação com projetos que não utilizaram TDD.

(Tradução Livre de Aniche, 2022, Cap. 8)

> TDD is such a significant part of software development that it is no wonder researchers try to assess its effectiveness using scientific methods. Because so many people treat it as a silver bullet, I strongly believe that you should know what practitioners think, what I think, and what research currently knows about the subject.

> Research has shown several situations in which TDD can improve class design:

> Janzen (2005) showed that TDD practitioners, compared to non-TDDers, produced less-complex algorithms and test suites that covered more.

> Janzen and Saiedian (2006) showed that the code produced using TDD made
> better use of object-oriented concepts, and responsibilities were better distributed into different classes. In contrast, other teams produced more procedural code.

> George and Williams (2003) showed that although TDD can initially reduce the
> productivity of inexperienced developers, 92% of the developers in a qualitative
> analysis thought that TDD helped improve code quality.

> Dogša and Baticˇ (2011) also found an improvement in class design when using
> TDD. According to the authors, the improvement resulted from the simplicity
> TDD adds to the process.

> Erdogmus et al. (2005) used an experiment with 24 undergraduate students to
> show that TDD increased their productivity but did not change the quality of
> the produced code.

> Nagappan and colleagues (2008) performed three case studies at Microsoft and
> showed that the pre-release defect density of projects that were TDD’d decreased 40 to 90% in comparison to projects that did not do TDD.

> (Aniche, 2022, Cap. 8)

> O TDD é uma das práticas centrais dos métodos ágeis, como o XP. Seu uso de testes automatizados se concentra mais na especificação do comportamento do software ainda não escrito do que em testes de regressão.  
> _(Tradução livre de Meszaros, 2007, p. 33)_

> A eficácia do TDD vem da forma como ele nos permite separar o pensamento sobre o software em duas fases: o que ele deve fazer, e como ele deve fazer.  
> _(Tradução livre de Meszaros, 2007, p. 33)_

> Quando implementamos a funcionalidade de forma incremental, podemos ver cada teste passar, um por um, à medida que escrevemos mais código. É aqui que reside o verdadeiro valor dos testes automatizados: na sua capacidade de fixar o comportamento esperado, garantindo que mudanças posteriores não o modifiquem acidentalmente.  
> _(Tradução livre de Meszaros, 2007, p. 33)_

> O TDD permite a criação de especificações executáveis, que não apenas guiam o design como também servem de documentação viva e confiável do sistema.  
> _(Tradução livre de Meszaros, 2007, p. 33)_

#### Por que as outras alternativas estão erradas

- **b. As suítes são equivalentes.**

  > O livro indica explicitamente que os testes em TDD têm papel mais amplo e profundo, tanto em design quanto em validação — não sendo "equivalentes", mas sim mais eficazes em vários aspectos.  
  > _(Tradução livre de Meszaros, 2007, p. 33)_

- **c. São inferiores apenas em projetos pequenos.**

- **d. TDD foca em desenvolvimento e não gera testes eficazes.**

  > TDD produz testes eficazes, que funcionam como especificações automatizadas e garantem confiabilidade contínua do sistema.  
  > _(Tradução livre de Meszaros, 2007, p. 33)_

**Referência:**  
Meszaros, G. (2007). _xUnit Test Patterns: Refactoring Test Code_. Addison-Wesley.
Aniche, Maurício. Effective Software Testing: A Developer's Guide. Manning, 26 de abril de 2022. ISBN‑10: 1633439933; ISBN‑13: 978‑1633439931.

---
