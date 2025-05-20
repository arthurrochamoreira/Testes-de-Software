# Capítulo 4 –  Teste de Caixa Branca

Outra estratégia de teste, o teste de caixa branca (ou orientado por lógica), permite que você examine a estrutura interna do programa. Essa estratégia deriva dados de teste de um exame da lógica do programa (e muitas vezes, infelizmente, negligenciando a especificação).

O objetivo neste ponto é estabelecer, para esta estratégia, o teste de entrada análogo ao exaustivo na abordagem de caixa preta. Fazer com que todas as instruções do programa sejam executadas pelo menos uma vez pode parecer ser a resposta, mas não é difícil mostrar que isso é altamente inadequado. Sem insistir no ponto aqui, uma vez que esse assunto é discutido com mais profundidade no Capítulo 4, o análogo geralmente é considerado um teste de caminho exaustivo. Ou seja, se você executar, via casos de teste, todos os caminhos possíveis de controle fluem pelo programa, então, possivelmente, o programa foi completamente testado.

Existem duas falhas nesta afirmação, no entanto. Uma é que o número de caminhos lógicos únicos através de um programa pode ser astronomicamente grande. Para ver isso, considere o programa trivial representado na Figura 2.1. O diagrama é um gráfico de fluxo de controle. Cada nó ou círculo representa um segmento de instruções que são executadas sequencialmente, possivelmente terminando com uma *branching statement*. Cada aresta ou arco representa uma transferência de controle (ramificação) entre segmentos. O diagrama, então, descreve um programa de 10 a 20 instruções que consiste em um loop DO que itera até 20 vezes. Dentro do corpo do loop DO, há um conjunto de instruções IF aninhadas. Determinar o número de caminhos lógicos únicos é o mesmo que determinar o número total de maneiras únicas de se mover do ponto A para o ponto B (assumindo que todas as decisões no programa são independentes umas das outras). Este número é aproximadamente 10¹⁴.

> FIGURA 2.1: Gráfico de fluxo de controle de um pequeno programa.

100 trilhões. É calculado a partir de 5²⁰ + 5¹⁹ + ... + 5¹, onde 5 é o número de caminhos através do corpo do loop. A maioria das pessoas tem dificuldade em visualizar esse número, então considere desta forma: se você pudesse escrever, executar e verificar um caso de teste a cada cinco minutos, levaria aproximadamente 1 bilhão de anos para tentar todos os caminhos. Se você fosse 300 vezes mais rápido, completando um teste uma vez por segundo, você poderia completar o trabalho em 3,2 milhões de anos, dar ou tirar alguns anos bissextos e séculos.

É claro que, em programas reais, todas as decisões não são independentes de todas as outras decisões, o que significa que o número de caminhos de execução possíveis seria um pouco menor. Por outro lado, os programas reais são muito maiores do que o programa simples representado na Figura 2.1. Portanto, testes exaustivos de caminho, como testes exaustivos de entrada, parecem ser impraticáveis, se não impossíveis.

A segunda falha na afirmação "teste de caminho exaustivo significa um teste completo" é que todos os caminhos em um programa podem ser testados, mas o programa ainda pode estar carregado de erros. Existem três explicações para isso.

A primeira é que um teste exaustivo de trajetória não garante, de forma alguma, que um programa corresponda à sua especificação. Por exemplo, se você fosse solicitado a escrever uma rotina de classificação em ordem crescente, mas produzisse por engano uma rotina de classificação em ordem decrescente, o teste de caminho exaustivo seria de pouco valor; o programa ainda tem um bug: é o programa errado, pois não atende à especificação.

Em segundo lugar, um programa pode estar incorreto devido a caminhos ausentes. O teste exaustivo de caminho, é claro, não detectaria a ausência de caminhos necessários.

Terceiro, um teste de caminho exaustivo pode não revelar erros de confidencialidade de dados. Existem muitos exemplos de tais erros, mas um simples deve ser suficiente. Suponha que, em um programa, você tenha que comparar dois números para convergência, isto é, para ver se a diferença entre os dois números é menor do que algum valor predeterminado. Por exemplo, você pode escrever uma instrução Java IF como:

