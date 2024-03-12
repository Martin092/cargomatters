<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import { TableOfContents } from '@skeletonlabs/skeleton';

    import Meta from "$lib/components/Meta.svelte";
    import {MetaSnippetBuilder} from "$lib/typescript";

    let meta = new MetaSnippetBuilder().setLocalizationKey("privacy").withType("website").build();
</script>

<Meta {meta} />

<Header background=""/>

<main class="text-gray-800
             grid grid-cols-4 gap-x-2 mx-4
             md:grid-cols-8 md:gap-x-4 md:mx-8
             xl:grid-cols-12 xl:gap-x-6 xl:mx-32 py-20">

    <h1 class="md:col-start-3 col-span-full mb-16
               xl:col-start-4 xl:col-span-6">Privacy Policy</h1>
    <div class="col-span-3 row-start-2 mb-10
                md:col-start-1 md:col-span-2 md:mb-0
                xl:col-span-3">
        <div class="sticky top-20">
            <TableOfContents scrollParent="#content" target="#content" allowedHeadings="h2, h3, h4"
                             width="max-w-[240px] md:w-full lg:w-3/4"
                             rounded="rounded-lg" regionList="text-sm xl:text-base"/>
        </div>
    </div>
    <div id="content" class="col-start-1 col-span-4 flex flex-col gap-12
                             md:col-start-3 md:col-span-5
                             xl:col-start-4 xl:col-span-6">
        <div class="flex flex-col gap-4">
            <h4>Copyright</h4>
            <p>The contents and works created by the website operator on these websites are subject to Bulgarian copyright law. Duplication, editing, distribution and any kind of use outside the limitations of copyright law require the prior written consent of the respective author or creator. Downloads and copies of these websites are only permitted for private, non-commercial use.</p>
            <p>As far as the contents on these websites were not created by the website operator, the copyrights of third parties are respected. In particular, the contents of third parties are marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. As soon as we become aware of any infringement, we will remove such content immediately.</p>
        </div>
        <div class="flex flex-col gap-4">
            <h4>Disclaimer</h4>
            <p>As a service provider, we are responsible for our own content on these websites in accordance with general laws. However, we are not obliged to monitor external information provided or stored on our website or to investigate circumstances that indicate illegal activities.</p>
            <p>Obligations to remove or block the use of information in accordance with general laws remain unaffected thereby. Any liability in this context can, however, only be assumed from the point in time at which the infringement becomes known to us. Once we become aware of a specific infringement of the law, we will immediately remove the content in question.</p>
        </div>
        <div class="flex flex-col gap-4">
            <h4>GDPR</h4>
            <p>The processing of personal data, such as the name, address, e-mail address, or telephone number of a data subject shall always be in line with the EU General Data Protection Regulation (“GDPR”), and in accordance with the country-specific data protection regulations applicable to Cargo Matters.</p>
            <p>By means of this data protection declaration, our enterprise would like to inform the general public and our customers of the nature, scope, and purpose of the personal data we collect, use and process. Furthermore, data subjects are informed, by means of this data protection declaration, of the rights to which they are entitled as website users and customers.</p>
        </div>
    </div>
</main>
