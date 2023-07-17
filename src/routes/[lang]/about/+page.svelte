<script lang="ts">

    import {Hero, Benefits, Stats, Ideals, Members} from "$lib/components/about";
    import Header from "$lib/components/Header.svelte";

    import Meta from "$lib/components/Meta.svelte";
    import {MetaSnippetBuilder} from "$lib/typescript";

    let meta = new MetaSnippetBuilder().setLocalizationKey("about").withType("website").build();
</script>

<Meta {meta} />

<Header background=""/>

<main class="text-gray-800
             grid grid-cols-4 gap-x-2 mx-4
             md:grid-cols-8 md:gap-x-4 md:mx-8
             xl:grid-cols-12 xl:gap-x-6 xl:mx-32">

    <!--  Hero section  -->
    <Hero />

    <!--  Benefits  -->
    <Benefits />

    <!--  Ideals  -->
    <Ideals />

    <!--  Members  -->
    <Members />

    <!--  Stats  -->
    <Stats />
</main>

<style lang="scss">

</style>
