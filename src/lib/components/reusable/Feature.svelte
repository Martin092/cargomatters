<!-- Feature component
    @uses: the FeatureClass class as a data structure to load information about the feature and
    `Icon` to import icons from the Iconify package
    @ret: a component that holds information about the feature together with an icon and a link (optional)
-->

<script lang="ts">
    import type { FeatureClass } from "$lib/typescript";
    import Icon from "@iconify/svelte";
    import {t, locale} from "$lib/translations";

    /**
     * A typescript object that holds the features to be loaded
     */
    export let feature:FeatureClass;

    /**
     * The colors of the text as an object
     */
    export let colors = {icon: "grey",text: "text-gray-50", title: "text-gray-300"};

    /**
     * the size of the icon as a string
     */
    export let iconSize:string= "25";

    /**
     * a boolean prop that indicates whether the feature has a link at the bottom
     */
    export let hasLink:boolean = true;

    /**
     * a boolean that indicates whether the text is small or not
     */
    export let smallText:boolean = false;

</script>

<div class="flex flex-col gap-2">
    <div class="md:hidden">
        <Icon color={colors.icon} height={iconSize} icon={$t(`features.${feature.localizationKey}.icon`)} />
    </div>
    <div class="hidden md:block xl:hidden">
        <Icon color={colors.icon} height={iconSize} icon={$t(`features.${feature.localizationKey}.icon`)} />
    </div>
    <div class="hidden xl:block">
        <Icon color={colors.icon} height={iconSize} icon={$t(`features.${feature.localizationKey}.icon`)} />
    </div>
    <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
            {#if smallText}
                <p class={colors.text}>
                    {$t(`features.${feature.localizationKey}.title`)}
                </p>
                <h6 class={colors.title}>
                    {$t(`features.${feature.localizationKey}.desc`)}
                </h6>
            {:else}
                <h4 class={colors.text}>
                    {$t(`features.${feature.localizationKey}.title`)}
                </h4>
                <p class={colors.title}>
                    {$t(`features.${feature.localizationKey}.desc`)}
                </p>
            {/if}
        </div>
        {#if hasLink}
            <p><a href={`/${$locale}${feature.link}`} class="text-primary-500 underline">
                {$t(`features.${feature.localizationKey}.link-text`)}
            </a></p>
        {/if}
    </div>
</div>

<style lang="scss">

</style>