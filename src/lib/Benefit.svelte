<script lang="ts">
    import type { s } from "vitest/dist/types-71ccd11d";
    import type {BenefitClass} from "$lib/typescript/benefit";

    export let benefit:BenefitClass;
</script>

<div class="flex flex-col-reverse md:flex-row xl:flex-row
            gap-2 md:gap-4 xl:gap-6">
    <div class="flex flex-col gap-2 md:gap-4 xl:gap-6 md:w-1/2 xl:w-1/2"> 
        <h6 class="h6">International Partners</h6>
        <h3 class="h3">Solutions to all your problems</h3>
        <p>{benefit.message}</p>
        <p class="font-bold underline underline-offset-4">{benefit.link}</p>
    </div>
<img src={benefit.photo} alt={benefit.alt} class="md:w-1/2 rounded-2xl">


</div>

<style>

</style>