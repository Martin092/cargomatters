<!-- Benefit component
    @uses: the Benefit class as a data structure to load information about the benefit
    @ret: a component that has information about the benefit and accompanying image
-->
<script lang="ts">
    import type {BenefitClass} from "$lib/typescript";

    /**
     * a typescript object that holds the benefits to be loaded
     */
    export let benefit:BenefitClass;
</script>

<div class="flex flex-col-reverse md:flex-row text-secondary-500
            gap-4 xl:gap-6">
    <div class="flex flex-col gap-8 md:w-1/2">
        <div class="gap-4">
            <div class="gap-2">
                <h6 class="mb-1 text-secondary-400">{benefit.subTitle}</h6>
                <h3 class="mb-2 font-semibold">{benefit.mainTitle}</h3>
            </div>
            <p class="text-secondary-400">{benefit.message}</p>
        </div>
        <a href={benefit.link} data-testid="explore-services-button" class="font-bold xl:font-extrabold underline underline-offset-4 max-md:text-[12px]">
            {benefit.linkMessage}
        </a>
    </div>
    <img src={benefit.photo} alt={benefit.alt} class="md:w-1/2 rounded-lg">
</div>

<style>

</style>