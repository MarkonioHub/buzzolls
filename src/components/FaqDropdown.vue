<template>
    <div class="faq-dropdown">
        <div class="faq-dropdown__title" @click="toggleDropdown">{{ title }}</div>
        <div class="faq-dropdown__content-box" ref="contentBox">
            <div class="faq-dropdown__content" v-html="content">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FaqDropdown",
        props: {
            title: String,
            content: String
        },
        methods: {
            toggleDropdown() {
                const box = this.$refs.contentBox
                if (box.style.height) {
                    box.style.height = ''
                } else {
                    box.style.height = box.scrollHeight + "px"
                }
            }
        }
    }
</script>

<style lang="sass">

.faq-dropdown__content
    ul
        margin-bottom: 10px
        padding-left: 40px
    p, li
        font-size: 16px
        line-height: 18px
    li
        list-style: circle
    a
        color: #0000EE
        text-decoration: none

</style>

<style lang="sass" scoped>

.faq-dropdown

.faq-dropdown__title
    border-bottom: 2px solid
    letter-spacing: 1.15px
    font-size: 22px
    line-height: 26px
    color: $orange
    padding: 10px
    cursor: pointer

.faq-dropdown__content-box
    max-width: 1280px
    width: 100%
    height: 0
    overflow: hidden
    transition-duration: $transition-duration
    transition-property: height

.faq-dropdown__content
    padding: 20px

</style>
