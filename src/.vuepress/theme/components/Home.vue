<template>
    <div>
        <div class="flex flex--full stream">
            <span class="stream__text stream__text--1 stream__text--repeat-y">
                    /**
                     * sort Used to order an array of integers in ascending order (O(n)).
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
            </span>
            <span class="stream__text stream__text--2 stream__text--repeat-y">
                    /**
                     * sort Used to order an array of integers in ascending order (O(n)).
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
            </span>
            <span class="stream__text stream__text--3 stream__text--repeat-y">
                    /**
                     * sort Used to order an array of integers in ascending order (O(n)).
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
            </span>
            <span class="stream__text stream__text--4 stream__text--repeat-y">
                    /**
                     * sort Used to order an array of integers in ascending order (O(n)).
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
            </span>
            <div class="flex flex--100 flex--y-align-center stream-box">
                <div class="flex flex--100 flex--x-align-center">
                    <p class="description">
                        The TypeScript framework for trading<br> in blockchains
                        and global financial markets
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
        <main class="flex flex--100 home" :aria-labelledby="descriptor.heroText !== null ? 'main-title' : null">
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
        <Footer/>
    </div>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";
import Footer from "@theme/components/Footer";
import LogoDark from "@theme/components/LogoDark";

export default {
    name: "Home",
    components: {
        Footer,
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

        installLink () {
            return {
                link: "/documentation/introduction/installation.html",
                text: "Installation",
            };
        },
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

.description
    max-width 850px
    margin-top 0
    margin-left 30px
    margin-right 30px
    font-size 42px
    font-weight bold
    letter-spacing 1px
    line-height 52px
    text-align center

.action-button
    padding 10px 24px
    background-color $linkColor
    color #1A1A1A
    font-size 18px
    border-radius 12px
    font-weight 600

    &:hover
        color: #1A1A1A

.install-button
    margin-left 20px
    padding 10px 24px
    background-color $linkColor
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
    margin 100px 0

  .feature
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
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

@media (max-width: 1000px)
    .stream__text
        display none

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem

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
    height 400px
    position relative

    margin 0 !important

    //background-image linear-gradient(to left, rgb(228, 209, 74), rgb(228, 209, 74), rgb(228, 209, 74))
    perspective 1100px
    transform-style preserve-3d
    backface-visibility hidden

    border-bottom 1px solid $borderColor


.stream__text
    position absolute

    font-size 0.7rem
    white-space pre

    z-index: 500;

.stream__text--1
    left: 10px
    top: 0

    color rgba($linkColor, 0.8)

    animation: test 8s linear infinite;

.stream__text--2
    left 10px
    top 0
    color rgba($linkColor, 0.8)

    transform translateY(-400px)

    animation: test2 8s linear infinite;

.stream__text--3
    right: 10px
    top: 0

    color rgba($linkColor, 0.8)

    animation: test3 8s linear infinite;

.stream__text--4
    right 10px
    top 0
    color rgba($linkColor, 0.8)

    transform translateY(-400px)

    animation: test4 8s linear infinite;

@keyframes test
    0%
        transform rotateY(45deg) translateY(0)
    100%
        transform rotateY(45deg) translateY(400px)


@keyframes test2
    0%
        transform rotateY(45deg)translateY(-400px)
    100%
        transform rotateY(45deg) translateY(0)

@keyframes test3
    0%
        transform scale(-1, 1) rotateY(45deg) translateY(0)
    100%
        transform scale(-1, 1) rotateY(45deg) translateY(400px)

@keyframes test4
    0%
        transform scale(-1, 1) rotateY(45deg) translateY(-400px)
    100%
        transform scale(-1, 1) rotateY(45deg) translateY(0)


.ea-box
    height 400px
    border-top 1px solid $borderColor
</style>
