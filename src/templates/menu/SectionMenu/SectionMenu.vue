<template>
    <section class="menu">
        <div class="menu__cont cont">
            <div class="menu__area">
                <div class="menu__sidebar">
                    <LayoutSidebar></LayoutSidebar>
                </div>
                <div class="menu__wrap">
                    <ProductCard v-if="productSlug"></ProductCard>
                    <MenuTile v-else></MenuTile>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import MenuTile from "@/templates/menu/SectionMenu/components/MenuTile"
    import ProductCard from "@/templates/menu/SectionMenu/components/ProductCard"
    import LayoutSidebar from '@/layout/LayoutSidebar.vue'

    export default {
        name: "MenuLayer",
        components: {
            MenuTile,
            ProductCard,
            LayoutSidebar
        },
        computed: {
            subCategories() {
                return this.$store.getters.SUB_CATEGORIES
            },
            productSlug () {
                const subCategorySlug = this.$route.params.subCategory
                const isSubCategory = this.subCategories.filter((item) => item.slug === subCategorySlug)
                if (!isSubCategory.length) {
                    return subCategorySlug
                }
                return this.$route.params.product
            }
        }
    }
</script>

<style lang="sass" scoped>

.menu

.menu__cont

.menu__area
    display: flex

.menu__sidebar
    display: flex
    flex-shrink: 0
    max-width: 320px
    width: 100%
    @include media(md)
        display: none

.menu__wrap
    flex-grow: 1

</style>
