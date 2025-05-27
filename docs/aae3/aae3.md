# 1. Relatório de Cobertura MC/DC — Atividade AAE-3

## 1.1 Objetivo

Elaborar o menor conjunto de casos de teste que garanta 100% de cobertura segundo o critério **MC/DC** para o método `isNumber(String number)` abaixo:

```java
public boolean isNumber(String number) {
    if (number == null || number.isEmpty()) {
        return false;
    }

    if (number.length() == 1 && (number.charAt(0) == '-' || number.charAt(0) == '+')) {
        return false;
    }

    for (int i = 0; i < number.length(); i++) {
        char c = number.charAt(i);

        if (i == 0 && (c == '-' || c == '+')) {
            continue;
        } else if (!Character.isDigit(c)) {
            return false;
        }
    }

    return true;
}
```

## 1.2 Recapitulando MC/DC

**MC/DC** (Cobertura de Decisão/Condição Modificada) é uma técnica de teste que exige:

1. Que cada condição booleana dentro de uma decisão seja *avaliada* como **verdadeira** e **falsa**.
2. Que, para cada condição, seja demonstrado que ela, **isoladamente**, pode alterar o resultado da decisão.

---

### Exemplo: `if (A && B)`

| Caso    | A | B | Resultado | O que muda?                                   |
| ------- | - | - | --------- | --------------------------------------------- |
| D-Ex-T1 | F | V | F         | Base para testar A                            |
| D-Ex-T2 | V | V | V         | (B = V; A muda F → V; resultado muda F → V) ✓ |
| D-Ex-T3 | V | F | F         | Base para testar B                            |
| D-Ex-T4 | V | V | V         | (A = V; B muda F → V; resultado muda F → V) ✓ |

---

### Decisões válidas em MC/DC

Uma **decisão válida** é qualquer expressão booleana que:

* Controle o fluxo (`if`, `while`, `for`, `else if` etc.).
* Seja composta por **duas ou mais** condições ligadas por `&&` ou `||`.
* Permita que cada condição, isoladamente, altere o resultado.

> **Nota:**
>
> * Decisões simples (com apenas uma condição) também podem ser consideradas para MC/DC — basta testar o “true” e o “false”.
> * Condições de laço sem múltiplas variáveis (ex.: `i < n` em `for`) não precisam de MC/DC.

---

## 1.3 Etapas para resolver

1. Identificar as **decisões** no código (`if`, `else if`).
2. Decompor cada decisão em suas **condições**.
3. Elaborar tabela-verdade para cada expressão composta.
4. Selecionar pares de testes MC/DC que evidenciem mudança isolada de cada condição.

---

## 2. Primeira decisão (linha 2)

```java
if (number == null || number.isEmpty()) {
    return false;
}
```

* **C1**: `number == null`
* **C2**: `number.isEmpty()`

#### Estrutura lógica

```text
C1 || C2
```

> Se a string for nula **ou** estiver vazia, retorna false

#### Tabela-verdade de `C1 || C2`

| Caso  | C1 | C2 | Resultado |
| ----- | -- | -- | --------- |
| D1-T1 | F  | F  | F         |
| D1-T2 | F  | V  | V         |
| D1-T3 | V  | F  | V         |
| D1-T4 | V  | V  | V         |

#### Pares MC/DC

* **C1**: (C2 = F; C1 muda F → V; resultado muda F → V) — D1-T1 vs D1-T3
* **C2**: (C1 = F; C2 muda F → V; resultado muda F → V) — D1-T1 vs D1-T2

---

## 3. Segunda decisão (linha 5)

```java
if (number.length() == 1 && (number.charAt(0) == '-' || number.charAt(0) == '+')) {
    return false;
}
```

* **C3**: `number.length() == 1`
* **C4**: `number.charAt(0) == '-'`
* **C5**: `number.charAt(0) == '+'`

#### Estrutura lógica

```text
C3 && (C4 || C5)
```

> Se há um caractere **e** ele é ‘-’ **ou** ‘+’, retorna false

#### Tabela-verdade de `C3 && (C4 || C5)`

