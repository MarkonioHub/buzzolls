<template>
    <section class="about section">
        <div class="about__cont cont">
            <h1 class="about__title title">ДОКУМЕНТЫ</h1>
            <ul class="about__list">
                <li class="about__item" v-for="(item, id) in aboutList" :key="id">
                    <div class="about__box">
                        <h2 class="about__headline">{{ item.headline }}</h2>
                        <div class="about__description" v-if="item.description">{{ item.description }}</div>
                    </div>
                    <UI_ButtonBorderOrange :routerHref="item.routerHref" class="about__button" v-if="item.routerHref">
                        Подробнее
                    </UI_ButtonBorderOrange>
                    <UI_ButtonBorderOrange :href="item.href" class="about__button" v-if="item.href" target="_blank">
                        Подробнее
                    </UI_ButtonBorderOrange>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        name: "SectionAbout",
        data() {
            return {
                aboutList: [
                    {
                        headline: "Специальная оценка условий труда (СОУТ)",
                        description: "Сведения об организации производящей спецоценку труда, перечень мероприятий по улучшению условий труда, сводная ведомость спецоценки труда",
                        href: "#"
                    },
                    {
                        headline: "Политика обработки персональных данных",
                        routerHref: "/policy"
                    },
                    {
                        headline: "Публичная оферта",
                        routerHref: "/offer"
                    }
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>

.about

.about__cont

.about__title
    margin-bottom: 40px

.about__list

.about__item
    display: flex
    align-items: center
    justify-content: space-between
    @include media(md)
        display: block
    &:not(:last-of-type)
        margin-bottom: 20px

.about__box

.about__headline
    font-size: 20px
    line-height: 24px

.about__description
    margin-top: 10px
    font-size: 14px
    line-height: 16px

.about__button
    margin-left: 50px
    flex-shrink: 0
    @include media(md)
        margin-left: 0
        margin-top: 10px

</style>
