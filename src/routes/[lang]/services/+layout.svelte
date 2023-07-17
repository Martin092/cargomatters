
<!-- This layout is to provide common meta information for the subpages for Services.
     Delete this file if it is required to use specific meta information per subpage -->

<script lang="ts">
    import Meta from "$lib/components/Meta.svelte";
    import {MetaSnippetBuilder} from "$lib/typescript";

    let meta = new MetaSnippetBuilder().setLocalizationKey("services").withType("website").build();
</script>

<Meta {meta} />

<slot />