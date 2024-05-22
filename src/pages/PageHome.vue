<template>
    <SectionStock></SectionStock>
    <SectionOurMenu></SectionOurMenu>
    <SectionAdvantages></SectionAdvantages>
    <SectionSeoContent></SectionSeoContent>
</template>

<script>
    import SectionStock from "@/modules/home/SectionStock"
    import SectionOurMenu from "@/modules/home/SectionOurMenu"
    import SectionAdvantages from "@/modules/home/SectionAdvantages"
    import SectionSeoContent from "@/modules/home/SectionSeoContent"

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
