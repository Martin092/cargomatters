<!-- Feature component
    @uses: the IndustrySolutionClass class as a data structure to load information about the component
    @ret: a component that that has a brief description of the industry, an image and a link
          that leads to the page of the industry
-->

<script lang="ts">
    import type {IndustrySolutionClass} from "$lib/typescript";
    import {locale, t} from "$lib/translations";

    /**
     * A typescript object that holds information about the solution
     */
    export let industrySolution:IndustrySolutionClass;
</script>

<div class="flex flex-col bg-[#404040] rounded-lg gap-4 border-2 border-black">
    <img src={industrySolution.image} alt={industrySolution.alt}>  
    <div class="flex flex-col gap-6 p-7">
        <div class="flex flex-col gap-2 text-white">
            <h5 class="font-bold">{$t('business.common.card-title', { type: industrySolution.type})}</h5>
            <p>{industrySolution.description}</p>
        </div> 
        <a href={`/${$locale}${industrySolution.link}`}>
            <p class="text-primary-500 underline underline-offset-4">
                {$t('business.common.card-link', { type: industrySolution.type})}
            </p>
        </a>
    </div>
</div>

<style>

</style>