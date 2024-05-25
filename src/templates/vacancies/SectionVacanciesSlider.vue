<template>
    <section class="vacancies-slider section">
        <div class="vacancies-slider__cont cont">
            <div class="vacancies-slider__top">
                <h2 class="vacancies-slider__title title">АКТУАЛЬНЫЕ ВАКАНСИИ</h2>
                <div class="vacancies-slider__nav">
                    <button class="vacancies-slider__navigation vacancies-slider__navigation_prev"></button>
                    <button class="vacancies-slider__navigation vacancies-slider__navigation_next"></button>
                </div>
            </div>
            <div class="vacancies-slider__wrapper">
                <swiper :slides-per-view="'auto'" :modules="$data.modules"
                        :navigation="{ prevEl: '.vacancies-slider__navigation_prev', nextEl: '.vacancies-slider__navigation_next' }"
                        :speed="1000" :space-between="20">
                    <swiper-slide v-for="(item, id) in vacancies" :key="id" class="vacancies-slider__slide">
                        <VacanciesCard :vacancy="item" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script>
    import { Navigation } from 'swiper/modules'
    import { Swiper, SwiperSlide } from 'swiper/vue'

    import 'swiper/css'

    import VacanciesCard from "@/components/VacanciesCard"

    export default {
        name: "SectionVacanciesSlider",
        components: {
            Swiper,
            SwiperSlide,
            VacanciesCard
        },
        data() {
            return {
                modules: [ Navigation ],
            }
        },
        mounted() {
            if (!this.$store.getters.VACANCIES.length) this.$store.dispatch('GET_VACANCIES')
        },
        computed: {
            vacancies() {
                return this.$store.getters.VACANCIES
            },
        }
    }
</script>

<style lang="sass" scoped>

.vacancies-slider

.vacancies-slider__cont

.vacancies-slider__top
    display: flex
    margin-bottom: 30px
    justify-content: space-between
    align-items: center

.vacancies-slider__title

.vacancies-slider__nav
    display: flex
    gap: 10px
    flex-shrink: 0
    margin-left: 10px

.vacancies-slider__navigation
    width: 40px
    height: 40px
    border-radius: 5px
    background-color: #f0f0f0
    background-image: url("@/assets/images/ic_arrow_slider_orange.svg")
    background-repeat: no-repeat
    background-size: 25px 25px
    background-position: center
    transition-property: background-color, background
    transition-duration: $transition-duration
    &:hover
        background-image: url("@/assets/images/ic_arrow_slider_white.svg")
        background-color: $orange
    &:disabled
        pointer-events: none
        opacity: 0.5

.vacancies-slider__navigation_prev
    transform: scaleX(-1)

.vacancies-slider__navigation_next

.vacancies-slider__wrapper

.vacancies-slider__slide
    width: 453px
    @include media(lg)
        width: 382px
    @include media(sm)
        width: 322px

</style>
