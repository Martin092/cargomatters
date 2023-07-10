<!-- FAQ Group
    @uses: Accordion and Accordion library components from the Skeleton Library
    @prop row String: class for which row to take when loading the component inside a grid element
    @ret: a responsive Frequently Asked Questions section used on the Home page and on the main services page
-->
<script lang="ts">
    import {Accordion, AccordionItem} from "@skeletonlabs/skeleton";
    import Icon from "@iconify/svelte";

    export let row:String = "row-start-5"
</script>


<div id="faq" class={`col-start-1 col-span-full ${row} overflow-visible`}></div>
<div class={`flex flex-col ${row} col-start-1 col-span-4 gap-16 py-20 w-full items-center
                md:col-start-1 md:col-span-8
                xl:col-start-2 xl:col-span-10`}>
    <h3 class="text-center leading-normal">Frequently Asked Questions</h3>
    <div class="md:w-10/12 bg-[#353535] text-gray-100 rounded-lg">
        <Accordion autocollapse padding="py-2 px-4 md:py-3 px-6 xl:py-4 xl:px-10 ">
            <AccordionItem open>
                <svelte:fragment slot="lead"><Icon color="grey" height="32" icon="mdi:truck"/></svelte:fragment>
                <svelte:fragment slot="summary"><h5 class="font-semibold">How do I choose between the available solutions?</h5></svelte:fragment>
                <svelte:fragment slot="content"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eos libero mollitia possimus provident quod soluta velit voluptatibus. Aliquam dolore doloribus dolorum ea facilis in laudantium modi, odit pariatur ut.</p></svelte:fragment>
            </AccordionItem>
            <AccordionItem open>
                <svelte:fragment slot="lead"><Icon color="grey" height="32" icon="mdi:truck"/></svelte:fragment>
                <svelte:fragment slot="summary"><h5 class="font-semibold">How do I choose between the available solutions?</h5></svelte:fragment>
                <svelte:fragment slot="content"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eos libero mollitia possimus provident quod soluta velit voluptatibus. Aliquam dolore doloribus dolorum ea facilis in laudantium modi, odit pariatur ut.</p></svelte:fragment>
            </AccordionItem>
            <AccordionItem open>
                <svelte:fragment slot="lead"><Icon color="grey" height="32" icon="mdi:truck"/></svelte:fragment>
                <svelte:fragment slot="summary"><h5 class="font-semibold">How do I choose between the available solutions?</h5></svelte:fragment>
                <svelte:fragment slot="content"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eos libero mollitia possimus provident quod soluta velit voluptatibus. Aliquam dolore doloribus dolorum ea facilis in laudantium modi, odit pariatur ut.</p></svelte:fragment>
            </AccordionItem>
            <AccordionItem open>
                <svelte:fragment slot="lead"><Icon color="grey" height="32" icon="mdi:truck"/></svelte:fragment>
                <svelte:fragment slot="summary"><h5 class="font-semibold">How do I choose between the available solutions?</h5></svelte:fragment>
                <svelte:fragment slot="content"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eos libero mollitia possimus provident quod soluta velit voluptatibus. Aliquam dolore doloribus dolorum ea facilis in laudantium modi, odit pariatur ut.</p></svelte:fragment>
            </AccordionItem>
        </Accordion>
    </div>
</div>

<style lang="scss">
    #faq {
        background-image: url("images/faq-ornaments.svg");
        background-size: cover;
    }
</style>
