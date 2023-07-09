import {BusinessPage} from "$lib/typescript";
import type {BusinessDao} from "$lib/typescript/businessDao";
import {BusinessPageLoader} from "$lib/typescript/BussinessPageLoader";

let pages = new Map<string, BusinessPage>();

let aero = new BusinessPage("Aerospace", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
                                        null, null, null, "Aerospace", "/images/gray.png");

pages.set("aerospace", aero);

export const businessDao:BusinessDao = new BusinessPageLoader(pages);
