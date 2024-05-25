<template>
    <section class="reviews section">
        <div class="reviews__cont cont">
            <div class="reviews__area">
                <h2 class="reviews__title title">Отзывы сотрудников buzzolls</h2>
                <div class="reviews__wrapper">
                    <button class="reviews__navigation reviews__navigation_prev"></button>
                    <swiper :slides-per-view="1" :modules="$data.modules" :loop="true" :autoplay="{delay: 5000}"
                            :navigation="{ prevEl: '.reviews__navigation_prev', nextEl: '.reviews__navigation_next' }"
                            :speed="1000" :space-between="20" :pagination="{ el: '.reviews__pagination', clickable: true }">
                        <swiper-slide v-for="(item, id) in reviews" :key="id" class="reviews__slide">
                            <img :src="item.Photo" alt="" class="reviews__avatar">
                            <div class="reviews__inner">
                                <div class="reviews__name">{{ `${item.FirstName} ${item.LastName}` }}</div>
                                <div class="reviews__position">{{ item.EmployeeTypeString }}</div>
                                <p class="reviews__text">{{ item.Text }}</p>
                            </div>
                        </swiper-slide>
                    </swiper>
                    <button class="reviews__navigation reviews__navigation_next"></button>
                </div>
                <div class="reviews__pagination"></div>
                <UI_Loader v-if="!reviews.length"></UI_Loader>
            </div>
            <div class="reviews__link__box">
                <UI_ButtonFillOrange :href="'/worksheet'" class="reviews__link">
                    Заполнить анкету
                </UI_ButtonFillOrange>
            </div>
        </div>
    </section>
</template>

<script>
    import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules'
    import { Swiper, SwiperSlide } from 'swiper/vue'

    import 'swiper/css'
    import 'swiper/css/effect-fade'
    import 'swiper/css/autoplay'

    export default {
        name: "SectionReviews",
        components: {
            Swiper,
            SwiperSlide,
        },
        data() {
            return {
                modules: [ EffectFade, Navigation, Pagination, Autoplay ],
            }
        },
        mounted() {
            if (!this.reviews.length) this.$store.dispatch('GET_REVIEWS')
        },
        computed: {
            reviews() {
                return this.$store.getters.REVIEWS
            },
        }
    }
</script>

<style lang="sass">

.reviews__pagination
    .swiper
        height: 100%
        @include media(xs)
            position: absolute
            top: 0
            right: 0
            bottom: 0
            left: 0
    .swiper-slide
        height: 100%
    .swiper-pagination-bullet
        cursor: pointer
        margin: 0 5px
        width: 30px
        height: 30px
        display: flex
        align-items: center
        justify-content: center
        &::before
            content: ''
            width: 10px
            height: 10px
            border-radius: 50%
            border: 3px solid #959595
            transition-property: background-color
            transition-duration: $transition-duration
    .swiper-pagination-bullet-active
        &::before
            background-color: #959595

</style>

<style lang="sass" scoped>

.reviews

.reviews__cont

.reviews__area
    margin-bottom: 20px
    background-color: #f0f0f0
    padding: 30px

.reviews__title
    margin-bottom: 30px
    text-align: center

.reviews__wrapper
    display: flex
    align-items: center
    @include media(sm)
        position: relative

.reviews__navigation
    flex-shrink: 0
    width: 60px
    height: 60px
    background-image: url("@/assets/images/ic_arrow_slider_grey.svg")
    background-repeat: no-repeat
    background-size: 50px 50px
    background-position: center
    transition-property: background
    transition-duration: $transition-duration
    &:hover
        background-image: url("@/assets/images/ic_arrow_slider_orange.svg")
    @include media(sm)
        position: absolute
        z-index: 5
        top: 60px

.reviews__navigation_prev
    transform: scaleX(-1)
    @include media(sm)
        left: 0
    @include media(xs)
        left: -28px

.reviews__navigation_next
    @include media(sm)
        right: 0
    @include media(xs)
        right: -28px

.reviews__slide
    display: flex
    padding: 0 60px
    @include media(md)
        padding: 0 30px
    @include media(sm)
        display: block
        padding: 0

.reviews__avatar
    margin-right: 60px
    flex-shrink: 0
    width: 180px
    height: 180px
    border-radius: 50%
    overflow: hidden
    @include media(md)
        margin-right: 30px
    @include media(sm)
        margin: 0 auto 40px

.reviews__inner
    position: relative
    padding-left: 70px
    @include media(xs)
        padding-left: 0
    &::before
        content: ""
        position: absolute
        top: 0
        left: 0
        width: 53px
        height: 40px
        background-image: url("@/assets/images/ic_quotes_grey.png")
        background-repeat: no-repeat
        background-size: cover
        background-position: center
        transition-property: background
        transition-duration: $transition-duration
        @include media(xs)
            content: none

.reviews__name
    font-weight: 700
    margin-bottom: 10px
    font-size: 16px
    line-height: 20px
    text-transform: uppercase

.reviews__position
    margin-bottom: 10px
    font-size: 14px
    line-height: 16px

.reviews__text
    font-size: 14px
    line-height: 20px

.reviews__pagination
    margin-top: 20px
    display: flex
    justify-content: center

.reviews__link__box
    text-align: center

</style>
