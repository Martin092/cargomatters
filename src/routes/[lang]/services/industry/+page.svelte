<script lang="ts">
    import type { PageData } from './$types';
    import Header from "$lib/components/Header.svelte";
    import {SubHero, IndustrySolutions} from "$lib/components/services";
    import LogisticsSolutions from "$lib/components/services/LogisticsSolutions.svelte";
    import {t} from "$lib/translations";
    import { WideSolutionClass } from '$lib/typescript';

    export let data: PageData;
    let em = [new WideSolutionClass("mdi:card-account-details",
        $t('services.logistical.logistics.solutions.1.subtitle'),
        $t('services.logistical.logistics.solutions.1.title'),
        $t('services.logistical.logistics.solutions.1.desc'))];
</script>

<Header background=""/>

<main class="text-gray-800
             grid grid-cols-4 gap-x-2 mx-4
             md:grid-cols-8 md:gap-x-4 md:mx-8
             xl:grid-cols-12 xl:gap-x-6 xl:mx-32">

    <SubHero title={$t('services.logistical.hero.title')}
             subTitle={$t('services.logistical.hero.subtitle')}
             showInfo={false} emergency={false}/>

    <div class="col-start-1 row-start-2 col-span-4 flex flex-col py-20 pb-0
            md:col-start-1 md:col-span-8 md:gap-12
            xl:col-start-2 xl:col-span-6">
        <div class="flex flex-col gap-4">
            <h3>{$t('services.logistical.business.title')}</h3>
            <h5>{$t('services.logistical.business.subtitle')}</h5>
        </div>
    </div>

    <IndustrySolutions catalogue={data.catalogue} />

    <div class="col-start-1 row-start-4 col-span-4 flex flex-col py-20 pb-0
            md:col-start-1 md:col-span-8 md:gap-12
            xl:col-start-2 xl:col-span-6">
        <div class="flex flex-col gap-4">
            <h3>{$t('services.logistical.logistics.title')}</h3>
            <h5>{$t('services.logistical.logistics.subtitle')}</h5>
        </div>
    </div>

    <LogisticsSolutions logistcSolutions={em}/>
</main>

