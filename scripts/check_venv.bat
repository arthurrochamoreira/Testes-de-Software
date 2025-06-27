@echo off
IF NOT EXIST .venv\Scripts\activate.bat (
    echo Criando ambiente virtual...
    python -m venv .venv
) ELSE (
    echo Ambiente virtual já existe .venv
)
