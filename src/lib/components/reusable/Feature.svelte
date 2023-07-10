<!-- Feature component
    @uses: the FeatureClass class as a data structure to load information about the feature and
    `Icon` to import icons from the Iconify package
    @prop feature: a typescript object that holds the features to be loaded
    @prop colors: the colors of the text as an object
    @prop iconSize: the size of the icon as a string
    @prop hasLink: a boolean that indicates whether the feature has a link at the bottom
    @prop smallText: a boolean that indicates whether the text is small or not
    @ret: a component that holds information about the feature together with an icon and a link (optional)
-->

<script lang="ts">
    import type { FeatureClass } from "$lib/typescript";
    import Icon from "@iconify/svelte";

    export let feature:FeatureClass;

    export let colors = {icon: "grey",text: "text-gray-50", title: "text-gray-300"};
    export let iconSize:string= "25";
    export let hasLink:boolean = true;

    /**
     * a boolean that indicates whether the text is small or not
     */
    export let smallText:boolean = false;
</script>

<div class="flex flex-col gap-2">
    <div class="md:hidden">
        <Icon color={colors.icon} height={iconSize} icon={feature.icon} />
    </div>
    <div class="hidden md:block xl:hidden">
        <Icon color={colors.icon} height={iconSize} icon={feature.icon} />
    </div>
    <div class="hidden xl:block">
        <Icon color={colors.icon} height={iconSize} icon={feature.icon} />
    </div>
    <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
            {#if smallText}
                <p class={colors.text}>{feature.title}</p>
                <h6 class={colors.title}>{feature.description}</h6>
            {:else}
                <h4 class={colors.text}>{feature.title}</h4>
                <p class={colors.title}>{feature.description}</p>
            {/if}
        </div>
        {#if hasLink}
            <p><a href={feature.link} class="text-primary-500 underline">{feature.linkText}</a></p>
        {/if}
    </div>
</div>

<style lang="scss">

</style>