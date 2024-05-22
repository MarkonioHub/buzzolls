<template>
    <LayoutModal @closeModal="closeModal" :classNameMod="'small'">
        <div class="modal-offer">
            <div class="modal-offer__title">ВЫБЕРИТЕ ТОРГОВУЮ ТОЧКУ:</div>
            <ul class="modal-offer__list">
                <li class="modal-offer__item" v-for="(item, id) in offerList" :key="id">
                    <div class="modal-offer__name">{{ item.name }}</div>
                    <button class="modal-offer__button link-orange" @click="setOfferId(item.id)"
                            :disabled="item.id === selectedOfferId">
                        {{item.id === selectedOfferId ? 'Выбрана' : 'Выбрать' }}
                    </button>
                </li>
            </ul>
        </div>
    </LayoutModal>
</template>

<script>
    import LayoutModal from '@/layout/LayoutModal'

    export default {
        name: "ModalOffer",
        components: {
            LayoutModal
        },
        computed: {
            offerList() {
                return this.$store.getters.OFFER
            },
            selectedOfferId() {
                return this.$store.getters.SELECTED_OFFER_ID
            },
        },
        methods: {
            closeModal() {
                this.$store.commit('SET_MODAL_OFFER_SHOW', false)
            },
            setOfferId(id) {
                this.$store.commit('SET_SELECTED_OFFER_ID', id)
                this.closeModal()
            }
        }
    }
</script>

<style lang="sass" scoped>

.modal-offer

.modal-offer__title
    margin-bottom: 20px
    text-align: center
    font-size: 22px
    line-height: 26px
    font-weight: 700

.modal-offer__list

.modal-offer__item
    display: flex
    align-items: center
    justify-content: space-between
    &:not(last-of-type)
        border-bottom: 1px solid #dcdcdc

.modal-offer__name
    font-size: 14px
    line-height: 16px

.modal-offer__button
    padding: 10px
    font-size: 14px
    line-height: 16px
    font-weight: 700
    &:disabled
        color: $orange
        pointer-events: none

</style>
