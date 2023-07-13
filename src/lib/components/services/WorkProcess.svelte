<!-- WorkProcess
    @ret: a section that describes the work process of the company,
     used on the contact and emergency contact pages
-->
<script lang="ts">
    import {t, locale} from "$lib/translations";
</script>

<div id="workProcess" data-testid="xl-hero" class="col-start-1 col-span-full row-start-3
                                      ml-[-16px]
                                      md:ml-[-32px]
                                      xl:ml-[-128px]"></div>
<div class="row-start-3 col-start-1 col-span-full flex flex-col gap-2 py-20
            md:grid md:grid-cols-8 md:gap-4 md:col-start-1 md:col-span-8
            lg:col-start-1 lg:col-span-8 lg:flex-row-reverse
            xl:col-start-2 xl:col-span-10 xl:gap-16
            2xl:col-start-2 2xl:col-span-10">

    <img class="row-start-1 md:col-start-5 md:col-span-4" src="/images/gray.png" alt="work process illustration" />
    <div class="flex flex-col gap-6 row-start-1
                md:col-start-1 md:col-span-4
                xl:gap-8 xl:py-4">
        <div class="flex flex-col gap-4">
            <h3>{$t('work-process.title')}:</h3>
            <h5>{$t('work-process.subtitle')}</h5>
        </div>
        <ol class="list-decimal ml-4 xl:flex xl:flex-col xl:gap-2">
            <li>{$t('work-process.steps.1')}</li>
            <li>{$t('work-process.steps.2')}</li>
            <li>{$t('work-process.steps.3')}</li>
            <li>{$t('work-process.steps.4')}</li>
        </ol>
        <a data-testid="services-main-bottom" class="self-center md:self-start" href="/{$locale}/contact">
            <button class="btn p-4 text-xs rounded-lg bg-primary-500 font-bold
                           md:text-base">
                {$t('cta.consult')}
            </button>
        </a>
    </div>
</div>

<style lang="scss">
    #workProcess {
        background-image: url("/images/about-ornaments.svg");
        background-size: cover;
        background-position: center;
    }
</style>