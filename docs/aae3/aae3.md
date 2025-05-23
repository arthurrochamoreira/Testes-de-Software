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
---

## 1.2 Recapitulando o que é MC/DC?

MC/DC significa **Cobertura de Decisão/Condição Modificada**. É uma técnica de teste que garante que:

1. Cada condição booleana dentro de uma decisão lógica (`if`, `while`, etc.) seja **avaliada como verdadeira e falsa**.
2. Cada condição seja **responsável, sozinha**, por mudar o resultado final da decisão.

---

## 1.3 Etapas para resolver o exercício

### 1.3.1 Quebrar as condições

Vamos identificar as **decisões** do código (as instruções `if`) e decompor cada uma em suas **condições**.

---

## 2. Primeira decisão (linha 2)

```java
if (number == null || number.isEmpty())
```

### 2.1 Quebrando a expressão

- **C1**: `number == null` → Verifica se a string é nula
- **C2**: `number.isEmpty()` → Verifica se a string está vazia

#### Estrutura lógica:

```java
C1 || C2
```
> Se a string for nula **OU** estiver vazia, retorna false

---

### 2.2 Tabela Verdade de `C1 || C2`

| Teste | C1 | C2 | Resultado |
|-------|----|----|-----------|
| T1    | F  | F  | F         |
| T2    | F  | V  | V         |
| T3    | V  | F  | V         |
| T4    | V  | V  | V         |

### 2.3 Justificativas dos Pares MC/DC - Primeira Decisão

**Par C1: T1 vs T3**

- C2 está **F** nas duas linhas.  
- C1 muda de **F → V**.  
- Resultado muda de **F → V**.  
- Isso prova que **C1 sozinha** pode mudar o resultado → cobre independência de **C1**.

**Par C2: T1 vs T2**

- C1 está **F** nas duas linhas.  
- C2 muda de **F → V**.  
- Resultado muda de **F → V**.  
- Isso prova que **C2 sozinha** pode mudar o resultado → cobre independência de **C2**.

---

### 2.4 Pares de MC/DC

- **C1**: T1 vs T3  
- **C2**: T1 vs T2

## 3. Segunda decisão — `(number.length() == 1 && (number.charAt(0) == '-' || number.charAt(0) == '+'))`

### 3.1 Quebrando a expressão

- **C3**: `number.length() == 1` → A string tem apenas 1 caractere
- **C4**: `number.charAt(0) == '-'` → O caractere é ‘-’ 
- **C5**: `number.charAt(0) == '+'` → O caractere é ‘+’

#### Estrutura lógica:

```java
C3 && (C4 || C5)
```
> Se a string tem 1 caractere **E** esse caractere é '+' **OU** '-', retorna false

---

### 3.2 Tabela Verdade de 'C3 && (C4 || C5)'

| Teste | C3 (`len == 1`) | C4 (`== '-'`) | C5 (`== '+'`) | Resultado |
| ----- | --------------- | ------------- | ------------- | --------- |
| T5    | V               | V             | F             | V         |
| T6    | V               | F             | V             | V         |
| T7    | V               | F             | F             | F         |
| T8    | F               | V             | F             | F         |

---

### 3.3 Justificativas dos Pares MC/DC - Segunda Decisão

**Par C3: T5 vs T8**

* C4 = V e C5 = F nas duas linhas.
* C3 muda de **V → F**.
* Resultado muda de **V → F**.
* Isso prova que **C3 sozinha** pode mudar o resultado → cobre independência de **C3**.

**Par C4: T5 vs T7**

* C3 = V e C5 = F nas duas linhas.
* C4 muda de **V → F**.
* Resultado muda de **V → F**.
* Isso prova que **C4 sozinha** pode mudar o resultado → cobre independência de **C4**.

**Par C5: T6 vs T7**

* C3 = V e C4 = F nas duas linhas.
* C5 muda de **V → F**.
* Resultado muda de **V → F**.
* Isso prova que **C5 sozinha** pode mudar o resultado → cobre independência de **C5**.

---

### 3.4 Pares de MC/DC 

* **C3**: T5 vs T8
* **C4**: T5 vs T7
* **C5**: T6 vs T7

## 4. O que você quer alcançar com tudo isso?

Garantir que **todas as condições do código são testadas de forma independente**, provando que **cada pedacinho da lógica influencia o resultado final**. Isso dá segurança de que o código está funcionando corretamente e que você não deixou passar nenhum caminho lógico importante.

---

## 5. Referências Bibliográficas

1. Myers, G. J., Sandler, C., & Badgett, T. (2011). *The Art of Software Testing* (3rd ed.). Wiley. pp. 46–48.
