<!-- FAQ Group
    @uses: Accordion and Accordion library components from the Skeleton Library
    @ret: a responsive Frequently Asked Questions section used in the dynamic business page
-->
<script lang="ts">
    import {Accordion, AccordionItem} from "@skeletonlabs/skeleton";
    import Icon from "@iconify/svelte";
    import {t} from "$lib/translations";

    /**
     * Prop for which row to take when loading the component inside a grid element
     */
    export let row:string = "row-start-5"

    /**
     *  Question keys to load into the Accordion
     */
    export let questions:string[] = []
</script>


<div id="faq" class={`col-start-1 col-span-full ${row} overflow-visible`}></div>
<div class={`flex flex-col ${row} col-start-1 col-span-4 gap-16 py-20 w-full items-center
                md:col-start-1 md:col-span-8
                xl:col-start-2 xl:col-span-10`}>
    <h3 class="text-center leading-normal">Frequently Asked Questions</h3>
    <div class="md:w-10/12 bg-[#353535] text-gray-100 rounded-lg">
        <Accordion autocollapse padding="py-2 px-4 md:py-3 px-6 xl:py-4 xl:px-10 ">
            {#each questions as q}
                <AccordionItem closed>
                    <svelte:fragment slot="lead">
                        <Icon color="grey" height="32" icon={$t(`faq.questions.${q}.icon`)}/>
                    </svelte:fragment>
                    <svelte:fragment slot="summary"><h5 class="font-semibold">
                        {$t(`faq.questions.${q}.question`)}
                    </h5></svelte:fragment>
                    <svelte:fragment slot="content"><p>
                        {$t(`faq.questions.${q}.answer`)}
                    </p></svelte:fragment>
                </AccordionItem>
            {/each}
        </Accordion>
    </div>
</div>

<style lang="scss">
    #faq {
        background-image: url("images/faq-ornaments.svg");
        background-size: cover;
    }
</style>
