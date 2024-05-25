<template>
    <div class="worksheet-sidebar">
        <div class="worksheet-sidebar__title title">Выбери вакансию</div>
        <div class="worksheet-sidebar__list">
            <UI_ButtonBorderOrange :routerHref="`/worksheet/${item.Slug}`" class="worksheet-sidebar__link" v-for="(item, id) in vacancies"
                                   :key="id">
                {{ item.Name }}
            </UI_ButtonBorderOrange>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WorksheetSidebar",
        computed: {
            vacancies() {
                return this.$store.getters.VACANCIES
            }
        },
        mounted() {
            if (!this.$store.getters.VACANCIES.length) this.$store.dispatch('GET_VACANCIES')
        },
    }
</script>

<style lang="sass" scoped>

.worksheet-sidebar

.worksheet-sidebar__title
    margin-bottom: 20px

.worksheet-sidebar__list
    display: flex
    flex-direction: column
    gap: 20px 0

.worksheet-sidebar__link

</style>
