<script lang="ts">
    import {Benefit} from "$lib/components/reusable";
    import {BenefitClass} from "$lib/typescript/benefit";

    export let benefits:BenefitClass[] = [];
</script>

<div class="flex flex-col row-start-3 col-start-1 col-span-4 gap-16 py-20
                md:col-span-8
                xl:col-start-2 xl:col-span-10">
    {#each benefits as benefit}
        <Benefit {benefit}/>
    {/each}
</div>
<div id="benefit" class="row-start-3 col-span-1 xl:col-start-1"></div>

<style lang="scss">
    #benefit {
        background-image: url("images/benefit-ornaments.svg");
        background-size: contain;
    }
</style>