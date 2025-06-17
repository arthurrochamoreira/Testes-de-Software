VENV=.venv
PORT=8123
REQ=requirements.txt

# Cores ANSI
Y=\033[0;33m
G=\033[0;32m
B=\033[0;34m
W=\033[0;37m
R=\033[0;31m
C=\033[0;36m
E=\033[0m

build-up: check-python
	@echo
	@echo "${Y}===============================================${E}"
	@echo "${W}Iniciando build do ambiente MkDocs${E}"
	@echo "Porta: ${C}http://127.0.0.1:$(PORT)/${E}"
	@echo "${Y}===============================================${E}"

	@echo "[1/3] Verificando ambiente virtual..."
	@if [ ! -d "$(VENV)" ]; then \
		echo "→ Criando ambiente virtual..."; \
		python3 -m venv $(VENV); \
	else \
		echo "→ Ambiente virtual já existe (${VENV})"; \
	fi

	@$(VENV)/bin/python3 -m pip install -q rich

	@echo "\n[2/3] Verificando dependências:\n"
	@printf "%s\n" \
"import subprocess" \
"import sys" \
"try:" \
"    import importlib.metadata as metadata" \
"except ImportError:" \
"    import importlib_metadata as metadata  # Python < 3.8" \
"from rich.progress import Progress, SpinnerColumn, BarColumn, TextColumn, TimeElapsedColumn, TaskProgressColumn" \
"from rich.console import Console" \
"from time import sleep" \
"console = Console()" \
"with open('$(REQ)') as f:" \
"    pkgs = [l.strip() for l in f if l.strip() and not l.startswith('#')]" \
"console.print('[bold cyan]Dependências:[/bold cyan]')" \
"for p in pkgs:" \
"    try:" \
"        metadata.version(p)" \
"        console.print(f'  - {p} [green](já instalado)[/green]')" \
"    except metadata.PackageNotFoundError:" \
"        console.print(f'  - {p}')" \
"console.print()" \
"with Progress(" \
"    SpinnerColumn()," \
"    TextColumn('[progress.description]{task.description}', justify='left')," \
"    BarColumn()," \
"    TaskProgressColumn()," \
"    TimeElapsedColumn()," \
") as progress:" \
"    total_task = progress.add_task('[bold green]Progresso total', total=len(pkgs))" \
"    for pkg in pkgs:" \
"        try:" \
"            metadata.version(pkg)" \
"            progress.update(total_task, advance=1)" \
"            continue" \
"        except metadata.PackageNotFoundError:" \
"            pass" \
"        task = progress.add_task(f'{pkg:<20}', total=100)" \
"        for i in range(0, 101, 10):" \
"            progress.update(task, advance=10)" \
"            sleep(0.02)" \
"        subprocess.run(['$(VENV)/bin/pip', 'install', '-q', pkg])" \
"        progress.update(total_task, advance=1)" \
	| $(VENV)/bin/python3

	@echo "\n${G}✅ Build finalizada com sucesso!${E}"

	@echo "\n[3/3] Iniciando MkDocs"
	@echo "${B}Acesse:${E} ${C}http://127.0.0.1:$(PORT)/${E}"
	@$(VENV)/bin/mkdocs serve -a 127.0.0.1:$(PORT)


check-python:
	@echo "[0/3] Verificando se o Python 3 está instalado..."
	@command -v python3 >/dev/null 2>&1 || { \
		echo "${R}→ Python3 não encontrado. Instalando...${E}"; \
		sudo apt update && sudo apt install -y python3 python3-venv python3-pip; \
	}
	@echo "${G}→ Python3 está disponível: $$(python3 --version)${E}"
