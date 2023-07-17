<!-- About Page Stats Group
    @uses: Stat to display statistics
    @ret: a responsive statistics section for some key company statistics
-->
<script lang="ts">
    import {Stat} from "$lib/typescript";
    import {t} from "$lib/translations";

    let stat1:Stat = Stat.shortenedStatistic(15, $t('about.stats.1'));
    let stat2:Stat = Stat.shortenedStatistic(321, $t('about.stats.2'));
    let stat3:Stat = Stat.shortenedStatistic(800, $t('about.stats.3'));
    let stat4:Stat = Stat.shortenedStatistic(644, $t('about.stats.4'));
    let stat5:Stat = Stat.shortenedStatistic(12, $t('about.stats.5'));

    let statistics:Stat[] = [stat1, stat2, stat3, stat4, stat5];

</script>

<div class="row-start-5 col-start-1 col-span-full py-20 text-center">
    <div class="flex flex-col gap-6 md:gap-12">
        <h2 class="font-semibold">We boast:</h2>
        <div class="flex flex-row justify-evenly gap-4 flex-wrap md:flex-nowrap">
            {#each statistics as stat}
                <div class="flex flex-col">
                    <h5 class="text-4xl font-bold">{stat.number}</h5>
                    <p class="font-semibold">{stat.statistic}</p>
                </div>
            {/each}
        </div>
    </div>
</div>