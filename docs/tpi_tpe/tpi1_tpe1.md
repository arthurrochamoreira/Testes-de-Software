# Questionário - TPI/TPE-1

## Questão 1

**Enunciado:**  
O que acontece com equipes que não adotam uma prática rigorosa de testes?

**Alternativas:**  
a) Elas entram em um ciclo repetitivo de criação e correção de bugs.  
b) Elas conseguem lançar software mais rapidamente, com menor esforço.  
c) Elas precisam de mais ferramentas automatizadas para compensar a ausência de testes.  
d) Elas produzem software menos complexo, o que facilita a manutenção.

**Resposta correta:** a

> Equipes que produzem muitos bugs tendem a desperdiçar tempo em um ciclo eterno no qual desenvolvedores criam bugs, clientes (ou QAs dedicados) encontram os bugs, desenvolvedores corrigem os bugs, clientes encontram um novo conjunto de bugs, e assim por diante.

Teams that produce many bugs tend to waste time in an eternal loop where developers write bugs, customers (or dedicated QAs) find the bugs, developers fix the bugs, customers find a different set of bugs, and so on.

— Aniche, _Effective Software Testing_, Capítulo 1, página 15 do PDF

---

## Questão 2

**Enunciado:**  
O que significa testar de forma eficaz, segundo o texto?

**Alternativas:**  
a) Criar o maior número possível de testes, de forma a cobrir o código de forma abrangente e redundante.  
b) Escrever os testes certos, focando em encontrar mais bugs com o menor esforço possível.  
c) Combinar testes manuais com testes automatizados para ganhar eficiência.  
d) Focar no uso de ferramentas automatizadas para acelerar o processo de testes.

**Resposta correta:** b

> Ser eficaz significa focar em escrever os testes certos. Testar software é sempre uma questão de compensações. Os testadores querem maximizar o número de bugs encontrados minimizando o esforço necessário para encontrá-los.

“Being effective means we focus on writing the right tests. Software testing is all about trade-offs. Testers want to maximize the number of bugs they find while minimizing the effort required to find the bugs.”

— Aniche, _Effective Software Testing_, Capítulo 1, página 16 do PDF

---

## Questão 3

**Enunciado:**  
O que é necessário para que diferentes desenvolvedores cheguem à mesma suíte de testes para um código?

**Alternativas:**  
a) Que todos usem a mesma linguagem de programação.  
b) Que o processo de teste seja sistemático e padronizado.  
c) Que compartilhem a mesma ferramenta de automação.  
d) Que tenham o mesmo nível de experiência profissional.

**Resposta correta:** b

> Ser sistemático significa que, para um determinado trecho de código, qualquer desenvolvedor deveria chegar à mesma suíte de testes. Os testes muitas vezes acontecem de forma ad hoc. Devemos ser capazes de sistematizar nossos processos para reduzir a dependência do desenvolvedor que está realizando o trabalho.

“Being systematic means that for a given piece of code, any developer should come up with the same test suite. Testing often happens in an ad hoc manner. [...] We should be able to systematize our processes to reduce the dependency on the developer who is doing the job.”

— Aniche, _Effective Software Testing_, Capítulo 1, página 16 do PDF

---

## Questão 4

**Enunciado:**  
Qual é um dos principais argumentos a favor do investimento em testes rigorosos?

**Alternativas:**  
a) Reduzir o tempo de desenvolvimento inicial.  
b) Garantir que o sistema será 100% livre de erros.  
c) Evitar a necessidade de QA.  
d) O custo de bugs em produção pode ser maior que o custo de prevenção.

**Resposta correta:** d

> O custo dos bugs que acontecem em produção muitas vezes supera o custo de preveni-los (como mostrado por Boehm e Papaccio, 1988).

“The cost of bugs that happen in production often outweighs the cost of prevention (as shown by Boehm and Papaccio, 1988).”

— Aniche, _Effective Software Testing_, Capítulo 1, página 15 do PDF

---

## Questão 5

**Enunciado:**  
Qual é a principal recomendação ao considerar o paradoxo do pesticida?

