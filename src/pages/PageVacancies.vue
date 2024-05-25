<template>
    <SectionVacanciesCap />
    <SectionVacanciesSlider />
    <SectionBuzzollsInfo />
    <SectionWorkInBuzzolls />
    <SectionReviews />
</template>

<script>
    import SectionVacanciesCap from "@/templates/vacancies/SectionVacanciesCap"
    import SectionVacanciesSlider from "@/templates/vacancies/SectionVacanciesSlider"
    import SectionWorkInBuzzolls from "@/templates/vacancies/SectionWorkInBuzzolls"
    import SectionBuzzollsInfo from "@/templates/vacancies/SectionBuzzollsInfo"
    import SectionReviews from "@/templates/vacancies/SectionReviews"

    export default {
        name: "PageVacanсies",
        components: {
            SectionVacanciesCap,
            SectionVacanciesSlider,
            SectionWorkInBuzzolls,
            SectionBuzzollsInfo,
            SectionReviews
        }
    }
</script>

<style scoped>

</style>
