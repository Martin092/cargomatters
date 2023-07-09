<script lang="ts">
    import type {TransportServiceClass} from "$lib/typescript/transportService";
    import {Feature} from "$lib/components/reusable";

    export let transportService:TransportServiceClass;

    let colors = {icon: "text-[#707070]",text: "text-gray-900", title: "text-[#474747]"};
    let hasLink:boolean = false;
    let smallText:boolean = true;
    let iconSize:string = "20";
</script>

<div class="flex flex-col mt-4 gap-4 py-8 lg:py-4">
    <div class="md:hidden">
        <h3>{transportService.title}</h3>
        <h4>{transportService.subtitle}</h4>
    </div>

    <div class="hidden md:flex flex-col">
        <h3 class="font-bold">{transportService.title}</h3>
        <h4>{transportService.subtitle}</h4>
    </div>

    <h5 class="md:hidden">{transportService.description}</h5>
    <p class="hidden md:block">{transportService.description}</p>
    <div class="flex flex-row flex-wrap sm:flex-nowrap justify-between gap-4">
        {#each transportService.features as feat}
            <div class="max-w-[220px]">
                <Feature feature={feat} colors={colors} hasLink={hasLink} smallText={smallText} iconSize={iconSize}/>
            </div>
        {/each}
    </div>

    <a href="/contact">
        <h5 class="font-bold underline text-primary-500 md:hidden">Consult {transportService.title} ></h5>
        <p class="font-bold underline text-primary-500 hidden md:block">Consult {transportService.title} ></p>
    </a>
</div>

<style>

</style>