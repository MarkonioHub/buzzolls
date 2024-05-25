<template>
    <div class="recommend-card">
        <div class="recommend-card__area">
            <img :src="product.image" alt="" class="recommend-card__image">
            <div class="recommend-card__box">
                <div class="recommend-card__title">Рекомендуем</div>
                <div class="recommend-card__name">{{ product.name }}</div>
                <div class="recommend-card__size" v-if="product.size">{{ product.size }}</div>
                <UI_ButtonBorderOrange class="recommend-card__button" @click="addProductInBasket">
                    Добавить за {{ _formatPrice(product.price) }}
                </UI_ButtonBorderOrange>
            </div>
        </div>
    </div>
</template>

<script>
    import { Typography } from "@/mixins/Typography"

    export default {
        name: "RecommendCard",
        mixins: [Typography],
        props: {
            product: Object
        },
        methods: {
            addProductInBasket() {
                this.$store.commit('ADD_PRODUCT', { ...this.product, count: 1 })
            }
        }
    }
</script>

<style lang="sass" scoped>

.recommend-card
    border: 1px solid #f0f0f0
    border-radius: 4px
    padding: 20px
    display: flex
    flex-direction: column
    flex-grow: 1

.recommend-card__area
    display: flex
    flex-grow: 1
    @include media(xs)
        flex-direction: column
        align-items: stretch
        text-align: center

.recommend-card__image
    margin-right: 30px
    width: 190px
    height: 127px
    flex-shrink: 0
    @include media(xs)
        margin: 0 auto 20px

.recommend-card__box
    flex-grow: 1
    display: flex
    flex-direction: column

.recommend-card__title
    margin-bottom: 10px
    font-size: 32px
    line-height: 36px
    color: $dark
    font-weight: 700
    @include media(md)
        font-size: 20px
        line-height: 24px

.recommend-card__name
    margin-bottom: 15px
    font-size: 24px
    line-height: 28px
    color: $dark
    @include media(md)
        font-size: 20px
        line-height: 24px

.recommend-card__size
    margin-bottom: 10px
    color: $grey
    font-size: 18px
    line-height: 22px

.recommend-card__button
    margin-top: auto
    width: 100%

</style>
