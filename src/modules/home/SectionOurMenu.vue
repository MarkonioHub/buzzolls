<template>
    <section class="our-menu section">
        <div class="our-menu__cont cont">
            <h2 class="our-menu__title title">Наше меню</h2>
            <ul class="our-menu__tile">
                <li class="our-menu__item" v-for="(item, id) in categories" :key="id">
                    <RouterLink class="our-menu__link" :to="'/menu/' + item.slug">
                        <picture class="our-menu__picture">
                            <img :src="item.image" alt="" class="our-menu__image">
                        </picture>
                        <div class="our-menu__name">{{ item.name }}</div>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        name: "SectionOurMenu",
        computed: {
            categories() {
                const categoriesStore = this.$store.getters.CATEGORIES
                return categoriesStore.filter((item) => item.on_home_page)
            }
        }
    }
</script>

<style lang="sass" scoped>

.our-menu

.our-menu__cont

.our-menu__title
    margin-bottom: 30px
    text-align: center
    text-transform: uppercase

.our-menu__tile
    display: flex
    justify-content: space-around
    flex-wrap: wrap
    gap: 20px 0

.our-menu__item
    width: 30%
    @include media(md)
        width: 50%
    @include media(xs)
        width: 100%

.our-menu__link
    width: 308px
    margin: 0 auto
    display: block
    text-decoration: none
    &:hover
        .our-menu__name
            color: $dark

.our-menu__picture

.our-menu__image
    height: 210px

.our-menu__name
    text-align: center
    color: $grey
    font-size: 22px
    line-height: 26px
    transition-duration: $transition-duration
    transition-property: color

</style>
