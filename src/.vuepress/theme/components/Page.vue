<template>
    <main class="page">
        <slot name="top"/>
        <Content class="theme-default-content"/>
        <PageEdit/>
        <PageNav v-bind="{ sidebarItems }"/>
        <slot name="bottom"/>
        <Footer/>
    </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
import Footer from "@theme/components//Footer.vue";

export default {
    components: {
        Footer,
        PageEdit,
        PageNav,
    },
    props: [
        "sidebarItems",
    ],
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  display block

</style>
