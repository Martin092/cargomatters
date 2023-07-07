<script lang="ts">
    import type {ReviewClass} from "$lib/typescript/review";
    export let review:ReviewClass;
</script>


<div class="flex flex-col gap-4 rounded-t-lg bg-surface-50">
    <div class="p-8 flex flex-col gap-8">
        <div class="flex flex-col gap-4">
            <h5 class="text-[#232323]">{review.title}</h5>
            <p class="text-secondary-400">{review.text}</p>
        </div>
        <div class="flex flex-row justify-between items-center">
            <img src={review.logo} alt={review.alt}>
            <h6>{review.company}</h6>
        </div>
    </div>
    <div class="bg-[#EAC976] h-1.5 m-0"></div>
</div>

<style>
    h5 {
        font-weight: 400;
    }
</style>