```java
if (a - b < c)
    System.out.println("a - b < c");


Claro, a declaração contém um erro porque deveria comparar `c` com o valor absoluto de `a - b`. A detecção desse erro, no entanto, depende dos valores usados para `a` e `b`, e não seria necessariamente detectada apenas executando todos os caminhos do programa.

Em conclusão, embora o teste exaustivo de entrada seja superior ao teste de caminho exaustivo, nenhum deles se mostra útil porque ambos são inviáveis. Talvez, então, existam maneiras de combinar elementos de teste de caixa preta e caixa branca para derivar uma estratégia de teste razoável, mas não hermética. Este assunto é aprofundado no Capítulo 4.

## Princípios de teste de software

### Tabela 2.1 – Diretrizes de teste de programas

| Nº | Princípio |
|----|-----------|
| 1  | Uma parte necessária de um caso de teste é uma definição da saída ou resultado esperado. |
| 2  | Um programador deve evitar tentar testar seu próprio programa. |
| 3  | Uma organização de programação não deve testar seus próprios programas. |
| 4  | Qualquer processo de teste deve incluir uma inspeção completa dos resultados de cada teste. |
| 5  | Os casos de teste devem ser gravados para condições de entrada inválidas e inesperadas, bem como para aquelas que são válidas e esperadas. |
| 6  | Examinar um programa para ver se ele não faz o que deveria fazer é apenas metade da batalha; a outra metade é ver se o programa faz o que não deveria fazer. |
| 7  | Evite casos de teste descartáveis, a menos que o programa seja realmente um programa descartável. |
| 8  | Não planeje um esforço de teste sob a suposição tácita de que nenhum erro será encontrado. |
| 9  | A probabilidade da existência de mais erros em uma seção de um programa é proporcional ao número de erros já encontrados nessa seção. |
| 10 | O teste é uma tarefa extremamente criativa e intelectualmente desafiadora. |

Continuando com a premissa principal deste capítulo, de que as considerações mais importantes no teste de software são questões de psicologia, podemos identificar um conjunto de princípios ou diretrizes vitais de teste. A maioria desses princípios pode parecer óbvia, mas muitas vezes são negligenciados. A Tabela 2.1 resume esses princípios importantes, e cada um é discutido com mais detalhes nos parágrafos a seguir.

### Princípio 1
Uma parte necessária de um caso de teste é uma definição da saída ou resultado esperado. Este princípio, embora óbvio, quando negligenciado, é a causa de um dos erros mais frequentes no teste de programas. Novamente, é algo baseado na psicologia humana. Se o resultado esperado de um caso de teste não foi predefinido, é provável que um resultado plausível, mas errôneo, seja interpretado como um resultado correto por causa do fenômeno de "o olho ver o que quer ver". Em outras palavras, apesar da definição destrutiva adequada de teste, ainda há um desejo subconsciente de ver o resultado correto.

Uma maneira de lutar contra essa situação consiste em incentivar uma análise pormenorizada de toda a produção, especificando com precisão, antecipadamente, a produção esperada do programa. Portanto, um caso de teste deve consistir em dois componentes:

1. Uma descrição dos dados de entrada para o programa.
2. Uma descrição precisa da saída correta do programa para esse conjunto de dados de entrada.

Um problema pode ser caracterizado como um fato ou grupo de fatos para os quais não temos uma explicação aceitável, que parecem incomuns ou que não se encaixam em nossas expectativas ou preconceitos. Deve ser óbvio que algumas crenças prévias são necessárias para que algo pareça problemático. Se não houver expectativas, não pode haver surpresas.

### Princípio 2
Um programador deve evitar tentar testar seu próprio programa. Qualquer escritor sabe — ou deveria saber — que é uma má ideia tentar editar ou revisar seu próprio trabalho. Eles sabem o que a peça deve dizer, portanto, podem não reconhecer quando diz o contrário. E eles realmente não querem encontrar erros em seu próprio trabalho. O mesmo se aplica aos autores de software.

Outro problema surge com uma mudança de foco em um projeto de software. Depois que um programador projetou e codificou construtivamente um programa, é extremamente difícil mudar repentinamente a perspectiva para olhar para o programa com um olhar destrutivo.

Como muitos proprietários sabem, remover o papel de parede (um processo destrutivo) não é fácil, mas é quase insuportavelmente deprimente se foram suas mãos que penduraram o papel em primeiro lugar. Da mesma forma, a maioria dos programadores não pode testar efetivamente seus próprios programas porque não consegue mudar as engrenagens mentais para tentar expor erros. Além disso, um programador pode inconscientemente evitar encontrar erros por medo de retaliação de colegas, de um supervisor, de um cliente ou do proprietário do programa ou sistema que está sendo desenvolvido.

Além dessas questões psicológicas, há um segundo problema significativo: o programa pode conter erros devido ao mal-entendido do programador sobre a declaração ou especificação do problema. Se for esse o caso, é provável que o programador leve o mesmo mal-entendido para os testes de seu próprio programa.

Isso não significa que seja impossível para um programador testar seu próprio programa. Em vez disso, implica que o teste é mais eficaz e bem-sucedido se outra pessoa o fizer. No entanto, como vamos discutir em mais detalhes no Capítulo 3, os desenvolvedores podem ser membros valiosos da equipe de teste quando a especificação do programa e o próprio código do programa estão sendo avaliados.

Observe que esse argumento não se aplica à depuração (corrigir erros conhecidos); a depuração é executada com mais eficiência pelo programador original.

### Princípio 3
Uma organização de programação não deve testar seus próprios programas. O argumento aqui é semelhante ao feito no princípio anterior. Uma organização de projeto ou programação é, em muitos sentidos, uma organização viva com problemas psicológicos semelhantes aos de programadores individuais. Além disso, na maioria dos ambientes, uma organização de programas ou um gerente de projeto é amplamente medido pela capacidade de produzir um programa em uma determinada data e por um determinado custo.

Uma razão para isso é que é fácil medir os objetivos de tempo e custo, enquanto é extremamente difícil quantificar a confiabilidade de um programa. Portanto, é difícil para uma organização de programação ser objetiva ao testar seus próprios programas, porque o processo de teste, se abordado com a definição adequada, pode ser visto como diminuindo a probabilidade de atingir o cronograma e os objetivos de custo.

Novamente, isso não significa que seja impossível para uma organização de programação encontrar alguns de seus erros, porque as organizações realizam isso com algum grau de sucesso. Em vez disso, implica que é mais econômico que os testes sejam realizados por uma parte objetiva e independente.

### Princípio 4
Qualquer processo de teste deve incluir uma inspeção completa dos resultados de cada teste. Este é provavelmente o princípio mais óbvio, mas, novamente, é algo que muitas vezes é esquecido. Vimos vários experimentos que mostram que muitos sujeitos falharam em detectar certos erros, mesmo quando os sintomas desses erros eram claramente observáveis nas listas de saída. Dito de outra forma, os erros encontrados em testes posteriores foram frequentemente perdidos nos resultados de testes anteriores.

### Princípio 5
Os casos de teste devem ser escritos para condições de entrada inválidas e inesperadas, bem como para aquelas que são válidas e esperadas. Há uma tendência natural, ao testar um programa, de se concentrar nas condições de entrada válidas e esperadas, negligenciando as condições inválidas e inesperadas.

Por exemplo, essa tendência aparece frequentemente no teste do programa do triângulo no Capítulo 1. Poucas pessoas, por exemplo, alimentam o programa com os números 1, 2, 5 para garantir que o programa não interprete erroneamente isso como um triângulo equilátero em vez de um triângulo escaleno.

Além disso, muitos erros que são descobertos repentinamente no software de produção aparecem quando ele é usado de alguma maneira nova ou inesperada. É difícil, se não impossível, definir todos os casos de uso para teste de software. Portanto, os casos de teste que representam condições de entrada inesperadas e inválidas parecem ter um rendimento de detecção de erro maior do que os casos de teste para condições de entrada válidas.

### Princípio 6
Examinar um programa para ver se ele não faz o que deveria fazer é apenas metade da batalha; a outra metade é ver se o programa faz o que não deveria fazer. Este é um corolário do princípio anterior. Os programas devem ser examinados quanto a efeitos colaterais indesejados.

Por exemplo, um programa de cálculo das folhas de pagamento que produz os contracheques corretos ainda é um programa errôneo se também produzir cheques extras para empregados inexistentes ou se sobregravar o primeiro registro do arquivo pessoal.

### Princípio 7
Evite casos de teste descartáveis, a menos que o programa seja realmente um programa descartável. Este problema é visto com mais frequência com sistemas interativos para testar programas. Uma prática comum é sentar-se em um terminal e inventar casos de teste em tempo real e, em seguida, enviar esses casos de teste pelo programa.

A principal questão é que os casos de teste representam um investimento valioso que, neste ambiente, desaparece após a conclusão do teste. Sempre que o programa tiver que ser testado novamente (por exemplo, após corrigir um erro ou fazer uma melhoria), os casos de teste devem ser reinventados.

Na maioria das vezes, uma vez que essa reinvenção requer uma quantidade considerável de trabalho, as pessoas tendem a evitá-la. Portanto, o teste do programa raramente é tão rigoroso quanto o teste original, o que significa que, se a modificação fizer com que uma parte anteriormente funcional do programa falhe, esse erro geralmente não é detectado.

Salvar casos de teste e executá-los novamente após alterações em outros componentes do programa é conhecido como **teste de regressão**.

### Princípio 8
Não planeje um esforço de teste sob a suposição tácita de que nenhum erro será encontrado. Este é um erro que os gerentes de projeto costumam cometer e é um sinal do uso da definição incorreta de teste — ou seja, a suposição de que o teste é o processo de mostrar que o programa funciona corretamente.

Mais uma vez, a definição de teste é o processo de execução de um programa com a intenção de encontrar erros. E deve ser óbvio a partir de nossas discussões anteriores que é impossível desenvolver um programa que seja completamente livre de erros.

Mesmo após extensos testes e correção de erros, é seguro assumir que os erros ainda existem; eles simplesmente ainda não foram encontrados.

### Princípio 9
A probabilidade da existência de mais erros em uma seção de um programa é proporcional ao número de erros já encontrados nessa seção. Este fenômeno é ilustrado na Figura 2.2. À primeira vista, esse conceito pode parecer sem sentido, mas é um fenômeno presente em muitos programas.

Por exemplo, se um programa consiste em dois módulos, classes ou sub-rotinas, A e B, e cinco erros foram encontrados no módulo A, e apenas um erro foi encontrado no módulo B, e se o módulo A não foi propositalmente submetido a um teste mais rigoroso, então este princípio nos diz que a probabilidade de mais erros no módulo A é maior do que a probabilidade de mais erros no módulo B.

Outra maneira de afirmar esse princípio é dizer que os erros tendem a ocorrer em grupos e que, no programa típico, algumas seções parecem ser muito mais propensas a erros do que outras seções, embora ninguém tenha fornecido uma boa explicação de por que isso ocorre.

> FIGURA 2.2: A surpreendente relação entre erros remanescentes e erros encontrados.

O fenômeno é útil porque nos dá uma visão ou feedback no processo de teste. Se uma seção específica de um programa parece ser muito mais propensa a erros do que outras seções, esse fenômeno nos diz que, em termos de rendimento em nosso investimento em testes, os esforços adicionais de teste são mais bem focados nesta seção propensa a erros.

### Princípio 10
O teste é uma tarefa extremamente criativa e intelectualmente desafiadora. Provavelmente é verdade que a criatividade necessária para testar um programa grande excede a criatividade necessária para projetar esse programa.

Já vimos que é impossível testar um programa o suficiente para garantir a ausência de todos os erros. As metodologias discutidas posteriormente neste livro ajudam você a desenvolver um conjunto razoável de casos de teste para um programa, mas essas metodologias ainda exigem uma quantidade significativa de criatividade.

---

## Resumo

À medida que você avança neste livro, tenha em mente estes importantes princípios de teste:

- **Teste é o processo de execução de um programa com a intenção de encontrar erros.**
- **O teste é mais bem-sucedido quando não é realizado pelo(s) desenvolvedor(es).**
- **Um bom caso de teste é aquele que tem uma alta probabilidade de detectar um erro não descoberto.**
- **Um caso de teste bem-sucedido é aquele que detecta um erro não descoberto.**
- **O teste bem-sucedido inclui também a definição cuidadosa da saída esperada como entrada.**
- **O teste bem-sucedido inclui o estudo cuidadoso dos resultados do teste.**

---

## Bibliografia  

> MYERS, G. J.; SANDLER, C.; BADGETT, T. *The Art of Software Testing*. 3rd ed. Capítulo 4, Seção *White-Box Testing*.
