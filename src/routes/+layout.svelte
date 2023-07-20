<script lang="ts">
    import '../theme.postcss';
    import '@skeletonlabs/skeleton/styles/skeleton.css';
    import "../app.postcss";
</script>

<svelte:head>
    <meta charset="utf-8">
    <meta name="author" content="Praxidike">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!--    <link rel="canonical" href="https://conventions.praxidike.org/">-->
    <meta name="theme-color" content="#EDBB3A">

<!--  TODO: Substitute for real values when resources (such as thumbnails and urls) are ready  -->
    <!--  Open Graph  -->
<!--    <meta property="og:url"                 content="https://conventions.praxidike.org/" />-->
<!--    <meta property="og:site_name"           content="praxiConventions" />-->
<!--    <meta property="og:image"               content="https://conventions.praxidike.org/ogmeta.png">-->
<!--    <meta property="og:image:alt"           content="Open Graph meta image of praxiConventions">-->
<!--    <meta property="og:image:width"         content="1200">-->
<!--    <meta property="og:image:height"        content="630">-->
<!--    <meta property="og:locale"              content="en_US" />-->

    <!--  Twitter  -->
    <meta name="twitter:card" content="summary_large_image">

    <link rel="icon" href="/images/favicons/favicon-16.png" sizes="16x16" type="image/png">
    <link rel="icon" href="/images/favicons/favicon-32.png" sizes="32x32" type="image/png">
    <link rel="icon" href="/images/favicons/favicon-48.png" sizes="48x48" type="image/png">
    <link rel="icon" href="/images/favicons/favicon-64.png" sizes="64x64" type="image/png">
    <link rel="icon" href="/images/favicons/favicon-128.png" sizes="128x128" type="image/png">
</svelte:head>

<slot />
