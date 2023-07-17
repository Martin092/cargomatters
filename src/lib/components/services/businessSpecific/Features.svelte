<!-- Features component
    @uses: the FeatureClass class as a data structure to load information about the component and the Feature svelte component
    @ret: a component that holds all the features that are needed for a page
-->


<script lang="ts">
    import {Feature} from "$lib/components/reusable/index";
    import {FeatureClass} from "$lib/typescript";

    /**
     * an array of all the features that have to be loaded on the page
     */
    export let features:FeatureClass[] = [];

</script>

<div id="features" class="col-start-1 col-span-full row-start-2 w-screen
                              ml-[-16px]
                              md:ml-[-32px]
                              xl:ml-[-128px]">s</div>
<div class="py-20 col-start-2 col-span-2 flex flex-col gap-8 row-start-2
                md:col-start-1 md:flex-row md:col-span-8
                xl:col-start-2 xl:col-span-10" >
    {#each features as feature}
        <Feature {feature}  />
    {/each}
</div>


<style lang="scss">
    #features {
        background-color: #313131;
        background-image: url("/images/feature-background.png");
        background-position: top right;
        background-size: cover;
    }
</style>