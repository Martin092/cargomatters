<script lang="ts">
    import Icon from '@iconify/svelte';
</script>

<nav class="bg-surface-300 p-2 flex justify-between align-baseline
            md:p-4
            xl:grid xl:grid-cols-12 xl:gap-6">
    <img src="images/logo-planet.png" alt="Cargo Matters' planet logo." class="h-16 md:hidden">
    <img src="images/logo-full.png" alt="Cargo Matters' full logo." class="h-12 hidden md:block
              xl:col-span-2 xl:col-start-2 xl:h-auto">

    <!--  Mobile Nav - Hidden from md upwards  -->
    <div class="md:hidden flex right-group gap-2">
        <a href="/contact" class="btn btn-md variant-filled-primary flex-grow-0 text-sm font-bold" data-sveltekit-preload-data="hover">Consult Us for Free</a>
        <button><Icon color="grey" height="30"  icon="fontisto:nav-icon-a"/></button>
    </div>

    <!--  Wide screen nav  -->
    <div class="hidden md:flex links gap-4
                xl:col-span-6 xl:col-start-6 xl:justify-end">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/emergency">Emergency</a>
        <a href="/contact" class="btn btn-md variant-filled-primary flex-grow-0 text-sm font-bold" data-sveltekit-preload-data="hover">Consult Us for Free</a>
    </div>
</nav>

<style lang="scss">
    .right-group {
      align-items: center;
    }

    .links {
      align-items: center;
    }
</style>