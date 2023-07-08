<script lang="ts">
    import type {TransportServiceClass} from "$lib/typescript/transportService";
    import Feature from "../reusable/Feature.svelte";
    export let transportService:TransportServiceClass;
    let colors:string[] = ["text-[#707070]", "text-black", "text-[#474747]"]
    let hasLink:boolean = false;
    let smallText:boolean = true;
    let iconSize:string[] = ["20", "35", "20"];
</script>

<div class="flex flex-col mt-4 gap-4">
    <div class="md:hidden">
        <h5>{transportService.title}</h5>
        <h6>{transportService.subtitle}</h6>
    </div>

    <div class="hidden md:flex flex-col">
        <h4>{transportService.title}</h4>
        <h5>{transportService.subtitle}</h5>
    </div>

    <h6 class="md:hidden">{transportService.description}</h6>
    <p class="hidden md:block">{transportService.description}</p>
    <div class="flex flex-row justify-between gap-4">
        {#each transportService.features as feat}
            <Feature feature={feat} colors={colors} hasLink={hasLink} smallText={smallText} iconSize={iconSize}/>
        {/each}
    </div>

    <a href={transportService.link}>
        <h6 class="font-bold underline text-primary-500 md:hidden">{transportService.linkText}</h6>
        <p class="font-bold underline text-primary-500 hidden md:block">{transportService.linkText}</p>
    </a>
</div>

<style>

</style>