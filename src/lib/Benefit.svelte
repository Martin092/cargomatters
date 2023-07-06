<script lang="ts">
    import type {BenefitClass} from "$lib/typescript/benefit";

    export let benefit:BenefitClass;
</script>

<div class="flex flex-col-reverse md:flex-row xl:flex-row
            gap-2 md:gap-4 xl:gap-6">
    <div class="flex flex-col gap-2 md:gap-4 xl:gap-6 md:w-1/2 xl:w-1/2"> 
        <h6 class="h6">{benefit.subTitle}</h6>
        <h3 class="h3">{benefit.mainTitle}</h3>
        <p>{benefit.message}</p>
        <a href={benefit.link} class="font-bold underline underline-offset-4">{benefit.linkMessage}</a>
    </div>
<img src={benefit.photo} alt={benefit.alt} class="md:w-1/2 rounded-lg">


</div>

<style>

</style>