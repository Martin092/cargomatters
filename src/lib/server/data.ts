import {BusinessPageBuilder, FeatureClass, PagesDatabase} from "$lib/typescript";

let auto = new BusinessPageBuilder()
    .setKeywordTitle("Automotive")
    .withFeatures([new FeatureClass("automotive-tailor-made", "/contact"),
                    new FeatureClass("automotive-jit", "/contact"),
                    new FeatureClass("automotive-supply-chain", "/contact"),
                    new FeatureClass("automotive-care", "/contact")])
    .withImage("/images/automobile.webp", "cars on an assembly line")
    .withHeroImage("/images/automotive-hero.png")
    .withHeaderBackground("bg-surface-50")
    .build();

let aero = new BusinessPageBuilder()
    .setKeywordTitle("Aerospace")
    .withImage("/images/aero-ship.webp", "a space ship under construction")
    .withHeroImage("/images/aerospace-hero.png")
    .withDummyFeatures()
    .build();

let food = new BusinessPageBuilder()
    .setKeywordTitle("Food")
    .withImage("/images/gray.png", "Gray image")
    .withDummyValues()
    .build();

let pharma = new BusinessPageBuilder()
    .setKeywordTitle("Pharmaceutical")
    .withImage("/images/pharma-card.webp", "Medical supplies")
    .withHeroImage("/images/pharma-hero.png")
    .withDummyReviews()
    .build();

let hightech = new BusinessPageBuilder()
    .setKeywordTitle("High-tech")
    .withImage("/images/high-tech.webp", "Close-up image of a CPU")
    .withHeroImage("/images/hightech-hero.png")
    .withDummyFeatures()
    .withDummyBenefits()
    .withDummyReviews()
    .withQuestions([`q1`,'q2','q1'])
    .build();

export const data = PagesDatabase.getInstance();

data.addPage(auto)
data.addPage(aero);
data.addPage(food);
data.addPage(pharma);
data.addPage(hightech);