| Caso  | C3 | C4 | C5 | Resultado |
| ----- | -- | -- | -- | --------- |
| D2-T1 | V  | V  | F  | V         |
| D2-T2 | V  | F  | V  | V         |
| D2-T3 | V  | F  | F  | F         |
| D2-T4 | F  | –  | –  | F         |

#### Pares MC/DC

* **C3**: (C4 = V; C5 = F; C3 muda V → F; resultado muda V → F) — D2-T1 vs D2-T4
* **C4**: (C3 = V; C5 = F; C4 muda V → F; resultado muda V → F) — D2-T1 vs D2-T3
* **C5**: (C3 = V; C4 = F; C5 muda V → F; resultado muda V → F) — D2-T2 vs D2-T3

---

## 4. Terceira decisão (linha 10)

```java
if (i == 0 && (c == '-' || c == '+')) {
    continue;
}
```

* **C6**: `i == 0`
* **C7**: `c == '-'`
* **C8**: `c == '+'`

#### Estrutura lógica

```text
C6 && (C7 || C8)
```

> Se é o primeiro caractere **e** ele é ‘-’ **ou** ‘+’, ignora e segue

#### Tabela-verdade de `C6 && (C7 || C8)`

| Caso  | C6 | C7 | C8 | Resultado |
| ----- | -- | -- | -- | --------- |
| D3-T1 | F  | –  | –  | F         |
| D3-T2 | V  | V  | F  | V         |
| D3-T3 | V  | F  | V  | V         |
| D3-T4 | V  | F  | F  | F         |

#### Pares MC/DC

* **C6**: (C7 = V; C8 = F; C6 muda F → V; resultado muda F → V) — D3-T1 vs D3-T2
* **C7**: (C6 = V; C8 = F; C7 muda V → F; resultado muda V → F) — D3-T2 vs D3-T4
* **C8**: (C6 = V; C7 = F; C8 muda V → F; resultado muda V → F) — D3-T3 vs D3-T4

---

## 5. Quarta decisão (linha 12)

```java
else if (!Character.isDigit(c)) {
    return false;
}
```

* **C9**: `!Character.isDigit(c)`

#### Estrutura lógica

```text
C9
```

> Se não é dígito, retorna false


#### Tabela-verdade de `C9`

| Caso  | isDigit(c) | C9 | Resultado |
| ----- | ---------- | -- | --------- |
| D4-T1 | V          | F  | F         |
| D4-T2 | F          | V  | V         |

#### Par MC/DC

* **C9**: (isDigit = V; C9 muda F → V; resultado muda F → V) — D4-T1 vs D4-T2

---

## 6. Resumo dos pares MC/DC

* **Decisão 1** (C1, C2): D1-T1 vs D1-T3; D1-T1 vs D1-T2
* **Decisão 2** (C3, C4, C5): D2-T1 vs D2-T4; D2-T1 vs D2-T3; D2-T2 vs D2-T3
* **Decisão 3** (C6, C7, C8): D3-T1 vs D3-T2; D3-T2 vs D3-T4; D3-T3 vs D3-T4
* **Decisão 4** (C9): D4-T1 vs D4-T2

---

## 7. Conclusão

Com o conjunto de 14 casos de teste (D1-T1 a D1-T4, D2-T1 a D2-T4, D3-T1 a D3-T4 e D4-T1 e D4-T2), cada condição C1–C9 foi avaliada como verdadeira e falsa e demonstrou, isoladamente, sua capacidade de alterar o resultado da decisão. Assim, alcançamos 100% de cobertura segundo o critério **MC/DC** para o método `isNumber`.

---

## 8. Referências Bibliográficas

1. Myers, G. J., Sandler, C., & Badgett, T. (2011). *The Art of Software Testing* (3rd ed.). Wiley. pp. 46–48.
2. RTCA/DO-178C. (2011). *Software Considerations in Airborne Systems and Equipment Certification*. RTCA.
3. ISO/IEC/IEEE 29119. (2013). *Software and Systems Engineering — Software Testing*. ISO/IEC/IEEE.

