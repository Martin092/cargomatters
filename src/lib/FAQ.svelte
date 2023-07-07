<script>
    import {Accordion, AccordionItem} from "@skeletonlabs/skeleton";
    import Icon from "@iconify/svelte";
</script>


<div class="md:w-10/12 bg-[#353535] text-gray-100 rounded-lg">
    <Accordion autocollapse padding="py-2 px-4 md:py-3 px-6 xl:py-4 xl:px-10 ">
        <AccordionItem open>
            <svelte:fragment slot="lead"><Icon color="grey" height="32" icon="mdi:truck"/></svelte:fragment>
            <svelte:fragment slot="summary"><h5 class="font-semibold">How do I choose between the available solutions?</h5></svelte:fragment>
            <svelte:fragment slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eos libero mollitia possimus provident quod soluta velit voluptatibus. Aliquam dolore doloribus dolorum ea facilis in laudantium modi, odit pariatur ut.</svelte:fragment>
        </AccordionItem>
        <AccordionItem open>
            <svelte:fragment slot="lead"><Icon color="grey" height="32" icon="mdi:truck"/></svelte:fragment>
            <svelte:fragment slot="summary"><h5 class="font-semibold">How do I choose between the available solutions?</h5></svelte:fragment>
            <svelte:fragment slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eos libero mollitia possimus provident quod soluta velit voluptatibus. Aliquam dolore doloribus dolorum ea facilis in laudantium modi, odit pariatur ut.</svelte:fragment>
        </AccordionItem>
        <AccordionItem open>
            <svelte:fragment slot="lead"><Icon color="grey" height="32" icon="mdi:truck"/></svelte:fragment>
            <svelte:fragment slot="summary"><h5 class="font-semibold">How do I choose between the available solutions?</h5></svelte:fragment>
            <svelte:fragment slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eos libero mollitia possimus provident quod soluta velit voluptatibus. Aliquam dolore doloribus dolorum ea facilis in laudantium modi, odit pariatur ut.</svelte:fragment>
        </AccordionItem>
        <AccordionItem open>
            <svelte:fragment slot="lead"><Icon color="grey" height="32" icon="mdi:truck"/></svelte:fragment>
            <svelte:fragment slot="summary"><h5 class="font-semibold">How do I choose between the available solutions?</h5></svelte:fragment>
            <svelte:fragment slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eos libero mollitia possimus provident quod soluta velit voluptatibus. Aliquam dolore doloribus dolorum ea facilis in laudantium modi, odit pariatur ut.</svelte:fragment>
        </AccordionItem>
    </Accordion>
</div>