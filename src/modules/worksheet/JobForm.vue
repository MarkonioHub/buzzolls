<template>
    <form class="job-form" @submit="checkForm">
        <div class="job-form__title">Хочу работать в Buzzolls!</div>
        <div class="job-form__area">
            <label class="job-form__label job-form__label_required" :ref="form.firstName.name">
                <div class="job-form__headline">Имя</div>
                <UI_Input_Grey :class="form.firstName.error ? 'error' : ''" placeholder="Укажите имя"
                       type="text" v-imask="/^[А-ЯЁa-zA-Z\s]+$/i" v-model:value="form.firstName.value"
                       @input="form.firstName.error = ''">
                </UI_Input_Grey>
                <span class="job-form__error error" v-if="form.firstName.error">{{ form.firstName.error }}</span>
            </label>
            <label class="job-form__label job-form__label_required" :ref="form.lastName.name">
                <div class="job-form__headline">Фамилия</div>
                <UI_Input_Grey type="text" v-imask="/^[А-ЯЁa-zA-Z\s]+$/i" v-model:value="form.lastName.value"
                       :class="form.lastName.error ? 'input-grey error' : 'input-grey'"
                       placeholder="Укажите фамилию" @input="form.lastName.error = ''"/>
                <span class="job-form__error error" v-if="form.lastName.error">{{ form.lastName.error }}</span>
            </label>
            <label class="job-form__label job-form__label_required" :ref="form.birthdayDate.name">
                <div class="job-form__headline">Дата рождения</div>
                <VueDatePicker :model-value="form.birthdayDate.value" @update:model-value="handleDate"
                        locale="ru"
                       :class="form.birthdayDate.error ? 'job-form__date-picker job-form__date-picker_error' : 'job-form__date-picker'" >
                </VueDatePicker>
                <span class="job-form__error error" v-if="form.birthdayDate.error">{{ form.birthdayDate.error }}</span>
            </label>
            <label class="job-form__label job-form__label_required" :ref="form.phone.name">
                <div class="job-form__headline">Ваш телефон</div>
                <UI_Input_Grey type="tel" v-imask="'+{7} (000) 000-00-00'" v-model:value="form.phone.value"
                       :class="form.phone.error ? 'input-grey error' : 'input-grey'"
                       @input="form.phone.error = ''" placeholder="Укажите номер телефона" />
                <span class="job-form__error error" v-if="form.phone.error">{{ form.phone.error }}</span>
            </label>
            <label class="job-form__label job-form__label_social" :ref="form.socialMediaLink.name">
                <div class="job-form__headline">Ссылка на социальную сеть</div>
                <UI_Input_Grey type="url" v-model:value="form.socialMediaLink.value" placeholder="Прикрепите ссылку"
                       :class="form.socialMediaLink.error ? 'input-grey error' : 'input-grey'"
                       @input="form.socialMediaLink.error = ''"
                />
                <span class="job-form__error error" v-if="form.socialMediaLink.error">{{ form.socialMediaLink.error }}</span>
                <div class="job-form__hint">На случай, если не дозвонимся по телефону</div>
            </label>
            <label class="job-form__label">
                <div class="job-form__headline">Email</div>
                <UI_Input_Grey type="email" v-model:value="form.email.value" class="input-grey" placeholder="Укажите почту" />
            </label>
            <label class="job-form__label job-form__label_wide">
                <div class="job-form__headline">О себе</div>
                <UI_Textarea_Grey v-model:value="form.message.value" placeholder="Расскажите о себе" />
            </label>
            <label class="job-form__label job-form__label_policy">
                <div class="job-form__policy">
                    <input type="checkbox" checked class="job-form__policy-input" />
                    <div class="job-form__policy-view"></div>
                    <div class="job-form__policy-text">
                        Я согласен с
                        <RouterLink to="/policy" class="job-form__policy-link">условиями</RouterLink>
                        обработки моих персональных данных
                    </div>
                </div>
            </label>
            <div class="job-form__thanks" v-if="isSubmit">Спасибо! Ваша заявка принята</div>
            <UI_ButtonBorderOrange class="job-form__submit" v-else>Отправить</UI_ButtonBorderOrange>
        </div>

    </form>
</template>

