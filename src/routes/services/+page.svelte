<script lang="ts">
    import {Stat} from "$lib/typescript/Stats";
    import {EmergencyServiceClass} from "$lib/typescript/emergencyService";

    let stat1 = new Stat(12, "flights");
    let stat2 = new Stat(13, "trucks");
    let stat3 = new Stat(10, "planes");

    let stats:Stat[] = [stat1, stat2, stat3];

    let testEmergency =
        new EmergencyServiceClass("/", "alt", "/", "fast", "title", "none", stats);

    import {Hero} from "$lib/components/services/index"
    import Header from "$lib/components/Header.svelte";
</script>

<Header background=""/>

<main class="text-gray-800
             grid grid-cols-4 gap-x-2 mx-4
             md:grid-cols-8 md:gap-x-4 md:mx-8
             xl:grid-cols-12 xl:gap-x-6 xl:mx-32 xl:mt-[-80px]">

    <Hero />

</main>

