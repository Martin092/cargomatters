<!-- Header Class
    @uses: `Icon` to import icons from the Iconfy package
    @prop String background: a class to give background to the header. Default is "bg-surface-300"
    @ret: a responsive header that can be prepended to any page
-->
<script lang="ts">
    import Icon from '@iconify/svelte';

    export let background:String = "bg-surface-400";
    let showMobileNav:boolean = false;

    function toggleNav() {
        showMobileNav = !showMobileNav;
    }
</script>

<header class="w-screen h-20 z-20 relative font-semibold text-gray-800">
    <nav class={background + " p-2 flex justify-between align-baseline " +
            "md:p-4 " +
            "xl:grid xl:grid-cols-12 xl:gap-6 xl:mx-32 xl:px-0"}>
        <a href="/" class="h-auto md:hidden">
            <img src="images/logo-planet.png" alt="Cargo Matters' planet logo." class="h-16">
        </a>
        <a href="/" class="h-auto hidden md:block
                      xl:col-span-3 xl:col-start-2 xl:h-auto">
            <img src="images/logo-full.png" alt="Cargo Matters' full logo." class="h-12">
        </a>

        <!--  Mobile Nav - Hidden from md upwards  -->
        <div data-testid="mobile-nav"  class="md:hidden flex right-group gap-2">
            <a href="/contact" class="btn rounded-lg btn-md variant-filled-primary flex-grow-0 text-sm font-bold" data-sveltekit-preload-data="hover">Consult Us for Free</a>
            <button data-testid="toggle-nav" on:click={toggleNav}><Icon color="grey" height="30"  icon="fontisto:nav-icon-a"/></button>
        </div>

        <!--  Wide screen nav  -->
        <div data-testid="wide-screen-nav" class="hidden md:flex links gap-4
                xl:col-span-6 xl:col-start-6 xl:justify-end">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/emergency">Emergency</a>
            <a href="/contact" class="btn rounded-lg btn-md variant-filled-primary flex-grow-0 text-sm font-bold" data-sveltekit-preload-data="hover">Consult Us for Free</a>
        </div>
    </nav>

    <!--  Mobile navigation  -->
    {#if showMobileNav}
        <div data-testid="nav-dropdown" class="w-screen flex flex-col
                    md:hidden">
            <a class="dropdown-link bg-surface-300 hover:bg-surface-400" href="/">Home</a>
            <a class="dropdown-link bg-surface-300 hover:bg-surface-400" href="/about">About Us</a>
            <a class="dropdown-link bg-surface-300 hover:bg-surface-400" href="/services">Services</a>
            <a class="dropdown-link bg-surface-300 hover:bg-surface-400" href="/emergency">Emergency</a>
        </div>
    {/if}
</header>

<style lang="scss">
    .right-group {
      align-items: center;
    }

    .links {
      align-items: center;
    }

    .dropdown-link {
      padding: 16px;
    }
</style>