<script>
    import VueDatePicker from '@vuepic/vue-datepicker'
    import { Form } from "@/mixins/Form"
    import { IMaskDirective } from 'vue-imask'

    import '@vuepic/vue-datepicker/dist/main.css'

    export default {
        name: "JobForm",
        mixins: [ Form ],
        props: {
            vacancyName: String
        },
        directives: {
            imask: IMaskDirective
        },
        components: {
            VueDatePicker
        },
        data() {
            return {
                form: {
                    firstName: { name: "firstName", value: "", error: "", validType: "", required: true },
                    lastName: { name: "lastName", value: "", error: "", validType: "", required: true },
                    birthdayDate: { name: "birthdayDate", value: "", error: "", validType: "", required: true },
                    phone: { name: "phone", value: "", error: "", validType: "phone", required: true },
                    socialMediaLink: { name: "socialMediaLink", value: "", error: "", validType: "", required: false },
                    email: { name: "email", value: "", error: "", validType: "email", required: false },
                    message: { name: "message", message: "", error: "", validType: "", required: false },
                },
                isSubmit: false
            }
        },
        methods: {
            handleDate(modelData) {
                this.form.birthdayDate.value = modelData
                this.form.birthdayDate.error = ''
            },
            checkForm(e) {
                e.preventDefault()
                const FormData = this.validateForm(this.form, this.$refs)
                if (FormData) {
                    FormData.vacancyName = this.vacancyName
                    const jsonData = JSON.stringify(FormData)
                    this.isSubmit = true
                    this.sendForm('/api/job', jsonData)
                }
            }
        }
    }
</script>

<style lang="sass">

.job-form__date-picker
    input
        border: 1px solid #e1e1e1 !important
        font-size: 16px !important
        line-height: 20px !important
        border-radius: 4px !important
        padding: 10px 15px 10px 40px !important
        font-family: $font-main !important
    &_error
        input
            border: 1px solid $orange !important

</style>

<style lang="sass" scoped>

.job-form

.job-form__title
    text-transform: uppercase
    letter-spacing: 1.15px
    font-weight: 700
    font-size: 16px
    line-height: 20px
    margin-top: 28px
    margin-bottom: 28px

.job-form__headline
    margin-bottom: 10px
    font-size: 14px
    line-height: 16px
    color: $grey

.job-form__area
    display: flex
    flex-wrap: wrap
    gap: 30px
    @include media(xs)
        flex-direction: column

.job-form__label
    position: relative
    width: calc(50% - 15px)
    cursor: pointer
    @include media(xs)
        width: 100%

.job-form__label_required
    &::before
        content: "*"
        position: absolute
        z-index: 1
        bottom: 18px
        right: 5px
        color: $orange
        font-size: 16px
        line-height: 16px

.job-form__label_policy

.job-form__label_social
    position: relative
    width: 100%
    padding-right: calc(50% + 15px)
    @include media(xs)
        width: 100%
        padding-right: 0

.job-form__label_wide
    width: 100%

.job-form__hint
    position: absolute
    bottom: 13px
    left: calc(50% + 15px)
    @include media(xs)
        margin-top: 10px
        position: static

.job-form__policy
    display: flex
    align-items: center
    cursor: pointer

.job-form__policy-input
    display: none
    &:checked + .job-form__policy-view
        border: none
        background-image: url("@/assets/images/ic_checkbox_checked_orange.svg")
        background-repeat: no-repeat
        background-size: cover
        background-position: center

.job-form__error
    position: absolute
    bottom: 0
    transform: translateY(100%)
    font-size: 14px
    line-height: 18px

.job-form__policy-view
    flex-shrink: 0
    margin-right: 20px
    position: relative
    width: 25px
    height: 25px
    border: 1px solid $grey
    border-radius: 50%
    transition-property: background
    transition-duration: $transition-duration

.job-form__policy-text

.job-form__policy-link
    color: $orange
    text-decoration: none

button.job-form__submit
    font-size: 14px
    line-height: 16px
    width: calc(50% - 15px)
    @include media(xs)
        width: 100%

.job-form__thanks
    font-size: 16px
    line-height: 20px
    width: calc(50% - 15px)
    color: $orange
    @include media(xs)
        width: 100%

</style>
