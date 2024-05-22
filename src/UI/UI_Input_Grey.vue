<template>
    <input :value="value" @input="updateInput" class="input-grey">
</template>

<script>
    export default {
        name: "UI_Input_Grey",
        props: {
            value: String
        },
        methods: {
            updateInput(event) {
                this.$emit('update:value', event.target.value)
            }
        }
    }
</script>

<style lang="sass" scoped>

.input-grey
    border: 1px solid #e1e1e1
    background-color: #fff
    font-size: 16px
    line-height: 20px
    border-radius: 4px
    padding: 10px 15px
    display: block
    width: 100%
    transition-duration: $transition-duration
    transition-property: border
    &.error
        border: 1px solid $orange

</style>
