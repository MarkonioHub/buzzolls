<template>
    <SectionOffer />
    <Transition>
        <ModalOffer v-if="isModalOfferShow" />
    </Transition>
</template>

<script>
    import SectionOffer from "@/templates/SectionOffer"
    import ModalOffer from "@/components/modals/ModalOffer"

    export default {
        name: "PageOffer",
        components: {
            SectionOffer,
            ModalOffer
        },
        computed: {
            isModalOfferShow() {
                return this.$store.getters.IS_MODAL_OFFER_SHOW
            }
        },
        mounted() {
            this.$store.dispatch('GET_OFFER')
        }
    }
</script>

<style scoped>

</style>
