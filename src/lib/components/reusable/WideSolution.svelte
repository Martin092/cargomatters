<!-- Wide Solution component
    @uses: the MainSolution class as a data structure to load information about the component
    @ret: a component that that presents a solution group with sub-services as bullet points
-->
<script lang="ts">
    import type {WidesolutionClass} from "$lib/typescript";
    import Icon from '@iconify/svelte';

    export let emergency:WidesolutionClass;
</script>

<div class="flex flex-col gap-4 rounded-lg border-2 border-black bg-[#313131] p-8 xl:p-8">
    <Icon color="lightgray" height="30"  icon={emergency.icon}/>
    <div>
        <h6 class="text-gray-100">{emergency.subTitle}</h6>
        <h3 class="text-gray-100">{emergency.title}</h3>
        <p class="text-gray-300">{emergency.description}</p>
    </div>
    <div class="flex flex-row gap-4 xl:gap-x-16 flex-wrap">
        {#each emergency.stats as stat}
            <div class="gap-2 text-white">
                <h4 class="text-[#8F8F8F]">{stat.number}</h4>
                <p class="text-white">{stat.statistic}</p>
            </div>
        {/each}
    </div>
    <a href="/contact" class="underline text-primary-500">Consult Us for Free ></a>
</div>

<style>

</style>