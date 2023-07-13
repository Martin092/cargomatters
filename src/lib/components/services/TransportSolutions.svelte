<!-- TransportSolutions
    @uses: TransportComponent component; TransportServiceClass and FeatureClass classes to load necessary information
    @ret: a responsive section with information about the possible transports
-->

<script lang="ts">
    import TransportComponent from "$lib/components/services/TransportComponent.svelte";
    import {TransportServiceClass} from "$lib/typescript";
    import {FeatureClass} from "$lib/typescript";
    import {t} from "$lib/translations";

    let f1 = FeatureClass.TransportFeature("pepicons-print:truck",
        $t('services.transport.solutions.road.features.1.title'), $t('services.transport.solutions.road.features.1.desc'));
    let t1 = new TransportServiceClass($t('services.transport.solutions.road.title'),
        $t('services.transport.solutions.road.subtitle'),
        $t('services.transport.solutions.road.desc'), [f1,f1,f1]);

    let t2 = new TransportServiceClass($t('services.transport.solutions.sea.title'),
        $t('services.transport.solutions.sea.subtitle'),
        $t('services.transport.solutions.sea.desc'), [f1,f1,f1]);

    let t3 = new TransportServiceClass($t('services.transport.solutions.air.title'),
        $t('services.transport.solutions.air.subtitle'),
        $t('services.transport.solutions.air.desc'), [f1,f1,f1]);

    let t4 = new TransportServiceClass($t('services.transport.solutions.rail.title'),
        $t('services.transport.solutions.rail.subtitle'),
        $t('services.transport.solutions.rail.desc'), [f1,f1,f1]);
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

