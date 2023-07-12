import type { PageServerLoad } from '../../../../../.svelte-kit/types/src/routes';
import {businessDao} from "$lib/server/server";

export const load = (async () => {
    const res = businessDao.getCatalogue();

    return {
        catalogue: structuredClone(res)
    };
}) satisfies PageServerLoad;