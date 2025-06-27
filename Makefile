PORT=8123
REQ=requirements.txt
VENV=.venv
URL=http://127.0.0.1:$(PORT)/

# Detecta SO
OS := $(shell (uname 2>NUL) || echo Windows_NT)

ifeq ($(OS),Windows_NT)
	PYTHON=python
	PYTHON_VENV=$(VENV)\Scripts\python.exe
	PIP=$(VENV)\Scripts\pip.exe
	MKDOCS=$(VENV)\Scripts\mkdocs.exe
	CHECK_VENV=call scripts\check_venv.bat
	CHECK_REQ=$(PYTHON_VENV) scripts\check_requirements.py
	OPEN_BROWSER=cmd /c start $(URL)
	CHCP_CMD=chcp 65001 >NUL
	DEVNULL=NUL
	COLOR_START=
	COLOR_END=
       PRINT=@echo
       QUOTE=
       BLANK=@echo.
else
	PYTHON=python3
	PYTHON_VENV=$(VENV)/bin/python3
	PIP=$(VENV)/bin/pip
	MKDOCS=$(VENV)/bin/mkdocs
	CHECK_VENV=sh scripts/check_venv.sh
	CHECK_REQ=$(PYTHON_VENV) scripts/check_requirements.py
	OPEN_BROWSER=xdg-open $(URL)
	CHCP_CMD=true
	DEVNULL=/dev/null
	COLOR_START=\033[0;32m
	COLOR_END=\033[0m
       PRINT=@printf '%b\n'
       QUOTE="
       BLANK=@echo
endif

build-up:
	@$(CHCP_CMD) || true
	@echo [0/3] Verificando se o Python está instalado...
ifeq ($(OS),Windows_NT)
	@$(PYTHON) --version >$(DEVNULL) 2>&1 || (echo Python não encontrado. Instale manualmente. && exit /b 1)
else
	@$(PYTHON) --version >$(DEVNULL) 2>&1 || (echo "Python não encontrado. Instale manualmente." && exit 1)
endif
	@$(PYTHON) --version

	@$(BLANK)
	@$(PRINT) $(QUOTE)$(COLOR_START)===============================================$(COLOR_END)$(QUOTE)
	@$(PRINT) $(QUOTE)$(COLOR_START)Iniciando build do ambiente MkDocs$(COLOR_END)$(QUOTE)
	@$(PRINT) $(QUOTE)$(COLOR_START)Porta: $(URL)$(COLOR_END)$(QUOTE)
	@$(PRINT) $(QUOTE)$(COLOR_START)===============================================$(COLOR_END)$(QUOTE)

	@echo [1/3] Verificando ambiente virtual...
	@$(CHECK_VENV)

	@$(PYTHON_VENV) -m pip install -q rich

	@$(BLANK)
	@echo [2/3] Verificando dependências:
	@$(CHECK_REQ)

	@$(BLANK)
	@$(PRINT) $(QUOTE)$(COLOR_START)✅ Ambiente configurado com sucesso!$(COLOR_END)$(QUOTE)
	@$(BLANK)
	@echo [3/3] Iniciando MkDocs
	@$(PRINT) $(QUOTE)$(COLOR_START)Acesse: $(URL)$(COLOR_END)$(QUOTE)
	@$(OPEN_BROWSER)
	@$(MKDOCS) serve -a 127.0.0.1:$(PORT)