<template>
    <div class="flex flex--100">
        <div class="flex flex--100 flex--x-align-center">
            <div class="flex flex--100 flex--x-align-center">
                <div class="flex flex--60 flex--x-align-center">
                    <h1 id="handbook"><a href="#handbook" class="header-anchor">#</a> Handbook</h1>
                </div>
            </div>
            <div class="sections">
                <div class="section" v-for="item in documentationItems">
                    <span class="section__title">
                        {{ item.title }}
                    </span>
                    <ul class="primary-list" v-for="child in item.children">
                        <li>
                            <RouterLink :to="child.regularPath">{{ child.title }}</RouterLink>
                        </li>
                        <ul>
                            <li v-for="header in child.headers">
                                <RouterLink :to="child.regularPath + '#' + header.slug">{{ header.title }}</RouterLink>
                            </li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
        <PrimaryFooter/>
    </div>
</template>

<script>
import {resolveSidebarItems} from "../util";
import PrimaryFooter from "./PrimaryFooter";

export default {
    name: "HandbookView",
    props: {
        items: {},
    },
    components: {
        PrimaryFooter,
    },
    computed: {
        documentationItems () {
            return resolveSidebarItems(
                this.$page,
                "/documentation/",
                this.$site,
                this.$localePath
            );
        },
    },
};
</script>

<style lang="stylus" scoped>
.sections
    margin 30px 0 80px 0

    columns: 3

.section
    position relative
    display block
    break-inside avoid

    padding 28px 32px
    padding-bottom 50px

    background-color rgb(36, 36, 36)
    border-radius 8px 8px 0 0

    &::before
        content ""
        position absolute
        left 0
        bottom 22px
        display block

        width 100%
        height 28px

        background-color inherit
        border-radius 0 0 8px 8px

        z-index 2

    &::after
        content ""
        position absolute
        left 0
        bottom 0
        display block

        width 100%
        height 50px

        background-color $backgroundColor

        z-index 1

    &__title
        margin-bottom 1em

        font-size 18px
        font-weight 600
        letter-spacing -0.01em

    ul
        list-style-type none

    a
        transition color 200ms

        font-size 15px
        color rgb(170, 200, 228)

        &:hover
            color $linkColor

    .primary-list:last-child
        margin-bottom 0

@media (max-width: 1190px)
    .sections
        columns 2

@media (max-width: 846px)
    .sections
        columns 1
</style>
