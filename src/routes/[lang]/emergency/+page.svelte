<script lang="ts">
    import {EmergencyHero} from "$lib/components/contact";
    import Header from "$lib/components/Header.svelte";
    import { WideSolutionClass } from "$lib/typescript";
    import {t} from "$lib/translations";
    import LogisticsSolutions from "$lib/components/services/LogisticsSolutions.svelte";

    import Meta from "$lib/components/Meta.svelte";
    import {MetaSnippetBuilder} from "$lib/typescript";


    let meta = new MetaSnippetBuilder().setLocalizationKey("contact").withType("website").build();
    let em = [new WideSolutionClass("mdi:card-account-details",
        $t('services.logistical.logistics.solutions.1.subtitle'),
        $t('services.logistical.logistics.solutions.1.title'),
        $t('services.logistical.logistics.solutions.1.desc')),

        new WideSolutionClass("mdi:card-account-details",
        $t('services.logistical.logistics.solutions.2.subtitle'),
        $t('services.logistical.logistics.solutions.2.title'),
        $t('services.logistical.logistics.solutions.2.desc')),
        
        new WideSolutionClass("mdi:card-account-details",
        $t('services.logistical.logistics.solutions.3.subtitle'),
        $t('services.logistical.logistics.solutions.3.title'),
        $t('services.logistical.logistics.solutions.3.desc')),
        
        new WideSolutionClass("mdi:card-account-details",
        $t('services.logistical.logistics.solutions.4.subtitle'),
        $t('services.logistical.logistics.solutions.4.title'),
        $t('services.logistical.logistics.solutions.4.desc')),
        
        new WideSolutionClass("mdi:card-account-details",
        $t('services.logistical.logistics.solutions.5.subtitle'),
        $t('services.logistical.logistics.solutions.5.title'),
        $t('services.logistical.logistics.solutions.5.desc')),
        
        new WideSolutionClass("mdi:card-account-details",
        $t('services.logistical.logistics.solutions.6.subtitle'),
        $t('services.logistical.logistics.solutions.6.title'),
        $t('services.logistical.logistics.solutions.6.desc'))];
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