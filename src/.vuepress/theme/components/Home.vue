<template>
    <div>
        <div class="flex flex--full stream">
            <span class="stream__text stream__text--1 stream__text--repeat-y">
                {{ animatedCode }}
            </span>
            <span class="stream__text stream__text--2 stream__text--repeat-y">
                {{ animatedCode }}
            </span>
            <span class="stream__text stream__text--3 stream__text--repeat-y">
                {{ animatedCode }}
            </span>
            <span class="stream__text stream__text--4 stream__text--repeat-y">
                {{ animatedCode }}
            </span>
            <div class="flex flex--100 flex--y-align-center stream-box">
                <div class="flex flex--100 flex--x-align-center">
                    <p class="headline">
                        The framework for trading<br>
                        in global financial markets
                    </p>
                </div>
                <div class="flex flex--100 flex--x-align-center">
                    <p class="description">
                        A full-featured ecosystem for trading financial assets<br>
                        such as crypto, stocks, forex or commodities.
                    </p>
                </div>
                <div class="flex flex--100 flex--x-align-center">
                    <NavLink
                        class="action-button"
                        :item="actionLink"
                    />
                    <NavLink
                        class="install-button"
                        :item="installLink"
                    />
                </div>
            </div>
        </div>
        <main class="flex flex--100 home">
            <div v-if="descriptor.features && descriptor.features.length" class="flex flex--100 flex--x-align-between features">
                <div
                    v-for="(feature, index) in descriptor.features"
                    :key="index"
                    class="feature"
                >
                    <h2>{{ feature.title }}</h2>
                    <p>{{ feature.details }}</p>
                </div>
            </div>
            <Content class="theme-default-content custom"/>
        </main>
        <div class="flex flex--100 flex--y-align-center last-posts">
            <div class="flx flex--50 post-preview">
                <div class="flex flex--100 flex--x-align-center">
                    <p class="headline">Get started with Binance</p>
                </div>
                <div class="flex flex--100 flex--x-align-center">
                    <p class="description">
                        Check out the trading systems documentation to create and deploy<br>
                        your first maintainable and platform-neutral trading system.
                    </p>
                </div>
                <div class="flex flex--100 flex--x-align-center">
                    <NavLink
                        class="action-button"
                        :item="{ link: '', text: 'Mida Binance' }"
                    />
                </div>
            </div>
            <div class="flx flex--50 post-preview">
                <div class="flex flex--100 flex--x-align-center">
                    <p class="headline">Get started with cTrader</p>
                </div>
                <div class="flex flex--100 flex--x-align-center">
                    <p class="description">
                        Check out the trading systems documentation to create and deploy<br>
                        your first maintainable and platform-neutral trading system.
                    </p>
                </div>
                <div class="flex flex--100 flex--x-align-center">
                    <NavLink
                        class="action-button"
                        :item="{ link: '', text: 'Mida cTrader' }"
                    />
                </div>
            </div>
        </div>
        <div class="flex flex--100 flex--y-align-center trading-systems-box">
            <div class="flex flex--100 flex--x-align-center">
                <p class="headline">Create your first trading system</p>
            </div>
            <div class="flex flex--100 flex--x-align-center">
                <p class="description">
                    Check out the trading systems documentation to create and deploy<br>
                    your first maintainable and platform-neutral trading system.
                </p>
            </div>
            <div class="flex flex--100 flex--x-align-center">
                <NavLink
                    class="action-button"
                    :item="tradingSystemsLink"
                />
            </div>
        </div>
        <!--
        <div class="flex flex--100 flex--y-align-center business-box">
            <div class="flex flex--100 flex--x-align-center">
                <p class="headline">Grow your business with Mida</p>
            </div>
            <div class="flex flex--100 flex--x-align-center">
                <p class="description">
                    Mida helps scaling HFTs, algo/quant funds, exchanges and brokers,<br>
                    contact reiryoku@reiryoku.com for business inquiries.
                </p>
            </div>
        </div>
        -->
        <PrimaryFooter/>
    </div>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";
import PrimaryFooter from "@theme/components/PrimaryFooter";
import LogoDark from "@theme/components/LogoDark";

export default {
    name: "Home",
    components: {
        PrimaryFooter,
        LogoDark,
        NavLink,
    },
    computed: {
        descriptor () {
            return this.$page.frontmatter;
        },

        actionLink () {
            return {
                link: this.descriptor.actionLink,
                text: this.descriptor.actionText,
            };
        },

        tradingSystemsLink () {
            return {
                link: "/documentation/trading-systems/introduction.html",
                text: "Trading Systems →",
            };
        },

        installLink () {
            return {
                link: "/documentation/quick-start/installation.html",
                text: "Installation",
            };
        },

        animatedCode () {
            return `
                /**
                 * sort Used to order an array of integers in ascending order (O(n))
                 * @param {Array} arr
                 * @return {Promise}
                 */
                 function sort (arr) {
                    return new Promise(resolve => {
                        const sorted = [];

                        for (const item of arr) {
                            setTimeout(item => sorted.push(item), item, item);
                        }

                        setTimeout(() => resolve(sorted), arr.reduce((a, b) => a + b, 0) + 1);
                    });
                 }
            `;
        }
    },
};
</script>

