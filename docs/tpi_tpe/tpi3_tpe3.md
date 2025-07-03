# Questionário - TPI/TPE-3

---

## Questão 1

**Enunciado:**
Por que a cobertura de linha não é considerada suficiente como critério de teste?

**Alternativas:**
a) Porque ela exige muitos testes para atingir alta cobertura
b) Porque ela verifica apenas se todas as instruções foram executadas, sem garantir cobertura das decisões
c) Porque ela garante a cobertura de todas as condições compostas
d) Porque ela avalia somente entradas válidas

**Resposta correta:** b

---

## Questão 2

**Enunciado:**
A cobertura de decisão é satisfeita quando:

**Alternativas:**
a) Todas as variáveis foram testadas com valores extremos
b) Todos os operadores lógicos foram testados isoladamente
c) Cada resultado possível de cada decisão (true e false) ocorre em pelo menos um caso de teste
d) Todos os caminhos possíveis do programa foram testados

**Resposta correta:** c

---

## Questão 3

**Enunciado:**
A cobertura de condição nem sempre é mais forte que a de decisão porque:

**Alternativas:**
a) Pode não garantir que ambos os resultados de uma decisão ocorram
b) Ela ignora a avaliação de variáveis booleanas
c) Avalia decisões compostas sem condições isoladas
d) É baseada apenas em testes de exceção

**Resposta correta:** a

---

## Questão 4

**Enunciado:**
A cobertura de condições exige que:

**Alternativas:**
a) Cada condição em uma expressão seja avaliada como verdadeira e falsa em algum teste
b) Todas as decisões tenham a mesma quantidade de condições
c) Cada condição seja executada pelo menos uma vez
d) Todas as combinações de condições resultem em verdade e falso

**Resposta correta:** a

---

## Questão 5

**Enunciado:**
A cobertura de decisão/condição não garante:

**Alternativas:**
a) A execução de todos os loops envolvendo decisões
b) Que todas as decisões sejam falsas ao menos uma vez
c) Que todas as instruções de decisões sejam executadas
d) Que cada condição isoladamente determine o resultado da decisão

**Resposta correta:** d

---

## Questão 6

**Enunciado:**
A cobertura de múltiplas condições exige que:

**Alternativas:**
a) Cada condição seja testada isoladamente
b) Todas as decisões tenham apenas duas condições
c) Todas as combinações possíveis de valores das condições em uma decisão sejam testadas
d) Todas as múltiplas decisões e condições sejam executadas

**Resposta correta:** c

---

## Questão 7

**Enunciado:**
Em comparação com outros critérios, o MC/DC:

**Alternativas:**
a) É mais forte que a cobertura de múltiplas condições
b) Garante que cada condição influencie o resultado da decisão, mas com menos casos de teste do que a cobertura de múltiplas condições
c) É inferior ao teste de condições/decisões por gerar menos casos de testes
d) Testa todas as combinações das múltiplas condições em cada decisão

**Resposta correta:** b

---

## Questão 8

**Enunciado:**
Para aplicar MC/DC corretamente, deve-se:

**Alternativas:**
a) Testar todos os caminhos independentes do programa
b) Garantir que cada linha de código seja executada
c) Usar apenas condições independentes para cada uma das decisões
d) Criar pares de casos de teste que diferem em uma única condição e causam mudança na decisão

**Resposta correta:** d

---

## Questão 9

**Enunciado:**
Considere a seguinte decisão: (A && B) || C. Quais dos pares de valores abaixo demonstram independência da condição C?

**Alternativas:**
a) A = false, B = false, C = false e A = false, B = false, C = true
b) A = true, B = true, C = false e A = false, B = true, C = true
c) A = true, B = true, C = true e A = false, B = false, C = false
d) A = true, B = false, C = true e A = true, B = true, C = false

**Resposta correta:** a

---

## Questão 10

**Enunciado:**
Dada a expressão A || (B && C), quais dos pares abaixo demonstram que B afeta o resultado da decisão independentemente das demais?

**Alternativas:**
a) A = true, B = false, C = false e A = false, B = false, C = true
b) A = true, B = true, C = false e A = true, B = false, C = true
c) A = false, B = false, C = true e A = false, B = true, C = true
d) A = false, B = false, C = false e A = false, B = true, C = false

**Resposta correta:** c

---

## Questão 11

**Enunciado:**
O primeiro passo na elaboração de testes caixa-branca é:

**Alternativas:**
a) Analisar o fluxo de controle e identificar decisões e condições
b) Definir critérios de desempenho da aplicação
c) Construir um grafo de fluxo de controle
d) Analisar os requisitos funcionais e não funcionais

**Resposta correta:** a

---

## Questão 12

**Enunciado:**
Para elaborar testes caixa-branca, deve-se elencar os resultados das saídas das decisões para:

**Alternativas:**
a) Garantir que todos os caminhos possíveis do código sejam exercitados
b) Aumentar o número de testes executados
c) Testar as condições de forma isolada
d) Forçar a execução de todas as condições verdadeiras

**Resposta correta:** a

---

## Questão 13

**Enunciado:**
No contexto do teste unitário, drivers são:

**Alternativas:**
a) Programas que automatizam a geração de código
b) Scripts que testam apenas interfaces gráficas
c) Unidades auxiliares para testes de desempenho
d) Módulos que simulam chamadas de módulos superiores a um módulo em teste

**Resposta correta:** d

---

## Questão 14

**Enunciado:**
Por que o teste incremental é preferido ao teste não incremental?

**Alternativas:**
a) Porque testa os módulos à medida que são integrados, facilitando a detecção de falhas
b) Porque não requer testes de regressão, aumentando a eficiência do teste
c) Porque ignora falhas em módulos já testados, reduzindo a quantidade de casos de teste
d) Porque é mais rápido e mais eficiente que o teste unitário

**Resposta correta:** a

---

## Questão 15

**Enunciado:**
Qual a principal vantagem do top-down testing?

**Alternativas:**
a) Permite validar a lógica de controle do sistema a partir dos níveis superiores
b) Reduz a necessidade de integração ao testar apenas o módulo principal do sistema
c) Testa todos os módulos simultaneamente utilizando drivers e stubs
d) Testa os módulos de mais alto nível primeiro, substituindo os inferiores por drivers

**Resposta correta:** a

---
