<template>
    <div :class="classNameMod ? `modal modal_${classNameMod}` : 'modal'">
        <div class="modal__layer" @click="this.$emit('closeModal')"></div>
        <div class="modal__wrap">
            <div class="modal__content">
                <button class="modal__close" @click="this.$emit('closeModal')">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#737373" d="M19.5,17.8c0.5,0.5,0.5,1.3,0,1.8l0,0c-0.5,0.5-1.3,0.5-1.8,0L0.5,2.2C0,1.7,0,0.9,0.5,0.5l0,0 C0.9,0,1.7,0,2.2,0.5L19.5,17.8z"/>
                        <path fill="#737373" d="M2.2,19.5c-0.5,0.5-1.3,0.5-1.8,0l0,0c-0.5-0.5-0.5-1.3,0-1.8L17.8,0.5c0.5-0.5,1.3-0.5,1.8,0l0,0 c0.5,0.5,0.5,1.3,0,1.8L2.2,19.5z"/>
                    </svg>
                </button>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LayoutModal",
        props: {
            classNameMod: String
        }
    }
</script>

<style lang="sass">

.modal_menu.v-enter-from
    .modal__wrap
        transform: translate(-100%)

.modal_menu.v-enter-to
    .modal__wrap
        transform: translate(0)

.modal_menu.v-leave-from
    .modal__wrap
        transform: translate(0)

.modal_menu.v-leave-to
    .modal__wrap
        transform: translate(-100%)

.modal_menu.v-enter-active, .modal_menu.v-leave-active
    transition: opacity 0.5s ease !important
    .modal__wrap
        transition: transform 0.5s ease !important

</style>

<style lang="sass" scoped>

.modal
    display: flex
    position: fixed
    z-index: 1000
    top: 0
    right: 0
    bottom: 0
    left: 0
    overflow-y: auto
    transition-duration: $transition-duration
    transition-property: opacity

.modal_active
    opacity: 1
    pointer-events: all

.modal_small
    .modal__wrap
        width: 500px

.modal_menu
    .modal__wrap
        width: 600px
        margin: 0 auto 0 0
        padding: 0
    .modal__content
        border-radius: 0
        min-height: 100vh
        padding: 0
    .modal__close
        top: 10px
        right: 10px

.modal__layer
    position: fixed
    z-index: -1
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: rgba(0, 34, 46, 0.5)
    cursor: pointer

.modal__wrap
    margin: auto
    width: 800px
    padding: 20px

.modal__content
    position: relative
    z-index: 1
    background: #ffffff
    border-radius: 6px
    padding: 50px 30px 30px
    @include media(xs)
        padding: 50px 18px 18px
        border-radius: 16px

.modal__close
    position: absolute
    z-index: 1
    top: 20px
    right: 20px
    width: 20px
    height: 20px
    path
        fill: $grey
        transition-duration: $transition-duration
        transition-property: fill
    &:hover
        path
            fill: $orange

</style>
