<template>
    <SectionStock></SectionStock>
    <SectionOurMenu></SectionOurMenu>
    <SectionAdvantages></SectionAdvantages>
    <SectionSeoContent></SectionSeoContent>
</template>

<script>
    import SectionStock from "@/templates/home/SectionStock"
    import SectionOurMenu from "@/templates/home/SectionOurMenu"
    import SectionAdvantages from "@/templates/home/SectionAdvantages"
    import SectionSeoContent from "@/templates/home/SectionSeoContent"

    export default {
        name: "PageHome",
        components: {
            SectionStock,
            SectionOurMenu,
            SectionAdvantages,
            SectionSeoContent
        }
    }
</script>

<style scoped>

</style>
