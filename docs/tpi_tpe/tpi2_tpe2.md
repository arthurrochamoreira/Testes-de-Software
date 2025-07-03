# Questionário - TPI/TPE-2

## Questão 1

**Enunciado:**  
O teste de caixa preta é caracterizado por:

**Alternativas:**  
a) Utilizar as especificações dos requisitos como base para criação dos testes.  
b) Focar na estrutura interna do código para definir os testes.  
c) Analisar o fluxo de controle do programa como critério para os casos de teste.  
d) Utilizar técnicas heurísticas para derivar casos de teste.

**Resposta correta:** a

> O teste de caixa-preta é baseado nas especificações do programa. O objetivo é encontrar situações nas quais o programa não se comporta de acordo com suas especificações. Neste método, os dados de teste são derivados exclusivamente das especificações (ou seja, sem utilizar qualquer conhecimento da estrutura interna do programa).

“One important testing strategy is black-box testing (also known as data-driven or input/output-driven testing). To use this method, view the program as a black box. Your goal is to be completely unconcerned about the internal behavior and structure of the program. Instead, concentrate on finding circumstances in which the program does not behave according to its specifications. In this approach, test data are derived solely from the specifications (i.e., without taking advantage of knowledge of the internal structure of the program).”

(_The Art of Software Testing_, 3rd Edition, p. 9)

---

## Questão 2

**Enunciado:**  
Qual prática é utilizada para identificar as condições de entrada no particionamento de equivalência?

**Alternativas:**  
a) Definir entradas com base na cobertura de código.  
b) Escolher dados aleatórios para maximizar o número de testes.  
c) Analisar cada sentença da especificação de requisitos.  
d) Reutilizar dados de testes de unidade.

**Resposta correta:** c

> As classes de equivalência são identificadas a partir de cada condição de entrada (normalmente uma sentença ou frase na especificação) e particionadas em dois ou mais grupos.

"Identifying the Equivalence Classes The equivalence classes are identified by taking each input condition (usually a sentence or phrase in the specification) and partitioning it into two or more groups."

(_The Art of Software Testing_, 3rd Edition, p. 51)

---

## Questão 3

**Enunciado:**  
O que define uma classe de equivalência?

**Alternativas:**  
a) Um conjunto de entradas que o sistema trata de forma similar.  
b) Um grupo de testes que cobrem todos os caminhos do programa.  
c) Um subconjunto de entradas com maior chance de gerar falhas.  
d) Um grupo de saídas esperadas com o mesmo valor.

**Resposta correta:** a

> O domínio de entrada de um programa deve ser particionado em um número finito de classes de equivalência, de forma que se possa assumir razoavelmente que testar um valor representativo de cada classe é equivalente a testar qualquer outro valor desta classe. Ou seja, se um caso de teste dentro de uma classe detecta um erro, espera-se que todos os outros casos daquela classe também detectem o mesmo erro.

"you should try to partition the input domain of a program into a finite number of equivalence classes such that you can reasonably assume (but, of course, not be absolutely sure) that a test of a representative value of each class is equivalent to a test of any other value. That is, if one test case in an equivalence class detects an error, all other test cases in the equivalence class would be expected to find the same error."

(_The Art of Software Testing_, 3rd Edition, p. 50)

---

## Questão 4

**Enunciado:**  
Se uma entrada é definida por um intervalo contínuo, como se deve proceder para identificar as classes de equivalência?

**Alternativas:**  
a) Criar três classes divididas pelos valores do intervalo.  
b) Criar uma classe válida e uma inválida.  
c) Criar uma classe válida com os valores dentro do intervalo e inválidas com os valores fora dele.  
d) Criar classes delimitadas por valores equidistantes.

**Resposta correta:** c

> Se uma condição de entrada especifica um intervalo de valores, deve-se identificar uma classe de equivalência válida com os valores dentro do intervalo e duas classes de equivalência inválidas com valores fora do intervalo.

"If an input condition specifies a range of values (e.g., 'the item count can be from 1 to 999'), identify one valid equivalence class (1 < item count < 999) and two invalid equivalence classes (item count < 1 and item count > 999)."

(_The Art of Software Testing_, 3rd Edition, p. 51)

---

## Questão 5

**Enunciado:**  
Para um campo que aceita os valores “Ônibus”, “Caminhão” e “Taxi”, como devem ser definidas as classes de equivalência?

**Alternativas:**  
a) Uma única classe válida com todos os valores possíveis.  
b) Uma classe válida e uma inválida.  
c) Uma classe inválida e duas inválidas.  
d) Uma classe válida para cada valor e uma classe inválida para qualquer outro.

**Resposta correta:** d

