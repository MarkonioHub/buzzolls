<template>
    <footer class="footer">
        <div class="footer__cont cont">
            <div class="footer__top">
                <nav class="footer__nav">
                    <ul class="footer__list">
                        <li class="footer__item" v-for="(item, id) in $data.menu" :key="id">
                            <RouterLink :to="item.href" class="footer__link link-grey">
                                {{ item.text }}
                            </RouterLink>
                        </li>
                    </ul>
                </nav>
                <div class="footer__box">
                    <div class="footer__headline">Киров</div>
                    <ul class="footer__address-list">
                        <li class="footer__address-item" v-for="(item, id) in restaurants" :key="id">
                            {{ item.address }}
                        </li>
                    </ul>
                </div>
                <div class="footer__box">
                    <div class="footer__headline">Контакты</div>
                    <div class="footer__contacts" v-for="(item, id) in $data.contacts" :key="id">
                        <div class="footer__contacts-name">{{ item.name }}</div>
                        <a :href="item.href" class="footer__contacts-value link-grey">{{ item.value }}</a>
                    </div>
                </div>
            </div>
            <div class="footer__bottom">
                <RouterLink :to="'/'" class="footer__logo link-opacity-hover">
                    <img src="@/assets/images/logo_footer.svg" alt="" class="footer__logo-image">
                </RouterLink>
                <div class="footer__copyright">© 2015-2024 Доставка суши, ресторан японской кухни</div>
                <ul class="footer__social">
                    <li class="footer__social-item" v-for="(item, id) in $data.socials" :key="id">
                        <a :href="item.href" class="footer__social-link link-opacity-hover" target="_blank">
                            <img :src="item.image" alt="" class="footer__social-image">
                        </a>
                    </li>
                </ul>
                <div class="footer__apps">
                    <a href="#" class="footer__app link-opacity-hover" target="_blank">
                        <img src="@/assets/images/google_play.svg" alt="" class="footer__app-image">
                    </a>
                    <a href="#" class="footer__app link-opacity-hover" target="_blank">
                        <img src="@/assets/images/app_store.svg" alt="" class="footer__app-image">
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "LayoutFooter",
        data () {
            return {
                menu: [
                    { text: 'Главная', href: '/' },
                    { text: 'Меню', href: '/menu' },
                    { text: 'Акции', href: '/promo' },
                    { text: 'Доставка', href: '/delivery' },
                    { text: 'Рестораны', href: '/restaurants' },
                    { text: 'Вакансии', href: '/vacancies' },
                    { text: 'О нас', href: '/about' },
                    { text: 'Оферта', href: '/offer' },
                ],
                contacts: [
                    { name: 'Горячая линия:', value: '8 (833) 269 96 90', href: 'tel:88332699690' },
                    { name: 'Вопросы и предложения:', value: 'feedback@buzzolls.ru', href: 'mailto:feedback@buzzolls.ru' },
                    { name: 'Сотрудничество:', value: 'director@buzzolls.ru', href: 'mailto:director@buzzolls.ru' },
                ],
                socials: [
                    { href: '#', image: require("../assets/images/ic_in_black.svg") },
                    { href: '#', image: require("../assets/images/ic_vk_black.svg") },
                    { href: '#', image: require("../assets/images/ic_tg_black.svg") },
                ]
            }
        },
        computed: {
            restaurants() {
                return this.$store.getters.RESTAURANTS
            }
        },
    }
</script>

<style scoped lang="sass">

.footer
    overflow: hidden
    background-color: #f0f0f0

.footer__cont

.footer__top
    padding: 50px 0
    display: flex
    justify-content: space-between
    @include media(md)
        padding: 30px 0
    @include media(xs)
        flex-direction: column
        align-items: center

.footer__nav
    @include media(md)
        display: none

.footer__list
    display: flex
    gap: 20px
    flex-wrap: wrap
    max-width: 500px
    width: 100%

.footer__item
    width: 40%

.footer__link
    font-weight: 700
    font-size: 20px
    line-height: 24px
    text-transform: uppercase
    &.router-link-active
        color: $orange
        cursor: default
        pointer-events: none

.footer__box
    @include media(xs)
        text-align: center
    &:first-of-type
        @include media(xs)
            margin-bottom: 20px

.footer__headline
    margin-bottom: 20px
    font-size: 20px
    line-height: 24px
    color: $dark
    font-weight: 700

.footer__address-list

.footer__address-item
    margin-bottom: 5px
    font-size: 16px
    line-height: 20px

.footer__contacts
    margin-bottom: 20px

.footer__contacts-name
    margin-bottom: 5px
    font-size: 16px
    line-height: 18px

.footer__contacts-value
    font-size: 16px
    line-height: 18px
    font-weight: 700

.footer__bottom
    position: relative
    padding: 30px 0
    display: flex
    align-items: center
    justify-content: space-between
    @include media(md)
        flex-wrap: wrap
        align-items: flex-start
    @include media(xs)
        flex-direction: column
        align-items: center
    &::before
        content: ''
        background-color: #737373
        height: 1px
        position: absolute
        top: 0
        left: 50%
        transform: translateX(-50%)
        width: 100vw

.footer__logo
    width: 150px
    @include media(md)
        margin-bottom: 20px
    &.router-link-active
        color: $orange
        cursor: default
        pointer-events: none

.footer__logo-image
    height: 43px

.footer__copyright
    max-width: 235px
    width: 100%
    text-align: center
    font-size: 16px
    @include media(md)
        margin-bottom: 20px
        margin-right: 25px
    @include media(xs)
        margin-right: 0

.footer__social
    display: flex
    gap: 10px
    @include media(md)
        flex-basis: 50%
    @include media(sm)
        flex-basis: 40%
    @include media(xs)
        flex-basis: auto
        margin-bottom: 20px

.footer__social-item

.footer__social-link
    display: block
    width: 45px
    height: 45px

.footer__social-image

.footer__apps
    display: flex
    gap: 10px

.footer__app
    width: 139px

.footer__app-image
    height: 45px

</style>
