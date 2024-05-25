<template>
    <section class="vacancies-cap">
        <div class="vacancies-cap__cont cont">
            <div class="vacancies-cap__area">
                <h1 class="vacancies-cap__title">Хочешь работать у нас</h1>
                <picture class="vacancies-cap__picture">
                    <source srcset="@/assets/images/vacancies/vacancies-cap_500.jpg" media="(max-width: 950px)">
                    <img src="@/assets/images/vacancies/vacancies-cap.jpg" alt="" class="vacancies-cap__image">
                </picture>
                <UI_ButtonFillOrange :href="'/worksheet'" class="vacancies-cap__link">
                    Заполнить анкету
                </UI_ButtonFillOrange>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "SectionVacanciesCap"
    }
</script>

<style lang="sass" scoped>

.vacancies-cap

.vacancies-cap__cont

.vacancies-cap__area
    position: relative

.vacancies-cap__title
    position: absolute
    top: 50px
    left: 50px
    font-size: 95px
    line-height: 54px
    font-weight: 400
    max-width: 300px
    width: 100%
    font-family: $font-decor
    text-shadow: #fff 3px 0 1px
    color: #3f3d3e
    transform: rotate(-10deg)
    text-align: center
    @include media(sm)
        top: 30px
        font-size: 50px
        line-height: 36px
        left: 30px
        max-width: 200px
    &::after
        content: '?'
        font-size: inherit
        line-height: inherit
        position: relative
        top: 15px
        left: 10px

.vacancies-cap__picture

.vacancies-cap__image
    height: 500px
    object-fit: cover
    @include media(lg)
        height: 440px
    @include media(sm)
        height: 400px

.vacancies-cap__link
    position: absolute
    bottom: 50px
    left: 70px
    padding: 15px 20px
    font-size: 16px
    line-height: 18px
    text-align: center
    white-space: nowrap
    @include media(md)
        left: 50%
        transform: translate(-50%)
        bottom: 30px

</style>
