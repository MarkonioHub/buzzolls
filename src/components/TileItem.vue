<template>
    <div class="tile-item">
        <RouterLink :to="productHref" class="tile-item__link">
            <div class="tile-item__box">
                <picture class="tile-item__picture">
                    <img :src="this.product.image" alt="" class="tile-item__image">
                </picture>
                <div class="tile-item__tags">
                    <div class="tile-item__tag" :style="`background-color: ${item.color}`" v-for="(item, id) in this.product.tags" :key="id">
                        {{ item.name }}
                        <span class="tile-item__tag-angle" :style="`border-top-color: ${item.color}`"></span>
                    </div>
                </div>
            </div>
            <div class="tile-item__name">{{ this.product.name }}</div>
        </RouterLink>
        <div class="tile-item__area">
            <div class="tile-item__desc">{{ this.product.description }}</div>
            <UI_ButtonBorderOrange class="tile-item__button" @click="addProductInBasket">
                Добавить за {{ formatPrice(this.product.price) }}
            </UI_ButtonBorderOrange>
        </div>
    </div>
</template>

<script>
    import { Typography } from "@/mixins/Typography"

    export default {
        name: "TileItem",
        mixins: [Typography],
        props: {
            product: Object,
            productHref: String
        },
        methods: {
            addProductInBasket() {
                this.$store.commit('ADD_PRODUCT', { ...this.product, count: 1 })
            }
        }
    }
</script>

<style lang="sass" scoped>

.tile-item
    max-width: 320px
    width: 100%
    display: flex
    flex-direction: column
    @include media(lg)
        max-width: 249px
    @include media(md)
        max-width: 100%
        width: calc(50% - 20px)
    @include media(xs)
        width: 100%

.tile-item__link
    text-decoration: none
    &:hover
        .tile-item__name
            color: $orange

.tile-item__box
    position: relative

.tile-item__picture
    margin-bottom: 10px
    position: relative
    padding-bottom: 67%

.tile-item__image
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    height: 100%
    object-fit: cover

.tile-item__tags
    position: absolute
    top: 5px
    left: -10px
    color: #ffffff
    display: flex
    flex-direction: column
    align-items: flex-start

.tile-item__tag
    position: relative
    margin-bottom: 10px
    padding: 5px
    border-radius: 5px 5px 5px 0
    font-size: 16px
    line-height: 18px

.tile-item__tag-angle
    width: 0
    height: 0
    border-top: 12px solid
    border-right: 17px solid transparent
    position: absolute
    bottom: -6px
    left: 0

.tile-item__name
    margin-bottom: 10px
    font-size: 28px
    line-height: 32px
    transition-duration: $transition-duration
    transition-property: color

.tile-item__area
    margin-top: auto

.tile-item__desc
    margin-bottom: 20px
    font-size: 16px
    line-height: 18px
    color: $grey
    display: -webkit-box
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
    overflow: hidden
    height: 36px

.tile-item__button
    margin-top: 20px
    display: block
    width: 100%
    font-size: 18px
    line-height: 22px

</style>
