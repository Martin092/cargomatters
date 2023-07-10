<!-- TeamMember component
    @uses: the Member class as a data structure to load information about the component
    @prop member: a typescript object that holds information about the member
    @ret: a component that that an image of the member, his position, name and a brief description
-->

<script lang="ts">
    import type {Member} from "$lib/typescript/member";
    export let member:Member;
</script>

<div class="rounded-lg">
    <img src={member.image} alt={member.alt}>
    <div class="flex flex-col bg-[#313131] gap-2 md:gap-4 xl:gap-6 p-5">
        <h6 class="text-gray-100">{member.position}</h6>
        <h4 class="text-gray-100 mb-5">{member.name}</h4>
        <p class="text-gray-100">{member.description}</p>
    </div>
</div>

<style>

</style>