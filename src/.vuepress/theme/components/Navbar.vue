<template>
    <header class="flex flex--100 flex--y-align-center navbar">
        <div class="flex flex--40 left-box">
            <RouterLink :to="$localePath" class="home-link">
                <LogoDark class="logo"/>
            </RouterLink>
            <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
        </div>
        <div class="flex flex--60 flex--x-align-end right-box">
            <SearchBox v-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"/>
            <NavLinks class="links"/>
        </div>
    </header>
</template>

<script>
import SidebarButton from "@theme/components/SidebarButton.vue";
import SearchBox from "@SearchBox";
import NavLinks from "@theme/components/NavLinks.vue";

export default {
    name: "Navbar",
    components: {
        SidebarButton,
        SearchBox,
        NavLinks,
    },
};
</script>

<style lang="stylus" scoped>
.logo
    width 158px

.navbar
    padding 0 40px
    height 100px

    background-color $backgroundColor

.search-box
    margin-right 1.5rem !important

.sidebar-button
    position initial

@media (max-width: $MQMobile)
    .right-box
        display none

    .left-box
        justify-content space-between

        width 100%
</style>
