<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import {Hero, Features, Benefits, SocialProof, FAQ, CTA, EmergencyService} from "$lib/components/home/index"

    import {Stat} from "$lib/typescript/Stats";
    import {EmergencyServiceClass} from "$lib/typescript/emergencyService";

    let s = [new Stat("200k", "people beheaded"), new Stat("3", "things?"), new Stat("4m", "babies eaten"), new Stat("900", "clients")];
    let emergency = new EmergencyServiceClass("images/plane.png", "plane", "twemoji:clapper-board", "Fast solution", "Priority Services",
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.", 
     s);
</script>

<Header background=""/>

<main class="text-gray-800
             grid grid-cols-4 gap-x-2 mx-4
             md:grid-cols-8 md:gap-x-4 md:mx-8
             xl:grid-cols-12 xl:gap-x-6 xl:mx-32 xl:mt-[-80px]">

    <!--  Hero section  -->
    <Hero />

    <!-- Features list  -->
    <Features />

    <!--  Benefits  -->
    <Benefits />

    <!--  Social Proof  -->
    <SocialProof />

    <!--  FAQ  -->
    <FAQ />

    <!--  CTA  -->
    <CTA />
</main>

<EmergencyService emergency={emergency}/>

<style lang="scss">

</style>
