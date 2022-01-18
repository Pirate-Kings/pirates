import json

import click
import httpx
import yaml

GH_INFO = {
    "desc": "description",
    "forks": None,
    "issues": "open_issues_count",
    "stars": "stargazers_count",
    "watching": "subscribers_count",
}

@click.command()
@click.argument('kv')
def main(kv):
    op = []

    with open("repos.yml", "r") as f:
        RYML = yaml.safe_load(f)

    clfa = RYML["clf"]

    for k, v in RYML["repos"].items():
        repo = f'https://github.com/{v["user"]}/{k}'
        rl = v.get("links", {})
        links = {"repo": repo, **rl}
        resp = httpx.get(f'https://api.github.com/repos/{v["user"]}/{k}').json()

        clf = []
        info = {}

        for ghk, ghv in GH_INFO.items():
            info[ghk] = resp[ghv if ghv else ghk]
        if rl:
            dll = rl.get("dl")
            if dll:
                links["dl"] = dll
            else:
                if v["release"]:
                    links["dl"] = f'{repo}/releases'

        rclf = v.get("clf")
        if rclf:
            for ck, cv in rclf.items():
                for cvi in cv:
                    clf.append(clfa[ck][cvi])
        lt = [i.lower() for i in clf]

        op.append({
            "name": k,
            "links": links,
            "clf": clf,
            "tags": [i for i in v.get("topics", []) + resp["topics"] if i.lower() not in lt],
            **info
        })

    httpx.post(f'https://{kv}.whi-ne.workers.dev', json={"pirate_kings": json.dumps(op, indent=None)})

if __name__ == '__main__':
    main()