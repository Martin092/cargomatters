<!-- Home Features
    @uses: Feature component and FeatureClass class to load features
    @ret: a responsive features section used on the Home page
-->
<script>
    import {Feature} from "$lib/components/reusable/index";
    import {FeatureClass} from "$lib/typescript";

    let feature1 = new FeatureClass("free-consult", `/contact`);
    let feature2 = new FeatureClass("best-transport", `/services/transport`);
    //let feature3 = new FeatureClass("best-logistics", `/services/logistics`);
    let feature4 = new FeatureClass("expert-team", `/contact`);
</script>

<div id="features" class="col-start-1 col-span-full row-start-2 w-screen
                              ml-[-16px]
                              md:ml-[-32px]
                              xl:ml-[-128px]">s</div>
<div class="py-20 col-start-2 col-span-2 flex flex-col gap-8 row-start-2
                md:col-start-1 md:flex-row md:col-span-8
                xl:col-start-2 xl:col-span-10" >
    <Feature feature={feature1}  />
    <Feature feature={feature2}  />
    <!-- <Feature feature={feature3}  /> -->
    <Feature feature={feature4}  />
</div>


<style lang="scss">
    #features {
        background-color: #313131;
        background-image: url("/images/feature-background.png");
        background-position: top right;
        background-size: cover;
    }
</style>