<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<h1>{data.page.type}</h1>
<div>{@html data.page.content}</div>