<script lang="ts">
    import {EmergencyHero} from "$lib/components/contact";
    import Header from "$lib/components/Header.svelte";
    import { WideSolutionClass } from "$lib/typescript";
    import {t} from "$lib/translations";
    import LogisticsSolutions from "$lib/components/services/LogisticsSolutions.svelte";

    import Meta from "$lib/components/Meta.svelte";
    import {MetaSnippetBuilder} from "$lib/typescript";


    let meta = new MetaSnippetBuilder().setLocalizationKey("contact").withType("website").build();
    let em = [new WideSolutionClass("mdi:airplane-takeoff",
        $t('services.logistical.logistics.solutions.7.subtitle'),
        $t('services.logistical.logistics.solutions.7.title'),
        $t('services.logistical.logistics.solutions.7.desc')),

        new WideSolutionClass("mdi:airplane",
        $t('services.logistical.logistics.solutions.8.subtitle'),
        $t('services.logistical.logistics.solutions.8.title'),
        $t('services.logistical.logistics.solutions.8.desc')),
        
        new WideSolutionClass("mdi:account-clock",
        $t('services.logistical.logistics.solutions.9.subtitle'),
        $t('services.logistical.logistics.solutions.9.title'),
        $t('services.logistical.logistics.solutions.9.desc')),
        
        new WideSolutionClass("mdi:clock-fast",
        $t('services.logistical.logistics.solutions.10.subtitle'),
        $t('services.logistical.logistics.solutions.10.title'),
        $t('services.logistical.logistics.solutions.10.desc')),
        
        new WideSolutionClass("mdi:transfer",
        $t('services.logistical.logistics.solutions.11.subtitle'),
        $t('services.logistical.logistics.solutions.11.title'),
        $t('services.logistical.logistics.solutions.11.desc')),
        
        new WideSolutionClass("mdi:routes",
        $t('services.logistical.logistics.solutions.12.subtitle'),
        $t('services.logistical.logistics.solutions.12.title'),
        $t('services.logistical.logistics.solutions.12.desc'))];
</script>

<Meta {meta} />

<Header background="" />


<main class="text-gray-800
             grid grid-cols-4 gap-x-2 mx-4
             md:grid-cols-8 md:gap-x-4 md:mx-8
             xl:grid-cols-12 xl:gap-x-6 xl:mx-32">
    <EmergencyHero />

    <LogisticsSolutions logistcSolutions={em}/>
</main>