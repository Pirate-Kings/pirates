// Object.entries(items).forEach(function([k, v]) {
//     console.log(`${key} ${value}`);
//  });

items = [
    {
        "name": "ani-cli",
        "desc": "A cli tool to browse and play anime.",
        "tags": ["shell", "cli", "anime"],
        "links": {
            "repo": "https://github.com/pystardust/ani-cli/",
        }
    },
    {
        "name": "MangDL",
        "desc": "The most inefficient downloader for PC (and soon, also a reader)",
        "tags": ["python", "windows", "macos", "linux", "cli", "wordpress", "metadata", "scraper", "downloader", "zip", "tar", "rar", "manga", "provider", "reader", "cbr", "cbz", "cbt", "7zip", "cb7"],
        "links": {
            "site": "https://mdl.pages.dev",
            "dl": "https://github.com/MangDL/MangDL/releases/latest",
            "repo": "https://github.com/MangDL/MangDL",
        }
    },
]

window.onload = function () {
    var main = document.getElementById("main");
    for (var i of items) {
        console.log(i);
        var div = document.createElement("div");
        var h3 = document.createElement("h3");
        var h4 = document.createElement("h4");
        var links = document.createElement("div");
        var ls = document.createElement("span");
        var tags = document.createElement("div");
        h3.innerText = i["name"];
        h4.innerText = i["desc"];
        links.setAttribute("class", "rps");
        ls.innerText = "Links: ";
        links.append(ls);
        Object.entries(i["links"]).forEach(function ([k, v]) {
            var link = document.createElement("div");
            var a = document.createElement("a");
            link.setAttribute("class", "rd-pill");
            a.setAttribute("target", "_blank");
            a.href = v;
            a.innerText = k;
            link.append(a);
            links.append(link);
        });
        tags.setAttribute("class", "rps");
        for (var j of i["tags"]) {
            var tag = document.createElement("div");
            tag.setAttribute("class", "rd-pill");
            tag.innerText = j;
            tags.append(tag);
        }
        div.append(h3, h4, links, tags);
        main.append(div);
    }
}