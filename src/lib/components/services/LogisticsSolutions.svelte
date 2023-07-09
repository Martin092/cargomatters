<script lang="ts">
    import WideSolution from "$lib/components/reusable/WideSolution.svelte";
    import {WidesolutionClass, Stat} from "$lib/typescript";

    let stat1 = new Stat(12, "Services");
    let stats:Stat[] = [stat1, stat1, stat1, stat1];
    let em = new WidesolutionClass("/images/gray.png", "alt", "mdi:card-account-details", "Fast Solution",
        "On Board Courier", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.", stats);
</script>

<div class="col-start-1 row-start-5 col-span-4 flex flex-col py-20
            md:col-start-1 md:col-span-8 md:gap-12
            xl:col-start-1 xl:col-span-12">
    <div class="flex flex-col md:flex-row gap-4
                md:grid md:grid-cols-8
                xl:grid-cols-12">
        <div class="md:col-span-4">
            <WideSolution emergency={em} />
        </div>
        <div class="md:col-span-4">
            <WideSolution emergency={em} />
        </div>
        <div class="md:col-span-4">
            <WideSolution emergency={em} />
        </div>
        <div class="md:col-span-4">
            <WideSolution emergency={em} />
        </div>
        <div class="md:col-span-4">
            <WideSolution emergency={em} />
        </div>
        <div class="md:col-span-4">
            <WideSolution emergency={em} />
        </div>
    </div>
</div>

<style lang="scss">

</style>

