<script lang="ts">
    import type {BenefitClass} from "$lib/typescript/benefit";

    export let benefit:BenefitClass;
</script>

<div class="flex flex-col-reverse md:flex-row xl:flex-row text-secondary-500
            gap-4 md:gap-4 xl:gap-6">
    <div class="flex flex-col gap-2 md:gap-4 xl:gap-4 md:w-1/2 xl:w-1/2">
        <h6 class="mb-1 text-secondary-400">{benefit.subTitle}</h6>
        <h3 class="mb-2 font-semibold">{benefit.mainTitle}</h3>
        <p class="text-secondary-400">{benefit.message}</p>
        <a href={benefit.link} class="font-bold xl:font-extrabold underline underline-offset-4 max-md:text-[12px]">
            {benefit.linkMessage}
        </a>
    </div>
    <img src={benefit.photo} alt={benefit.alt} class="md:w-1/2 rounded-lg">
</div>

<style>

</style>