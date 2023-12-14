<!-- Footer Class
    @uses: `Icon` to import icons from the Iconify package
    @ret: a responsive header that can be prepended to any page
-->
<script lang="ts">
    import Icon from "@iconify/svelte";
    import {t, locale} from "$lib/translations";
</script>

<footer class="w-screen py-20">
    <div class="grid grid-cols-4 mx-4 gap-2 gap-y-12
                md:grid-cols-8 md:mx-8 md:gap-4 md:gap-y-11
                xl:grid-cols-12 xl:mx-32 xl:gap-6">

        <!-- Left Section -->
        <div class="flex flex-col gap-4 col-span-4
                    md:row-start-1 md:col-span-8
                    xl:col-start-2 xl:col-span-3">
            <h4>CargoMatters</h4>
            <p>{$t('footer.desc')}</p>
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
            <h4>{$t('footer.titles.links')}</h4>
            <div class="flex flex-row gap-8">
                <div class="flex flex-col gap-2 text-[#8C8C8C]">
                    <a href="/{$locale}/termsofservice"><p>{$t('footer.nav.tos')}</p></a>
                    <a href="/{$locale}/privacy"><p>{$t('footer.nav.privacy')}</p></a>
                    <a href="/{$locale}"><p>{$t('footer.nav.attr')}</p></a>
                    <a href="/{$locale}"><p>{$t('footer.nav.sitemap')}</p></a>
                </div>
                <div class="flex flex-col gap-2 text-[#8C8C8C]">
                    <a href="/{$locale}/services/transport"><p>{$t('footer.nav.transport')}</p></a>
                    <a href="/{$locale}/services/industry"><p>{$t('footer.nav.logistical')}</p></a>
                    <a href="/{$locale}/contact"><p>{$t('footer.nav.contact')}</p></a>
                    <a href="/{$locale}/about"><p>{$t('footer.nav.about')}</p></a>
                </div>
            </div>
        </div>

        <!-- Right Section -->
        <div class="flex flex-col gap-4 col-span-4
                    md:row-start-2 md:col-span-4
                    xl:row-start-1 xl:col-start-9 xl:col-span-3">
            <h4>{$t('footer.titles.contact')}</h4>
            <p>{$t('footer.contact.email')}: cargo@cargo-matters.com</p>
            <p>{$t('footer.contact.phone')}: +359 88 502 0273</p>
            <a class="text-primary-500 underline" href="/{$locale}/contact">{$t('footer.contact.cta')}</a>
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