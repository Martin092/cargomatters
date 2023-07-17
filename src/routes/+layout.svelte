<script lang="ts">
    import '../theme.postcss';
    import '@skeletonlabs/skeleton/styles/skeleton.css';
    import "../app.postcss";

    import { loading } from "$lib/translations";
</script>

<svelte:head>
    <meta charset="utf-8">
    <meta name="author" content="Praxidike">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="lang" content="en">
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

    <!--  Favicons  -->
<!--    <link rel="icon" href="favicons/favicon-16.png" sizes="16x16" type="image/png">-->
<!--    <link rel="icon" href="favicons/favicon-32.png" sizes="32x32" type="image/png">-->
<!--    <link rel="icon" href="favicons/favicon-48.png" sizes="48x48" type="image/png">-->
<!--    <link rel="icon" href="favicons/favicon-62.png" sizes="62x62" type="image/png">-->
</svelte:head>

{#await loading.toPromise()}
    <div role="status" class="flex justify-center items-center h-screen">
        <svg aria-hidden="true" class="inline w-64 h-64 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary-500 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
    </div>
{:then res}
    <slot />
{/await}
