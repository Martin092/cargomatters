<script lang="ts">
    import type {EmergencyServiceClass} from "$lib/typescript/emergencyService";
    import Icon from '@iconify/svelte';

    export let emergency:EmergencyServiceClass;
</script>

<div class="flex flex-col gap-4 rounded-t-lg border-2 border-black bg-[#313131] p-3 md:hidden">
    <Icon color="grey" height="30"  icon={emergency.icon}/>
    <div>
        <h6 class="text-white">{emergency.subTitle}</h6>
        <h3 class="text-white">{emergency.title}</h3>   
        <p class="text-white">{emergency.description}</p>
    </div>
    <div class="flex flex-row justify-between gap-2">
        {#each emergency.stats as stat}
            <div class="gap-2 text-white">
                <h4>{stat.num}</h4>
                <p>{stat.name}</p>
            </div>
        {/each}
    </div>
</div>
<!-- <div class="flex flex-col gap-4 rounded-t-lg border-2 border-black bg-[#313131]">
    <div class="flex flex-row">
        <img src={emergency.image} alt={emergency.alt}>
        <div class="flex flex-col">
            <h6 class="h6 text-white">{emergency.subTitle}</h6>
            <h3 class="h3 text-white font-bold">{emergency.title}</h3>
        </div>

    </div>
</div> -->

<style>

</style>