<template>
    <div class="menu__tile" v-for="(item, id) in menu" :key="id">
        <h1 class="menu__title"> {{ item.name }} </h1>
        <div class="menu__tile-list">
            <UI_TileItem :product="product" v-for="(product, productId) in products(item.productsId)" :key="productId"
            :productHref="getProductHref(item.slug, product)">
            </UI_TileItem>
        </div>
    </div>
</template>

<script>
    import UI_TileItem from '@/components/TileItem.vue'
    import { toRaw } from "@vue/reactivity"

    export default {
        name: "MenuTile",
        components: {
            UI_TileItem
        },
        computed: {
            menuItems() {
                return this.$store.getters.MENU_ITEMS
            },
            categories() {
                return this.$store.getters.CATEGORIES
            },
            subCategories() {
                return this.$store.getters.SUB_CATEGORIES
            },
            menu() {
                if (this.$route.params.subCategory) {
                    const subCategory = this.subCategories.filter((item) => item.slug === this.$route.params.subCategory)
                    if (subCategory.length) return subCategory
                } else if (this.$route.params.category) {
                    const currentCategory = this.categories.filter((item) => item.slug === this.$route.params.category)
                    if (currentCategory.length) return currentCategory
                }
                return this.categories
            },
        },
        methods: {
            products(productsId) {
                return this.menuItems.filter((item) => productsId.includes(item.id))
            },
            getProductHref(catSlug, product) {
                const subCategory = this.subCategories.filter((item) => item.productsId.includes(product.id))
                const category = this.categories.filter((item) => item.productsId.includes(product.id))
                if (subCategory.length) {
                    return '/menu/' + toRaw(category)[0].slug + '/' + toRaw(subCategory)[0].slug + '/' + product.slug
                } else {
                    return '/menu/' + toRaw(category)[0].slug + '/' + product.slug
                }
            }
        }
    }

</script>

<style lang="sass" scoped>

.menu__tile
    padding: 30px 40px 60px
    @include media(md)
        padding: 40px 0

.menu__title
    margin-bottom: 30px
    font-size: 30px
    line-height: 36px
    text-transform: uppercase

.menu__tile-list
    display: flex
    row-gap: 40px
    column-gap: 20px
    flex-wrap: wrap
    @include media(xs)
        row-gap: 40px
        column-gap: 0

</style>
