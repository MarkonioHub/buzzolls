<template>
    <section class="basket section">
        <div class="basket__cont cont">
            <h1 class="basket__title">Корзина</h1>
            <div class="basket__tile" v-if="productsBasket.length">
                <div class="basket__item" v-for="(item, id) in productsBasket" :key="id">
                    <BasketCard :product="item"></BasketCard>
                </div>
            </div>
            <div class="basket__empty" v-else>Корзина пуста</div>
            <div class="basket__recommend" v-if="recommendProducts.length">
                <div class="basket__recommend-title" v-if="productsBasket.length">дополнительно к заказу</div>
                <div class="basket__recommend-list">
                    <div class="basket__recommend-item" v-for="(item, id) in recommendProducts" :key="id">
                        <RecommendCard :product="item"></RecommendCard>
                    </div>
                </div>
            </div>
            <div class="basket__result">
                <div class="basket__result-text">Сумма заказа: <b>{{ formatPrice(basketPrice) }}</b></div>
                <UI_ButtonBorderOrange class="basket__result-button" @click="openModalAuth">Оформить заказ</UI_ButtonBorderOrange>
            </div>
        </div>
    </section>
</template>

<script>
    import { Typography } from "@/mixins/Typography"
    import BasketCard from "@/components/BasketCard"
    import RecommendCard from "@/components/RecommendCard"

    export default {
        name: "SectionBasket",
        mixins: [Typography],
        components: {
            BasketCard,
            RecommendCard
        },
        computed: {
            productsBasket() {
                return this.$store.getters.BASKET
            },
            recommendProducts() {
                const products = this.products
                const productsNotInBasket = products.filter((item) => {
                    const existProduct = this.productsBasket.filter((product) => product.id === item.id)
                    return !existProduct.length
                })
                const randomIndex = (productsNotInBasket.length - 1) * Math.random() | 0
                return productsNotInBasket.slice(randomIndex, randomIndex + 2)
            },
            products() {
                return this.$store.getters.MENU_ITEMS
            },
            basketPrice() {
                return this.$store.getters.BASKET_PRICE
            }
        },
        methods: {
            openModalAuth() {
                this.$store.commit('SET_MODAL_AUTH_SHOW', true)
            }
        }
    }
</script>

<style lang="sass" scoped>

.basket

.basket__cont

.basket__title
    margin-bottom: 30px
    color: $dark
    letter-spacing: 1.15px
    text-transform: uppercase
    font-size: 28px
    line-height: 32px

.basket__tile

.basket__item
    &:not(:last-of-type)
        padding-bottom: 20px
        margin-bottom: 20px
        border-bottom: 1px solid #cacaca

.basket__empty
    font-size: 48px
    line-height: 56px
    text-transform: uppercase
    letter-spacing: 1.15px
    margin: 60px 0
    text-align: center

.basket__recommend
    margin: 40px 0

.basket__recommend-title
    text-align: center
    font-size: 28px
    line-height: 34px
    text-transform: uppercase
    letter-spacing: 1.15px
    font-weight: 700
    margin-bottom: 40px
    @include media(md)
        font-size: 20px
        line-height: 24px

.basket__recommend-list
    display: flex
    align-items: stretch
    gap: 0 20px
    @include media(md)
        flex-wrap: wrap
        gap: 20px 0

.basket__recommend-item
    width: calc(50% - 20px)
    display: flex
    @include media(md)
        width: 100%

.basket__result
    border-top: 1px solid #cacaca
    padding-top: 20px
    margin-top: 20px
    display: flex
    justify-content: flex-end
    align-items: center
    @include media(xs)
        flex-direction: column

.basket__result-text
    margin-right: 60px
    font-size: 28px
    line-height: 34px
    @include media(md)
        font-size: 20px
        line-height: 24px
    @include media(xs)
        margin-right: 0
        margin-bottom: 20px

a.basket__result-button
    padding: 10px 30px
    @include media(xs)
        width: 100%

</style>
