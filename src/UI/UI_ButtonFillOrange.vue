<template>
    <RouterLink :to="href" class="button-fill-orange" v-if="href">
        <slot></slot>
    </RouterLink>
    <button class="button-fill-orange" v-else>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "UI_ButtonFillOrange",
        props: {
            href: String,
        }
    }
</script>

<style lang="sass" scoped>

.button-fill-orange
    display: inline-block
    padding: 10px 20px
    border-radius: 4px
    background-color: $orange
    letter-spacing: .7px
    font-size: 14px
    line-height: 16px
    color: #ffffff
    text-align: center
    font-weight: 700
    text-decoration: none
    transition-duration: $transition-duration
    transition-property: background-color
    &:hover
        background-color: rgba($orange, .8)

</style>
