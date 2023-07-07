<script>
import Feature from "$lib/components/Feature.svelte";
import {FeatureClass} from "$lib/typescript/feature";

let feature1 = new FeatureClass("pepicons-print:truck", "Feature Bullet", "Considering all types of transportation, we carefully plan and arrange the optimal transport solution to any place in the world.", "/contact", "Consult Us for Free >");
let feature2 = new FeatureClass("pepicons-print:airplane", "Feature Bullet", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Ut et massa mi. Aliquam in hendrerit urna.", "/contact", "Consult Us for Free >");
let feature3 = new FeatureClass("solar:box-bold", "Feature Bullet", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Ut et massa mi. Aliquam in hendrerit urna.", "/contact", "Consult Us for Free >");
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
    <Feature feature={feature3}  />
    <div class="hidden xl:block">
        <Feature feature={feature3}  />
    </div>
</div>


<style lang="scss">
    #features {
        background-image: url("images/feature-background.png");
        background-position: top right;
        background-size: cover;
    }
</style>