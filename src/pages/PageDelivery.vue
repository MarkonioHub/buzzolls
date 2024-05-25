<template>
    <SectionDelivery></SectionDelivery>
    <Transition>
        <ModalMap v-if="isModalMapShow"/>
    </Transition>
</template>

<script>
    import SectionDelivery from "@/templates/SectionDelivery"
    import ModalMap from "@/components/modals/ModalMap"

    export default {
        name: "PageDelivery",
        components: {
            SectionDelivery, ModalMap
        },
        computed: {
            isModalMapShow() {
                return this.$store.getters.IS_MODAL_MAP_SHOW
            }
        },
    }
</script>

<style scoped>

</style>
