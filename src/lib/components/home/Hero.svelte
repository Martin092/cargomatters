<script lang="ts">
    import {t, locale} from "$lib/translations";
</script>

<!-- Home Hero section
    @ret: a responsive Hero section for the home
-->
<div id="hero" class="col-span-4 flex flex-col row-start-1
                md:col-span-6 md:gap-12
                xl:col-span-12 xl:grid xl:grid-cols-12 xl:gap-6">

    <!--    Hero Text Group    -->
    <div class="flex flex-col gap-9 mt-80 row-start-1 z-10
                    md:gap-6
                    xl:gap-6 xl:col-start-2 xl:col-span-6 xl:mt-72">

        <!--  Hero Heading  -->
        <div class="flex flex-col gap-4 ">
            <h1 class="font-extrabold xl:font-bold">{$t('home.hero.title')}</h1>
            <h4 class="xl:pr-40">{$t('home.hero.subtitle')}</h4>
        </div>
        <div class="flex flex-col gap-2 mb-20 xl:mt-8">
            <div class="flex gap-2">
                <a href="/{$locale}/contact"><button class="btn p-4 text-xs rounded-lg bg-primary-500 font-bold md:text-base">{$t('home.hero.button.consult')}</button></a>
                <a href="/{$locale}/emergency"><button class="btn p-4 text-xs rounded-lg bg-tertiary-500 font-bold text-white md:text-base">{$t('home.hero.button.emergency')}</button></a>
            </div>
            <h6>{$t('home.hero.social-proof')}</h6>
        </div>
    </div>
    <img data-testid="xl-hero" class="row-start-1 col-start-7 col-span-6 w-[947px] z-[-10] max-w-none overflow-visible hidden xl:block" src="/images/hero-image.svg" alt="">
</div>

<style lang="scss">
    #hero {
        background-image: url("/images/hero-ornaments.svg");
        background-position: left;
    }
</style>
