<script lang="ts">
    import {MetaSnippet} from "$lib/typescript";
    export let meta:MetaSnippet = new MetaSnippet("praxiConventions", "Generate community health files with ease", "website");
</script>

<svelte:head>
    <!--  Newer  -->
    <title> {meta.title + " | CargoMatters"} </title>
    <meta name="description" content={ meta.metaDescription }>

    <!--  Open graph  -->
    <meta property="og:description"         content={ meta.metaDescription } >
    <meta property="og:title"               content={ meta.title + " | CargoMatters"} />
    <meta property="og:type"                content={ meta.type } />
</svelte:head>