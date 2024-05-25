<template>
    <header class="header">
        <div class="header__cont cont">
            <div class="header__area">
                <RouterLink to="/" class="header__logo link-opacity-hover">
                    <picture class="header__picture">
                        <source srcset="@/assets/images/logo_mob.svg" media="(max-width: 1240px)">
                        <img src="@/assets/images/logo.svg" alt="" class="header__image">
                    </picture>
                </RouterLink>
                <nav class="header__nav">
                    <ul class="header__list">
                        <li class="header__item" v-for="(item, id) in $data.menu" :key="id">
                            <RouterLink :to="item.href" class="header__link link-grey">{{ item.text }}</RouterLink>
                        </li>
                    </ul>
                </nav>
                <RouterLink to="/basket" class="header__basket">
                    <span class="header__basket-value">{{ _formatPrice(basketPrice) }}</span>
                </RouterLink>
                <button class="header__burger" @click="openModalMenu">
                    <img src="@/assets/images/burger.svg" alt="" class="header__burger-icon">
                </button>
            </div>
        </div>
    </header>
</template>

<script>
    import { Typography } from "@/mixins/Typography"

    export default {
        name: "LayoutHeader",
        mixins: [Typography],
        data () {
            return {
                menu: [
                    { text: 'МЕНЮ', href: '/menu' },
                    { text: 'АКЦИИ', href: '/promo' },
                    { text: 'ДОСТАВКА', href: '/delivery' },
                    { text: 'РЕСТОРАНЫ', href: '/restaurants' }
                ]
            }
        },
        computed: {
            basketPrice() {
                return this.$store.getters.BASKET_PRICE
            }
        },
        methods: {
            openModalMenu() {
                this.$store.commit('SET_MODAL_MENU_SHOW', true)
            }
        }
    }
</script>

<style scoped lang="sass">

.header
    position: sticky
    top: -1px
    z-index: 10
    box-shadow: 0 2px 4px -2px #ccc
    background-color: white

.header__cont

.header__area
    position: sticky
    z-index: 10
    top: 0
    display: flex
    align-items: flex-end
    padding-bottom: 10px
    @include media(md)
        align-items: center
        padding-bottom: 5px

.header__logo
    margin-right: 80px
    width: 171px
    @include media(md)
        width: 50px
        margin-right: 40px
    &.router-link-active
        cursor: default
        pointer-events: none

.header__image
    height: 60px
    @include media(md)
        height: 50px

.header__nav
    margin-left: 100px
    margin-bottom: 10px
    @include media(md)
        display: none

.header__list
    display: flex
    align-items: center
    gap: 80px

.header__item

.header__link
    font-size: 20px
    font-weight: 700
    &.router-link-active
        color: $orange

.header__basket
    position: relative
    margin-left: auto
    padding: 8px 8px 8px 44px
    background-color: $orange
    text-decoration: none
    border-radius: 4px
    transition-duration: 0.3s
    transition-property: background-color
    &:hover
        background-color: rgba($orange, .8)
    &::before
        content: ''
        position: absolute
        top: 8px
        left: 8px
        width: 28px
        height: 28px
        background-image: url("@/assets/images/ic_basket_white.svg")
        background-repeat: no-repeat
        background-size: 100% 100%

.header__basket-value
    font-size: 20px
    line-height: 28px
    color: white
    font-weight: 700

.header__burger
    display: none
    @include media(md)
        flex-shrink: 0
        margin-left: 10px
        margin-right: -15px
        display: flex
        align-items: center
        justify-content: center
        width: 60px
        height: 60px

.header__burger-icon
    width: 30px
    height: 30px

</style>