**Alternativas:**  
a) Priorizar testes automatizados para validar todas as entradas.  
b) Focar apenas em testes de integração, após obter cobertura completa de testes unitários.  
c) Combinar diferentes estratégias de teste para encontrar uma gama mais ampla de bugs.  
d) Evitar mudanças frequentes nas técnicas de teste.

**Resposta correta:** c

> Testadores devem usar diferentes estratégias de teste para minimizar o número de bugs deixados no software.

“Testers must use different testing strategies to minimize the number of bugs left in the software.”

— Aniche, _Effective Software Testing_, Capítulo 1, página 17 do PDF

---

## Questão 6

**Enunciado:**  
O que a observação empírica da comunidade de testes de software mostra sobre a distribuição de bugs?

**Alternativas:**  
a) Os bugs ocorrem de forma homogênea em todos os componentes do sistema.  
b) Os bugs ocorrem com maior frequência em interfaces gráficas.  
c) A distribuição de bugs depende apenas da linguagem de programação utilizada.  
d) Alguns componentes são mais propensos a conter bugs do que outros.

**Resposta correta:** d

> Empiricamente, nossa comunidade observou que alguns componentes apresentam mais bugs do que outros.

“Empirically, our community has observed that some components present more bugs than others.”

— Aniche, _Effective Software Testing_, Capítulo 1, página 17 do PDF

---

## Questão 7

**Enunciado:**  
Por que os testes unitários são considerados fáceis de controlar?

**Alternativas:**  
a) Porque os valores de entrada e saída são fáceis de adaptar e modificar.  
b) Porque exigem muitas ferramentas externas para executar.  
c) Porque precisam ser reescritos a cada alteração de código.  
d) Porque cobrem apenas requisitos de negócio complexos.

**Resposta correta:** a

> Testes unitários são fáceis de controlar. Um teste unitário testa o software fornecendo determinados parâmetros para um método e depois comparando o valor de retorno com o resultado esperado. Esses valores de entrada e o resultado esperado são fáceis de adaptar ou modificar no teste.

“Unit tests are easy to control. A unit test tests the software by giving certain parameters to a method and then comparing the return value of this method to the expected result. These input values and the expected result value are easy to adapt or modify in the test.”

— Aniche, _Effective Software Testing_, Capítulo 1, página 20 do PDF

---

## Questão 8

**Enunciado:**  
Qual é uma das limitações dos testes unitários?

**Alternativas:**  
a) Permitem identificar todos os defeitos presentes em sistemas multithread.  
b) Exigem a execução completa da aplicação.  
c) Não representam fielmente a execução real do sistema, pois testam unidades isoladas.  
d) Dependem fortemente da interação com bancos de dados reais.

**Resposta correta:** c

> Testes unitários não representam a realidade. Um sistema de software raramente é composto por uma única classe. O grande número de classes e a interação entre elas podem fazer o sistema se comportar de forma diferente na aplicação real do que nos testes unitários.

“Unit tests lack reality. A software system is rarely composed of a single class. The large number of classes in a system and their interaction can cause the system to behave differently in its real application than in the unit tests.”

— Aniche, _Effective Software Testing_, Capítulo 1, página 20 do PDF

---

## Questão 9

**Enunciado:**  
Qual é o foco principal dos testes de integração?

**Alternativas:**  
a) Integrar testes de unidade com testes de sistema.  
b) Verificar a comunicação correta entre componentes do sistema e componentes externos.  
c) Garantir que todos os requisitos do cliente foram implementados.  
d) Verificar se todos os componentes funcionam corretamente.

**Resposta correta:** b

> O teste de integração tem como objetivo testar múltiplos componentes de um sistema juntos, focando nas interações entre eles em vez de testar o sistema como um todo.

“Integration testing aims to test multiple components of a system together, focusing on the interactions between them instead of testing the system as a whole.”

— Aniche, _Effective Software Testing_, Capítulo 1, página 21 do PDF

---

## Questão 10

**Enunciado:**  
Qual dos itens abaixo é uma desvantagem típica dos testes de sistema?

