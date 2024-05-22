<template>
    <LayoutModal @closeModal="closeModal" :classNameMod="'menu'">
        <div class="mobile-menu">
            <ul class="mobile-menu__list">
                <li class="mobile-menu__item">
                    <RouterLink :to="'/'" class="sidebar__link link-grey">Главная</RouterLink>
                </li>
                <li class="mobile-menu__item">
                    <RouterLink :to="'/menu'" class="sidebar__link link-grey">Меню</RouterLink>
                </li>
                <li class="mobile-menu__item" v-for="(item, id) in categories" :key="id">
                    <SidebarDropdown :name="item.name" :slug="item.slug" :subCategories="item.sub_categories"
                                        v-if="item.sub_categories" :classNameMod="'mobile-menu'"/>
                    <RouterLink :to="'/menu/' + item.slug" class="sidebar__link link-grey" v-else>
                        {{ item.name }}
                    </RouterLink>
                </li>
            </ul>
            <ul class="mobile-menu__list">
                <li class="mobile-menu__item" v-for="(item, id) in this.$data.links" :key="id">
                    <RouterLink :to="item.href" class="sidebar__link link-grey">{{ item.name }}</RouterLink>
                </li>
            </ul>
        </div>
    </LayoutModal>
</template>

<script>
    import LayoutModal from '@/layout/LayoutModal'
    import SidebarDropdown from '@/components/SidebarDropdown'

    export default {
        name: "ModalMenu",
        components: {
            LayoutModal,
            SidebarDropdown
        },
        data() {
            return {
                links: [
                    { href: '/promo', name: 'Акции' },
                    { href: '/delivery', name: 'Доставка' },
                    { href: '/restaurants', name: 'Рестораны' },
                    { href: '/vacancies', name: 'Вакансии' },
                    { href: '/about', name: 'О нас' },
                    { href: '/offer', name: 'Оферта' },
                ]
            }
        },
        watch: {
            '$route' () {
                const categorySlug = this.$route.params.category
                const category = this.categories.filter((cat) => cat.slug === categorySlug)
                const isCategoryTree = category.filter((cat) => cat.sub_categories)

                const subCategorySlug = this.$route.params.subCategory
                const isSubCategory = this.subCategories.filter((cat) => cat.slug === subCategorySlug)

                if (!isCategoryTree.length || isSubCategory.length) this.closeModal()
            }
        },
        methods: {
            closeModal() {
                this.$store.commit('SET_MODAL_MENU_SHOW', false)
            }
        },
        computed: {
            categories() {
                return this.$store.getters.CATEGORIES
            },
            subCategories() {
                return this.$store.getters.SUB_CATEGORIES
            },
        }
    }
</script>

<style lang="sass" scoped>

.mobile-menu

.mobile-menu__list
    &:not(:first-of-type)
        border-top: 2px solid $dark

.mobile-menu__item
    &:not(:first-of-type)
        .sidebar__link
            border-top: 1px solid #ebebeb

.sidebar__link
    display: block
    padding: 12px
    font-size: 16px
    line-height: 18px
    font-weight: 700
    &.router-link-exact-active
        color: $orange
        cursor: default
        pointer-events: none

</style>
