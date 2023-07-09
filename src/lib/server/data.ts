import {BusinessPage,PagesDatabase} from "$lib/typescript";

let aero = new BusinessPage("Aerospace", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
    null, null, null, "Aerospace", "/images/gray.png");
let military = new BusinessPage("Military", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.",
    null, null, null, "Aerospace", "/images/gray.png");

export const data = PagesDatabase.getInstance();

data.addPage(aero);
data.addPage(military);