<!-- Hero for the Main Solutions Page
    @uses: MainSolutions component and the MainSolution class to load the two main solution groups
    @ret: A responsive hero section for the main service page
-->
<script>
    import {MainSolutions} from "$lib/components/reusable";
    import {MainSolution} from "$lib/typescript";
    import {t, locale} from "$lib/translations";

    let transportSolution = new MainSolution("/images/ship-aerial.webp", "a cargo ship from a bird's eye view",
        $t('services.mpc.transport.type'), $t('services.mpc.transport.desc'),
        [$t('services.mpc.transport.bullets.road'), $t('services.mpc.transport.bullets.sea'),
        $t('services.mpc.transport.bullets.air'), $t('services.mpc.transport.bullets.rail'),
        $t('services.mpc.transport.bullets.emergency')],
        `/${$locale}/services/transport`)

    let industrySolution = new MainSolution("/images/logistics-card.png", "a truck carrying a freight container",
        $t('services.mpc.logistical.type'), $t('services.mpc.logistical.desc'),
        [$t('services.mpc.logistical.bullets.1'), $t('services.mpc.logistical.bullets.2'),
        $t('services.mpc.logistical.bullets.3'), $t('services.mpc.logistical.bullets.4'),
        $t('services.mpc.logistical.bullets.4'), $t('services.mpc.logistical.bullets.6'),
        $t('services.mpc.logistical.bullets.7')],
        `/${$locale}/services/industry`)
</script>


<div id="hero" data-testid="xl-hero" class="col-start-1 col-span-full row-start-1 w-screen py-52
                                      ml-[-16px]
                                      md:ml-[-32px]
                                      xl:ml-[-128px] xl:py-80"></div>

<div id="heroOrnaments" data-testid="xl-hero" class="col-start-2 col-span-full row-start-2 mt-[-30px] hidden z-[-1]
                                      ml-[-16px]
                                      md:ml-[-32px]
                                      xl:block xl:ml-[-128px]"></div>
<div class="row-start-2 col-start-1 col-span-full flex flex-col gap-2 py-40 pb-20 mt-[-420px]
            md:flex-row
            lg:col-start-2 lg:col-span-6
            xl:col-start-2 xl:col-span-10
            2xl:col-start-3 2xl:col-span-8">
    <MainSolutions mainSolution={transportSolution} />
    <MainSolutions mainSolution={industrySolution} />
</div>

<style lang="scss">
    #hero {
        background-image: url("/images/services-hero.svg");
        background-size: cover;
        background-position: center;
    }

    #heroOrnaments {
      background-image: url("/images/hero-ornaments.svg");
      background-size: cover;
      background-position: left;
    }
</style>
