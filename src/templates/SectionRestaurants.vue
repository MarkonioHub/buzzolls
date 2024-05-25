<template>
    <section class="restaurants section">
        <div class="restaurants__cont cont">
            <h1 class="restaurants__title title">РЕСТОРАНЫ</h1>
            <ul class="restaurants__list">
                <li class="restaurants__item" v-for="(restaurants, id) in restaurants" :key="id">
                    <picture class="restaurants__picture">
                        <img :src="restaurants.image" alt="" class="restaurants__image">
                    </picture>
                    <div class="restaurants__inner">
                        <div class="restaurants__address">{{ restaurants.address }}</div>
                        <div class="restaurants__work-time">{{ restaurants.work_time }}</div>
                        <a href="tel:+78332699690" class="restaurants__phone">{{ restaurants.phone }}</a>
                        <div class="restaurants__description">{{ restaurants.description }}</div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        name: "SectionRestaurants",
        computed: {
            restaurants() {
                return this.$store.getters.RESTAURANTS
            }
        },
    }
</script>

<style lang="sass" scoped>

.restaurants

.restaurants__cont

.restaurants__title
    margin-bottom: 20px

.restaurants__list

.restaurants__item
    &:not(:last-of-type)
        margin-bottom: 30px
    display: flex
    align-items: flex-start
    @include media(sm)
        display: block

.restaurants__picture
    flex-shrink: 0
    margin-right: 20px
    max-width: 330px
    width: 100%
    @include media(sm)
        margin-right: 0
        margin-bottom: 20px

.restaurants__image
    height: 205px
    object-fit: cover

.restaurants__inner
    display: flex
    flex-direction: column
    gap: 20px

.restaurants__address
    font-size: 24px
    line-height: 28px
    font-weight: 700

.restaurants__work-time
    font-size: 18px
    line-height: 22px
    color: $grey

.restaurants__phone
    font-weight: 700
    font-size: 20px
    line-height: 24px
    text-decoration: none

.restaurants__description
    font-size: 18px
    line-height: 22px
    color: $grey

</style>
