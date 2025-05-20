# Testes-de-Software

Documentação de Testes de Software gerada com MkDocs e tema Material.

---

## 1. Clone este repositório

```bash
git clone https://github.com/arthurrochamoreira/Testes-de-Software.git
cd Testes-de-Software
```

## 2. Pré-requisitos no Ubuntu

Antes de criar o ambiente virtual, instale os pacotes necessários:

```bash
sudo apt update
sudo apt install -y python3 python3-venv python3-pip git
```

## 3. Crie o ambiente virtual

No diretório raiz do projeto, crie um venv chamado `.venv`:

```bash
python3 -m venv .venv
```

## 4. Ative o ambiente virtual

**Linux/macOS**

```bash
source .venv/bin/activate
```
> Você verá o prefixo `(.venv)` no prompt quando o venv estiver ativo.

## 5. Instale as dependências

Com o venv ativo, instale o MkDocs e o tema Material:

```bash
pip install mkdocs mkdocs-material
```

Se quiser fixar versões, adapte para:

```bash
pip install mkdocs==1.5.3 mkdocs-material==9.1.10
```

## 6. Rode o ambiente de desenvolvimento

Ainda com o venv ativo, execute:

```bash
mkdocs serve
```