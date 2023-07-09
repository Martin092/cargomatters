import type { PageServerLoad } from './$types';
import {businessDao} from "$lib/server/adapterBussiness";

export const load = (async () => {
    const res = businessDao.getCatalogue();

    return {
        catalogue: structuredClone(res)
    };
}) satisfies PageServerLoad;