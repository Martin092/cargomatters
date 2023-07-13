<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import {SubHero, EmergencySolutions} from "$lib/components/services";
    import {t} from "$lib/translations";
</script>

<Header background="" />

<main class="text-gray-800
             grid grid-cols-4 gap-x-2 mx-4
             md:grid-cols-8 md:gap-x-4 md:mx-8
             xl:grid-cols-12 xl:gap-x-6 xl:mx-32">

    <SubHero title={$t('services.transport.sub-hero.title')}
             subTitle={$t('services.transport.sub-hero.subtitle')}
             showInfo={false}/>

    <div class="col-start-1 row-start-2 col-span-4 flex flex-col py-20 pb-0
            md:col-start-1 md:col-span-8 md:gap-12
            xl:col-start-2 xl:col-span-10">
        <div class="flex flex-col gap-4">
            <h1>{$t('services.emergency.hero.title')}</h1>
            <h5>{$t('services.emergency.hero.subtitle')}</h5>
        </div>
    </div>

    <EmergencySolutions />
</main>