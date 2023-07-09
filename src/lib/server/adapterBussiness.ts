import {BusinessPage} from "$lib/typescript";
import {BusinessDao} from "$lib/typescript/businessDao";

let pages = new Map<string, BusinessPage>();

let aero = new BusinessPage("Aerospace", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
                                        null, null, null, "Aerospace", "/images/plane.png");

pages.set("aerospace", aero);

export const businessDao = new BusinessDao(pages);
