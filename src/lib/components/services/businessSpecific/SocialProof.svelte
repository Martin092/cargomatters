<!-- SocialProof component
    @uses: Review component and ReviewClass class to load reviews and social proof
    @prop reviews: an array of all the reviews that have to be loaded on the page
    @ret: a responsive features section used on the Home and the main services page
-->

<script lang="ts">
    import {Review} from "$lib/components/reusable";
    import {ReviewClass} from "$lib/typescript";

    export let reviews:ReviewClass[] = [];
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
        {#each reviews as review}
            <Review {review}/>
        {/each}
    </div>
</div>


<style lang="scss">
    #social-proof {
        background-image: url("/images/social-proof.svg");
        background-size: cover;
    }
</style>