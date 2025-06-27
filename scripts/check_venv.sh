#!/bin/bash
if [ ! -f .venv/bin/activate ]; then
    echo "Criando ambiente virtual..."
    python3 -m venv .venv
else
    echo "Ambiente virtual já existe (.venv)"
fi
