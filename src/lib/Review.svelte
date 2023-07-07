<script lang="ts">
    import type {ReviewClass} from "$lib/typescript/review";
    export let review:ReviewClass;
</script>


<div class="flex flex-col gap-4 rounded-t-lg">
    <div class="p-2 flex flex-col gap-4">
        <h3 class="h3 font-bold">{review.title}</h3>
        <p>{review.text}</p>
        <div class="flex flex-row place-content-between">
            <img src={review.logo}, alt={review.logo}>
            <h6 class="h6">{review.company}</h6>
        </div>
    </div>
    <div class="bg-[#EAC976] h-1.5 m-0"></div>
</div>

<style>

</style>