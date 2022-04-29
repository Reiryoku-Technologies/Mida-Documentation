const { description, } = require("../../package.json");

module.exports = {
    title: "Mida",
    description,
    head: [
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }]
    ],
    themeConfig: {
        repo: "Reiryoku-Technologies/Mida",
        //editLinks: true,
        docsDir: "",
        editLinkText: "Contribute to this content on GitHub",
        lastUpdated: true,
        displayAllHeaders: true,
        searchPlaceholder: "Search...",
        nav: [
            {
                text: "Documentation",
                link: "/documentation/",
            },
            {
                text: "Ecosystem",
                link: "/ecosystem/"
            },
            {
                text: "Community",
                link: "/community/"
            },
        ],
        sidebar: {
            "/documentation/": [
                {
                    title: "Introduction",
                    collapsable: false,
                    initialOpenGroupIndex: -1,
                    children: [
                        "",
                        "introduction/installation",
                    ],
                },
                {
                    title: "Getting Started",
                    collapsable: false,
                    initialOpenGroupIndex: 0,
                    children: [
                        "getting-started/login",
                        "getting-started/balance-equity-margin",
                        "getting-started/symbols",
                    ],
                },
                {
                    title: "Trading",
                    collapsable: false,
                    initialOpenGroupIndex: -1,
                    children: [
                        "trading/orders",
                        "trading/deals",
                        "trading/positions",
                    ],
                },
                {
                    title: "Watchers",
                    collapsable: false,
                    initialOpenGroupIndex: -1,
                    children: [
                        "watchers/market-watcher"
                    ],
                },
                {
                    title: "Expert Advisors",
                    collapsable: false,
                    initialOpenGroupIndex: -1,
                    children: [

                    ],
                },
            ],
        }
    },
    plugins: [
        "@vuepress/plugin-back-to-top",
        "@vuepress/plugin-medium-zoom",
    ],
};
