import {BusinessPageLoader} from "$lib/typescript";
import type {BusinessDao} from "$lib/typescript/businessDao";
import {data} from "$lib/server/data";

export const businessDao:BusinessDao = new BusinessPageLoader(data);
