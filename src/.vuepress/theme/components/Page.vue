<template>
    <main class="page">
        <slot name="top"/>
        <Content class="theme-default-content"/>
        <PageEdit/>
        <PageNav v-bind="{ sidebarItems }"/>
        <slot name="bottom"/>
        <PrimaryFooter/>
    </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
import PrimaryFooter from "@theme/components/PrimaryFooter.vue";

export default {
    components: {
        PrimaryFooter,
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
