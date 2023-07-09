import type { PageServerLoad } from './$types';
import {businessDao} from "$lib/server/adapterBussiness";

export const load = (async ({ params }) => {
    const res = await businessDao.getPage(params.type);

    if (res === null) {
        return {
            page: false
        }
    }

    return {
        page: structuredClone(res)
    };
}) satisfies PageServerLoad;