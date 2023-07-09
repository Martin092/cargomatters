import type {FeatureClass} from "$lib/typescript/feature";
import type {BenefitClass} from "$lib/typescript/benefit";
import type {ReviewClass} from "$lib/typescript/review";
import {IndustrySolutionClass} from "$lib/typescript/industrySolutions";

export class BusinessPage {
    type:string;
    subTitle:string;
    features:FeatureClass[]|null;
    benefits:BenefitClass[]|null;
    reviews:ReviewClass[]|null;
    private _catalogueCard:IndustrySolutionClass;

    constructor(type: string, subTitle: string, features: FeatureClass[] | null, benefits: BenefitClass[] | null, reviews: ReviewClass[] | null, alt:string, image:string) {
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