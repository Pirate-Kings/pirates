import base64
from datetime import date


def b64(name: str):
    with open(f"./docs/assets/images/icons/{name}", "rb") as f:
        return base64.b64encode(f.read()).decode("utf-8")


class Vars:
    # Commons
    # constants
    project_name = "pirates"
    organization = "Pirate-Kings"
    user = "whinee"
    site = "pirates.pages.dev"
    # variables
    repo_name = project_name.replace(" ", "-")
    year = str(date.today().year)

    # README.md
    # constants
    title = "The Pirate Kings"
    # variables


icons = ["issues", "forks", "stars", "contributors", "license", "code"]
for i in icons:
    setattr(Vars, f"{i}_b64", b64(f"{i}.png"))
