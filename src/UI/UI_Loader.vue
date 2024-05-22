<template>
    <div class="loader"></div>
</template>

<script>
    export default {
        name: "UI_Loader"
    }
</script>

<style lang="sass" scoped>

.loader
    position: absolute
    z-index: 5
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 50px
    aspect-ratio: 1
    border-radius: 50%
    border: 8px solid $grey
    border-right-color: $orange
    animation: l2 1s infinite linear

@keyframes l2
    to
        transform: translate(-50%, -50%) rotate(1turn)

</style>
