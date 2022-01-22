// Object.entries(items).forEach(function([k, v]) {
//     console.log(`${key} ${value}`);
//  });

function apps() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://kv.whi-ne.workers.dev?key=pirate_kings", false);
    xhr.send(null);
    items = JSON.parse(xhr.response);

    stats_dict = {
        "stars": "/stargazers",
        "watching": "/watchers",
        "issues": "/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc",
        "forks": "/network/members"
    }

    var main = document.getElementById("list");
    for (var i of items) {
        var div = document.createElement("div");
        var ta = document.createElement("a");
        var h3 = document.createElement("h3");
        var h4 = document.createElement("h4");
        var links = document.createElement("div");
        var ls = document.createElement("span");
        var stats = document.createElement("div");
        var clfs = document.createElement("div");
        var ss = document.createElement("span");
        var tags = document.createElement("div");

        ta.href = i["links"]["repo"];
        h3.innerText = i["name"];
        ta.append(h3);
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

        stats.setAttribute("class", "rps");
        ss.innerText = "Stats: ";
        stats.append(ss);
        Object.entries(stats_dict).forEach(function ([sk, sv]) {
            var stat = document.createElement("div");
            var a = document.createElement("a");
            var img = document.createElement("img");

            stat.setAttribute("class", "rd-pill");
            stat.setAttribute("title", sk);
            img.setAttribute("class", "rpi");
            img.src = `assets/images/icons/${sk}.png`;
            a.setAttribute("target", "_blank");
            a.setAttribute("class", "ss");
            a.href = i["links"]["repo"] + sv;
            a.innerText = i[sk];
            stat.append(img, a);
            stats.append(stat);
        });

        clfs.setAttribute("class", "rps");
        for (var j of i["clf"]) {
            var clf = document.createElement("div");
            clf.setAttribute("class", "rd-pill");
            clf.innerText = j;
            clfs.append(clf);
        }

        tags.setAttribute("class", "rps");
        for (var j of i["tags"]) {
            var tag = document.createElement("div");
            tag.setAttribute("class", "rd-pill");
            tag.innerText = j;
            tags.append(tag);
        }

        div.append(
            ta,
            h4,
            document.createElement("hr"),
            links,
            stats,
            document.createElement("hr"),
            clfs,
            document.createElement("hr"),
            tags
        );
        main.append(div);
    }
}

function openNav() {
    const header = document.getElementById("main-toc")

    if (header.style.display == "none") {
        header.style.display = "block";
    } else {
        header.style.display = "none";
    }
}

window.onload = function () {
    document.getElementById("head").innerHTML = `
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1, minimum-scale=1" name="viewport">
    <meta content="pdoc 0.10.0" name="generator" />

    <title>Pirate Kings</title>

    <meta name="author" content="Pirate Kings">
    <meta name="description" content="Pirate Kings">
    <meta name="apple-mobile-web-app-title" content="Pirate Kings" />

    <meta property="og:title" content="Pirate Kings">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://pirates.pages.dev">
    <meta property="og:description" content="Pirate Kings">

    <meta content="/assets/images/banner.png" property="og:image" />
    <meta content="Pirate Kings" name="twitter:title" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="/assets/images/banner.png" />
    <meta name="twitter:site:domain" content="pirates.pages.dev" />
    <meta name="twitter:url" content="https://pirates.pages.dev" />

    <link rel="icon" type="image/x-icon" href="/assets/images/icons/logo.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/icons/logo.png" />

    <link rel="stylesheet preload" as="style" href="/styles.css">
    <script src="/script.js"></script>
    <script crossorigin="" defer="" integrity="sha256-Uv3H6lx7dJmRfRvH8TH6kJD1TSK1aFcwgx+mdg3epi8="
        src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/highlight.min.js"></script>
    <script>window.addEventListener('DOMContentLoaded', () => hljs.initHighlighting())</script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>`;

    document.getElementById("sidebar").innerHTML = `
    <h1 id="title">Pirate Kings</h1>
    <div class="toc" id="main-toc">
    </div>
    <div class="toc">
        <ul id="index">
        </ul>
    </div>`
    
    const isMobile = navigator.userAgentData.mobile;

    if (isMobile) {
        document.getElementById("title").remove();
        
        const navbar = document.getElementById("navbar");
        navbar.style.display = "block";
        navbar.innerHTML = `
        <div class="sidebar-button" onClick="openNav()">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 448 512" class="icon">
                <path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z" />    
            </svg>
            <img src="./assets/images/logo-transparent.png" />
            <span class="sitename">Pirate Kings</span>
        </div>`

        const toc = document.getElementById("main-toc");
        toc.setAttribute(
            "style",
            `
                display: none;
                border-right-style: solid;
                border-right-color: #1b1b1b;
                margin-left: 0.5rem;
                height: 100%;
                position: fixed;
                width: 50%;
                z-index: 1;
                top: 5%;
                left: 0;
                background-color: #0f0f0f;
                overflow-x: hidden;
                transition' 0.5s;
                padding-top: 60px;
            `
        )
    }

    document.getElementById("main-toc").innerHTML = `
    <h2>Index</h2>
    <ul>
        <li><a href="/index.html"><strong>Homepage</strong></a></li>
        <li><a href="/apps.html"><strong>Apps</strong></a></li>
    <ul>`

    window[location.href.split("/").pop().split(".")[0]]();
    document.getElementById("head").style = "display: none;";
}
