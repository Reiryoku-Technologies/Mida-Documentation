module.exports = {
    title: "Mida",
    head: [
        [ "meta", { name: "apple-mobile-web-app-capable", content: "yes" }, ],
        [ "meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }, ],
        [ "script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-38XQR880W6", }, ],
        [ "script", {}, `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-38XQR880W6');
        `]
    ],
    themeConfig: {
        //repo: "Reiryoku-Technologies/Mida",
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
                text: "Repository",
                link: "https://github.com/Reiryoku-Technologies/Mida"
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
                {
                    title: "Utilities",
                    collapsable: false,
                    children: [
                        "utilities/dates",
                        "utilities/events",
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
        "@vuepress/plugin-back-to-top",
        "@vuepress/plugin-medium-zoom",
        "@vuepress/active-header-links",
    ],
};
