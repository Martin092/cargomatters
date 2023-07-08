<script lang="ts">
    import type {EmergencyServiceClass} from "$lib/typescript/emergencyService";
    import Icon from '@iconify/svelte';

    export let emergency:EmergencyServiceClass;
</script>

<!-- Mobile version -->
<div class="flex flex-col gap-4 rounded-t-lg border-2 border-black bg-[#313131] p-3 md:hidden">
    <Icon color="grey" height="30"  icon={emergency.icon}/>
    <div>
        <h6 class="text-white">{emergency.subTitle}</h6>
        <h3 class="text-white">{emergency.title}</h3>   
        <p class="text-[#CBCBCB]">{emergency.description}</p>
    </div>
    <div class="flex flex-row justify-between gap-2">
        {#each emergency.stats as stat}
            <div class="gap-2 text-white">
                <h4 class="text-[#8F8F8F]">{stat.num}</h4>
                <p class="text-white">{stat.name}</p>
            </div>
        {/each}
    </div>
</div>

<!-- Wide screen version -->
<div class="hidden flex-col gap-4 rounded-t-lg border-2 border-black bg-[#313131] md:flex">
    <div class="flex flex-row">
        <img src={emergency.image} alt={emergency.alt} class="w-2/5">
        <div class="flex flex-col gap-4 p-3">
            <div>
                <h6 class="text-white">{emergency.subTitle}</h6>
                <h3 class="text-white">{emergency.title}</h3>   
            </div>
            <p class="text-[#CBCBCB]">{emergency.description}</p>
            <div class="flex flex-row justify-between ">
                {#each emergency.stats as stat, i}
                    {#if i%2===0}
                        <div class="flex flex-col">
                            <div class="gap-2 text-white">
                                <h4 class="text-[#8F8F8F]">{emergency.stats[i].num}</h4>
                                <h5 class="text-white">{emergency.stats[i].name}</h5>
                            </div>
                            <div class="gap-2 text-white">
                                <h4 class="text-[#8F8F8F]">{emergency.stats[i+1].num}</h4>
                                <h5 class="text-white">{emergency.stats[i+1].name}</h5>
                            </div>
                        </div>
                    {/if}
                {/each}
            </div>
            <a href="a">
                <h5 class="underline underline-offset-2 text-primary-500">Consult Us for Free ></h5>
            </a>
        </div>
    </div>
</div>

<style>

</style>