<script lang="ts">
    import {Hero} from "$lib/components/contact";
    import Header from "$lib/components/Header.svelte";

    import Meta from "$lib/components/Meta.svelte";
    import {MetaSnippetBuilder} from "$lib/typescript";

    let meta = new MetaSnippetBuilder().setLocalizationKey("contact").withType("website").build();
</script>

<Meta {meta} />

<Header background="" />


<main class="text-gray-800
             grid grid-cols-4 gap-x-2 mx-4
             md:grid-cols-8 md:gap-x-4 md:mx-8
             xl:grid-cols-12 xl:gap-x-6 xl:mx-32">
    <Hero />
</main>