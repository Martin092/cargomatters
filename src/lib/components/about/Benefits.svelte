<!-- About Page Benefit Group
    @uses: Benefit & BenefitClass to load two main Benefits
    @ret: a responsive About Page Benefits section
-->
<script lang="ts">
    import {Benefit} from "$lib/components/reusable";
    import {BenefitClass} from "$lib/typescript";

    let benefit1 = new BenefitClass("benefit1", "/images/gray.png", `/services`);
</script>

<div class="flex flex-col row-start-2 col-start-1 col-span-4 gap-16 py-20
                md:col-span-8
                xl:col-start-2 xl:col-span-10">
    <Benefit benefit={benefit1}/>
    <Benefit benefit={benefit1}/>
</div>
<div id="benefit" class="row-start-2 col-span-1 xl:col-start-12"></div>

<style lang="scss">
  #benefit {
    background-image: url("/images/benefit-ornaments.svg");
    background-size: cover;
  }
</style>