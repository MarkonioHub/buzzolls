<template>
    <section class="policy section">
        <div class="policy__cont cont">
            <div class="policy__content" v-html="policy">

            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "SectionPolicy",
        computed: {
            policy() {
                return this.$store.getters.POLICY
            }
        },
        mounted() {
            if (!this.$store.getters.POLICY) this.$store.dispatch('GET_POLICY')
        }
    }
</script>

<style lang="sass">

.policy

.policy__cont

.policy__content
    max-width: 900px
    margin: 0 auto
    h1
        text-align: center
        margin-bottom: 20px
        text-transform: uppercase
        letter-spacing: 1.15px
        font-size: 26px
        line-height: 32px
        @include media(md)
            font-size: 20px
            line-height: 24px
    h2
        text-align: center
        margin-top: 20px
        margin-bottom: 20px
        text-transform: uppercase
        letter-spacing: 1.15px
        font-size: 22px
        line-height: 26px
        @include media(md)
            font-size: 18px
            line-height: 22px
    p
        margin-bottom: 10px
        font-size: 16px
        line-height: 18px

</style>
