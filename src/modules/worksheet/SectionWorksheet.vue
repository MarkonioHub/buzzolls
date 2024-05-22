<template>
    <section class="worksheet section">
        <div class="worksheet__cont cont">
            <div class="worksheet__wrap">
                <div class="worksheet__sidebar">
                    <WorksheetSidebar></WorksheetSidebar>
                </div>
                <div class="worksheet__area" ref="worksheetArea">
                    <div class="worksheet__vacancy" v-if="currentSlug && currentVacancy">
                        <WorksheetCard :currentVacancy="currentVacancy"></WorksheetCard>
                        <WorksheetInfo :currentVacancy="currentVacancy"></WorksheetInfo>
                        <JobForm :vacancyName="currentVacancy.Name" />
                    </div>
                    <div class="worksheet__tile" v-else>
                        <div class="worksheet__item" v-for="(item, id) in vacancies" :key="id">
                            <VacanciesCard :vacancy="item" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import WorksheetSidebar from "@/modules/worksheet/WorksheetSidebar"
    import VacanciesCard from "@/components/VacanciesCard"
    import WorksheetInfo from "@/modules/worksheet/WorksheetInfo"
    import WorksheetCard from "@/modules/worksheet/WorksheetCard"
    import JobForm from "@/modules/worksheet/JobForm"

    import { toRaw } from "@vue/reactivity"

    export default {
        name: "SectionWorksheet",
        components: {
            JobForm,
            WorksheetSidebar,
            VacanciesCard,
            WorksheetInfo,
            WorksheetCard,
        },
        watch: {
            '$route'() {
                const slug = this.$route.params.vacancyName
                if (slug) {
                    const worksheetArea = this.$refs.worksheetArea
                    const y = worksheetArea.getBoundingClientRect().top + window.pageYOffset - 100
                    window.scrollTo({top: y, behavior: 'smooth'})
                }
            }
        },
        mounted() {
            if (!this.$store.getters.VACANCIES.length) this.$store.dispatch('GET_VACANCIES')
        },
        computed: {
            currentVacancy() {
                const proxyVacancy = this.vacancies.filter((item) => item.Slug === this.currentSlug)
                return toRaw(proxyVacancy)[0]
            },
            currentSlug() {
                return this.$route.params.vacancyName
            },
            vacancies() {
                return this.$store.getters.VACANCIES
            },
        }
    }
</script>

<style lang="sass" scoped>

.worksheet

.worksheet__cont

.worksheet__wrap
    display: flex
    @include media(md)
        display: block

.worksheet__sidebar
    margin-right: 60px
    max-width: 300px
    width: 100%
    @include media(md)
        margin-right: 0
        max-width: 100%
        margin-bottom: 40px

.worksheet__area
    flex-grow: 1

.worksheet__vacancy
    max-width: 650px
    width: 100%
    @include media(md)
        max-width: 100%

.worksheet__tile
    display: flex
    flex-wrap: wrap
    gap: 20px
    @include media(sm)
        gap: 20px 0

.worksheet__item
    width: calc(50% - 10px)
    @include media(sm)
        width: 100%

</style>