> Se uma condição de entrada especifica um conjunto de valores de entrada, e há motivo para acreditar que o programa trata cada valor de forma diferente, deve-se identificar uma classe de equivalência válida para cada valor permitido e uma classe de equivalência inválida para qualquer outro valor.

"If an input condition specifies a set of input values, and there is reason to believe that the program handles each differently (e.g., 'type of vehicle must be BUS, TRUCK, TAXICAB, PASSENGER, or MOTORCYCLE'), identify a valid equivalence class for each and one invalid equivalence class (e.g., 'TRAILER')."

(_The Art of Software Testing_, 3rd Edition, p. 52)

---

## Questão 6

**Enunciado:**  
Em uma especificação que diz “o primeiro caractere deve ser uma letra”, quais classes de equivalência devem ser consideradas?

**Alternativas:**  
a) Duas válidas (vogais e consoantes) e uma inválida (não letra).  
b) Apenas uma classe válida (letra).  
c) Uma classe válida (letra) e uma inválida (não letra).  
d) Uma classe inválida para cada caractere não alfabético.

**Resposta correta:** c

> Se uma condição de entrada especifica uma situação de “deve ser”, como “o primeiro caractere deve ser uma letra”, deve-se identificar uma classe de equivalência válida (é uma letra) e uma inválida (não é uma letra).

"If an input condition specifies a 'must-be' situation, such as 'first character of the identifier must be a letter,' identify one valid equivalence class (it is a letter) and one invalid equivalence class (it is not a letter)."

(_The Art of Software Testing_, 3rd Edition, p. 52)

---

## Questão 7

**Enunciado:**  
Por que se considera eficiente testar apenas um valor por classe de equivalência?

**Alternativas:**  
a) Espera-se que todos os valores da classe produzam resultados semelhantes.  
b) Isso garante 100% de cobertura de código.  
c) É mais rápido e evita a validação dos dados de saída.  
d) O sistema geralmente ignora entradas repetidas.

**Resposta correta:** a

> Você deve particionar o domínio de entrada do programa em um número finito de classes de equivalência de modo que se possa assumir razoavelmente que testar um valor representativo de cada classe é equivalente a testar qualquer outro valor dessa classe. Ou seja, se um caso de teste dentro de uma classe detecta um erro, espera-se que todos os outros casos da mesma classe também detectem o mesmo erro.

"you should try to partition the input domain of a program into a finite number of equivalence classes such that you can reasonably assume (but, of course, not be absolutely sure) that a test of a representative value of each class is equivalent to a test of any other value. That is, if one test case in an equivalence class detects an error, all other test cases in the equivalence class would be expected to find the same error."

(_The Art of Software Testing_, 3rd Edition, p. 50)

---

## Questão 8

**Enunciado:**  
Por que a análise de valor limite é eficaz na detecção de erros?

**Alternativas:**  
a) Ela garante 100% de cobertura de código.  
b) Os limites representam a média estatística dos dados de entrada.  
c) Muitos erros ocorrem nas extremidades de intervalos válidos.  
d) Os limites não impactam o comportamento do programa.

**Resposta correta:** c

> A experiência mostra que casos de teste que exploram condições de fronteira têm um retorno maior do que casos de teste que não exploram. Condições de fronteira são aquelas situações diretamente nos limites, acima e abaixo das bordas das classes de equivalência de entrada e saída.

"Experience shows that test cases that explore boundary conditions have a higher payoff than test cases that do not. Boundary conditions are those situations directly on, above, and beneath the edges of input equivalence classes and output equivalence classes."

(_The Art of Software Testing_, 3rd Edition, p. 55)

---

## Questão 9

**Enunciado:**  
Por que é importante considerar os limites das saídas esperadas na análise de valor limite?

**Alternativas:**  
a) Porque os testes de saída são mais fáceis de validar manualmente.  
b) Porque as saídas são mais suscetíveis a falhas.  
c) Porque o sistema pode falhar ao gerar saídas próximas aos seus limites esperados.  
d) Porque os limites de saída não são influenciados pelas entradas.

**Resposta correta:** c

> É importante examinar os limites do espaço de resultados porque nem sempre os limites dos domínios de entrada representam as mesmas condições que os limites das faixas de saída. Mesmo que nem sempre seja possível gerar um resultado fora do intervalo de saída, ainda assim vale a pena considerar essa possibilidade.

"Note that it is important to examine the boundaries of the result space because it is not always the case that the boundaries of the input domains represent the same set of circumstances as the boundaries of the output ranges... Also, it is not always possible to generate a result outside of the output range; nonetheless, it is worth considering the possibility."

