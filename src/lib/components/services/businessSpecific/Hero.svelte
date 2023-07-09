<script lang="ts">
    export let type = "";
    export let subTitle = "";
    export let heroImage = "/images/hero-ornaments.svg";
</script>

<div style={`background-image: url("${heroImage}")`} class="col-span-4 flex flex-col row-start-1
                md:col-span-6 md:gap-12
                xl:col-span-12 xl:grid xl:grid-cols-12 xl:gap-6">

    <!--    Hero Text Group    -->
    <div class="flex flex-col gap-9 mt-80 row-start-1 z-10
                    md:gap-6
                    xl:gap-6 xl:col-start-2 xl:col-span-5 xl:mt-72">

        <!--  Hero Heading  -->
        <div class="flex flex-col gap-4 ">
            <h1 class="font-extrabold xl:font-bold">We provide services for the {type} industry</h1>
            <h4 class="xl:pr-40">{subTitle}</h4>
        </div>
        <div class="flex flex-col gap-2 mb-20 xl:mt-8">
            <div class="flex gap-2">
                <a href="/contact"><button class="btn p-4 text-xs rounded-lg bg-primary-500 font-bold md:text-base">Consult Us For Free</button></a>
                <a href="/emergency"><button class="btn p-4 text-xs rounded-lg bg-tertiary-500 font-bold text-white md:text-base">I need Emergency care</button></a>
            </div>
            <h6>More than 1000 companies chose us as their logistical partner</h6>
        </div>
    </div>
    <img data-testid="xl-hero" class="row-start-1 col-start-7 col-span-6 w-[947px] z-[-10] max-w-none overflow-visible hidden xl:block" src="/images/hero-image.svg" alt="">
</div>

<style lang="scss">
    #hero {
        background-position: left;
    }
</style>
