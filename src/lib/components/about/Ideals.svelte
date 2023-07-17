<!-- About Page Ideals Group
    @ret: a responsive ideals section with the main characteristics of the company
-->
<script lang="ts">
    import {t} from "$lib/translations";
</script>

<div id="ideals" class="col-start-1 col-span-full row-start-3 w-screen
                              ml-[-16px]
                              md:ml-[-32px]
                              xl:ml-[-128px]">s</div>
<div class="row-start-3 col-start-1 col-span-full py-20 text-gray-100 text-center">
    <div class="flex flex-col gap-10
                xl:gap-20">
        <h3>{$t('about.ideals.title')}:</h3>
        <div class="flex flex-row justify-evenly gap-4 flex-wrap md:flex-nowrap">
            <h4>{$t('about.ideals.1')}</h4>
            <h4>{$t('about.ideals.2')}</h4>
            <h4>{$t('about.ideals.3')}</h4>
            <h4>{$t('about.ideals.4')}</h4>
            <h4>{$t('about.ideals.5')}</h4>
            <h4>{$t('about.ideals.6')}</h4>
        </div>
    </div>
</div>

<style lang="scss">
  #ideals {
    background-color: #313131;
    background-image: url("/images/feature-background.png");
    background-position: top right;
    background-size: cover;
  }
</style>