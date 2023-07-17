<!-- Review component
    @uses: the ReviewClass class as a data structure to load information about the component
    @ret: a component that that holds the text of the review, the name of the company and a logo
-->

<script lang="ts">
    import type {ReviewClass} from "$lib/typescript/componentClasses/review";
    import {t} from "$lib/translations";

    /**
     * A typescript object that holds information about the review
     */
    export let review:ReviewClass;
</script>


<div class="flex flex-col gap-4 rounded-t-lg bg-surface-50">
    <div class="p-8 flex flex-col gap-8">
        <div class="flex flex-col gap-4">
            <h5 class="text-[#232323]">
                {$t(`social-proof.reviews.${review.localizationKey}.title`)}
            </h5>
            <p class="text-secondary-400">
                {$t(`social-proof.reviews.${review.localizationKey}.review`)}
            </p>
        </div>
        <div class="flex flex-row justify-between items-center">
            <img src={review.logo} alt={$t(`social-proof.reviews.${review.localizationKey}.alt`)}>
            <h6>
                {$t(`social-proof.reviews.${review.localizationKey}.author`)}
            </h6>
        </div>
    </div>
    <div class="bg-[#EAC976] h-1.5 m-0"></div>
</div>

<style>
    h5 {
        font-weight: 400;
    }
</style>