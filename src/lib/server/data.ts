import {BenefitClass, BusinessPageBuilder, FeatureClass, PagesDatabase} from "$lib/typescript";

let auto = new BusinessPageBuilder()
    .setKeywordTitle("Automotive")
    .withFeatures([new FeatureClass("automotive-tailor-made", "/contact"),
                    new FeatureClass("automotive-24/7", "/contact"),
                    new FeatureClass("automotive-care", "/contact")])
    .addBenefits([new BenefitClass("automotive-jit", "/images/JIT.webp", ""),
                  new BenefitClass("automotive-chain", "/images/supply-chain-vis.webp", "")])
    .withImage("/images/automobile.webp", "cars on an assembly line")
    .withHeroImage("/images/automotive-hero.png")
    .withHeaderBackground("bg-surface-50")
    .build();

let aero = new BusinessPageBuilder()
    .setKeywordTitle("Aerospace")
    .withImage("/images/aero-ship.webp", "a space ship under construction")
    .withHeroImage("/images/aerospace-hero.png")
    .withDummyFeatures()
    .addBenefits([new BenefitClass("aerospace-components", "/images/plane-hangar.webp", ""),
                  new BenefitClass("aerospace-ground-handling", "/images/plane-loading.webp", ""),
                  new BenefitClass("aerospace-hazards", "/images/hazards.webp", ""),
                  new BenefitClass("aerospace-emergencies", "/images/plane-wheel.webp", "")])
    .build();

let food = new BusinessPageBuilder()
    .setKeywordTitle("Food")
    .withImage("/images/cherries.webp", "A crate of cherries")
    .withHeroImage("/images/food-hero.png")
    .withDummyValues()
    .withHeaderBackground("bg-surface-50")
    .build();

let pharma = new BusinessPageBuilder()
    .setKeywordTitle("Pharmaceutical")
    .withImage("/images/pharma-card.webp", "Medical supplies")
    .withHeroImage("/images/pharma-hero.png")
    .withFeatures([new FeatureClass("pharma-solutions", "/contact"),
                    new FeatureClass("automotive-24/7", "/contact")])
    .addBenefits([new BenefitClass("pharma-platforms", "/images/gray.png", ""),
                  new BenefitClass("pharma-emergencies", "/images/gray.png", ""),])
    .withDummyReviews()
    .build();

let hightech = new BusinessPageBuilder()
    .setKeywordTitle("High-tech")
    .withImage("/images/high-tech.webp", "Close-up image of a CPU")
    .withHeroImage("/images/hightech-hero.png")
    .withDummyFeatures()
    .addBenefits([new BenefitClass("hightech-emergencies", "/images/gray.png", ""),
                    new BenefitClass("hightech-platforms", "/images/platforms.webp", "")])
    .withDummyReviews()
    .withQuestions([`q1`,'q2','q1'])
    .build();

export const data = PagesDatabase.getInstance();

data.addPage(auto)
data.addPage(aero);
data.addPage(food);
data.addPage(pharma);
data.addPage(hightech);