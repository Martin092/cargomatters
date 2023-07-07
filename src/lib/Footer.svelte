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
            <h4 class="">CargoMatters</h4>
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
            <h4 class="">Links</h4>
            <div class="flex flex-row gap-8">
                <div class="flex flex-col gap-2 text-[#8C8C8C]">
                    <a href="">Terms of Use</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Attributions</a>
                    <a href="">Sitemap</a>
                </div>
                <div class="flex flex-col gap-2 text-[#8C8C8C]">
                    <a href="">Transport Services</a>
                    <a href="">Logistical Services</a>
                    <a href="">Contact</a>
                    <a href="">About Us</a>
                </div>
            </div>
        </div>

        <!-- Right Section -->
        <div class="flex flex-col gap-4 col-span-4
                    md:row-start-2 md:col-span-4
                    xl:row-start-1 xl:col-start-9 xl:col-span-3">
            <h4 class="">Contact</h4>
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