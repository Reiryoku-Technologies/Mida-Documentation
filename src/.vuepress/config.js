module.exports = {
    title: "Mida",
    head: [
        [ "meta", { name: "apple-mobile-web-app-capable", content: "yes" }, ],
        [ "meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }, ],
        [ "meta", { name: "theme-color", content: "#1A1A1A" }, ],
        [ "meta", { property: "og:image", content: "https://www.mida.org/mida-background.png" }, ],
        [ "link", { rel: "icon", type: "image/png", sizes: "16x16", href: "favicon-16x16.png" }, ],
        [ "link", { rel: "icon", type: "image/png", sizes: "32x32", href: "favicon-32x32.png" }, ],
        [ "link", { rel: "icon", type: "image/png", sizes: "96x96", href: "favicon-96x96.png" }, ],
        [ "script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-38XQR880W6", }, ],
        [ "script", {}, `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-38XQR880W6');
        `],
    ],
    themeConfig: {
        displayAllHeaders: true,
        searchPlaceholder: "Search...",
        nav: [
            {
                text: "Documentation",
                link: "/documentation/",
            },
            {
                text: "API",
                link: "/api/",
            },
            {
                text: "Ecosystem",
                link: "/ecosystem/",
            },/*
            {
                text: "Sponsors",
                link: "/sponsors/"
            },*/
        ],
        sidebar: {
            "/documentation/playground/": [
                {
                    title: "Quick Start",
                    collapsable: false,
                    children: [
                        "",
                    ],
                },
            ],
            "/documentation/": [
                {
                    title: "Quick Start",
                    collapsable: false,
                    children: [
                        "",
                        "quick-start/installation",
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
                        "essentials/decimals",
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
                    title: "Trading Systems",
                    collapsable: false,
                    children: [
                        "trading-systems/introduction",
                        "trading-systems/hooks",
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
                /*
                {
                    title: "Advanced",
                    collapsable: false,
                    children: [
                        "advanced/compose-periods",
                    ],
                }
                */
            ],
        },
        "/posts/": {
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
