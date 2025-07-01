# Testes-de-Software

Documentação de Testes de Software gerada com MkDocs e tema Material.

---

## 1. Clone este repositório

```bash
git clone https://github.com/arthurrochamoreira/Testes-de-Software.git
cd Testes-de-Software
```

---

## 2. Pré-requisitos

### Linux (Ubuntu/Debian)

- Certifique-se de ter o `make`, `python3`, `pip` e `venv` instalados:

```bash
sudo apt update
sudo apt install -y make python3 python3-pip python3-venv
```

### Windows

- Instale o [Git for Windows](https://git-scm.com/download/win)
- Instale o [Chocolatey](https://chocolatey.org/install) (executando o terminal **como administrador**), ou use o `Makefile` que instala automaticamente.
- Em seguida, instale o Make com:

```cmd
choco install make
```

---

## 3. Construir e iniciar os serviços com Make

Após instalar os pré-requisitos, execute:

```bash
make build-up
```

O script irá:

- Verificar o Python e ambiente virtual
- Instalar dependências com barra de progresso interativa
- Iniciar o servidor local com MkDocs

---

## 4. Acesse a documentação no navegador

Abra o navegador e vá para:

[http://127.0.0.1:8123](http://127.0.0.1:8123)

---

## Dica: Configuração inicial do Git no Windows

Após instalar o Git, configure seu nome de usuário e e-mail globalmente (eles serão usados nos commits):

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

Verifique suas configurações com:

```bash
git config --global --list
```
