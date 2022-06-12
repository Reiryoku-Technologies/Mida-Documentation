<template>
    <header class="flex flex--100 flex--y-align-center navbar">
        <div class="flex flex--40 left-box">
            <RouterLink :to="$localePath" class="home-link">
                <LogoDark class="logo"/>
            </RouterLink>
            <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
        </div>
        <div class="flex flex--60 flex--x-align-end right-box">
            <div class="flex flex--y-align-center">
                <SearchBox v-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"/>
                <NavLinks class="links"/>
                <a href="https://github.com/Reiryoku-Technologies/Mida" target="_blank" class="flex repository-link">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" class="github-icon">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                </a>
            </div>
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

.github-icon
    transition fill 200ms

    width 24px

    fill rgba(235, 235, 235, 0.6)

.repository-link
    margin-left 1.5rem

    &:hover .github-icon
        fill $linkColor
</style>
