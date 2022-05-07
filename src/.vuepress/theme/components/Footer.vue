<template>
    <div class="flex flex--100 flex--x-align-center footer">
        <div class="flex flex--70 flex--x-align-center">
            <p class="disclaimer">
                Trading in blockchains and financial markets is highly speculative and carries a high level of risk.
                It's possible to lose all your capital. This project may not be suitable for everyone, you should ensure that you understand the risks involved.
                Mida and its contributors are not responsible for any technical inconvenience that may lead to money loss, for example a stop loss not being set.
                <br>
                reiryoku@reiryoku.com / dev@reiryoku.com
            </p>
        </div>
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
    border-top: 1px solid $borderColor

.reiryoku-logo
    width 180px

    >>> *
        fill rgb(150, 150, 150) !important

.reiryoku-logo-link
    margin: 4rem 0;

.disclaimer
    margin: 20px 0

    font-size 12px
    color: rgba(200, 200, 200, 0.44)
</style>
