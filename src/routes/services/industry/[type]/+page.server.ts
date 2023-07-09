import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import {businessDao} from "$lib/server/server";

export const load = (async ({ params }) => {
    const res = await businessDao.getPage(params.type);

    if (res === null) {
        throw error(404, "This industry is still not supported");
    }

    return {
        page: structuredClone(res)
    };
}) satisfies PageServerLoad;