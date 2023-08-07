<!-- About Page Stats Group
    @uses: TeamMember component together with its accompanying Member class to instantiate the members
    @ret: a responsive statistics section for some key company statistics
-->
<script lang="ts">
    import TeamMember from "$lib/components/reusable/TeamMember.svelte";
    import {Member} from "$lib/typescript";
    import {t} from "$lib/translations";

    let alen = new Member("/images/gray.png", "1");
    let adriana = new Member("/images/gray.png", "2");
</script>

<img class="row-start-4 col-start-1 col-span-4
            xl:col-start-1 xl:col-span-2" src="images/about-ornaments.svg" alt="">
<div class="row-start-4 col-start-1 col-span-full py-20
            lg:col-start-2 lg:col-span-6
            xl:col-start-3 xl:col-span-8">
    <div class="flex flex-col gap-12 md:gap-16">
        <div class="text-center">
            <h3>{$t('about.team.title')}</h3>
            <h5>{$t('about.team.subtitle')}</h5>
        </div>
        <div class="flex flex-col gap-2 md:flex-row md:gap-4 xl:gap-6">
            <TeamMember member={alen} />
            <TeamMember member={adriana} />
        </div>
    </div>
</div>