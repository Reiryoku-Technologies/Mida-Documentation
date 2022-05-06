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
                text: "Examples",
                items: [
                    { text: 'Trading Bots', items: [
                            { text: 'Chinese', link: '/language/chinese/' },
                            { text: 'Japanese', link: '/language/japanese/' }
                        ] },
                    { text: 'Arbitraging', items: [
                            { text: 'Chinese', link: '/language/chinese/' },
                            { text: 'Japanese', link: '/language/japanese/' }
                        ] }
                ]
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
                    title: "Essentials",
                    collapsable: false,
                    children: [
                        "essentials/login",
                        "essentials/balance-equity-margin",
                        "essentials/symbols",
                        "essentials/assets",
                    ],
                },
                {
                    title: "Trading",
                    collapsable: false,
                    children: [
                        "trading/orders",
                        "trading/trades",
                        "trading/positions",
                    ],
                },
                {
                    title: "Ticks and Candlesticks",
                    collapsable: false,
                    children: [
                        "ticks-candlesticks/market-watcher",
                        "ticks-candlesticks/candlesticks",
                        "ticks-candlesticks/timeframes",
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