(_The Art of Software Testing_, 3rd Edition, p. 56)

---

## Questão 10

**Enunciado:**  
Uma boa prática ao aplicar análise de valor limite é:

**Alternativas:**  
a) Utilizar o valor central do intervalo, além dos valores nos limites.  
b) Testar somente os valores inválidos.  
c) Testar os valores imediatamente abaixo, nos próprios limites e imediatamente acima dos limites válidos.  
d) Executar testes aleatórios fora do intervalo.

**Resposta correta:** c

> Se uma condição de entrada especifica um intervalo de valores, escreva casos de teste para os valores nos extremos do intervalo, além de casos de teste de entradas inválidas imediatamente fora desses extremos. Por exemplo, se o domínio válido de um valor de entrada for –1.0 a 1.0, escreva casos de teste para –1.0, 1.0, –1.001 e 1.001.

"If an input condition specifies a range of values, write test cases for the ends of the range, and invalid-input test cases for situations just beyond the ends. For instance, if the valid domain of an input value is –1.0 to 1.0, write test cases for the situations –1.0, 1.0, –1.001, and 1.001."

(_The Art of Software Testing_, 3rd Edition, p. 56)

---

## Questão 11

**Enunciado:**  
A técnica de grafo de causa-efeito é mais apropriada quando:

**Alternativas:**  
a) Os testes precisam ser derivados diretamente do código-fonte.  
b) Todas as entradas são independentes entre si.  
c) Há apenas uma entrada e uma saída no sistema.  
d) Existem múltiplas condições de entrada e regras de combinação complexas.

**Resposta correta:** d

> O grafo de causa-efeito auxilia na seleção, de forma sistemática, de um conjunto de casos de teste de alto rendimento quando existem múltiplas condições de entrada e combinações complexas. Além disso, ajuda a identificar ambiguidades e incompletudes na especificação.

"Cause-effect graphing aids in selecting, in a systematic way, a high-yield set of test cases. It has a beneficial side effect in pointing out incompleteness and ambiguities in the specification."

(_The Art of Software Testing_, 3rd Edition, p. 61)

---

## Questão 12

**Enunciado:**  
Qual das seguintes atividades representa um exemplo de uso da técnica de error-guessing?

**Alternativas:**  
a) Testar com campos vazios mesmo quando não explicitamente proibido nas regras.  
b) Usar apenas valores de entrada listados como válidos na documentação.  
c) Executar todos os testes com base em classes de equivalência.  
d) Escolher entradas com base em álgebra relacional.

**Resposta correta:** a

> A técnica de error-guessing consiste em, a partir de intuição e experiência, elaborar uma lista de possíveis situações propensas a erro, e criar casos de teste para expô-los — como, por exemplo, testar entradas em branco, entradas nulas ou outros casos não previstos explicitamente na especificação.

"The basic idea is to enumerate a list of possible errors or error-prone situations and then write test cases based on the list. For instance, the presence of the value 0 in a program’s input is an error-prone situation. Therefore, you might write test cases for which particular input values have a 0 value and for which particular output values are forced to 0. Also, where a variable number of inputs or outputs can be present (e.g., the number of entries in a list to be searched), the cases of 'none' and 'one' (e.g., empty list, list containing just one entry) are error-prone situations."

(_The Art of Software Testing_, 3rd Edition, p. 81)

---

## Questão 13

**Enunciado:**  
Quais técnicas são comumente utilizadas para derivar casos de teste no nível funcional (sistema)?

**Alternativas:**  
a) Caminho lógico, MC/DC e tabelas de decisão.  
b) Particionamento de equivalência, análise de valor limite e grafo de causa-efeito.  
c) Análise léxica e interpretação sintática.  
d) Análise de mutação e análise de fluxo de dados.

**Resposta correta:** b

> O teste funcional normalmente emprega técnicas como particionamento de equivalência, análise de valor limite, grafo de causa-efeito e error-guessing, pois essas técnicas derivam casos de teste a partir das especificações externas do sistema.

"The equivalence partitioning, boundary value analysis, cause-effect graphing, and error-guessing methods described in Chapter 4 are especially pertinent to function testing."

(_The Art of Software Testing_, 3rd Edition, p. 119)

---

## Questão 14

**Enunciado:**  
Os testes não-funcionais no nível de sistema geralmente focam em:

**Alternativas:**  
a) Características como desempenho, usabilidade, confiabilidade e segurança.  
b) Correção de bugs encontrados na fase de desenvolvimento.  
c) Execução de testes de unidade em módulos isolados.  
d) Validação de requisitos funcionais do usuário.

**Resposta correta:** a

