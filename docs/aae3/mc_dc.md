# Modified Condition/Decision Coverage (MC/DC)

O **Modified Condition/Decision Coverage (MC/DC)** é um dos critérios de cobertura estrutural mais exigentes para software de alta criticidade (aviação, automotivo, ferroviário etc.). O MC/DC está definido no **DO-178B/C** da FAA e é referenciado em normas como **ISO 26262** (Automotivo) e **IEC 61508** (Industrial). Uma apresentação detalhada pode ser encontrada em Hayhurst et al. (2001).

---

## 1. Definição Formal

De acordo com o **DO-178C** 

> O MC/DC requer que, para cada decisão (uma expressão booleana composta) no código, sejam atendidos simultaneamente:
>
> 1. Cada ponto de entrada e saída seja invocado ao menos uma vez.
> 2. A decisão tome cada um de seus possíveis resultados (verdadeiro/falso).
> 3. Cada **condição** atinja cada valor (verdadeiro/falso) ao menos uma vez.
> 4. Cada condição seja mostrada como tendo **influência independente** sobre o resultado da decisão, mudando-a quando somente ela for invertida, mantendo-se fixas todas as demais.

O item 4 é o que diferencia o MC/DC: deve-se provar que apenas invertendo uma condição — sem alterar as demais — o resultado da decisão também inverte.

---

## 2. Exemplo Prático

Considere a decisão:

```plaintext
D ≡ A && B && C
```

| Caso | A     | B     | C     | D = A∧B∧C |
| ---- | ----- | ----- | ----- | --------- |
| 1    | True  | True  | True  | True      |
| 2    | True  | True  | False | False     |
| 3    | True  | False | True  | False     |
| 4    | True  | False | False | False     |
| 5    | False | True  | True  | False     |
| 6    | False | True  | False | False     |
| 7    | False | False | True  | False     |
| 8    | False | False | False | False     |

Para atingir 100 % de MC/DC, além de cobrir as condições e decisões, precisamos demonstrar a **independência** de cada condição.

### 2.1. Independência de **B**

Mantém **A = True** e **C = True**, varia apenas **B**:

| Caso | A    | B         | C    | D = A∧B∧C |
| ---- | ---- | --------- | ---- | --------- |
| 1    | True | **True**  | True | **True**  |
| 3    | True | **False** | True | **False** |

### 2.2. Independência de **A**

Mantém **B = True** e **C = True**, varia apenas **A**:

| Caso | A         | B    | C    | D = A∧B∧C |
| ---- | --------- | ---- | ---- | --------- |
| 1    | **True**  | True | True | **True**  |
| 5    | **False** | True | True | **False** |

### 2.3. Independência de **C**

Mantém **A = True** e **B = True**, varia apenas **C**:

| Caso | A    | B    | C         | D = A∧B∧C |
| ---- | ---- | ---- | --------- | --------- |
| 1    | True | True | **True**  | **True**  |
| 2    | True | True | **False** | **False** |

---

## 3. Vantagens e Aplicações

* **Redução de riscos**: garante que cada condição individualmente impacta o resultado, revelando erros mascarados.
* **Requisito normativo**: nível A em aviação exige 100 % MC/DC (DO-178C, Tabela A-7); também recomendado para SIL 4 (IEC 61508) e ASIL D (ISO 26262).
* **Eficiência**: exige menos testes que a cobertura de todas as combinações (Multiple Condition Coverage), mantendo rigor.

---

## 4. Referências Bibliográficas

1. Kelly J. Hayhurst, Dan S. Veerhusen, John D. Chilenski e Leanna R. Rierson. *A Practical Tutorial on Modified Condition/Decision Coverage*, NASA TM-2001-210876, 2001.
2. FAA. *Guidelines for the Use of the Modified Condition/Decision Coverage (MC/DC) Criterion*, CAST-10, 2020.
3. RTCA/DO-178C. *Software Considerations in Airborne Systems and Equipment Certification*, 2011.
4. ISO 26262:2011. *Road vehicles – Functional safety*, Parte 6.
5. IEC 61508-3:2010. *Functional safety of electrical/electronic/programmable electronic safety-related systems*, Anexo B.
