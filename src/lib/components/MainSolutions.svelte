<script lang="ts"> 
    import type {MainSolution} from "$lib/typescript/mainSolution";
    export let mainSolution:MainSolution;
</script>

<div class="rounded-lg border-solid border-2 border-black">
    <div>
        <img src={mainSolution.image} alt={mainSolution.alt} class="rounded-t-lg">
    </div>
    <div class="flex flex-col bg-[#313131] gap-2 md:gap-4 xl:gap-6 p-9">
        <h4 class="text-white">{mainSolution.type} Solutions</h4>
        <p class=text-white>{mainSolution.description}</p>
        <ol class="pl-8 pt-3 list-disc">
            {#each mainSolution.bullets as bullet}
                <li class="text-white">{bullet}</li>
            {/each}
        </ol>
        <a href={mainSolution.link} class="underline underline-offset-4 text-white pt-9 text-primary-500">
            See all {mainSolution.type} solutions
        </a>
    </div>
</div>

<style> 

</style>