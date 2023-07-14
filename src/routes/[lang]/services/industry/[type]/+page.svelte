<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import {Hero, Features, Benefits, SocialProof, FAQ, CTA} from "$lib/components/services/businessSpecific"
    import type { PageData } from './$types';
    import {BusinessPage} from "$lib/typescript";

    export let data: PageData;

    // @ts-ignore
    const page:BusinessPage = data.page;

    let hero = {
        lkey: page.localizationKey,
        heroImage: page.heroImage
    }
</script>

<Header background=""/>

<main class="text-gray-800
             grid grid-cols-4 gap-x-2 mx-4
             md:grid-cols-8 md:gap-x-4 md:mx-8
             xl:grid-cols-12 xl:gap-x-6 xl:mx-32 xl:mt-[-80px]">

    <!--  Hero section  -->
    <Hero {hero} />

    <!-- Features list  -->
    {#if page.features.length !== 0}
        <Features features={page.features} />
    {/if}

    <!-- Benefits  -->
    {#if page.benefits.length !== 0}
        <Benefits benefits={page.benefits} />
    {/if}

    <!-- Social Proof  -->
    {#if page.reviews.length !== 0}
        <SocialProof reviews={page.reviews} />
    {/if}

    <!--  FAQ  -->
    <FAQ />

    <!--  CTA  -->
    <CTA />
</main>


<style lang="scss">

</style>
