<!-- About Page Benefit Group
    @uses: Benefit & BenefitClass to load two main Benefits
    @ret: a responsive About Page Benefits section
-->
<script lang="ts">
    import {Benefit} from "$lib/components/reusable";
    import {BenefitClass} from "$lib/typescript";

    let tailoredSolutions = new BenefitClass("tailored-solutions", "/images/gray.png", `/services`);
    let reliability = new BenefitClass("reliability", "/images/gray.png", `/services`);
    let sustainability = new BenefitClass("sustainability", "/images/strat-collab.webp", `/services`);
</script>

<div class="flex flex-col row-start-2 col-start-1 col-span-4 gap-16 py-20
                md:col-span-8
                xl:col-start-2 xl:col-span-10">
    <Benefit benefit={tailoredSolutions}/>
    <Benefit benefit={reliability}/>
    <Benefit benefit={sustainability}/>
</div>
<div id="benefit" class="row-start-2 col-span-1 xl:col-start-12"></div>

<style lang="scss">
  #benefit {
    background-image: url("/images/benefit-ornaments.svg");
    background-size: cover;
  }
</style>