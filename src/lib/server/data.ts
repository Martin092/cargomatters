import {BusinessPageBuilder, FeatureClass, PagesDatabase} from "$lib/typescript";

let auto = new BusinessPageBuilder()
    .setKeywordTitle("Automotive")
    .withFeatures([new FeatureClass("automotive-tailor-made", "/contact"),
                    new FeatureClass("automotive-jit", "/contact"),
                    new FeatureClass("automotive-supply-chain", "/contact"),
                    new FeatureClass("automotive-care", "/contact")])
    .withImage("/images/automobile.webp", "cars on an assembly line")
    .build();

let aero = new BusinessPageBuilder()
    .setKeywordTitle("Aerospace")
    .withImage("/images/gray.png", "Gray image")
    .withDummyFeatures()
    .build();

let military = new BusinessPageBuilder()
    .setKeywordTitle("Military")
    .withImage("/images/gray.png", "Gray image")
    .withDummyValues()
    .build();

let chem = new BusinessPageBuilder()
    .setKeywordTitle("Chemical")
    .withImage("/images/gray.png", "Gray image")
    .withDummyReviews()
    .build();

let agriculture = new BusinessPageBuilder()
    .setKeywordTitle("Agriculture")
    .withImage("/images/gray.png", "Gray image")
    .withDummyFeatures()
    .withDummyBenefits()
    .withDummyReviews()
    .withQuestions([`q1`,'q2','q1'])
    .build();

export const data = PagesDatabase.getInstance();

data.addPage(auto)
data.addPage(aero);
data.addPage(military);
data.addPage(chem);
data.addPage(agriculture);