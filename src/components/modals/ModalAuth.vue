<template>
    <LayoutModal @closeModal="closeModal">
        <form class="modal-auth" @submit="checkForm">
            <div class="modal-auth__title title">авторизация</div>
            <div class="modal-auth__box">
                <label class="modal-auth__label modal-auth__label_required">
                    <div class="modal-auth__headline">Ваш телефон</div>
                    <UI_Input_Grey :class="form.phone.error ? 'error' : ''" placeholder="+7 (111) 111-11-11"
                                   type="text" v-imask="'+{7} (000) 000-00-00'" v-model:value="form.phone.value"
                                   @input="form.phone.error = ''">
                    </UI_Input_Grey>
                    <span class="modal-auth__error error" v-if="form.phone.error">{{ form.phone.error }}</span>
                </label>
            </div>
            <div class="modal-auth__submit-box">
                <UI_ButtonBorderOrange class="modal-auth__submit">Отправить</UI_ButtonBorderOrange>
            </div>
        </form>
    </LayoutModal>
</template>

<script>
    import LayoutModal from "@/layout/LayoutModal"
    import { Form } from "@/mixins/Form"
    import { IMaskDirective } from 'vue-imask'

    export default {
        name: "ModalAuth",
        mixins: [ Form ],
        directives: {
            imask: IMaskDirective
        },
        components: {
            LayoutModal
        },
        data() {
            return {
                form: {
                    phone: { name: "phone", value: "", error: "", validType: "phone", required: true },
                }
            }
        },
        methods: {
            closeModal() {
                this.$store.commit('SET_MODAL_AUTH_SHOW', false)
            },
            checkForm(e) {
                e.preventDefault()
                const FormData = this._validateForm(this.form)
                if (FormData) {
                    const jsonData = JSON.stringify(FormData)
                    this._sendForm('/api/auth', jsonData)
                    alert('send data:' + jsonData)
                }
            }
        }
    }
</script>

<style lang="sass" scoped>

.modal-auth
    max-width: 350px
    width: 100%
    margin: 0 auto

.modal-auth__title
    text-transform: uppercase
    margin-bottom: 25px
    text-align: center

.modal-auth__box

.modal-auth__label

.modal-auth__headline
    font-size: 18px
    line-height: 22px
    color: $grey
    margin-bottom: 10px

.modal-auth__error

.modal-auth__submit-box
    text-align: center

.modal-auth__submit
    margin-top: 20px
    width: 100%

</style>
