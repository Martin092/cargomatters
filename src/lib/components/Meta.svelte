<script lang="ts">
    import {MetaSnippet} from "$lib/typescript";
    import {t, locale} from "$lib/translations";

    export let meta:MetaSnippet = new MetaSnippet("home", "website");
</script>

<svelte:head>
    <!--  Newer  -->
    <meta name="lang" content={$locale}>
    <title> { $t(`meta.${meta.localizationKey}.title`) + " | CargoMatters" } </title>
    <meta name="description" content={ $t(`meta.${meta.localizationKey}.description`) }>

    <!--  Open graph  -->
    <meta property="og:description"         content={$t(`meta.${meta.localizationKey}.description`)} >
    <meta property="og:title"               content={ $t(`meta.${meta.localizationKey}.title`) + " | CargoMatters"} />
    <meta property="og:type"                content={ meta.type } />
</svelte:head>