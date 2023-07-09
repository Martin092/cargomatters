<script lang="ts">
    import type { FeatureClass } from "$lib/typescript";
    import Icon from "@iconify/svelte";

    export let feature:FeatureClass;

    export let colors = {icon: "grey",text: "text-gray-50", title: "text-gray-300"};
    export let iconSize:string= "25";
    export let hasLink:boolean = true;
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