> O teste de sistema inclui categorias de teste para verificar desempenho, usabilidade, confiabilidade, segurança e outras qualidades não-funcionais, conforme objetivos estabelecidos. Esses testes procuram demonstrar que o programa não satisfaz seus objetivos em características como tempo de resposta, throughput, capacidade de recuperação, serviço, manutenção, entre outras.

"System testing includes categories such as performance, usability, reliability, security, recovery, serviceability/maintenance, documentation testing, and others. These categories verify that the system meets its objectives in non-functional qualities."

(_The Art of Software Testing_, 3rd Edition, p. 127)

---

## Questão 15

**Enunciado:**  
Um cenário comum de teste de desempenho inclui:

**Alternativas:**  
a) Executar análises com altos volumes de dados de entrada.  
b) Gerar entradas aleatórias para verificar falhas de formatação.  
c) Simular múltiplos usuários acessando o sistema simultaneamente.  
d) Verificar a ordenação correta de registros em um relatório.

**Resposta correta:** c

> Uma abordagem comum ao avaliar o desempenho é o teste de estresse. Ele envolve submeter a aplicação a múltiplos logins e simular transações até o ponto de falha para determinar se o aplicativo atende a seus objetivos de desempenho. Isso normalmente significa simular múltiplos usuários acessando o sistema ao mesmo tempo.

"A common approach you may use when evaluating performance is stress testing. Often, performance degrades to the point of being unusable when the system becomes overloaded with requests... stress testing involves blasting the application with multiple logins, and simulating transactions to the point of failure so you can determine whether your application meets its performance objectives."

(_The Art of Software Testing_, 3rd Edition, p. 206)

---

## Questão 16

**Enunciado:**  
Um exemplo de teste de volume é:

**Alternativas:**  
a) Aumentar a quantidade de usuários ativos simultaneamente.  
b) Avaliar a taxa de throughput.  
c) Importar um milhão de registros em um sistema de cadastro.  
d) Validar se campos obrigatórios estão sendo preenchidos corretamente.

**Resposta correta:** c

> O teste de volume consiste em submeter o programa a volumes anormalmente grandes de dados. Por exemplo, um compilador poderia receber um programa-fonte absurdamente grande, ou um sistema de cadastro poderia importar milhões de registros. O objetivo é demonstrar que o programa não consegue lidar com o volume de dados especificado em seus objetivos.

"Volume Testing  
A second type of system testing is to subject the program to heavy volumes of data. For instance, a compiler could be fed an absurdly large source program to compile... An electronic circuit simulator could be given a circuit containing millions of components... In other words, the purpose of volume testing is to show that the program cannot handle the volume of data specified in its objectives."

(_The Art of Software Testing_, 3rd Edition, p. 123)

---

## Questão 17

**Enunciado:**  
O teste de confiabilidade busca:

**Alternativas:**  
a) Verificar se os dados estão criptografados em repouso.  
b) Garantir que os módulos estejam integrados corretamente.  
c) Medir a capacidade do sistema de funcionar corretamente durante um período prolongado.  
d) Testar a responsividade da interface com o usuário.

**Resposta correta:** c

> O objetivo do teste de confiabilidade está ligado a avaliar se o sistema mantém seu funcionamento adequado e sem falhas ao longo de um período de operação, visando garantir níveis aceitáveis de disponibilidade e tempo médio entre falhas (MTBF), por exemplo.

"Of course, the goal of all types of testing is the improvement of the program reliability, but if the program’s objectives contain specific statements about reliability, specific reliability tests might be devised."

(_The Art of Software Testing_, 3rd Edition, p. 127)

---

## Questão 18

**Enunciado:**  
Qual é um critério razoável para encerrar os testes?

**Alternativas:**  
a) Quando todos os casos de teste falharem pelo menos uma vez.  
b) Quando a curva de tendência da taxa de defeitos por unidade estabilizar.  
c) Quando uma quantidade predefinida de falhas for identificada.  
d) Quando os usuários derem o aceite do sistema.

**Resposta correta:** c

> O melhor critério de encerramento provavelmente é uma combinação de critérios. Uma abordagem recomendada é observar a curva de tendência do número de erros encontrados ao longo do tempo durante a fase de testes. Se a eficiência na detecção de erros cair de forma significativa (ou seja, a curva se estabilizar), isso pode indicar que vale a pena encerrar os testes e partir para a próxima fase.

"The third type of completion criterion is an easy one on the surface, but it involves a lot of judgment and intuition. It requires you to plot the number of errors found per unit time during the test phase. By examining the shape of the curve, you can often determine whether to continue the test phase or end it and begin the next test phase."

(_The Art of Software Testing_, 3rd Edition, p. 139)

---
