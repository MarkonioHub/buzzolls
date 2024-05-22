<template>
    <aside class="sidebar">
        <nav class="sidebar__nav">
            <ul class="sidebar__list">
                <li class="sidebar__item" v-for="(item, id) in categories" :key="id">
                    <SidebarDropdown :name="item.name" :slug="item.slug" :subCategories="item.sub_categories" v-if="item.sub_categories" />
                    <RouterLink :to="'/menu/' + item.slug" class="sidebar__link link-grey" v-else>
                        {{ item.name }}
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script>
    import SidebarDropdown from "@/components/SidebarDropdown"

    export default {
        name: "LayoutSidebar",
        components: {
            SidebarDropdown
        },
        computed: {
            categories() {
                return this.$store.getters.CATEGORIES
            },
        }
    }
</script>

<style scoped lang="sass">

.sidebar
    box-shadow: 5px 0 5px -5px #ccc
    width: 100%
    @include media(md)
        display: none

.sidebar__nav
    position: sticky
    top: 70px

.sidebar__list
    max-height: calc(100vh - 108px)
    overflow-y: auto

.sidebar__item

.sidebar__link
    padding: 15px 10px
    display: block
    font-size: 16px
    color: $grey
    cursor: pointer
    border-top: 1px solid #ebebeb
    font-weight: 700
    letter-spacing: 1.15px
    text-decoration: none
    &.router-link-active
        color: $orange
        cursor: default
        pointer-events: none

</style>
