import {IndustrySolutionClass, BenefitClass, ReviewClass, FeatureClass} from "../index";

export class BusinessPageBuilder {
    public type:string = "";
    public subTitle:string = "";
    public features:FeatureClass[] = [];
    public benefits:BenefitClass[] = [];
    public reviews:ReviewClass[] = [];
    public alt:string = "Gray image";
    public image:string = "/images/gray.png";
    public heroImage:string = "/images/hero-ornaments.svg";

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

    withHeroImage(image:string):BusinessPageBuilder {
        this.heroImage = image;
        return this;
    }

    withDummyFeatures():BusinessPageBuilder {
        this.features = dummyFeatures();
        return this;
    }

    withDummyBenefits():BusinessPageBuilder {
        this.benefits = dummyBenefits();
        return this;
    }

    withDummyReviews():BusinessPageBuilder {
        this.reviews = dummyReviews();
        return this;
    }

    withDummyValues():BusinessPageBuilder {
        this.withDummyFeatures().withDummyBenefits().withDummyReviews();
        return this;
    }


    build():BusinessPage {
        return new BusinessPage(this.type, this.subTitle, this.features, this.benefits, this.reviews, this.alt, this.image, this.heroImage);
    }
}

export class BusinessPage {
    type:string;
    subTitle:string;
    heroImage:string;
    features:FeatureClass[];
    benefits:BenefitClass[];
    reviews:ReviewClass[];
    private readonly _catalogueCard:IndustrySolutionClass;

    constructor(type: string, subTitle: string, features: FeatureClass[], benefits: BenefitClass[], reviews: ReviewClass[], alt:string, image:string, heroImage:string) {
        this.type = type;
        this.subTitle = subTitle;
        this.features = features;
        this.benefits = benefits;
        this.reviews = reviews;
        this._catalogueCard = new IndustrySolutionClass(image, alt, `${type} Industry Solutions`, subTitle, `See ${type} solutions`, `/services/industry/${type.toLowerCase()}`);
        this.heroImage = heroImage;
    }

    get catalogueCard(): IndustrySolutionClass {
        return this._catalogueCard;
    }
}

function dummyFeatures():FeatureClass[] {
    let f1 = new FeatureClass("pepicons-print:truck", "Feature Bullet", "Considering all types of transportation, we carefully plan and arrange the optimal transport solution to any place in the world.", "/contact", "Consult Us for Free >");
    let f2 = new FeatureClass("pepicons-print:airplane", "Feature Bullet", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Ut et massa mi. Aliquam in hendrerit urna.", "/contact", "Consult Us for Free >");
    let f3 = new FeatureClass("solar:box-bold", "Feature Bullet", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Ut et massa mi. Aliquam in hendrerit urna.", "/contact", "Consult Us for Free >");

    return [f1,f2,f3,f1,f2];
}

function dummyBenefits():BenefitClass[] {
    let b1 = new BenefitClass("International Partners", "Solutions to all problems", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.", "/images/gray.png", "alt", "Explore services >", "/services");

    return [b1, b1];
}

function dummyReviews():ReviewClass[] {
    let r1 = new ReviewClass("\"Honest, dedicated work...\"", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.", "/images/companies/prax-logo.png", "alt", "Praxidike - IT Team");

    return [r1, r1];
}