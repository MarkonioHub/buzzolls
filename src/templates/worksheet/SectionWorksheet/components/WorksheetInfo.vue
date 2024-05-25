<template>
    <div class="worksheet-info">
        <div class="worksheet-info__box">
            <div class="worksheet-info__headline">Условия</div>
            <ul class="worksheet-info__list">
                <li class="worksheet-info__item" v-for="(item, id) in currentVacancy.Conditions" :key="id">
                    {{item}}
                </li>
            </ul>
        </div>
        <div class="worksheet-info__box">
            <div class="worksheet-info__headline">Требования</div>
            <ul class="worksheet-info__list">
                <li class="worksheet-info__item" v-for="(item, id) in currentVacancy.Requirements" :key="id">
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WorksheetInfo",
        props: {
            currentVacancy: Object
        }
    }
</script>

<style lang="sass" scoped>

.worksheet-info
    margin-bottom: 40px
    display: flex
    justify-content: space-between
    @include media(xs)
        flex-direction: column
        gap: 30px 0

.worksheet-info__box
    width: 45%
    @include media(xs)
        width: 100%

.worksheet-info__headline
    margin-bottom: 20px
    font-size: 16px
    line-height: 20px
    text-transform: uppercase
    font-weight: 700

.worksheet-info__list

.worksheet-info__item
    font-size: 14px
    line-height: 20px
    &:not(:last-of-type)
        margin-bottom: 15px

</style>
