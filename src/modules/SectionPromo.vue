<template>
    <section class="promo section">
        <div class="promo__cont cont">
            <h1 class="promo__title title">АКЦИИ</h1>
            <div class="promo__wrap">
                <div class="promo__empty">акций нет</div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "CompPromo"
    }
</script>

<style lang="sass" scoped>

.promo

.promo__cont

.promo__title

.promo__wrap

.promo__empty
    display: flex
    align-items: center
    justify-content: center
    min-height: 400px
    font-size: 30px
    line-height: 34px

</style>
