<template>
    <section class="stock">
        <div class="stock__cont cont">
            <div class="stock__wrapper">
                <swiper :slides-per-view="1" :modules="$data.modules" effect="fade" :loop="true"
                        :pagination="{ el: '.stock__pagination', clickable: true }"
                        :navigation="{ prevEl: '.stock__navigation_prev', nextEl: '.stock__navigation_next' }"
                        :speed="300" :autoplay="{delay: 5000}"
                >
                    <swiper-slide v-for="(item, id) in stockList" :key="id">
                        <picture class="stock__picture">
                            <source :srcset="item.image_626" media="(max-width: 950px)">
                            <source :srcset="item.image_1024" media="(max-width: 1440px)">
                            <img :src="item.image_1920" alt="" class="stock__image">
                        </picture>
                    </swiper-slide>
                </swiper>
                <div class="stock__pagination"></div>
                <button class="stock__navigation stock__navigation_prev"></button>
                <button class="stock__navigation stock__navigation_next"></button>
                <UI_Loader v-if="!stockList.length"></UI_Loader>
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
        name: "SectionStock",
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
            if (!this.stockList.length) this.$store.dispatch('GET_STOCK_LIST')
        },
        computed: {
            stockList() {
                return this.$store.getters.STOCK_LIST
            },
        }
    }
</script>

<style lang="sass">

.stock__wrapper
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
            border: 3px solid #ffffff
            transition-property: background-color
            transition-duration: $transition-duration
    .swiper-pagination-bullet-active
        &::before
            background-color: #ffffff

</style>

<style lang="sass" scoped>

.stock

.stock__cont
    @include media(xs)
        padding: 0

.stock__wrapper
    position: relative
    height: 359px
    @include media(lg)
        height: 406px
    @include media(md)
        height: 291px
    @include media(sm)
        height: 270px
    @include media(xs)
        height: auto
        padding-bottom: 42%

.stock__pagination
    position: absolute
    z-index: 5
    bottom: 0
    left: 50%
    transform: translateX(-50%)
    display: flex

.stock__picture
    height: 100%

.stock__image
    height: 100%
    object-fit: cover

.stock__navigation
    position: absolute
    z-index: 5
    top: 50%
    transform: translateY(-50%)
    background-image: url("@/assets/images/ic_stock_arrow_right.svg")
    background-size: cover
    width: 32px
    height: 60px
    @include media(md)
        display: none

.stock__navigation_next
    right: 20px

.stock__navigation_prev
    left: 20px
    transform: translateY(-50%) rotate(180deg)

</style>
