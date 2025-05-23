# Testes-de-Software

Documentação de Testes de Software gerada com MkDocs e tema Material.

---

## 1. Clone este repositório

```bash
git clone https://github.com/arthurrochamoreira/Testes-de-Software.git
cd Testes-de-Software
```

## 2. Pré-requisitos

### Configuração inicial do Git no Windows

Após instalar o Git, configure seu nome de usuário e e-mail globalmente (eles serão usados nos commits):

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

Você pode verificar as configurações atuais com:

```bash
git config --global --list
```

### Ubuntu

Antes de criar o ambiente virtual, instale os pacotes necessários:

```bash
sudo apt update
sudo apt install -y python3 python3-venv python3-pip git
```

### Windows

Instale o Python de uma das seguintes formas:

* Site oficial: [https://www.python.org/downloads/windows/](https://www.python.org/downloads/windows/)
* Microsoft Store (versão mais recente recomendada para iniciantes): abra a Microsoft Store, pesquise por "Python" e instale a versão mais recente disponível

Marque a opção "Add Python to PATH" durante a instalação.

Instale o Git: [https://git-scm.com/download/win](https://git-scm.com/download/win)

Opcional: use o terminal PowerShell ou Git Bash para seguir os comandos com mais facilidade.

## 3. Crie o ambiente virtual

No diretório raiz do projeto, crie um venv chamado `.venv`:

```bash
python -m venv .venv
```

## 4. Ative o ambiente virtual

**Linux/macOS**

```bash
source .venv/bin/activate
```

**Windows (PowerShell ou CMD)**

```powershell
.\venv\Scripts\Activate
```

> Você verá o prefixo `(.venv)` no prompt quando o venv estiver ativo.

## 5. Instale as dependências

Com o venv ativo, instale o MkDocs e o tema Material:

```bash
pip install -r requirements.txt
```

## 6. Rode o ambiente de desenvolvimento

Ainda com o venv ativo, execute:

```bash
mkdocs serve
```

---

---

Acesse a documentação no navegador pelo endereço:

[http://127.0.0.1:8000](http://127.0.0.1:8000)
