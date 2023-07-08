<script lang="ts">
    import {IndustrySolutionClass} from "$lib/typescript";
    import {IndustrySolution} from "$lib/components/reusable";

    let em = new IndustrySolutionClass("/images/gray.png", "alt", "Aerospace Industry Solutions", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
        "See Aerospace solutions", "/")
</script>

<div class="col-start-1 row-start-3 col-span-4 flex flex-col py-20
            md:col-start-1 md:col-span-8 md:gap-12
            xl:col-start-1 xl:col-span-12">
    <div class="flex flex-col md:flex-row gap-4
                md:grid md:grid-cols-8
                xl:grid-cols-12">
        <div class="md:col-span-4 xl:col-span-3">
            <IndustrySolution industrySolution={em} />
        </div>
        <div class="md:col-span-4 xl:col-span-3">
            <IndustrySolution industrySolution={em} />
        </div>
        <div class="md:col-span-4 xl:col-span-3">
            <IndustrySolution industrySolution={em} />
        </div>
        <div class="md:col-span-4 xl:col-span-3">
            <IndustrySolution industrySolution={em} />
        </div>
        <div class="md:col-span-4 xl:col-span-3">
            <IndustrySolution industrySolution={em} />
        </div>
        <div class="md:col-span-4 xl:col-span-3">
            <IndustrySolution industrySolution={em} />
        </div>
        <div class="md:col-span-4 xl:col-span-3">
            <IndustrySolution industrySolution={em} />
        </div>
        <div class="md:col-span-4 xl:col-span-3">
            <IndustrySolution industrySolution={em} />
        </div>
    </div>
</div>

<style lang="scss">

</style>

