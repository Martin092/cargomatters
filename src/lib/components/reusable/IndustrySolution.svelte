<script lang="ts">
import type {IndustrySolutionClass} from "$lib/typescript/industrySolutions";
export let industrySolution:IndustrySolutionClass;
</script>

<div class="flex flex-col bg-[#404040] rounded-t-lg gap-4 border-2 border-black">
    <img src={industrySolution.image} alt={industrySolution.alt}>  
    <div class="flex flex-col gap-6 p-7">
        <div class="flex flex-col gap-2 text-white">
            <h3>{industrySolution.title}</h3>
            <h4>{industrySolution.description}</h4>
        </div> 
        <a href={industrySolution.link}>
            <h4 class="text-primary-500 underline underline-offset-4">{industrySolution.linkText}</h4>
        </a>
    </div>
</div>

<style>

</style>