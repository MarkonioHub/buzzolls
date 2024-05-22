<template>
    <div :class="className">
        <RouterLink :to="'/menu/' + this.slug" class="sidebar-dropdown__name link-grey" @click="toggleDropdown">
            {{ this.name }}
        </RouterLink>
        <div class="sidebar-dropdown__box" ref="dropdownBox">
            <RouterLink :to="'/menu/' + this.slug + '/' + cat.slug" class="sidebar-dropdown__link link-grey"
                        v-for="(cat, id) in subCategoriesCurrent" :key="id">
                {{ cat.name }}
            </RouterLink>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SidebarDropdown",
        data() {
            return {
                isDropdownActive: false
            }
        },
        props: {
            name: String,
            slug: String,
            subCategories: Array,
            classNameMod: String
        },
        computed: {
            subCategoriesCurrent() {
                const storeSubCategories = this.$store.getters.SUB_CATEGORIES
                return storeSubCategories.filter((item) => this.subCategories.includes(item.id))
            },
            className() {
                if (this.classNameMod) {
                    return this.isDropdownActive ? `sidebar-dropdown sidebar-dropdown_${this.classNameMod} sidebar-dropdown_active`
                        : `sidebar-dropdown sidebar-dropdown_${this.classNameMod}`
                } else {
                    return this.isDropdownActive ? `sidebar-dropdown sidebar-dropdown_active` : `sidebar-dropdown`
                }
            }
        },
        methods: {
            toggleDropdown() {
                const box = this.$refs.dropdownBox
                if (box.style.height) {
                    box.style.height = ''
                    this.isDropdownActive = false
                } else {
                    box.style.height = box.scrollHeight + "px"
                    this.isDropdownActive = true
                }
            }
        }
    }
</script>

<style lang="sass" scoped>

.sidebar-dropdown

.sidebar-dropdown_active
    .sidebar-dropdown__name
        &:before
            transform: rotate(180deg)

.sidebar-dropdown_mobile-menu
    .sidebar-dropdown__name, .sidebar-dropdown__link
        padding: 12px
        font-size: 16px
        line-height: 18px

.sidebar-dropdown__name
    position: relative
    padding: 15px 10px
    display: block
    font-size: 16px
    color: #737373
    cursor: pointer
    border-top: 1px solid #ebebeb
    font-weight: 700
    letter-spacing: 1.15px
    text-decoration: none
    &:before
        content: ''
        position: absolute
        top: 15px
        right: 10px
        width: 15px
        height: 15px
        background-image: url("@/assets/images/ic_arrow_down_grey.svg")
        background-size: 100% 100%
        transition-property: background, transform
        transition-duration: $transition-duration
    &.router-link-active
        color: $orange
        &:before
            background-image: url("@/assets/images/ic_arrow_down_orange.svg")

.sidebar-dropdown__box
    height: 0
    overflow: hidden
    transition-property: height
    transition-duration: $transition-duration

.sidebar-dropdown__link
    padding: 15px 10px
    display: block
    font-size: 16px
    color: $grey
    background-color: #f0f0f0
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
