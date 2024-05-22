<template>
    <section class="buzzolls-info">
        <div class="buzzolls-info__cont cont">
            <div class="buzzolls-info__wrap">
                <div class="buzzolls-info__area">
                    <div class="buzzolls-info__title title">buzzolls это:</div>
                    <div class="buzzolls-info__image-box">
                        <img src="@/assets/images/buzzolls-info/buzzolls-info.png" alt="" class="buzzolls-info__image">
                        <div class="buzzolls-info__image-text">
                            Мы открыли
                            <b>11 ресторанов</b>
                            в двух городах
                            и&nbsp;продолжаем
                            открывать новые
                        </div>
                    </div>
                </div>
                <div class="buzzolls-info__box">
                    <div class="buzzolls-info__headline">Наша главная ценность - клиенты!</div>
                    <div class="buzzolls-info__text">
                        Нам очень важно, чтобы они всегда были довольны нашей работой. Мы вкладываем много сил и
                        энергии, чтобы блюда были вкусными, сервис качественным, а доставка быстрой. В «Buzzolls»
                        всегда рады энергичным и целеустремленным сотрудникам, готовым вместе покорять всё новые
                        и новые вершины!
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "SectionBuzzollsInfo"
    }
</script>

<style lang="sass" scoped>

.buzzolls-info

.buzzolls-info__cont

.buzzolls-info__wrap
    display: flex
    align-items: center
    padding: 50px
    background-image: url("@/assets/images/buzzolls-info/buzzolls-info-bg.jpg")
    background-size: cover
    color: #ffffff
    @include media(md)
        display: block
    @include media(xs)
        padding: 20px

.buzzolls-info__area
    margin-right: 200px
    flex-shrink: 0
    @include media(lg)
        margin-right: 100px
    @include media(md)
        margin-right: 0
        margin-bottom: 30px

.buzzolls-info__title
    margin-bottom: 30px
    text-transform: uppercase

.buzzolls-info__image-box
    display: flex
    align-items: center
    @include media(xs)
        display: block

.buzzolls-info__image
    width: 240px
    height: 170px
    @include media(xs)
        margin-bottom: 30px

.buzzolls-info__image-text
    margin-left: 40px
    color: #c7c7c7
    font-size: 14px
    line-height: 20px
    max-width: 130px
    width: 100%
    @include media(xs)
        margin-left: 0
        max-width: 100%
    b
        display: block
        color: #ffffff
        @include media(xs)
            display: inline

.buzzolls-info__box

.buzzolls-info__headline
    font-family: $font-decor
    color: #fff
    font-size: 36px
    letter-spacing: .9px
    line-height: 48px
    margin-bottom: 10px
    @include media(xs)
        font-size: 28px
        line-height: 40px

.buzzolls-info__text
    color: #c7c7c7
    font-size: 14px
    line-height: 20px

</style>
