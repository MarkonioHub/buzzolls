<template>
    <div class="basket-card">
        <picture class="basket-card__picture">
            <img :src="product.image" alt="" class="basket-card__image">
        </picture>
        <div class="basket-card__box">
            <div class="basket-card__name">{{ product.name }}</div>
            <div class="basket-card__size" v-if="product.size">{{ product.size }}</div>
        </div>
        <div class="basket-card__price-box">
            <div class="basket-card__price">{{ formatPrice(product.price) }}</div>
        </div>
        <div class="basket-card__counter">
            <button class="basket-card__counter-btn basket-card__counter-btn_minus" v-if="product.count > 1"
             @click="decrementProduct">
            </button>
            <button class="basket-card__counter-btn basket-card__counter-btn_remove" v-else @click="removeProduct"></button>
            <div class="basket-card__counter-value">{{ product.count }}</div>
            <button class="basket-card__counter-btn basket-card__counter-btn_plus" @click="incrementProduct"></button>
        </div>
    </div>
</template>

<script>
    import { Typography } from "@/mixins/Typography"

    export default {
        name: "BasketCard",
        mixins: [Typography],
        props: {
            product: Object
        },
        methods: {
            incrementProduct() {
                this.$store.commit('INCREMENT_PRODUCT_COUNT', { id: this.product.id })
            },
            decrementProduct() {
                this.$store.commit('DECREMENT_PRODUCT_COUNT', { id: this.product.id })
            },
            removeProduct() {
                this.$store.commit('REMOVE_PRODUCT', { id: this.product.id })
            }
        },
    }
</script>

<style lang="sass" scoped>

.basket-card
    display: flex
    align-items: center
    gap: 0 20px
    @include media(sm)
        flex-wrap: wrap
        justify-content: flex-end
    @include media(xs)
        justify-content: unset
        position: relative

.basket-card__picture
    flex-shrink: 0
    margin-right: 60px
    width: 200px
    height: 135px
    @include media(md)
        margin-right: 30px
    @include media(xs)
        margin-right: 0
        position: relative
        width: 100%
        height: auto
        padding-bottom: 67%
        margin-bottom: 10px

.basket-card__image
    object-fit: cover
    height: 100%
    @include media(xs)
        position: absolute
        top: 0
        right: 0
        bottom: 0
        left: 0

.basket-card__box
    flex-grow: 1
    @include media(sm)
        flex-grow: unset
        width: calc(100% - 250px)
        margin-bottom: 20px
    @include media(xs)
        width: 50%
        padding-right: 20px
        margin-bottom: 0
        min-height: 70px

.basket-card__name
    font-size: 28px
    line-height: 36px
    color: $dark
    @include media(md)
        font-size: 24px
        line-height: 28px

.basket-card__size
    margin-top: 10px
    font-size: 20px
    line-height: 26px
    color: $grey
    @include media(md)
        font-size: 16px
        line-height: 18px

.basket-card__price-box
    width: 250px
    flex-shrink: 0
    @include media(md)
        width: 180px
    @include media(xs)
        width: 50%
        margin-bottom: 10px
        position: absolute
        right: 0
        bottom: 30px

.basket-card__price
    font-size: 26px
    line-height: 32px
    color: $dark
    text-align: right
    @include media(md)
        font-size: 20px
        line-height: 24px

.basket-card__counter
    max-width: 150px
    width: 100%
    flex-shrink: 0
    display: flex
    align-items: center
    justify-content: flex-end
    @include media(xs)
        max-width: 50%
        position: absolute
        right: 0
        bottom: 0

.basket-card__counter-btn
    width: 30px
    height: 30px
    flex-shrink: 0
    transition-duration: $transition-duration
    transition-property: opacity
    &:hover
        opacity: 0.7

.basket-card__counter-btn_minus
    background-image: url("@/assets/images/ic_basket_minus.svg")

.basket-card__counter-btn_remove
    background-image: url("@/assets/images/ic_basket_remove.svg")

.basket-card__counter-btn_plus
    background-image: url("@/assets/images/ic_basket_plus.svg")

.basket-card__counter-value
    margin: 0 20px
    border: none
    font-size: 20px
    line-height: 24px
    color: $dark
    width: 22px
    text-align: center

</style>
