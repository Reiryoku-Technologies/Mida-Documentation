module.exports = {
    title: "Mida",
    head: [
        [ "meta", { name: "apple-mobile-web-app-capable", content: "yes" }, ],
        [ "meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }, ]
    ],
    themeConfig: {
        repo: "Reiryoku-Technologies/Mida",
        displayAllHeaders: true,
        searchPlaceholder: "Search...",
        nav: [
            {
                text: "Documentation",
                link: "/documentation/",
            },
            {
                text: "Ecosystem",
                link: "/ecosystem/",
            },
            {
                text: "Community",
                link: "/community/",
            },
        ],
        sidebar: {
            "/documentation/": [
                {
                    title: "Introduction",
                    collapsable: false,
                    children: [
                        "",
                        "introduction/installation",
                    ],
                },
                {
                    title: "Getting Started",
                    collapsable: false,
                    children: [
                        "getting-started/login",
                        "getting-started/balance-equity-margin",
                        "getting-started/symbols",
                    ],
                },
                {
                    title: "Trading",
                    collapsable: false,
                    children: [
                        "trading/orders",
                        "trading/deals",
                        "trading/positions",
                    ],
                },
                {
                    title: "Ticks and Candlesticks",
                    collapsable: false,
                    children: [
                        "ticks-candlesticks/market-watcher",
                        "ticks-candlesticks/time-series",
                    ],
                },
                {
                    title: "Expert Advisors",
                    collapsable: false,
                    children: [
                        "expert-advisors/introduction",
                        "expert-advisors/lifecycle",
                        "expert-advisors/hooks",
                    ],
                },
                {
                    title: "Indicators",
                    collapsable: false,
                    children: [
                        "technical-indicators/introduction",
                    ],
                },
            ],
        },
        "/open-api/": {
            children: [
                "",
            ],
        },
    },
    plugins: [
        [
            "@vuepress/google-analytics",
            {
                "ga": "G-0TCFXWJKGP",
            },
        ],
        "@vuepress/plugin-back-to-top",
        "@vuepress/plugin-medium-zoom",
    ],
};
