<!-- About Page Hero Group
    @ret: a responsive About Page Hero section
-->
<script lang="ts">
    import {t} from "$lib/translations";
</script>

<div id="hero"  class="col-start-1 row-start-1 col-span-full"></div>

<div class="col-start-1 row-start-1 col-span-4 flex flex-col pt-80 pb-20
            md:col-start-1 md:col-span-6 md:gap-12
            xl:col-start-2 xl:col-span-12">
    <div class="flex flex-col gap-4">
        <h1>{$t('about.hero.title')}</h1>
        <h4>{$t('about.hero.subtitle')}</h4>
    </div>
</div>

<style lang="scss">
  #hero {
    background-image: url("/images/hero-ornaments.svg");
    background-position: left;
    background-size: cover;
  }
</style>

