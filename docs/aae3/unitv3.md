## 9. Testes de Unidade

**Definição (Myers, 2012):**  
Processo de testar funções, métodos, procedimentos, sub-rotinas ou subprogramas **individualmente**, garantindo que cada unidade isolada se comporte conforme a especificação.

- **Objetivo:** verificar o **menor elemento testável** de um software.  
  - Procedural: função ou procedimento.  
  - Orientado a objeto: método de classe.  
- **Responsável:** geralmente o **desenvolvedor**.  
- **Enfoque:** algoritmos e lógica de programação.  
- **Técnicas:** tipicamente **caixa-branca**, complementada por **caixa-preta**.

**Motivações:**  
- Gerenciar incrementalmente os elementos do teste.  
- Facilitar a **depuração** (localização de defeitos).  
- Permitir **paralelismo** na execução dos testes.

### 9.1. Ferramentas em Python

| Ferramenta    | Características                                         | Referência                                       |
|---------------|----------------------------------------------------------|--------------------------------------------------|
| `unittest`    | Framework padrão, estilo xUnit.                          | Python Software Foundation (2024).               |
| `pytest`      | Sintaxe concisa, fixtures, parametrização e plugins.     | pytest Documentation (2024).                     |
| `coverage.py` | Medição de cobertura de código.                          | Ned Batchelder (2024).                           |

### 9.2. Exemplo Simples: Função `is_even`

```python
# utils.py
def is_even(n: int) -> bool:
    """
    Retorna True se n for par, False caso contrário.
    """
    return n % 2 == 0
```

#### 9.2.1. Testes com `pytest`

```python
# tests/test_utils.py
import pytest
from utils import is_even

@pytest.mark.parametrize("input,expected", [
    (0, True),
    (1, False),
    (2, True),
    (99, False),
])
def test_is_even(input, expected):
    assert is_even(input) == expected
```

- **Casos de teste**:
  - `0` → `True`
  - `1` → `False`
  - `2` → `True`
  - `99` → `False`

#### 9.2.2. Teste Caixa-Branca (Cobertura de Decisão)

```python
def test_is_even_branches():
    # testa tanto o ramo True quanto o ramo False
    assert is_even(4) is True
    assert is_even(5) is False
```

- Com isso garantimos que ambas as saídas (`True` e `False`) ocorram ao menos uma vez.

---

### 9.3. Critérios de Cobertura

| Critério                | Descrição                                                           |
|-------------------------|---------------------------------------------------------------------|
| Cobertura de decisões   | Garante que `n % 2 == 0` avalie `True` e `False`                    |
| Cobertura de instruções | Garante execução da única linha da função                           |

```bash
# Gerando relatório de cobertura
coverage run -m pytest && coverage report -m
```

```text
Name           Stmts   Miss  Cover
----------------------------------
utils.py           3      0   100%
```

---

## 10. Testes de Unidade – Considerações

- **Objetivo:** comparar a função `is_even` com sua especificação, demonstrando que ela retorna `True` somente para números pares e `False` para ímpares.  
- **Escopo dos testes:**  
  - Entradas válidas (números inteiros ≥ 0 e < 1000, por exemplo).  
  - Entradas negativas ou tipos incorretos (ex.: strings) para validar robustez.  
- **Questões fundamentais:**  
  1. Como representar valores-limite? (0, 1, maior inteiro par dentro do intervalo)  
  2. Como testaremos comportamentos inesperados? (valores negativos, tipos errados)  
  3. Como automatizar e integrar ao CI?

---

## 11. Elaboração dos Casos de Teste

**Especificação da função `is_even(n: int) -> bool`:**  
- Retorna `True` se `n % 2 == 0`.  
- Retorna `False` caso contrário.  

### Procedimento

1. **Análise caixa-preta:**  
   - Identificar classes de equivalência:  
     - **Pares:** {..., 0, 2, 4, ...}  
     - **Ímpares:** {..., 1, 3, 5, ...}  
   - Valores-limite:  
     - 0 (menor par não-negativo)  
     - 1 (menor ímpar)  
     - 999 (maior ímpar dentro do intervalo)  
     - 1000 (maior par dentro do intervalo)  

2. **Análise caixa-branca:**  
   - Verificar a operação `% 2`: deve executar divisão e resto.  
   - Cobertura de decisões: ambos os caminhos (`== 0` True/False).

3. **Documentação em tabela de decisão:**

| Caso      | Entrada       | Saída Esperada | Tipo         |
|-----------|---------------|----------------|--------------|
| C1        | n = 0         | True           | Caixa-preta  |
| C2        | n = 1         | False          | Caixa-preta  |
| C3        | n = 2         | True           | Caixa-preta  |
| C4        | n = 999       | False          | Caixa-preta  |
| C5        | n = 1000      | True           | Caixa-preta  |
| C6        | n = -1        | Error/TypeError| Caixa-preta  |
| C7        | n = 'a'       | TypeError      | Caixa-preta  |
| C8        | n = 4         | True           | Caixa-branca |
| C9        | n = 5         | False          | Caixa-branca |

4. **Implementação dos testes:**  
   - Usar `pytest` para casos de equivalência e limites.  
   - Usar `pytest.raises` para tipos incorretos.  

5. **Execução e relatório de cobertura:**  
```bash
pytest --maxfail=1 --disable-warnings -q
coverage run -m pytest && coverage report -m
```

## 12. Referências Bibliográficas

- Myers, G. J., Sandler, C., & Badgett, T. (2012). _The Art of Software Testing_. John Wiley & Sons.  
- pytest Development Team. (2024). _pytest documentation_. Retrieved from https://docs.pytest.org/  
- Ned Batchelder. (2024). _coverage.py documentation_. Retrieved from https://coverage.readthedocs.io/  
