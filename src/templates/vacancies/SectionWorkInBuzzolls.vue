<template>
    <section class="work-in-buzzolls section">
        <div class="work-in-buzzolls__cont cont">
            <h2 class="work-in-buzzolls__title title">Работа в buzzolls</h2>
            <ul class="work-in-buzzolls__list">
                <li class="work-in-buzzolls__item" v-for="(item, id) in list" :key="id">
                    <img :src="item.icon" alt="" class="work-in-buzzolls__icon">
                    <div class="work-in-buzzolls__headline" v-html="item.headline"></div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        name: "SectionWorkInBuzzolls",
        data() {
            return {
                list: [
                    {
                        headline: "карьерный рост <br/> и обучение",
                        icon: require("../../assets/images/work-in-buzzolls/work-in-buzzolls-1.png"),
                    },
                    {
                        headline: "Стабильная <br/> зарплата",
                        icon: require("../../assets/images/work-in-buzzolls/work-in-buzzolls-2.png"),
                    },
                    {
                        headline: "Дружный <br/> коллектив",
                        icon: require("../../assets/images/work-in-buzzolls/work-in-buzzolls-3.png"),
                    },
                    {
                        headline: "Бесплатное <br/> питание",
                        icon: require("../../assets/images/work-in-buzzolls/work-in-buzzolls-4.png"),
                    }
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>

.work-in-buzzolls

.work-in-buzzolls__cont

.work-in-buzzolls__title
    margin-bottom: 30px

.work-in-buzzolls__list
    display: flex
    justify-content: space-between
    @include media(sm)
        flex-wrap: wrap
        gap: 20px 0

.work-in-buzzolls__item
    width: 190px
    @include media(md)
        width: 24%
    @include media(sm)
        width: 160px

.work-in-buzzolls__icon
    margin: 0 auto
    width: 120px
    height: 120px
    object-fit: contain

.work-in-buzzolls__headline
    margin: 20px 0 0
    text-transform: uppercase
    letter-spacing: 1.15px
    font-weight: 700
    font-size: 18px
    line-height: 24px
    text-align: center
    @include media(sm)
        font-size: 16px
        line-height: 20px

</style>
