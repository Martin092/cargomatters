<script lang="ts">
    import TeamMember from "$lib/components/reusable/TeamMember.svelte";
    import {Member} from "$lib/typescript/member";

    let member = new Member("images/gray.png", "member", "CEO", "Peter Griffin", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.")
</script>

<img class="row-start-4 col-start-1 col-span-4
            xl:col-start-11 xl:col-span-2" src="images/about-ornaments.svg" alt="">
<div class="row-start-4 col-start-1 col-span-full py-20
            lg:col-start-2 lg:col-span-6
            xl:col-start-3 xl:col-span-8">
    <div class="flex flex-col gap-12 md:gap-16">
        <div class="text-center">
            <h3>Meet the Team</h3>
            <h5>We are CargoMatters</h5>
        </div>
        <div class="flex flex-col gap-2 md:flex-row md:gap-4 xl:gap-6">
            <TeamMember {member} />
            <TeamMember {member} />
        </div>
    </div>
</div>