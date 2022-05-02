<template>
    <div class="flex flex--100 flex--x-align-center footer">
        <a href="https://github.com/Reiryoku-Technologies" target="_blank" class="reiryoku-logo-link">
            <ReiryokuLogo class="reiryoku-logo"/>
        </a>
    </div>
</template>

<script>
import ReiryokuLogo from "@theme/components/ReiryokuLogo";

export default {
    name: "Footer",
    components: {
        ReiryokuLogo,
    },
};
</script>

<style lang="stylus" scoped>
.footer
    margin: 100px 0 0 0

    border-top: 1px solid $borderColor

.reiryoku-logo
    width 180px

    >>> *
        fill rgb(150, 150, 150) !important

.reiryoku-logo-link
    margin: 4rem 0 2rem 0;
</style>
