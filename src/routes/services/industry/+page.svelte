<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import {SubHero, IndustrySolutions} from "$lib/components/services";
</script>

<Header background=""/>

<main class="text-gray-800
             grid grid-cols-4 gap-x-2 mx-4
             md:grid-cols-8 md:gap-x-4 md:mx-8
             xl:grid-cols-12 xl:gap-x-6 xl:mx-32">

    <SubHero title="Logistical & Industrial Services" subTitle="Need specific logistic our industrial solutions for your business? Browse our catalog"
             showInfo={false} emergency={false}/>

    <div class="col-start-1 row-start-2 col-span-4 flex flex-col py-20 pb-0
            md:col-start-1 md:col-span-8 md:gap-12
            xl:col-start-2 xl:col-span-6">
        <div class="flex flex-col gap-4">
            <h3>We support industries of all kind</h3>
            <h5>Looking for whole package solution for your business? Browse our industrial solutions catalog or contact us directly.</h5>
        </div>
    </div>

    <IndustrySolutions />
</main>

