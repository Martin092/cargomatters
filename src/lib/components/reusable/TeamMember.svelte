<!-- TeamMember component
    @uses: the Member class as a data structure to load information about the component
    @ret: a component that that an image of the member, his position, name and a brief description
-->

<script lang="ts">
    import type {Member} from "$lib/typescript";
    import {t} from "$lib/translations";

    /**
     * a typescript object that holds information about the member
     */
    export let member:Member;
</script>

<div class="rounded-lg md:w-1/2">
    <img src={member.image} alt={$t(`about.team.members.${member.localizationKey}.alt`)}>
    <div class="flex flex-col bg-[#333333] p-5 pb-8">
        <h6 class="text-gray-100">{$t(`about.team.members.${member.localizationKey}.position`)}</h6>
        <h4 class="text-gray-100 mb-5">{$t(`about.team.members.${member.localizationKey}.name`)}</h4>
        <p class="text-gray-100">{$t(`about.team.members.${member.localizationKey}.desc`)}</p>
    </div>
</div>

<style>

</style>