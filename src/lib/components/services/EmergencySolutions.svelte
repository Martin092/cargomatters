<!-- EmergencySolutions component
    @uses: WideSolution component; WideSolutionClass, Stat classes to load all the solutions
    @ret: a responsive emergency section used on the emergency solutions page
-->

<script lang="ts">
    import WideSolution from "$lib/components/reusable/WideSolution.svelte";
    import {WideSolutionClass, Stat} from "$lib/typescript";
    import {t} from "$lib/translations";

    let stat1 = Stat.shortenedStatistic(12, $t('services.emergency.solutions.1.stats.1'));
    let stats:Stat[] = [stat1, stat1, stat1, stat1];
    let em = new WideSolutionClass("mdi:card-account-details", $t('services.emergency.solutions.1.subtitle'),
        $t('services.emergency.solutions.1.title'), $t('services.emergency.solutions.1.desc'), stats);
</script>

<div class="col-start-1 row-start-3 col-span-4 flex flex-col py-20
            md:col-start-1 md:col-span-8 md:gap-12
            xl:col-start-1 xl:col-span-12">
    <div class="flex flex-col md:flex-row gap-4
                md:grid md:grid-cols-8
                xl:grid-cols-12">
        <div class="md:col-span-4">
            <WideSolution solution={em} />
        </div>
        <div class="md:col-span-4">
            <WideSolution solution={em} />
        </div>
        <div class="md:col-span-4">
            <WideSolution solution={em} />
        </div>
        <div class="md:col-span-4">
            <WideSolution solution={em} />
        </div>
        <div class="md:col-span-4">
            <WideSolution solution={em} />
        </div>
        <div class="md:col-span-4">
            <WideSolution solution={em} />
        </div>
    </div>
</div>

<style lang="scss">

</style>

