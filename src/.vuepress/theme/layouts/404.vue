<template>
    <div class="theme-container">
        <div class="theme-default-content">
            <h1>404</h1>
            <blockquote>{{ chosenRule }}</blockquote>
            <RouterLink to="/">Mida</RouterLink>
        </div>
    </div>
</template>

<script>
const goldenRules = [
    "A single uncontemplated position can destroy the work of a week, month, year or life.",
];

export default {
    computed: {
        chosenRule () {
            return goldenRules[Math.floor(Math.random() * goldenRules.length)]
        },
    },
};
</script>
