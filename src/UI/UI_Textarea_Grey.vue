<template>
    <textarea :value="value" @input="updateInput" class="textarea-grey"></textarea>
</template>

<script>
    export default {
        name: "UI_Textarea_Grey",
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

.textarea-grey
    min-height: 120px
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
