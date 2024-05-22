<template>
    <SectionVacanciesCap />
    <SectionVacanciesSlider />
    <SectionBuzzollsInfo />
    <SectionWorkInBuzzolls />
    <SectionReviews />
</template>

<script>
    import SectionVacanciesCap from "@/modules/vacancies/SectionVacanciesCap"
    import SectionVacanciesSlider from "@/modules/vacancies/SectionVacanciesSlider"
    import SectionWorkInBuzzolls from "@/modules/vacancies/SectionWorkInBuzzolls"
    import SectionBuzzollsInfo from "@/modules/vacancies/SectionBuzzollsInfo"
    import SectionReviews from "@/modules/vacancies/SectionReviews"

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
