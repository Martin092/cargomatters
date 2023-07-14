<!-- BusinessFeature component
    @uses: the FeatureClass class as a data structure to load information about the feature and
    `Icon` to import icons from the Iconify package
    @ret: a component that holds information about the feature together with an icon and a link (optional)
-->

<script lang="ts">
    import type { BusinessFeatureClass } from "$lib/typescript";
    import Icon from "@iconify/svelte";
    import {t, locale} from "$lib/translations";

    /**
     * A typescript object that holds the features to be loaded
     */
    export let feature:BusinessFeatureClass;

</script>

<div class="flex flex-col gap-2">
    <div class="md:hidden">
        <Icon color="grey" height="25" icon={feature.icon} />
    </div>
    <div class="hidden md:block xl:hidden">
        <Icon color="grey" height="25" icon={feature.icon} />
    </div>
    <div class="hidden xl:block">
        <Icon color="grey" height="25" icon={feature.icon} />
    </div>
    <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
            <h4 class="text-gray-50">{$t(`business.entries.${feature.localizationKey}.title`)}</h4>
            <p class="text-gray-300">{$t(`business.entries.${feature.localizationKey}.desc`)}</p>
        </div>
        <p><a href={`/${$locale}${feature.link}`} class="text-primary-500 underline">
            {$t(`business.entries.${feature.localizationKey}.link-text`)}
        </a></p>
    </div>
</div>

<style lang="scss">

</style>