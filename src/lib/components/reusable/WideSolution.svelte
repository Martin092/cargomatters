<!-- Wide Solution component
    @uses: the MainSolution class as a data structure to load information about the component
    @ret: a component that that presents a solution group with sub-services as bullet points
-->
<script lang="ts">
    import type {WideSolutionClass} from "$lib/typescript";
    import Icon from '@iconify/svelte';
    import {t, locale} from "$lib/translations";

    export let solution:WideSolutionClass;
</script>

<div class="flex flex-col gap-4 rounded-lg border-2 border-black bg-[#313131] p-8 xl:p-8">
    <Icon color="lightgray" height="30"  icon={solution.icon}/>
    <div>
        <h6 class="text-gray-100">{solution.subTitle}</h6>
        <h3 class="text-gray-100">{solution.title}</h3>
        <p class="text-gray-300">{solution.description}</p>
    </div>
    <div class="flex flex-row gap-4 xl:gap-x-16 flex-wrap">
        {#each solution.stats as stat}
            <div class="gap-2 text-white">
                <h4 class="text-[#8F8F8F]">{stat.number}</h4>
                <p class="text-white">{stat.statistic}</p>
            </div>
        {/each}
    </div>
    <a href="/{$locale}/contact" class="underline text-primary-500">{$t('cta.consult')} ></a>
</div>

<style>

</style>