**Alternativas:**  
a) Maior tempo de execução e maior complexidade na configuração dos ambientes de teste.  
b) Baixa chance de detectar falhas reais de produção.  
c) Dificuldade de automação devido à falta de ferramentas.  
d) Inabilidade de simular cenários reais de usuário.

**Resposta correta:** a

> Testes de sistema costumam ser lentos em comparação com testes unitários. Alguns componentes (como bancos de dados) podem exigir uma configuração complexa antes de serem usados em um cenário de teste.

“System tests are often slow compared to unit tests. [...] Some of the components (such as databases) may require a complex setup before they can be used in a testing scenario.”

— Aniche, _Effective Software Testing_, Capítulo 1, página 22 do PDF

---

## Questão 11

**Enunciado:**  
Por que alguns desenvolvedores preferem testes unitários em comparação a outros níveis de teste?

**Alternativas:**  
a) Porque são mais fáceis de escrever, mais rápidos e podem ser escritos junto com o código de produção.  
b) Porque testes unitários dispensam manutenção e são 100% confiáveis.  
c) Porque testes unitários substituem a necessidade de testes de integração e sistema.  
d) Porque são mais realistas que os outros níveis de testes.

**Resposta correta:** a

> Eu costumo preferir testes unitários. Eu valorizo as vantagens que os testes unitários me oferecem. Eles são fáceis de escrever, são rápidos, posso escrevê-los junto com o código de produção, e assim por diante.

“I tend to favor unit testing. I appreciate the advantages that unit tests give me. They are easy to write, they are fast, I can write them intertwined with production code, and so on.”

— Aniche, _Effective Software Testing_, Capítulo 1, página 24 do PDF

---

## Questão 12

**Enunciado:**  
Em qual situação é mais adequado utilizar testes de integração, segundo Aniche?

**Alternativas:**  
a) Quando há lógica de negócio complexa desacoplada de outros componentes.  
b) Quando o código está relacionado à interface com o usuário.  
c) Quando o componente interage com serviços externos, como bancos de dados ou APIs.  
d) Quando o tempo de execução do teste precisa ser o mais curto possível.

**Resposta correta:** c

> Eu uso testes de integração sempre que o componente testado interage com um componente externo (como um banco de dados ou serviço web).

“I use integration tests whenever the component under test interacts with an external component (such as a database or web service).”

— Aniche, _Effective Software Testing_, Capítulo 1, página 25 do PDF

---

## Questão 13

**Enunciado:**  
O que representa a diferença entre a pirâmide de testes e o troféu de testes?

**Alternativas:**  
a) O troféu de testes representa um maior uso de testes manuais.  
b) A pirâmide favorece mais testes unitários, enquanto o troféu favorece mais testes de integração.  
c) O troféu exclui os testes de sistema.  
d) A pirâmide inclui testes de desempenho, enquanto o troféu não.

**Resposta correta:** b

> Muitas pessoas discordam da ideia da pirâmide de testes e de favorecer testes unitários. Esses desenvolvedores argumentam a favor do troféu de testes: uma base mais fina com testes unitários, uma camada do meio maior com testes de integração, e uma camada superior mais fina com testes de sistema.

“Many people disagree about the idea of a testing pyramid and whether we should favor unit testing. These developers argue for the testing trophy: a thinner bottom level with unit tests, a bigger middle slice with integration tests, and a thinner top with system tests.”

— Aniche, _Effective Software Testing_, Capítulo 1, página 26 do PDF

---

## Questão 14

**Enunciado:**  
De acordo com o Myers, qual é a atitude ideal de um testador de software?

**Alternativas:**  
a) Desconfiar da capacidade da equipe em realizar testes sistematizados.  
b) Começar assumindo que o programa contém erros.  
c) Desenvolver novas funcionalidades para melhorar o sistema.  
d) Automatizar todos os testes antes de executá-los.

**Resposta correta:** b

> Não teste um programa para mostrar que ele funciona; ao contrário, comece assumindo que o programa contém erros (uma suposição válida para quase qualquer programa) e depois teste o programa para encontrar o máximo possível de erros.

“don’t test a program to show that it works; rather, start with the assumption that the program contains errors (a valid assumption for almost any program) and then test the program to find as many of the errors as possible.”

