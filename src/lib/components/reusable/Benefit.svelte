<!-- Benefit component
    @uses: the Benefit class as a data structure to load information about the benefit
    @ret: a component that has information about the benefit and accompanying image
-->
<script lang="ts">
    import type {BenefitClass} from "$lib/typescript";
    import {t, locale} from "$lib/translations";

    /**
     * a typescript object that holds the benefits to be loaded
     */
    export let benefit:BenefitClass;
</script>

<div class="flex flex-col-reverse md:flex-row text-secondary-500
            gap-4 xl:gap-6">
    <div class="flex flex-col gap-8 md:w-1/2 md:justify-center">
        <div class="gap-4">
            <div class="gap-2">
                <h6 class="mb-1 text-secondary-400">{$t(`benefits.${benefit.localizationKey}.subtitle`)}</h6>
                <h3 class="mb-2 font-semibold">{$t(`benefits.${benefit.localizationKey}.title`)}</h3>
            </div>
            <p class="text-secondary-400">{@html $t(`benefits.${benefit.localizationKey}.desc`)}</p>
        </div>
        <a href={`/${$locale}${benefit.link}`} class="font-bold xl:font-extrabold underline underline-offset-4 max-md:text-[12px]">
            {$t(`benefits.${benefit.localizationKey}.link-text`)}
        </a>
    </div>
    <img src={benefit.image} alt={$t(`benefits.${benefit.localizationKey}.alt`)} class="md:w-1/2 rounded-lg">
</div>

<style>

</style>