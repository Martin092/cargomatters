<script lang="ts">
    import {Hero, WorkProcess} from "$lib/components/services"
    import {FAQ, CTA} from "$lib/components/home";
    import Header from "$lib/components/Header.svelte";
</script>

<Header background=""/>

<main class="text-gray-800
             grid grid-cols-4 gap-x-2 mx-4
             md:grid-cols-8 md:gap-x-4 md:mx-8
             xl:grid-cols-12 xl:gap-x-6 xl:mx-32 xl:mt-[-80px]">

    <Hero />

    <WorkProcess />

    <FAQ row="row-start-4" />

    <CTA row="row-start-5" />

</main>

