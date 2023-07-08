<script lang="ts">
    import {Stat} from "$lib/typescript/Stats";
    import {EmergencyServiceClass} from "$lib/typescript/emergencyService";
    import EmergencyService from "$lib/components/reusable/EmergencyService.svelte";

    let stat1 = new Stat(12, "flights");
    let stat2 = new Stat(13, "trucks");
    let stat3 = new Stat(10, "planes");

    let stats:Stat[] = [stat1, stat2, stat3];

    let testEmergency =
        new EmergencyServiceClass("/", "alt", "/", "fast", "title", "none", stats);
</script>


<EmergencyService emergency={testEmergency} />