<!-- Main Solution component
    @uses: the MainSolution class as a data structure to load information about the component
    @ret: a component that that presents a solution group with sub-services as bullet points
-->
<script lang="ts">
    import type {MainSolution} from "$lib/typescript";
    import {t} from "$lib/translations";

    /**
     * An object to load information about this main solution
     */
    export let mainSolution:MainSolution;
</script>

<div id="bg" class="flex flex-col rounded-lg border-solid border-2 border-black h-full pb-8">
    <img src={mainSolution.image} alt={mainSolution.alt} class="rounded-t-lg">
    <div class="flex flex-col gap-2 md:gap-4 xl:gap-6 p-8 pb-4 h-auto flex-grow">
        <h4 class="text-white">{$t('services.mpc.title', {type: mainSolution.type})}</h4>
        <p class=text-white>{mainSolution.description}</p>
        <ol class="2xl:hidden ml-4 mt-3 list-disc text-sm">
            {#each mainSolution.bullets as bullet}
                <li class="text-white">{bullet}</li>
            {/each}
        </ol>
        <div class="hidden 2xl:flex 2xl:flex-row 2xl:gap-[2vw] 2xl:text-base">
            <ol class="ml-4 mt-3 list-disc">
                {#each mainSolution.bullets as bullet, i}
                    {#if i < mainSolution.bullets.length/2}
                        <li class="text-white">{bullet}</li>
                    {/if}
                {/each}
            </ol>
            <ol class="ml-4 mt-3 list-disc">
                {#each mainSolution.bullets as bullet, i}
                    {#if i >= mainSolution.bullets.length/2}
                        <li class="text-white">{bullet}</li>
                    {/if}
                {/each}
            </ol>
        </div>
    </div>
    <a href={mainSolution.link} class="underline underline-offset-4 mx-8 text-primary-500">
        {$t('services.mpc.link', {type: mainSolution.type})} >
    </a>
</div>

<style lang="scss">
    #bg {
        background-color: #333333;
        background-image: url("/images/main-solution-bg.svg");
        background-size: cover;
        background-position: center;
    }
</style>