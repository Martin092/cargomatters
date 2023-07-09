<script lang="ts"> 
    import type {MainSolution} from "$lib/typescript/mainSolution";
    export let mainSolution:MainSolution;
</script>

<div id="bg" class="flex flex-col rounded-lg border-solid border-2 border-black h-full pb-8">
    <img src={mainSolution.image} alt={mainSolution.alt} class="rounded-t-lg">
    <div class="flex flex-col gap-2 md:gap-4 xl:gap-6 p-8 pb-4 h-auto flex-grow">
        <h4 class="text-white">{mainSolution.type} Solutions</h4>
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
    <a href={mainSolution.link} class=" underline underline-offset-4 mx-8 text-primary-500">
        See all {mainSolution.type} solutions >
    </a>
</div>

<style lang="scss">
    #bg {
        background-image: url("/images/main-solution-bg.svg");
        background-size: cover;
        background-position: center;
    }
</style>