<style lang="stylus" scoped>
.logo
    width 382px
    margin: 100px 0 6px 0

.featured-brokers
    width 858px
    margin: 0 auto
    display none

.stream-box
    height inherit

    z-index 5000

.headline
    max-width 900px
    margin 0 30px !important
    font-size 42px
    font-weight bold
    letter-spacing 1px
    line-height 52px
    text-align center

.description
    max-width 900px
    margin: 20px 30px 40px 30px !important
    font-size 18px
    font-weight 500
    letter-spacing 0.2px
    text-align center
    color rgba(235, 235, 235, 0.6)


.action-button
    padding 10px 24px
    background-image linear-gradient(45deg, $linkColor, darken($linkColor, 20%))
    color #1A1A1A
    font-size 18px
    border-radius 12px
    font-weight 600

    &:hover
        color: #1A1A1A

.install-button
    margin-left 20px
    padding 10px 24px
    background-image linear-gradient(45deg, $linkColor, darken($linkColor, 20%))
    color #1A1A1A
    font-size 18px
    border-radius 12px
    font-weight 600

    &:hover
        color: #1A1A1A

.hero
    background-color transparent

.home
    max-width $homePageWidth
    margin 0 auto
    display block

    .features
        max-width 960px
        margin 100px 0

    .feature
        position relative
        box-sizing border-box
        flex 0 32%
        padding 28px 36px

    h2
        font-size 20px
        font-weight bold
        color rgba(255, 255, 255, 0.87)
        letter-spacing 0.2px
        border-bottom none
        padding-bottom 0
        font-style italic
    p
        font-size 15px
        font-weight 400
        letter-spacing 0.2px
        color rgba(235, 235, 235, 0.6)

    .footer
        padding 2.5rem
        border-top 1px solid $borderColor
        text-align center
        color lighten($textColor, 25%)

@media (max-width: $MQMobile)
    .home
        .features
            flex-direction column
        .feature
            max-width 100%
            padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
    .home
        .hero
            img
                max-height 210px
                margin 2rem auto 1.2rem
            h1
                font-size 2rem
            h1, .action
                margin 1.2rem auto
        .feature
            h2
                font-size 1.25rem


.stream
    width 100%
    overflow hidden
    height 500px
    position relative

    margin 0 !important

    //background-image linear-gradient(to left, rgb(228, 209, 74), rgb(228, 209, 74), rgb(228, 209, 74))
    perspective 1100px
    transform-style preserve-3d
    backface-visibility hidden

    border-bottom 1px solid $borderColor


@media (max-width: 1000px)
    .stream
        height 620px

    .stream__text
        display none


.business-box
    width 100%
    overflow hidden
    height 330px
    position relative

    margin 0 !important

    border-top 1px solid $borderColor

    .description
        margin: 20px 30px 0 20px !important

.trading-systems-box
    width 100%
    overflow hidden
    height 430px
    position relative

    margin 0 !important

    border-top 1px solid $borderColor

    .description
        margin: 20px 30px 40px 20px !important

.last-posts
    width 100%
    overflow hidden
    position relative

    margin 0 !important

    border-top 1px solid $borderColor

    .post-preview
        padding: 110px 0

    .post-preview:first-child
        width calc(50% - 1px)

        border-right 1px solid $borderColor

    .description
        margin: 20px 30px 40px 20px !important


.stream__text
    position absolute

    font-size 0.7rem
    white-space pre

    color rgba($linkColor, 0.8)


.stream__text--1
    left: 10px
    top: 0

    animation: test 8s linear infinite;

.stream__text--2
    left 10px
    top 0

    transform translateY(-400px)

    animation: test2 8s linear infinite;

.stream__text--3
    right: 10px
    top: 0

    animation: test3 8s linear infinite;

.stream__text--4
    right 10px
    top 0

    transform translateY(-400px)

    animation: test4 8s linear infinite;






@keyframes test
    0%
        transform rotateY(45deg) translateY(0)
    100%
        transform rotateY(45deg) translateY(500px)


@keyframes test2
    0%
        transform rotateY(45deg) translateY(-500px)
    100%
        transform rotateY(45deg) translateY(0)

@keyframes test3
    0%
        transform rotateY(135deg) translateY(0)
    100%
        transform rotateY(135deg) translateY(500px)

@keyframes test4
    0%
        transform rotateY(135deg) translateY(-500px)
    100%
        transform rotateY(135deg) translateY(0)
</style>
