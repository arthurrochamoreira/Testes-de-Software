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

---
