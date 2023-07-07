<script lang="ts">
    import Header from "$lib/Header.svelte";
    import {FeatureClass} from "$lib/typescript/feature";
    import Feature from "$lib/Feature.svelte";
    import Benefit from "$lib/Benefit.svelte";
    import {BenefitClass} from "$lib/typescript/benefit";

    let feature1 = new FeatureClass("pepicons-print:truck", "Feature Bullet", "Considering all types of transportation, we carefully plan and arrange the optimal transport solution to any place in the world.");
    let feature2 = new FeatureClass("pepicons-print:airplane", "Feature Bullet", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Ut et massa mi. Aliquam in hendrerit urna.");
    let feature3 = new FeatureClass("solar:box-bold", "Feature Bullet", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Ut et massa mi. Aliquam in hendrerit urna.");

    let benefit1 = new BenefitClass("International Partners", "Solutions to all problems", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.", "images/gray.png", "alt", "Explore services >", "/services");
</script>

<Header background=""/>

<main class="text-gray-800
             grid grid-cols-4 gap-x-2 mx-4
             md:grid-cols-8 md:gap-x-4 md:mx-8
             xl:grid-cols-12 xl:gap-x-6 xl:mx-32 xl:mt-[-80px]">

    <!--  Hero section  -->
    <div id="hero" class="col-span-4 flex flex-col row-start-1
                md:col-span-6 md:gap-12
                xl:col-span-12 xl:grid xl:grid-cols-12 xl:gap-6">

        <!--    Hero Text Group    -->
        <div class="flex flex-col gap-9 mt-80 row-start-1 z-10
                    md:gap-6
                    xl:gap-6 xl:col-start-2 xl:col-span-6 xl:mt-72">
            <!--  Hero Heading  -->
            <div class="flex flex-col gap-4 ">
                <h1 class="max-md:text-3xl font-extrabold md:max-lg:text-5xl
                           xl:font-bold">We provide the logistical solutions to connect the world</h1>
                <h4 class="max-md:text-base md:max-lg:text-xl
                           xl:pr-40">With more than a decade of experience, we find the optimal solution to your problems regarding transport, warehousing and logistical needs.</h4>
            </div>
            <div class="flex flex-col gap-2 mb-20 xl:mt-8">
                <div class="flex gap-2">
                    <button class="btn p-4 text-xs rounded-lg bg-primary-500 font-bold md:text-base">Consult Us For Free</button>
                    <button class="btn text-xs rounded-lg bg-tertiary-500 font-bold text-white md:text-base">I need Emergency care</button>
                </div>
                <h6>More than 1000 companies chose us as their logistical partner</h6>
            </div>
        </div>
        <img data-testid="xl-hero" class="row-start-1 col-start-7 col-span-6 w-[947px] z-[-10] max-w-none overflow-visible hidden xl:block" src="images/hero-image.svg" alt="">
    </div>

    <!-- Features list  -->
    <div id="features" class="col-start-1 col-span-full row-start-2 w-screen
                              ml-[-16px]
                              md:ml-[-32px]
                              xl:ml-[-128px]">s</div>
    <div class="py-20 col-start-2 col-span-2 flex flex-col gap-4 row-start-2
                md:col-start-1 md:flex-row md:col-span-8
                xl:col-start-2 xl:col-span-10" >
        <Feature feature={feature1}  />
        <Feature feature={feature2}  />
        <Feature feature={feature3}  />
        <div class="hidden xl:block">
            <Feature feature={feature3}  />
        </div>
    </div>

    <!--  Benefits  -->
    <div class="flex flex-col row-start-3 col-start-1 col-span-4 gap-16 py-20
                md:col-span-8
                xl:col-start-2 xl:col-span-10">
        <Benefit benefit={benefit1}/>
        <Benefit benefit={benefit1}/>
        <Benefit benefit={benefit1}/>
    </div>
    <div id="benefit" class="row-start-3 col-span-1 xl:col-start-1">

    </div>
</main>

<style lang="scss">
    #hero {
      background-image: url("images/hero-ornaments.svg");
      background-position: left;
    }

    #features {
      background-image: url("images/feature-background.png");
      background-position: top right;
      background-size: cover;
    }

    #benefit {
      background-image: url("images/benefit-ornaments.svg");
      background-size: contain;
    }
</style>