— Myers, _The Art of Software Testing_, 3ª edição, Capítulo 2, página 6 do PDF

---

## Questão 15

**Enunciado:**  
Por que Myers compara o teste de software com exames médicos?

**Alternativas:**  
a) Para destacar que ambos tiram o sangue das pessoas.  
b) Porque ambos evitam que o paciente/software piore com o tempo.  
c) Porque médicos também usam softwares para seus diagnósticos.  
d) Porque um teste só é bem-sucedido se encontrar o problema.

**Resposta correta:** d

> Considere a analogia de uma pessoa visitando um médico por causa de uma sensação geral de mal-estar. Se o médico faz alguns exames laboratoriais que não localizam o problema, não chamamos esses exames de “bem-sucedidos”; eles foram exames malsucedidos [...] Porém, se um exame determina que o paciente tem uma úlcera, ele é bem-sucedido pois orienta o tratamento adequado.

“Consider the analogy of a person visiting a doctor because of an overall feeling of malaise. If the doctor runs some laboratory tests that do not locate the problem, we do not call the laboratory tests ‘successful’; they were unsuccessful tests [...] However, if a laboratory test determines that the patient has a peptic ulcer, the test is successful because the doctor can now begin the appropriate treatment.”

— Myers, _The Art of Software Testing_, 3ª edição, Capítulo 2, página 7 do PDF

---

## Questão 16

**Enunciado:**  
O que Myers sugere como solução para as limitações dos testes caixa-preta exaustivos?

**Alternativas:**  
a) Executar apenas os testes definidos pelo cliente.  
b) Automatizar todos os testes para garantir cobertura total.  
c) Criar uma ferramenta que gere todos os casos automaticamente.  
d) Maximizar o número de erros encontrados com um número finito de casos de teste.

**Resposta correta:** d

> Assim, como o teste exaustivo está fora de questão, o objetivo deve ser maximizar o retorno do investimento em testes, maximizando o número de erros encontrados por um número finito de casos de teste.

“Thus, since exhaustive testing is out of the question, the objective should be to maximize the yield on the testing investment by maximizing the number of errors found by a finite number of test cases.”

— Myers, _The Art of Software Testing_, 3ª edição, Capítulo 2, página 10 do PDF

---

## Questão 17

**Enunciado:**  
Qual é o principal objetivo do teste de caixa-branca (white-box testing)?

**Alternativas:**  
a) Verificar se o programa atende aos requisitos funcionais descritos na especificação.  
b) Avaliar o desempenho do sistema em diferentes plataformas.  
c) Examinar a estrutura lógica interna do programa para definir dados de teste.  
d) Executar testes baseados exclusivamente na interface do usuário.

**Resposta correta:** c

> Outra estratégia de teste, o teste de caixa-branca (ou orientado pela lógica), permite que você examine a estrutura interna do programa. Essa estratégia deriva dados de teste a partir da análise da lógica do programa.

“Another testing strategy, white-box (or logic-driven) testing, permits you to examine the internal structure of the program. This strategy derives test data from an examination of the program’s logic.”

— Myers, _The Art of Software Testing_, 3ª edição, Capítulo 2, página 10 do PDF

---

## Questão 18

**Enunciado:**  
Qual é um elemento essencial de um caso de teste, segundo Myers?

**Alternativas:**  
a) A definição precisa da saída esperada.  
b) A descrição do código-fonte analisado.  
c) O nome do programador responsável.  
d) A linguagem de programação utilizada.

**Resposta correta:** a

> Uma parte essencial de um caso de teste é a definição da saída ou resultado esperado.

“A necessary part of a test case is a definition of the expected output or result.”

— Myers, _The Art of Software Testing_, 3ª edição, Capítulo 2, página 13 do PDF

---

**Referências:**

- Myers, Glenford J.; Sandler, Corey; Badgett, Tom. _The Art of Software Testing_. 3ª edição, Capítulo 2 — The Psychology and Economics of Software Testing. John Wiley & Sons, 2011.

- Aniche, Maurício. _Effective Software Testing: A Developer’s Guide_. Capítulo 1 — Why Should I Test Software? Manning Publications, 2022.
