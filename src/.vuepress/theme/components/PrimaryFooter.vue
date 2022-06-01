<template>
    <div class="flex flex--100 flex--x-align-center footer">
        <div class="flex flex--70 flex--x-align-center">
            <p class="paragraph">
                Made with ❤️ by Reiryoku Technologies
                <br>
                Copyright © 2020-{{ currentYear }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    computed: {
        currentYear () {
            return (new Date()).getFullYear();
        },
    },
};
</script>

<style lang="stylus" scoped>
.footer
    user-select none
    cursor: default
    border-top 1px solid $borderColor

.paragraph
    margin: 24px
    font-size 12px
    text-align center
    color: rgba(200, 200, 200, 0.44)
</style>
