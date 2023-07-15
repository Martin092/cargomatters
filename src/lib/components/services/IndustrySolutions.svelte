<!-- IndustrySolutions Catalogue
    @uses: IndustrySolutionClass class and the IndustrySolution component to load information on the page
    @ret: a catalogue with all industry solutions to load
-->
<script lang="ts">
    import type {IndustrySolutionClass} from "$lib/typescript";
    import {IndustrySolution} from "$lib/components/reusable";

    /**
     * Catalogue of Industry Solutions to load on the page.
     */
    export let catalogue:IndustrySolutionClass[] = [];
</script>

<div class="col-start-1 row-start-3 col-span-4 flex flex-col py-20
            md:col-start-1 md:col-span-8 md:gap-12
            xl:col-start-1 xl:col-span-12">
    <div class="flex flex-col md:flex-row gap-4
                md:grid md:grid-cols-8
                xl:grid-cols-12">

        <!-- TODO: Paginate exceeding solutions -->
        {#each catalogue as industrySolution}
            <div class="md:col-span-4 xl:col-span-3">
                <IndustrySolution {industrySolution} />
            </div>
        {/each}
    </div>
</div>

<style lang="scss">

</style>

