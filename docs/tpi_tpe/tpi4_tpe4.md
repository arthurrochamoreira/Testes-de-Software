# Questionário - TPI/TPE-4

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

---

## Questão 3

**Enunciado:**
Como os stubs diferem dos objetos fake?

**Alternativas:**
a) Stubs têm implementações reais, mas simplificadas
b) Stubs são usados apenas para observar o comportamento de uma dependência real
c) Stubs fornecem respostas codificadas e não têm uma implementação funcional
d) Stubs permitem fazer asserções sobre as interações após o teste

**Resposta correta:** c

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

---

## Questão 5

**Enunciado:**
Uma classe que simula uma base de dados usando um array list em vez de uma base de dados real pode ser classificada como que tipo de dublê de teste?

**Alternativas:**
a) Fake object
b) Dummy object
c) Mock
d) Stub

**Resposta correta:** a

---

## Questão 6

**Enunciado:**
O que pode ser necessário para injetar dublês de teste nas classes sendo testadas?

**Alternativas:**
a) Pode ser necessário criar um tipo especial de dublê de teste que seja capaz de interceptar as chamadas da classe sendo testada a partir da classe de dependência
b) Pode ser necessário refatorar o construtor da classe de teste para instanciar a classe que será mockada no código da classe sendo testada
c) Pode ser necessário utilizar um framework de mocking para que o dublê de teste seja injetado na classe de dependência
d) Pode ser necessário alterar o código da classe sendo testada para passar a classe de dependência que será mockada em seu construtor

**Resposta correta:** d

---

## Questão 7

**Enunciado:**
Qual é a principal vantagem de configurar dublês para lançar exceções em testes de software?

**Alternativas:**
a) Permite testar como os sistemas se comportariam em cenários inesperados, simulando a indisponibilidade de sistemas externos
b) Garante que todos os métodos da aplicação sejam chamados pelo menos uma vez durante o teste, cobrindo diversos cenários
c) Facilita a implementação de respostas codificadas para chamadas realizadas durante o teste, simplificando o processo
d) Substitui a necessidade de testes de integração com sistemas externos reais, economizando tempo e recursos

**Resposta correta:** a

---

## Questão 8

**Enunciado:**
Qual é uma das principais desvantagens de usar dublês de teste?

**Alternativas:**
a) O acoplamento entre os dublês e o código de produção, que pode causar a falha dos testes quando a interação entre as classes muda
b) A dificuldade em configurar e manter os dublês durante o ciclo de vida do projeto, resultando em testes menos eficientes
c) A incapacidade de dublês em simular comportamentos complexos de sistemas externos, limitando a eficácia dos testes
d) A necessidade de modificar o código de produção para acomodar o uso de dublês, introduzindo complexidade desnecessária

**Resposta correta:** a

---

## Questão 9

**Enunciado:**
Qual é o ciclo repetido no processo de TDD (Test-Driven Development)?

**Alternativas:**
a) Escrever um teste que passe, implementar a funcionalidade, refatorar o código de produção e de teste
b) Escrever um teste que falhe, implementar a funcionalidade para que o teste passe, refatorar o código de produção e de teste
c) Implementar a funcionalidade, escrever um teste que passe, refatorar o código de produção e de teste
d) Refatorar o código de produção, escrever um teste que falhe, implementar a funcionalidade para que o teste passe

**Resposta correta:** b

---

## Questão 10

**Enunciado:**
Por que o TDD facilita a identificação de novos problemas à medida que surgem?

**Alternativas:**
a) Porque os desenvolvedores escrevem grandes pedaços de código de produção antes de obter qualquer feedback
b) Porque os desenvolvedores podem focar especificamente no código, concentrando-se no produto final
c) Porque os desenvolvedores escrevem todos os testes de uma vez e depois implementam a funcionalidade
d) Porque os desenvolvedores são forçados a dar um passo de cada vez, escrevendo um teste, fazendo-o passar e refletindo, facilitando a identificação de problemas depois de pequenas alterações

**Resposta correta:** d

---

## Questão 11

**Enunciado:**
Como o TDD afeta o design das classes ou componentes?

**Alternativas:**
a) O código de teste raramente influencia o design das classes ou componentes
b) O código de teste é frequentemente o primeiro cliente da classe ou componente, moldando seu design se ele estiver difícil de testar
c) O TDD encoraja designs mais complexos, pois cada teste cobre múltiplos casos
d) O TDD desencoraja a refatoração, pois prioriza apenas passar nos testes

**Resposta correta:** b

---

## Questão 12

**Enunciado:**
Quando o uso do TDD pode ser mais vantajoso?

**Alternativas:**
a) Em problemas simples, onde a abordagem TDD pode ser aplicada rapidamente
b) Em qualquer tipo de problema, independentemente da complexidade
c) Em projetos de manutenção, onde o código já está bem estabelecido
d) Em problemas mais complicados, onde o TDD ajuda a estruturar melhor o desenvolvimento e detectar problemas de design mais cedo

**Resposta correta:** d

---

## Questão 13

**Enunciado:**
Em quais situações o uso do TDD não é recomendado?

**Alternativas:**
a) Quando o problema é bem conhecido e não há necessidade de experimentação
b) Quando se está trabalhando em projetos ágeis, onde a velocidade de entrega é crucial
c) Quando se está desenvolvendo software para sistemas embarcados, devido às suas limitações naturais
d) Quando a pirâmide de testes não estiver sendo aplicada como estratégia de testes

**Resposta correta:** a

---

## Questão 14

**Enunciado:**
Qual é a eficácia dos testes gerados durante as sessões de TDD em comparação com testes sistemáticos?

**Alternativas:**
a) As suítes de teste geradas durante as sessões de TDD são superiores às suítes de teste sistemáticos em vários aspectos
b) As suítes de teste geradas durante as sessões de TDD são equivalentes às suítes de teste sistemáticos
c) As suítes de teste geradas durante as sessões de TDD são inferiores às suítes de teste sistemáticos apenas em projetos pequenos
d) As suítes de teste geradas durante as sessões de TDD não são tão boas quanto as suítes de teste sistemáticos, pois TDD foca no desenvolvimento e não no teste

**Resposta correta:** d

---
