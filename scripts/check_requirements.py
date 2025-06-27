import subprocess
import sys
import time

try:
    import importlib.metadata as metadata
except ImportError:
    import importlib_metadata as metadata  # Python < 3.8

from rich.progress import Progress, SpinnerColumn, BarColumn, TextColumn, TimeElapsedColumn, TaskProgressColumn
from rich.console import Console

console = Console()

with open("requirements.txt") as f:
    pkgs = [l.strip() for l in f if l.strip() and not l.startswith("#")]

console.print("[bold cyan]Dependências:[/bold cyan]")
for p in pkgs:
    try:
        metadata.version(p)
        console.print(f"  - {p} [green](já instalado)[/green]")
    except metadata.PackageNotFoundError:
        console.print(f"  - {p}")

console.print()

with Progress(
    SpinnerColumn(),
    TextColumn("[progress.description]{task.description}", justify="left"),
    BarColumn(),
    TaskProgressColumn(),
    TimeElapsedColumn(),
) as progress:
    total_task = progress.add_task("[bold green]Progresso total", total=len(pkgs))
    for pkg in pkgs:
        try:
            metadata.version(pkg)
            progress.update(total_task, advance=1)
            continue
        except metadata.PackageNotFoundError:
            pass

        task = progress.add_task(f"{pkg:<20}", total=100)
        for i in range(0, 101, 10):
            progress.update(task, advance=10)
            time.sleep(0.02)
        pip_cmd = [
            sys.executable,
            "-m",
            "pip",
            "install",
            "-q",
            pkg,
        ]
        subprocess.run(pip_cmd)
        progress.update(total_task, advance=1)
