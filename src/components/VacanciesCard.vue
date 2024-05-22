<template>
    <div class="vacancies-card" :style="`background-color: ${vacancy.backgroundColor}`">
        <picture class="vacancies-card__picture">
            <img :src="vacancy.Photo" alt="" class="vacancies-card__image">
        </picture>
        <div class="vacancies-card__headline" :style="`color: ${vacancy.headlineColor}`">
            {{ vacancy.Name }}
        </div>
        <div class="vacancies-card__text" :style="`color: ${vacancy.textColor}`">
            {{ vacancy.Description }}
        </div>
        <UI_ButtonFillOrange :href="`/worksheet/${vacancy.Slug}`" class="vacancies-card__link">
            Подробнее
        </UI_ButtonFillOrange>
    </div>
</template>

<script>
    export default {
        name: "VacanciesCard",
        props: {
            vacancy: Object
        }
    }
</script>

<style lang="sass" scoped>

.vacancies-card
    padding: 20px
    position: relative
    min-height: 320px
    display: flex
    flex-direction: column
    align-items: flex-start
    height: auto

.vacancies-card__picture
    position: absolute
    bottom: 0
    right: 0
    top: 20px
    object-fit: cover
    @include media(sm)
        top: 95px

.vacancies-card__image
    height: 100%

.vacancies-card__headline
    margin-bottom: 20px
    font-family: $font-decor
    font-size: 47px
    letter-spacing: .4px
    max-width: 139px
    min-height: 100px
    line-height: 30px
    text-align: center
    transform: rotate(-10deg)

.vacancies-card__text
    position: relative
    z-index: 1
    font-size: 14px
    line-height: 20px
    max-width: 200px
    @include media(lg)
        max-width: 180px

.vacancies-card__link
    margin-top: auto

</style>
