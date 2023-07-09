import type {FeatureClass} from "$lib/typescript/feature";
import type {BenefitClass} from "$lib/typescript/benefit";
import type {ReviewClass} from "$lib/typescript/review";
import {IndustrySolutionClass} from "$lib/typescript/industrySolutions";

export class BusinessPageBuilder {
    public type:string = "";
    public subTitle:string = "";
    public features:FeatureClass[] = [];
    public benefits:BenefitClass[] = [];
    public reviews:ReviewClass[] = [];
    public alt:string = "";
    public image:string = "";

    setKeywordTitle(type:string):BusinessPageBuilder {
        this.type = type;
        return this;
    }

    withSubTitle(subTitle:string):BusinessPageBuilder {
        this.subTitle = subTitle;
        return this;
    }

    withFeatures(features:FeatureClass[]):BusinessPageBuilder {
        this.features = features;
        return this;
    }

    addBenefits(benefits:BenefitClass[]):BusinessPageBuilder {
        benefits.forEach(b => {
            this.benefits.push(b);
        })
        return this;
    }

    withReviews(reviews:ReviewClass[]):BusinessPageBuilder {
        this.reviews = reviews;
        return this;
    }

    withImage(image:string, alt:string):BusinessPageBuilder {
        this.alt = alt;
        this.image = image;
        return this;
    }

    build():BusinessPage {
        return new BusinessPage(this.type, this.subTitle, this.features, this.benefits, this.reviews, this.alt, this.image);
    }
}

export class BusinessPage {
    type:string;
    subTitle:string;
    features:FeatureClass[];
    benefits:BenefitClass[];
    reviews:ReviewClass[];
    private readonly _catalogueCard:IndustrySolutionClass;

    constructor(type: string, subTitle: string, features: FeatureClass[], benefits: BenefitClass[], reviews: ReviewClass[], alt:string, image:string) {
        this.type = type;
        this.subTitle = subTitle;
        this.features = features;
        this.benefits = benefits;
        this.reviews = reviews;
        this._catalogueCard = new IndustrySolutionClass(image, alt, `${type} Industry Solutions`, subTitle, `See ${type} solutions`, `/services/industry/${type.toLowerCase()}`);
    }

    get catalogueCard(): IndustrySolutionClass {
        return this._catalogueCard;
    }
}