<template>
    <section class="offer section">
        <div class="offer__cont cont">
            <UI_ButtonBorderOrange class="offer__button" @click="openOfferModal">
                Выбрать другую торговую точку
            </UI_ButtonBorderOrange>
            <div class="offer__wrap" v-if="selectedOfferId">
                <h1 class="offer__title title">ПУБЛИЧНАЯ ОФЕРТА</h1>
                <div class="offer__area" v-html="item.content" v-for="(item, id) in offerContent" :key="id"></div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "SectionOffer",
        computed: {
            selectedOfferId() {
                return this.$store.getters.SELECTED_OFFER_ID
            },
            offerContent() {
                const offer = this.$store.getters.OFFER
                return offer.filter((item) => item.id === this.selectedOfferId)
            }
        },
        methods: {
            openOfferModal() {
                this.$store.commit('SET_MODAL_OFFER_SHOW', true)
            }
        }
    }
</script>

<style lang="sass">

.offer__area
    h2
        margin-bottom: 10px
        text-align: center
        font-size: 24px
        line-height: 26px
    div
        font-size: 18px
        line-height: 22px

</style>

<style lang="sass" scoped>

.offer

.offer__cont

.offer__button
    margin-bottom: 20px

.offer__title
    margin-bottom: 20px
    text-align: center

</style>
