<script lang="ts">
    import type { FeatureClass } from "$lib/typescript";
    import Icon from "@iconify/svelte";

    export let feature:FeatureClass;
    export let colors:string[] = ["grey", "text-gray-50", "text-gray-300"]; //always size 3 
    export let iconSize:string[] = ["25", "40", "25"]; //also always has to be size 3
    export let hasLink:boolean = true;
    export let smallText:boolean = false;;
</script>

<div class="flex flex-col gap-2">
    <div class="md:hidden">
        <Icon color={colors[0]} height={iconSize[0]} icon={feature.icon} />
    </div>
    <div class="hidden md:block xl:hidden">
        <Icon color={colors[0]} height={iconSize[1]} icon={feature.icon} />
    </div>
    <div class="hidden xl:block">
        <Icon color={colors[0]} height={iconSize[0]} icon={feature.icon} />
    </div>
    <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
            {#if smallText}
                <p class={colors[1]}>{feature.title}</p>
                <h6 class={colors[2]}>{feature.description}</h6>
            {:else}
                <h4 class={colors[1]}>{feature.title}</h4>
                <p class={colors[2]}>{feature.description}</p>
            {/if}
        </div>
        {#if hasLink}
            <p><a href={feature.link} class="text-primary-500 underline">{feature.linkText}</a></p>
        {/if}
    </div>
</div>

<style lang="scss">

</style>