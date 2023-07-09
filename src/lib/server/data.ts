import {BusinessPageBuilder, PagesDatabase} from "$lib/typescript";

let aero = new BusinessPageBuilder()
    .setKeywordTitle("Aerospace")
    .withSubTitle("Lorem ipsum dolor sitamet")
    .withImage("/images/gray.png", "Gray image")
    .withDummyFeatures()
    .build();

let military = new BusinessPageBuilder()
    .setKeywordTitle("Military")
    .withSubTitle("Lorem ipsum dolor sitamet")
    .withImage("/images/gray.png", "Gray image")
    .withDummyValues()
    .build();

let chem = new BusinessPageBuilder()
    .setKeywordTitle("Chemical")
    .withSubTitle("Lorem ipsum dolor sitamet")
    .withImage("/images/gray.png", "Gray image")
    .withDummyReviews()
    .build();

export const data = PagesDatabase.getInstance();

data.addPage(aero);
data.addPage(military);
data.addPage(chem);