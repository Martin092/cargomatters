<!-- Footer Class
    @uses: `Icon` to import icons from the Iconify package
    @ret: a responsive header that can be prepended to any page
-->
<script lang="ts">
    import Icon from "@iconify/svelte";
</script>

<footer class="w-screen py-20">
    <div class="grid grid-cols-4 mx-4 gap-2 gap-y-12
                md:grid-cols-8 md:mx-8 md:gap-4 md:gap-y-11
                xl:grid-cols-12 xl:mx-32 xl:gap-6">

        <!-- Left Section -->
        <div class="flex flex-col gap-4 col-span-4
                    md:row-start-1 md:col-span-8
                    xl:col-start-2 xl:col-span-3">
            <h4>CargoMatters</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.</p>
            <div class="flex flex-row gap-2">
                <Icon color="grey" height="25" icon="mdi:facebook" />
                <Icon color="grey" height="25" icon="mdi:twitter" />
                <Icon color="grey" height="25" icon="mdi:github" />
            </div>
        </div>

        <!-- Central Section -->
        <div class="flex flex-col gap-4 col-span-4
                    md:row-start-2 md:col-span-4
                    xl:row-start-1 xl:col-start-6 xl:col-span-3">
            <h4>Links</h4>
            <div class="flex flex-row gap-8">
                <div class="flex flex-col gap-2 text-[#8C8C8C]">
                    <a href="/termsofservice" data-testid="terms-of-use-button"><p>Terms of Use</p></a>
                    <a href="/privacy" data-testid="privacy-policy-button"><p>Privacy Policy</p></a>
                    <a href="/"><p>Attributions</p></a>
                    <a href="/"><p>Sitemap</p></a>
                </div>
                <div class="flex flex-col gap-2 text-[#8C8C8C]">
                    <a href="/services/transport" data-testid="transport-services-footer"><p>Transport Services</p></a>
                    <a href="/services/industry" data-testid="logistical-services-footer"><p>Logistical Services</p></a>
                    <a href="/contact" data-testid="contact-us-footer"><p>Contact</p></a>
                    <a href="/about" data-testid="about-us-footer"><p>About Us</p></a>
                </div>
            </div>
        </div>

        <!-- Right Section -->
        <div class="flex flex-col gap-4 col-span-4
                    md:row-start-2 md:col-span-4
                    xl:row-start-1 xl:col-start-9 xl:col-span-3">
            <h4>Contact</h4>
            <p>Email: contact@cargomatters.com</p>
            <p>Phone: +359888888888</p>
            <a class="text-primary-500 underline" href="contact">Consult Us now for Free</a>
        </div>
    </div>
</footer>

<style lang="scss">
    footer {
        background-color: #222222;
    }

    h4 {
      color: #ffffff;
    }

    p {
      color: #8C8C8C;
    }
</style>