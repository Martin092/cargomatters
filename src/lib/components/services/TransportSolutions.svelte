<!-- TransportSolutions
    @uses: TransportComponent component; TransportServiceClass and FeatureClass classes to load necessary information
    @ret: a responsive section with information about the possible transports
-->

<script lang="ts">
    import TransportComponent from "$lib/components/services/TransportComponent.svelte";
    import {TransportServiceClass} from "$lib/typescript";

    let t1 = new TransportServiceClass("road", ["customised-transport-road","flexible-solutions-road","reliable-updates-road"]);
    let t2 = new TransportServiceClass("sea", ["global-reach-ocean","large-shipments-ocean","environment-ocean"]);
    let t3 = new TransportServiceClass("air", ["swift-deliveries-air","global-connectivity-air","for-high-value-goods-air"]);
    let t4 = new TransportServiceClass("rail", ["intermodality-rail","cost-effective-rail","environment-rail"]);
</script>


<div class="flex flex-col md:gap-16">
    <div class="flex flex-col items-center bg-surface-200 px-4
                md:px-16 md:max-lg:flex-col-reverse
                lg:px-0 lg:pr-16 lg:flex-row
                xl:pr-[10vw]">
        <img class="md:hidden self-start" src="/images/transport-small-road.png" alt="">
        <img class="hidden
                    md:ml-[-128px] md:block
                    lg:ml-0 lg:w-[52vw] lg:self-end
                    xl:w-[50vw]" src="/images/transport-road.png" alt="">
        <TransportComponent transportService={t1} />
    </div>
    <div class="flex flex-col items-center bg-surface-200 px-4
                md:px-16
                lg:px-0 lg:pl-16 lg:flex-row
                xl:pl-[10vw]">
        <img class="md:hidden self-start" src="/images/transport-small-sea.png" alt="">
        <TransportComponent transportService={t2} />
        <img class="hidden
                    md:mr-[-128px] md:block
                    lg:mr-0 lg:w-[52vw] lg:self-end
                    xl:w-[50vw]" src="/images/transport-sea.png" alt="">
    </div>
    <div class="flex flex-col items-center bg-surface-200 px-4
                md:px-16 md:max-lg:flex-col-reverse
                lg:px-0 lg:pr-16 lg:flex-row
                xl:pr-[10vw]">
        <img class="md:hidden self-start" src="/images/transport-small-air.png" alt="">
        <img class="hidden
                    md:ml-[-128px] md:block
                    lg:ml-0 lg:w-[52vw] lg:self-end
                    xl:w-[50vw]" src="/images/transport-air.png" alt="">
        <TransportComponent transportService={t3} />
    </div>
    <div class="flex flex-col items-center bg-surface-200 px-4
                md:px-16
                lg:px-0 lg:pl-16 lg:flex-row
                xl:pl-[10vw]">
        <img class="md:hidden self-start" src="/images/transport-small-rail.png" alt="">
        <TransportComponent transportService={t4} />
        <img class="hidden
                    md:mr-[-128px] md:block
                    lg:mr-0 lg:w-[52vw] lg:self-end
                    xl:w-[50vw]" src="/images/transport-rail.png" alt="">
    </div>
</div>


<style lang="scss">

</style>

