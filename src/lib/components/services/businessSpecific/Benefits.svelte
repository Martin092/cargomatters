<!-- Benefits component
    @uses: the BenefitClass class as a data structure to load information about the component and the Benefit svelte component
    @ret: a component that holds all the benefits that are needed for a page
-->

<script lang="ts">
    import {Benefit} from "$lib/components/reusable";
    import {BenefitClass} from "$lib/typescript/benefit";

    /**
     * an array of all the benefits that have to be loaded on the page
     */
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