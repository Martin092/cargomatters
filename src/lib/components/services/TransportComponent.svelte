<!-- TransportComponent catalogue item
    @uses: Feature component; TransportServiceClass class to load the information about this solution
    @ret: a responsive text description of a transport service WITHOUT the image
-->

<script lang="ts">
    import type {TransportServiceClass} from "$lib/typescript";
    import {Feature} from "$lib/components/reusable";

    /**
     * The transport service to be loaded as a TransportServiceClass
     */
    export let transportService:TransportServiceClass;

    let colors = {icon: "text-[#707070]",text: "text-gray-900", title: "text-[#474747]"};
    let hasLink:boolean = false;
    let smallText:boolean = true;
    let iconSize:string = "20";
    import {t, locale} from "$lib/translations";
    import {FeatureClass} from "$lib/typescript";
</script>

<div class="flex flex-col mt-4 gap-4 py-8 lg:py-4 xl:w-[50vw]">
    <div class="md:hidden">
        <h3>{$t(`services.transport.solutions.${transportService.type}.title`)}</h3>
        <h4>{$t(`services.transport.solutions.${transportService.type}.subtitle`)}</h4>
    </div>

    <div class="hidden md:flex flex-col">
        <h3 class="font-bold">{$t(`services.transport.solutions.${transportService.type}.title`)}</h3>
        <h4>{$t(`services.transport.solutions.${transportService.type}.subtitle`)}</h4>
    </div>

    <h5 class="md:hidden">{@html $t(`services.transport.solutions.${transportService.type}.desc`)}</h5>
    <p class="hidden md:block">{@html $t(`services.transport.solutions.${transportService.type}.desc`)}</p>
    <div class="flex flex-row flex-wrap sm:flex-nowrap justify-between gap-4">
        {#each transportService.featureKeys as feat}
            <div class="max-w-[220px]">
                <Feature feature={new FeatureClass(feat,'/')} colors={colors} hasLink={hasLink} smallText={smallText} iconSize={iconSize}/>
            </div>
        {/each}
    </div>

    <a href="/{$locale}/contact">
        <h5 class="font-bold underline text-primary-500 md:hidden">{$t('cta.consult-word')} {$t(`services.transport.solutions.${transportService.type}.title`)} ></h5>
        <p class="font-bold underline text-primary-500 hidden md:block">{$t('cta.consult-word')} {$t(`services.transport.solutions.${transportService.type}.title`)} ></p>
    </a>
</div>

<style>

</style>