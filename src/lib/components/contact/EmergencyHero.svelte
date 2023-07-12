<!-- Hero component for Emergency Contact pages
    @uses: `Icon` to import icons from the Iconify package
    @ret: a responsive hero section for the Emergency Contact page
-->
<script>
    import Icon from "@iconify/svelte";
</script>

<div id="hero" class="col-start-1 row-start-1 col-span-full"></div>

<div class="col-start-1 col-span-4 flex flex-col row-start-1 pt-80 pb-20 xl:pb-80
            md:col-start-1 md:col-span-6 md:gap-12
            xl:col-start-2 xl:col-span-12">
    <div class="flex flex-col gap-4">
        <h1>Emergency Contact</h1>
        <div class="flex flex-row gap-12 items-baseline md:flex-col">
            <div class="flex flex-col md:flex-row gap-4 md:gap-32">
                <div class="flex flex-col">
                    <h4>Get in contact ASAP.</h4>
                    <div class="flex flex-row gap-2 items-center">
                        <Icon icon="zondicons:phone"/> <p>+359 88 888 8888</p>
                    </div>
                    <div class="flex flex-row gap-2 items-center">
                        <Icon icon="ic:round-mail"/> <p>contact@cargomatters.com</p>
                    </div>
                </div>
                <div class="flex flex-col">
                    <h4>Our work process:</h4>
                    <ol>
                        <li><p>1. You contact us</p></li>
                        <li><p>2. We draw a plan on how to proceed</p></li>
                        <li><p>3. The problem is solved</p></li>
                    </ol>
                </div>
            </div>
            <a class="text-tertiary-500 underline" href="/services/transport/emergency" data-testid="emergency-solutions"><h5>Browse Emergency Solutions</h5></a>
        </div>
    </div>
</div>

<style lang="scss">
  #hero {
    background-image: url("/images/hero-ornaments.svg");
    background-position: left;
    background-size: cover;
  }
</style>