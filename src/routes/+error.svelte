<script lang="ts">
    import { page } from '$app/stores';
    import Header from "$lib/components/Header.svelte";
    import { t } from '$lib/translations';
    import Footer from "$lib/components/Footer.svelte";

    const { status } = $page;
</script>


<Header background="" />

<main class="text-gray-800
             grid grid-cols-4 gap-x-2 mx-4
             md:grid-cols-8 md:gap-x-4 md:mx-8
             xl:grid-cols-12 xl:gap-x-6 xl:mx-32 pt-60 text-center">

    <div class="flex flex-col col-span-full">
        <h1 class="text-8xl">{status}</h1>
        <h2>This page was lost in transit!</h2>
        <h4>It either does not exist or has been removed.</h4>
        <h6>Error: {$t(`error.${status}`, { default: $t('error.default') })}</h6>
        <a class="underline mt-4 mb-16 md:mb-0" href="/">Press here to go back home</a>
        <img class="mt-[-128px] z-[-1]" src="/images/404-art.png" alt="">
    </div>

</main>

<Footer />