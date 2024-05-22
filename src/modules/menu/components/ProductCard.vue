<template>
    <div class="product-card" v-for="(item, id) in product" :key="id">
        <div class="product-card__bread-crumbs">
            <RouterLink :to="'/menu/' + cat.slug" class="product-card__bread-crumbs-item link-grey"
                        v-for="(cat, catId) in getCategory(item.id)" :key="catId">
                {{ cat.name }}
            </RouterLink>
            <RouterLink :to="'/menu/' + this.$route.params.category + '/' + cat.slug" class="product-card__bread-crumbs-item link-grey"
                        v-for="(cat, catId) in getSubCategory(item.id)" :key="catId">
                {{ cat.name }}
            </RouterLink>
            <span class="product-card__bread-crumbs-item">{{ item.name }}</span>
        </div>
        <div class="product-card__wrap">
            <div class="product-card__area">
                <div class="product-card__tags" v-if="item.tags">
                    <div class="product-card__tag" v-for="(tag, id) in item.tags" :key="id"
                         :style="`background-color: ${tag.color}`">
                        {{ tag.name }}
                    </div>
                </div>
                <picture class="product-card__picture">
                    <img :src="item.image" alt="" class="product-card__image">
                </picture>
            </div>
            <div class="product-card__box">
                <div class="product-card__name">{{ item.name }}</div>
                <div class="product-card__description">{{ item.description }}</div>
                <div class="product-card__size" v-if="item.size">{{ item.size }}</div>
                <div class="product-card__nutritional" v-if="item.nutritional_value">
                    <div class="product-card__nutritional-name">Пищевая ценность на 100 г:</div>
                    <div class="product-card__nutritional-value" v-html="item.nutritional_value"></div>
                </div>
                <UI_ButtonBorderOrange class="product-card__button" @click="addProductInBasket">
                    {{ `Добавить за ${formatPrice(item.price)}` }}
                </UI_ButtonBorderOrange>
            </div>
        </div>
    </div>
</template>

<script>
    import { Typography } from "@/mixins/Typography"
    import { toRaw } from "@vue/reactivity"

    export default {
        name: "ProductCard",
        mixins: [Typography],
        computed: {
            menuItems() {
                return this.$store.getters.MENU_ITEMS
            },
            subCategories() {
                return this.$store.getters.SUB_CATEGORIES
            },
            categories() {
                return this.$store.getters.CATEGORIES
            },
            product() {
                const subCategorySlug = this.$route.params.subCategory
                const isSubCategory = this.subCategories.filter((item) => item.slug === subCategorySlug)
                let productSlug
                if (!isSubCategory.length) {
                    productSlug = subCategorySlug
                } else {
                    productSlug = this.$route.params.product
                }
                return this.menuItems.filter((item) => item.slug === productSlug)
            },
        },
        methods: {
            getCategory(id) {
                return this.categories.filter((item) => item.productsId.includes(id))
            },
            getSubCategory(id) {
                return this.subCategories.filter((item) => item.productsId.includes(id))
            },
            addProductInBasket() {
                this.$store.commit('ADD_PRODUCT', { ...toRaw(this.product[0]), count: 1 })
            }
        }
    }
</script>

<style lang="sass" scoped>

.product-card
    padding: 30px 40px 60px
    @include media(md)
        padding: 40px 0

.product-card__bread-crumbs
    margin-bottom: 20px
    display: flex

.product-card__bread-crumbs-item
    font-size: 18px
    line-height: 20px

a.product-card__bread-crumbs-item
    padding-right: 10px
    margin-right: 10px
    position: relative
    &::before
        content: "/"
        font-size: 18px
        line-height: 20px
        position: absolute
        right: -4px

span.product-card__bread-crumbs-item
    color: $orange

.product-card__wrap
    display: flex

.product-card__area
    margin-right: 20px
    position: relative
    width: 400px
    flex-shrink: 0

.product-card__tags
    position: absolute
    top: 5px
    left: -10px
    color: #ffffff
    display: flex
    flex-direction: column
    align-items: flex-start

.product-card__tag
    position: relative
    margin-bottom: 10px
    padding: 5px
    border-radius: 5px 5px 5px 0
    font-size: 16px
    line-height: 18px

.product-card__picture

.product-card__image
    object-fit: cover

.product-card__box
    flex-grow: 1

.product-card__name
    margin-bottom: 20px
    font-size: 26px
    line-height: 30px

.product-card__description
    margin-bottom: 20px
    font-size: 16px
    line-height: 18px
    color: $grey

.product-card__size
    margin-bottom: 20px
    font-size: 16px
    line-height: 18px
    color: $dark
    font-weight: 700

.product-card__nutritional

.product-card__nutritional-name
    font-weight: 700
    font-size: 16px
    line-height: 18px
    color: $dark

.product-card__nutritional-value
    font-size: 16px
    line-height: 18px
    color: $grey

.product-card__button
    margin-top: 20px
    width: 100%

</style>
