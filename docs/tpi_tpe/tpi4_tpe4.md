# Questionário - TPI/TPE 4

---

## Questão 1

**Enunciado:**  
O que são objetos dummy?

**Alternativas:**  
a) Objetos que possuem implementações reais, mas simplificadas  
b) Objetos passados para a classe em teste, mas nunca utilizados  
c) Objetos que fornecem respostas codificadas para chamadas realizadas durante o teste  
d) Objetos que gravam todas as interações e permitem fazer asserções posteriormente

**Resposta correta:** b

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

**Referências:**

- Meszaros, G. (2007). _xUnit Test Patterns: Refactoring Test Code_. Addison-Wesley.
- Aniche, Maurício. Effective Software Testing: A Developer's Guide. Manning, 2022. ISBN‑10: 1633439933; ISBN‑13: 978‑1633439931.

**Por que as outras alternativas estão erradas**

- **a. Objetos que possuem implementações reais, mas simplificadas.**

  > Isso define um _Fake Object_, substituindo um componente real por uma implementação funcional mais leve.  
  > _(Meszaros, 2007, p. 551)_

- **c. Objetos que fornecem respostas codificadas para chamadas realizadas durante o teste.**

  > Isso define um _Test Stub_.  
  > _(Meszaros, 2007, p. 529)_

- **d. Objetos que gravam todas as interações e permitem fazer asserções posteriormente.**
  > Isso corresponde a um _Test Spy_.  
  > _(Meszaros, 2007, p. 538)_

---

## Questão 2

**Enunciado:**  
Qual a principal característica de objetos fake?

**Alternativas:**  
a) Eles têm implementações reais, mas geralmente fazem a tarefa de forma mais simples  
b) Eles fornecem respostas codificadas para chamadas realizadas durante o teste  
c) Eles gravam todas as interações e permitem fazer asserções posteriormente  
d) Eles envolvem o objeto real e observam seu comportamento

**Resposta correta:** a

> Objetos fake possuem implementações reais e funcionais da classe que estão simulando, mas realizam a tarefa de forma mais simples. Imagine uma classe de banco de dados fake que usa uma ArrayList em vez de um banco real.  
> (Aniche, 2022, Cap. 6)

> Um _Fake Object_ substitui um componente do SUT por uma implementação funcional, geralmente mais leve.  
> _(Meszaros, 2007, p. 551)_

**Por que as outras alternativas estão erradas**

- **b.** Isso descreve um _Test Stub_.

  > _(Meszaros, 2007, p. 529)_

- **c.** Isso descreve um _Test Spy_.

  > _(Meszaros, 2007, p. 538)_

- **d.** Isso descreve um _Mock Object_ com _proxying_.
  > _(Meszaros, 2007, p. 544)_

**Referências:**  
Meszaros, 2007; Aniche, 2022.

---

## Questão 3

**Enunciado:**  
Como os stubs diferem dos objetos fake?

**Alternativas:**  
a) Stubs têm implementações reais, mas simplificadas  
b) Stubs são usados apenas para observar o comportamento de uma dependência real  
c) Stubs fornecem respostas codificadas e não têm implementação funcional  
d) Stubs permitem fazer asserções sobre as interações após o teste

**Resposta correta:** c

> Stubs fornecem respostas codificadas e não têm comportamento funcional.  
> _(Aniche, 2022, Cap. 6; Meszaros, 2007, p. 529)_

**Por que as outras alternativas estão erradas**

- **a.** Descreve _Fake_
- **b.** Descreve _Spy_
- **d.** Descreve _Spy_

**Referências:**  
Meszaros, 2007; Aniche, 2022.

---

## Questão 4

**Enunciado:**  
Qual a vantagem principal dos objetos mocks em comparação com os stubs?

**Alternativas:**  
a) Mocks têm implementações reais  
b) Mocks são mais fáceis de controlar do que stubs  
c) Mocks podem gravar interações e permitir asserções sobre elas  
d) Mocks fornecem respostas codificadas para chamadas realizadas durante o teste

**Resposta correta:** c

> Mocks permitem verificar interações ao final do teste, além de retornarem valores esperados como stubs fazem.  
> _(Aniche, 2022, Cap. 6; Meszaros, 2007, p. 544)_

---

## Questão 5

**Enunciado:**  
Uma classe que simula uma base de dados usando uma lista pode ser classificada como:

**Alternativas:**  
a) Fake object  
b) Dummy object  
c) Mock  
d) Stub

**Resposta correta:** a

> Fake Object substitui a implementação real por algo funcional mais simples, como um banco de dados em memória.  
> _(Meszaros, 2007, p. 551; Aniche, 2022, Cap. 6)_

---

## Questão 6

