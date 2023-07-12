<!--CTA Group
    @ret: a responsive Call to Action section used on the Home page
    and on the main services page
-->
<script lang="ts">
    import {t, locale} from "$lib/translations";

    /**
     * Class for which row to take when loading the component inside a grid element
     */
    export let row:String = "row-start-6"
</script>

<div class={`flex flex-col ${row} col-start-1 col-span-4 gap-4 py-20 w-full items-center
                md:col-start-1 md:col-span-8
                xl:col-start-4 xl:col-span-6`}>
    <div class="flex flex-col gap-8 items-center">
        <div class="flex flex-col gap-4 text-center">
            <h3 class="text-center leading-normal">{$t('cta.title')}</h3>
            <div class="flex flex-col gap-2 font-bold">
                <h5>{$t('cta.subtitle')}</h5>
                <h5>{$t('cta.eta')}</h5>
            </div>
        </div>
        <a data-testid="home-cta-bottom" href="/{$locale}/contact"><button class="btn p-4 text-xs rounded-lg bg-primary-500 font-bold md:text-base">{$t('cta.consult')}</button></a>
    </div>
</div>