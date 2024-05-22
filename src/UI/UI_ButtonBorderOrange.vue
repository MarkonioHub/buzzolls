<template>
    <RouterLink :to="routerHref" class="button-border-orange" v-if="routerHref">
        <slot></slot>
    </RouterLink>
    <a :href="href" class="button-border-orange" v-else-if="href">
        <slot></slot>
    </a>
    <button class="button-border-orange" v-else>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "UI_ButtonBorderOrange",
        props: {
            routerHref: String,
            href: String,
        }
    }
</script>

<style lang="sass" scoped>

.button-border-orange
    display: inline-block
    border: 2px solid $orange
    background-color: #fff
    border-radius: 4px
    padding: 10px
    color: $orange
    font-weight: 700
    font-size: 18px
    line-height: 22px
    text-align: center
    cursor: pointer
    text-decoration: none
    transition-property: background-color, color
    transition-duration: $transition-duration
    &:hover
        background-color: $orange
        color: #ffffff
    &.router-link-active
        background-color: $orange
        color: #ffffff

</style>
