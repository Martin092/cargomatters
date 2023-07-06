<script lang="ts">

import Header from "$lib/Header.svelte";
</script>

<Header background=""/>

<main class="text-gray-800
             grid grid-cols-4 gap-2 mx-4
             md:grid-cols-8 md:gap-4 md:mx-8
             xl:grid-cols-12 xl:gap-6 xl:mx-32">

    <!--  Hero section  -->
    <div class="col-span-4 flex flex-col
                md:col-span-6 md:gap-12
                xl:col-span-12 xl:grid xl:grid-cols-12 xl:gap-6 xl:mt-[-80px]">

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
            <div class="flex flex-col gap-2 xl:my-12">
                <div class="flex gap-2">
                    <button class="btn p-4 text-xs rounded-lg bg-primary-500 font-bold md:text-base">Consult Us For Free</button>
                    <button class="btn text-xs rounded-lg bg-tertiary-500 font-bold text-white md:text-base">I need Emergency care</button>
                </div>
                <h6>More than 1000 companies chose us as their logistical partner</h6>
            </div>
        </div>
        <img class="row-start-1 col-start-7 col-span-6 w-[947px] z-[-10] max-w-none overflow-visible hidden xl:block" src="images/hero-image.svg" alt="">
    </div>
</main>

<style lang="scss">
</style>
