<!-- SubHero component for Hero of Sub pages
-->
<script lang="ts">

    /**
     * If the information should be shown
     */
    export let showInfo:boolean = true;

    /**
     * The title inside the hero of the subpages of the services
     */
    export let title:string = "For any Emergency services Contact us ASAP";

    /**
     * The subtitle inside the hero of the subpages of the services
     */
    export let subTitle:string = "Your time is precious. Let’s tackle the logistical issues as soon as possible!";

    /**
     * If the emergency CTA button shall be displayed instead of the normal one
     */
    export let emergency:boolean = true;
</script>

<div id="hero" class="col-start-1 row-start-1 col-span-full
                      md:col-start-9 md:col-span-3"></div>

<div class="col-start-1 row-start-1 col-span-4 flex flex-col pt-80 pb-20
            md:col-start-1 md:col-span-6 md:gap-12
            xl:col-start-2 xl:col-span-6">
    <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-4">
            <h2>{title}</h2>
            <h4>{subTitle}</h4>
        </div>
        <div class="flex flex-row flex-wrap gap-8 w-10/12 items-center">
            <a href="/emergency" data-testid="emergent-care">
                {#if emergency}
                    <button class="btn p-4 text-xs rounded-lg bg-tertiary-500 text-gray-100 font-bold md:text-base">
                        I need Emergent Care
                    </button>
                {:else}
                    <button class="btn p-4 text-xs rounded-lg bg-primary-500 text-gray-950 font-bold md:text-base">
                        Consult Business Solutions
                    </button>
                {/if}
            </a>
            {#if showInfo}
                <a href="/services/transport/emergency" class="text-xs text-tertiary-500 underline font-bold md:text-base" data-testid="more-info-button1">
                    More Information >
                </a>
            {/if}
        </div>
    </div>
</div>

<style lang="scss">
  #hero {
    background-image: url("/images/transport-ornaments.svg");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
</style>

