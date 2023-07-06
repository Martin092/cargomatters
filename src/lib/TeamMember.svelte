<script lang="ts">
    import type {Member} from "$lib/typescript/member";
    export let member:Member;
</script>

<div class="rounded-2xl">
    <div>
        <img src={member.image} alt={member.alt}>
    </div>
    <div class="flex flex-col bg-[#313131] gap-2 md:gap-4 xl:gap-6 p-5">
        <h6 class="h6 text-white">{member.position}</h6>
        <h4 class="h4 text-white mb-5">{member.name}</h4>
        <p class="text-white">{member.description}</p>
    </div>
</div>

<style>

</style>