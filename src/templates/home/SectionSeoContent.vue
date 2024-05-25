<template>
    <section class="seo-content section">
        <div class="seo-content__cont cont">
            <div class="seo-content__wrap" v-if="seoContent">
                <div class="seo-content__area" v-html="seoContent"
                     :class="this.isSeoContentWrapHide ? 'seo-content__area seo-content__area_hide' : 'seo-content__area'">

                </div>
                <div class="seo-content__hide">
                    <UI_ButtonBorderOrange @click="toggleSeoContentWrap">
                        {{ this.seoContentHideText }}
                    </UI_ButtonBorderOrange>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "SectionSeoContent",
        data() {
            return {
                isSeoContentWrapHide: true,
                seoContentHideText: 'Показать текст'
            }
        },
        mounted() {
            if (!this.$store.getters.SEO_CONTENT) this.$store.dispatch('GET_SEO_CONTENT')
        },
        computed: {
            seoContent() {
                return this.$store.getters.SEO_CONTENT
            }
        },
        methods: {
            toggleSeoContentWrap() {
                this.isSeoContentWrapHide = !this.isSeoContentWrapHide
                if (this.seoContentHideText === 'Показать текст') {
                    this.seoContentHideText = 'Скрыть текст'
                } else {
                    this.seoContentHideText = 'Показать текст'
                }
            }
        }
    }
</script>

<style lang="sass">

.seo-content__wrap
    h3
        margin-top: 20px
        margin-bottom: 10px
        text-transform: uppercase
        letter-spacing: 1.15px
        font-size: 22px
        line-height: 26px
    p, li
        color: $grey
        font-size: 16px
        line-height: 18px
    p
        margin-bottom: 10px
    li
        margin-bottom: 5px
        list-style: circle
    ul
        margin-bottom: 10px
        padding-left: 40px

</style>

<style lang="sass" scoped>

.seo-content

.seo-content__cont

.seo-content__wrap

.seo-content__area

.seo-content__area_hide
    position: relative
    height: 400px
    overflow: hidden
    &::before
        position: absolute
        left: 0
        right: 0
        bottom: 0
        content: ""
        height: 250px
        background: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 0, #fff)

.seo-content__hide
    text-align: center

</style>
