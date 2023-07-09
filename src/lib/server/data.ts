import {BusinessPageBuilder, PagesDatabase} from "$lib/typescript";

let aero = new BusinessPageBuilder()
    .setKeywordTitle("Aerospace")
    .withSubTitle("Lorem ipsum dolor sitamet")
    .withImage("/images/gray.png", "Gray image")
    .build();

let military = new BusinessPageBuilder()
    .setKeywordTitle("Military")
    .withSubTitle("Lorem ipsum dolor sitamet")
    .withImage("/images/gray.png", "Gray image")
    .build();

export const data = PagesDatabase.getInstance();

data.addPage(aero);
data.addPage(military);