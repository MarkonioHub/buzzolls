<template>
    <div class="header-top">
        <div class="header-top__cont cont">
            <div class="header-top__area">
                <div class="header-top__city">Киров</div>
                <a href="tel:88332699690" class="header-top__phone link-orange">8 833 269 96 90</a>
                <div class="header-top__work-time">ежедневно с 10:00 до 23:00</div>
                <div class="header-top__lk link-orange" @click="openModalAuth">
                    <span>регистрация/вход</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LayoutHeaderTop",
        methods: {
            openModalAuth() {
                this.$store.commit('SET_MODAL_AUTH_SHOW', true)
            }
        }
    }
</script>

<style scoped lang="sass">

.header-top

.header-top__area
    display: flex
    align-items: center

.header-top__city
    font-size: 16px
    color: $orange
    font-weight: 700

.header-top__phone
    margin-left: auto
    margin-right: 100px
    font-size: 16px
    color: #737373
    font-weight: 700
    text-decoration: none
    padding: 5px
    @include media(sm)
        margin-right: 10px

.header-top__work-time
    margin-right: 100px
    font-size: 16px
    color: #737373
    @include media(md)
        display: none

.header-top__lk
    flex-shrink: 0
    position: relative
    padding: 5px 5px 5px 23px
    cursor: pointer
    font-size: 16px
    color: #737373
    line-height: 23px
    @include media(sm)
        margin-right: -9px
        width: 50px
        height: 50px
        padding: 0
    &:hover
        &::before
            background-image: url("@/assets/images/ic_lk_orange.svg")
            background-repeat: no-repeat
            background-size: 100% 100%
    span
        @include media(sm)
            display: none
    &::before
        content: ''
        position: absolute
        top: 5px
        left: 0
        width: 23px
        height: 23px
        background-image: url("@/assets/images/ic_lk_grey.svg")
        background-repeat: no-repeat
        background-size: 100% 100%
        transition-duration: 0.3s
        transition-property: background
        @include media(sm)
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            width: 30px
            height: 30px
    &::after
        content: ''
        position: absolute
        background-image: url("@/assets/images/ic_lk_orange.svg")
        opacity: 0
        pointer-events: none
        width: 0
        height: 0

</style>
