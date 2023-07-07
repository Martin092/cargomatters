<script lang="ts">
    import {Benefit} from "$lib/components/reusable";
    import {BenefitClass} from "$lib/typescript/benefit";

    let benefit1 = new BenefitClass("International Partners", "Solutions to all problems", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.", "images/gray.png", "alt", "Explore services >", "/services");
</script>

<div class="flex flex-col row-start-2 col-start-1 col-span-4 gap-16 py-20
                md:col-span-8
                xl:col-start-2 xl:col-span-10">
    <Benefit benefit={benefit1}/>
    <Benefit benefit={benefit1}/>
</div>
<div id="benefit" class="row-start-2 col-span-1 xl:col-start-1"></div>

<style lang="scss">
  #benefit {
    background-image: url("images/benefit-ornaments.svg");
    background-size: cover;
  }
</style>