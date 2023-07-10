<!-- Hero component for Contact pages
    @uses: `Icon` to import icons from the Iconify package
    @ret: a responsive hero section for the Contact page
-->
<script>
    import Icon from "@iconify/svelte";
</script>

<div id="hero" class="col-start-1 row-start-1 col-span-full"></div>

<div class="col-start-1 col-span-4 flex flex-col row-start-1 pt-80 pb-20 xl:pb-80
            md:col-start-1 md:col-span-6 md:gap-12
            xl:col-start-2 xl:col-span-12">
    <div class="flex flex-col gap-4">
        <h1>Contact Us</h1>
        <div class="flex flex-col gap-12 items-baseline">
            <div class="flex flex-col md:flex-row gap-4 md:gap-32">
                <div class="flex flex-col">
                    <h4>Reach us on phone or via email.</h4>
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
            <a href="/emergency">
                <button class="btn p-4 text-xs rounded-lg bg-tertiary-500 text-gray-100 font-bold md:text-base">
                    I need Emergent Care
                </button>
            </a>
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