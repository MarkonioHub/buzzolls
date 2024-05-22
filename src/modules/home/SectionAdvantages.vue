<template>
    <section class="advantages">
        <div class="advantages__cont cont">
            <h2 class="advantages__title title">Преимущества <br>Buzzolls</h2>
            <div class="advantages__list">
                <div class="advantages__item" v-for="(item, id) in advantagesList" :key="id">
                    <picture class="advantages__picture">
                        <img :src="item.icon" alt="" class="advantages__image">
                    </picture>
                    <h3 class="advantages__headline">{{ item.headline }}</h3>
                    <div class="advantages__text" v-html="item.text"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "SectionAdvantages",
        data() {
            return {
                advantagesList: [
                    {
                        icon: require("../../assets/images/advantages/advantages-1.png"),
                        headline: 'ДОСТАВИМ БЫСТРО!',
                        text: 'Ваш заказ будет доставлен в течение 90 минут' },
                    {
                        icon: require("../../assets/images/advantages/advantages-2.png"),
                        headline: 'С УТРА ДО ВЕЧЕРА!',
                        text: 'Мы принимаем заказы ежедневно <span>c 10:00 до 23:00</span>'
                    },
                    {
                        icon: require("../../assets/images/advantages/advantages-3.png"),
                        headline: 'ОФОРМИМ ПРЕДЗАКАЗ',
                        text: 'и доставим в удобное для вас время'
                    },
                    {
                        icon: require("../../assets/images/advantages/advantages-4.png"),
                        headline: 'ЗАМЕНИМ РОЛЛЫ В СЕТЕ!',
                        text: 'Специально для вас усовершенствуем любой сет :)'
                    },
                ]
            }
        }
    }
</script>

<style lang="sass">

.advantages__text
    span
        font-weight: 700

</style>

<style lang="sass" scoped>

.advantages
    padding: 30px 0 50px
    background-image: url("@/assets/images/advantages/advantages-bg.png")
    background-repeat: no-repeat
    background-size: 100% 100%

.advantages__cont

.advantages__title
    margin-bottom: 20px
    text-align: center

.advantages__list
    display: flex
    justify-content: space-around
    @include media(sm)
        flex-wrap: wrap
        row-gap: 20px

.advantages__item
    max-width: 195px
    width: 100%
    @include media(sm)
        max-width: 100%
        width: 45%
    @include media(xs)
        width: 100%

.advantages__picture
    margin-bottom: 10px
    height: 115px
    display: flex
    align-items: center

.advantages__image
    width: auto

.advantages__headline
    margin-bottom: 10px
    min-height: 64px
    font-weight: 400
    font-size: 28px
    line-height: 32px
    @include media(xs)
        min-height: auto

.advantages__text
    font-size: 20px
    line-height: 24px

</style>
