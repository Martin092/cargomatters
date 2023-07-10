<!-- About Page Stats Group
    @uses: Stat to display statistics
    @ret: a responsive statistics section for some key company statistics
-->
<script lang="ts">
    import {Stat} from "$lib/typescript";

    let stat1:Stat = new Stat(15, "Years of experience");
    let stat2:Stat = new Stat(321, "Happy clients");
    let stat3:Stat = new Stat(800, "Tonnes transported");
    let stat4:Stat = new Stat(644, "Fulfilled orders");
    let stat5:Stat = new Stat(12, "International Partners");

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