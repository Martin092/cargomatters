<!-- LogisticsSolutions Catalogue
    @uses: WideSolution component; WideSolutionClass and Stat classes to load necessary information
    @ret: a responsive logistics solutions section used on the Business solutions page
-->

<script lang="ts">
    import WideSolution from "$lib/components/reusable/WideSolution.svelte";
    import {WideSolutionClass, Stat} from "$lib/typescript";
    import {t} from "$lib/translations";

    export let logistcSolutions: WideSolutionClass[];

    let stat1 = Stat.shortenedStatistic(12, $t('services.logistical.logistics.solutions.1.stats.1'));
    let stats:Stat[] = [stat1, stat1, stat1, stat1];
    
</script>

<div class="col-start-1 row-start-5 col-span-4 flex flex-col py-20
            md:col-start-1 md:col-span-8 md:gap-12
            xl:col-start-1 xl:col-span-12">
    <div class="flex flex-col md:flex-row gap-4
                md:grid md:grid-cols-8
                xl:grid-cols-12">
        <div class="md:col-span-4">
            <WideSolution solution={logistcSolutions[0]} />
        </div>
        <div class="md:col-span-4">
            <WideSolution solution={logistcSolutions[1]} />
        </div>
        <div class="md:col-span-4">
            <WideSolution solution={logistcSolutions[2]} />
        </div>
        <div class="md:col-span-4">
            <WideSolution solution={logistcSolutions[3]} />
        </div>
        <div class="md:col-span-4">
            <WideSolution solution={logistcSolutions[4]} />
        </div>
        <div class="md:col-span-4">
            <WideSolution solution={logistcSolutions[5]} />
        </div>
    </div>
</div>

<style lang="scss">

</style>