**Enunciado:**  
O que pode ser necessário para injetar dublês de teste?

**Alternativas:**  
a) Criar um tipo especial de dublê que intercepte chamadas  
b) Refatorar o construtor da classe de teste  
c) Usar um framework de mocking  
d) Alterar o código da classe sendo testada para aceitar a dependência via construtor

**Resposta correta:** d

> O livro destaca a injeção via construtor como forma de passar dublês para o SUT.  
> _(Aniche, 2022, Cap. 6; Meszaros, 2007, p. 680–684)_

---

## Questão 7

**Enunciado:**  
Qual a principal vantagem de configurar dublês para lançar exceções?

**Alternativas:**  
a) Permite testar como os sistemas se comportariam em cenários inesperados  
b) Garante que todos os métodos sejam chamados ao menos uma vez  
c) Facilita respostas codificadas  
d) Substitui testes de integração

**Resposta correta:** a

> Isso facilita testar caminhos de exceção sem dependências reais.  
> _(Aniche, 2022, Cap. 6; Meszaros, 2007, p. 127)_

---

## Questão 8

**Enunciado:**  
Qual é uma das principais desvantagens de usar dublês?

**Alternativas:**  
a) O acoplamento com o código de produção, que pode levar a falhas ao mudar interações  
b) Dificuldade de configuração e manutenção  
c) Incapacidade de simular comportamentos complexos  
d) Modificação excessiva do código de produção

**Resposta correta:** a

> Dublês, especialmente mocks, podem gerar testes frágeis muito acoplados ao código real.  
> _(Aniche, 2022, Cap. 6; Meszaros, 2007, p. 570)_

---

## Questão 9

**Enunciado:**  
Qual é o ciclo repetido no processo de TDD?

**Alternativas:**  
a) Teste passa → implementação → refatoração  
b) Teste falha → implementação → refatoração  
c) Implementação → teste passa → refatoração  
d) Refatoração → teste falha → implementação

**Resposta correta:** b

> O ciclo do TDD clássico: falhar → passar → refatorar.  
> _(Aniche, 2022, Cap. 8; Beck, 2002, Cap. 2)_

---

## Questão 10

**Enunciado:**  
Por que o TDD facilita a identificação de problemas?

**Alternativas:**  
a) Porque desenvolvedores escrevem código antes dos testes  
b) Porque desenvolvedores focam no produto final  
c) Porque todos os testes são escritos antes da implementação  
d) Porque o ciclo incremental permite detectar problemas após pequenas alterações

**Resposta correta:** d

> Pequenas alterações facilitam identificar falhas rapidamente.  
> _(Aniche, 2022, Cap. 8; Beck, 2002, Cap. 2)_

---

## Questão 11

**Enunciado:**  
Como o TDD afeta o design?

**Alternativas:**  
a) Testes não influenciam o design  
b) O teste é o primeiro cliente da classe, influenciando seu design  
c) TDD encoraja designs mais complexos  
d) TDD desencoraja refatoração

**Resposta correta:** b

> O código de teste serve de primeiro cliente, influenciando a forma do design.  
> _(Aniche, 2022, Cap. 8; Beck, 2002, Cap. 17)_

---

## Questão 12

**Enunciado:**  
Quando o TDD é mais vantajoso?

**Alternativas:**  
a) Em problemas simples  
b) Em qualquer tipo de problema  
c) Em projetos de manutenção  
d) Em problemas mais complicados, onde ajuda a estruturar melhor o desenvolvimento

**Resposta correta:** d

> O TDD auxilia muito quando a solução não está clara e exige experimentação.  
> _(Aniche, 2022, Cap. 8; Beck, 2002)_

---

## Questão 13

**Enunciado:**  
Em quais situações o uso do TDD não é recomendado?

**Alternativas:**  
a) Quando o problema é bem conhecido e não há necessidade de experimentação  
b) Quando se está em projetos ágeis  
c) Em sistemas embarcados  
d) Quando a pirâmide de testes não é aplicada

**Resposta correta:** a

> Se o problema já está totalmente dominado, não há muito a aprender com TDD.  
> _(Aniche, 2022, Cap. 8; Beck, 2002)_

---

## Questão 14

**Enunciado:**  
Qual a eficácia dos testes em TDD?

**Alternativas:**  
a) As suítes de TDD são superiores às suítes sistemáticas em vários aspectos  
b) As suítes são equivalentes  
c) São inferiores apenas em projetos pequenos  
d) TDD foca em desenvolvimento e não gera testes eficazes

**Resposta correta:** a

> Pesquisas apontam maior qualidade de design, cobertura de testes e redução de defeitos.  
> _(Aniche, 2022, Cap. 8; Meszaros, 2007, p. 33)_

---
