<!-- Home Social Proof
    @uses: Review component and ReviewClass class to load reviews and social proof
    @ret: a responsive features section used on the Home and the main services page
-->
<script>
    import {Review} from "$lib/components/reusable/index";
    import {ReviewClass} from "$lib/typescript/review";

    let review1 = new ReviewClass("\"Honest, dedicated work...\"", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.", "/images/companies/prax-logo.png", "alt", "Praxidike - IT Team");
</script>
<div id="social-proof" class="col-start-1 col-span-full row-start-4 w-screen
                              ml-[-16px]
                              md:ml-[-32px]
                              xl:ml-[-128px]"></div>
<div class="flex flex-col row-start-4 col-start-1 col-span-4 gap-16 py-20 w-full
                md:col-start-1 md:col-span-8
                xl:col-start-2 xl:col-span-10 xl:flex-row xl:items-center">
    <div class="flex flex-col text-gray-50 text-center md:text-left xl:w-[30%]">
        <h3 class="md:mb-4">Our Partners</h3>
        <h5>Partners of CargoMatters have trusted our services. See what they have to say about us.</h5>
    </div>
    <div class="flex flex-col gap-6 xl:flex-row xl:w-[60%]">
        <Review review={review1}/>
        <Review review={review1}/>
    </div>
</div>


<style lang="scss">
    #social-proof {
        background-image: url("/images/social-proof.svg");
        background-size: cover;
    }
</style>