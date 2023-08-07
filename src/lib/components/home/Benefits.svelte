<!-- Home Benefits Group
    @uses: Benefit & BenefitClass to load two main Benefits
    @ret: a responsive Home Benefits section
-->
<script>
    import {Benefit} from "$lib/components/reusable";
    import {BenefitClass} from "$lib/typescript";

    let benefit1 = new BenefitClass("emergency-solutions", "/images/gray.png", `/services/transport/emergency`);
    let benefit2 = new BenefitClass("global-reach", "/images/gray.png", `/services`);
    let benefit3 = new BenefitClass("strategic-collaboration", "/images/strat-collab.webp", `/contact`);
</script>

<div class="flex flex-col row-start-3 col-start-1 col-span-4 gap-16 py-20
                md:col-span-8
                xl:col-start-2 xl:col-span-10">
    <Benefit benefit={benefit1} />
    <Benefit benefit={benefit2} />
    <Benefit benefit={benefit3} />
</div>
<div id="benefit" class="row-start-3 col-span-1 xl:col-start-1"></div>

<style lang="scss">
    #benefit {
        background-image: url("images/benefit-ornaments.svg");
        background-size: contain;
    }
</style>