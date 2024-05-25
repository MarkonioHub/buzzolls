<template>
    <section class="delivery section">
        <div class="delivery__cont cont">
            <h1 class="delivery__title title">ДОСТАВКА</h1>
            <div class="delivery__wrap">
                <div class="delivery__list">
                    <div class="delivery__item" v-for="(item, id) in deliveryList" :key="id">
                        <picture class="delivery__picture">
                            <img :src="item.image" alt="" class="delivery__image">
                        </picture>
                        <div class="delivery__inner">
                            <h2 class="delivery__headline" v-if="item.headline">{{ item.headline }}</h2>
                            <div class="delivery__description" v-html="item.description" v-if="item.description"></div>
                            <button class="delivery__map" v-if="item.map" @click="openModalMap">
                                Карта районов доставки
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="delivery__faq">
                <FaqDropdown v-for="(item, id) in faqList" :key="id" :title="item.title" :content="item.content">
                </FaqDropdown>
            </div>
        </div>
    </section>
</template>

<script>
    import FaqDropdown from "@/components/FaqDropdown"

    export default {
        name: "SectionDelivery",
        components: {
            FaqDropdown,
        },
        data() {
            return {
                deliveryList: [
                    {
                        image: require("../assets/images/delivery/ic_delivery_1.png"),
                        headline: "Часы работы",
                        description: "Мы принимаем заказы <span>с 10:00 до 23:00</span> <br>без перерывов и выходных"
                    },
                    {
                        image: require("../assets/images/delivery/ic_delivery_2.png"),
                        headline: "Доставим быстро",
                        description: "Мы не хотим, чтобы голод портил вам настроение, <br>поэтому стараемся доставлять ваши заказы максимально быстро  <br>Среднее время доставки в будние дни составляет <span>до 60 минут</span> <br>В выходные дни и часы пик она может продлится <span>до 90 минут</span>"
                    },
                    {
                        image: require("../assets/images/delivery/ic_delivery_3.png"),
                        headline: "Бесплатная доставка",
                        description: "Минимальная сумма заказа для бесплатной доставки - <span>600 руб</span>"
                    },
                    {
                        image: require("../assets/images/delivery/ic_delivery_4.png"),
                        map: "true",
                    }
                ]
            }
        },
        mounted() {
            if (!this.$store.getters.FAQ.length) this.$store.dispatch('GET_FAQ')
        },
        computed: {
            faqList() {
                return this.$store.getters.FAQ
            }
        },
        methods: {
            openModalMap() {
                this.$store.commit('SET_MODAL_MAP_SHOW', true)
            }
        }
    }
</script>

<style lang="sass" scoped>

.delivery

.delivery__cont

.delivery__title
    margin-bottom: 30px

.delivery__wrap
    margin-bottom: 60px

.delivery__list

.delivery__item
    display: flex
    @include media(xs)
        flex-direction: column
        align-items: center
        text-align: center
    &:not(:last-of-type)
        margin-bottom: 40px
        @include media(xs)
            margin-bottom: 30px

.delivery__picture
    margin-right: 80px
    width: 95px
    height: 95px
    @include media(sm)
        margin-right: 40px
    @include media(xs)
        margin-right: 0

.delivery__image

.delivery__inner

.delivery__headline
    margin-bottom: 10px
    font-size: 24px
    line-height: 28px

.delivery__description
    font-size: 18px
    line-height: 22px

.delivery__map
    font-size: 18px
    line-height: 22px
    font-weight: 700
    background-image: url("@/assets/images/delivery/delivery-map.png")
    background-repeat: no-repeat
    background-size: 100% 100%
    padding: 30px 40px
    border: 1px solid #bfbfbf
    border-radius: 5px

.delivery__faq

</style>
