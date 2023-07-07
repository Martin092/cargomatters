<script lang="ts">
    import Icon from "@iconify/svelte";

    export let feature;
</script>

<div class="flex flex-col gap-2">
    <div class="md:hidden">
        <Icon color="grey" height="25" icon={feature.icon} />
    </div>
    <div class="hidden md:block xl:hidden">
        <Icon color="grey" height="40" icon={feature.icon} />
    </div>
    <div class="hidden xl:block">
        <Icon color="grey" height="25" icon={feature.icon} />
    </div>
    <div class="flex flex-col gap-2">
        <h4 class="text-gray-50">{feature.title}</h4>
        <p class="text-gray-300">{feature.description}</p>
    </div>
</div>

<style lang="scss">

</style>