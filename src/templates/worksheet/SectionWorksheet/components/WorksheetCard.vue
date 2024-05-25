<template>
    <div class="worksheet-card">
        <div class="worksheet-card__box">
            <div class="worksheet-card__title">{{ currentVacancy.Name }}</div>
            <div class="worksheet-card__description">{{ currentVacancy.Description }}</div>
        </div>
        <picture class="worksheet-card__picture">
            <img :src="currentVacancy.Image" alt="" class="worksheet-card__image">
        </picture>
    </div>
</template>

<script>
    export default {
        name: "WorksheetCard",
        props: {
            currentVacancy: Object
        }
    }
</script>

<style lang="sass" scoped>

.worksheet-card
    margin-bottom: 40px
    position: relative
    z-index: 1

.worksheet-card__box
    position: absolute
    z-index: 1
    top: 20px
    left: 20px

.worksheet-card__title
    margin-bottom: 30px
    font-family: $font-decor
    font-size: 47px
    letter-spacing: 2.0px
    max-width: 139px
    line-height: 30px
    text-align: center
    transform: rotate(-10deg)
    color: #ffffff
    text-shadow: #000 3px 0 1px

.worksheet-card__description
    position: relative
    z-index: 1
    font-size: 14px
    line-height: 20px
    max-width: 200px
    color: #ffffff
    text-shadow: #000 2px 0 1px
    @include media(lg)
        max-width: 180px

.worksheet-card__picture
    position: relative
    padding-bottom: 49%
    @include media(xs)
        padding-bottom: 70%

.worksheet-card__image
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    height: 100%
    object-fit: cover

</style>
