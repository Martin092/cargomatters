import {IndustrySolutionClass, BenefitClass, ReviewClass, FeatureClass} from "../index";

/**
 * A business page builder for seamless creation of business pages
 */
export class BusinessPageBuilder {
    public type:string = "undefined";
    public features:FeatureClass[] = [];
    public benefits:BenefitClass[] = [];
    public reviews:ReviewClass[] = [];
    public alt:string = "Gray image";
    public image:string = "/images/gray.png";
    public heroImage:string = "/images/hero-ornaments.svg";

    /**
     * Set the keyword title of the business page. Can have capitals
     * @param type the type keyword of the business page
     */
    setKeywordTitle(type:string):BusinessPageBuilder {
        this.type = type;
        return this;
    }

    /**
     * Add features to the Business Page as an array of FeatureClass
     * @param features the features to be set on this BusinessPage
     * as an array of FeatureClass objects
     */
    withFeatures(features:FeatureClass[]):BusinessPageBuilder {
        this.features = features;
        return this;
    }

    /**
     * Add benefits to the Business Page as an array of BenefitClass
     * @param benefits the benefits to be set on this BusinessPage
     * as an array of BenefitClass objects
     */
    addBenefits(benefits:BenefitClass[]):BusinessPageBuilder {
        benefits.forEach(b => {
            this.benefits.push(b);
        })
        return this;
    }

    /**
     * Add reviews to the Business Page as an array of ReviewClass
     * @param reviews the reviews to be set on this BusinessPage
     * as an array of ReviewClass objects rendered inside the
     * Social Proof component of the dynamic Business page
     */
    withReviews(reviews:ReviewClass[]):BusinessPageBuilder {
        this.reviews = reviews;
        return this;
    }

    /**
     * Set an image to be loaded inside the catalogue card of this
     * Business page that is rendered inside the industry subpage
     * @param image the path to the image to be loaded inside the
     * business solutions catalogue entry of this business page
     * @param alt the alt text of this image
     */
    withImage(image:string, alt:string):BusinessPageBuilder {
        this.alt = alt;
        this.image = image;
        return this;
    }

    /**
     * Set a hero image to be loaded inside business page hero section
     * @param image the path to the image to be rendered on the
     * hero section of this business page
     */
    withHeroImage(image:string):BusinessPageBuilder {
        this.heroImage = image;
        return this;
    }

    /**
     * Add dummy features for testing to be rendered on the
     * business page
     */
    withDummyFeatures():BusinessPageBuilder {
        this.features = dummyFeatures();
        return this;
    }

    /**
     * Add dummy benefits for testing to be rendered on the
     * business page
     */
    withDummyBenefits():BusinessPageBuilder {
        this.benefits = dummyBenefits();
        return this;
    }

    /**
     * Add dummy reviews for testing to be rendered on the
     * business page
     */
    withDummyReviews():BusinessPageBuilder {
        this.reviews = dummyReviews();
        return this;
    }

    /**
     * Add dummy values for testing to be rendered on the
     * business page. This method adds dummy features,
     * benefits and reviews
     */
    withDummyValues():BusinessPageBuilder {
        this.withDummyFeatures().withDummyBenefits().withDummyReviews();
        return this;
    }

    /**
     * Build the page with the given information. If some information is
     * not given, this method will fall back to the default values.
     */
    build():BusinessPage {
        return new BusinessPage(this.type, this.features, this.benefits, this.reviews, this.alt, this.image, this.heroImage);
    }
}

/**
 * Class to store information about the dynamically loaded business pages.
 * Constructor can be tedious to use. Use the provided BusinessPageBuilder
 * class instead for creating business pages.
 */
export class BusinessPage {
    localizationKey:string;
    type:string;
    heroImage:string;
    features:FeatureClass[];
    benefits:BenefitClass[];
    reviews:ReviewClass[];
    private readonly _catalogueCard:IndustrySolutionClass;

    /**
     * Create a business page class. Tedious to use on its own.
     * Use of the provided builder class for BusinessPages is recommended.
     * @param type the type keyword of the page
     * and a description inside the business solutions catalogue
     * @param features the features to be rendered on the dynamic page as an array
     * @param benefits the benefits to be rendered on the dynamic page as an array
     * @param reviews the reviews to be rendered on the dynamic page as an array
     * @param alt the alt text to the catalogue image
     * @param image the image to be loaded inside the catalogue entry
     * @param heroImage the image to be rendered on the hero section of this page
     */
    constructor(type: string, features: FeatureClass[], benefits: BenefitClass[], reviews: ReviewClass[], alt:string, image:string, heroImage:string) {
        this.type = type;
        this.features = features;
        this.benefits = benefits;
        this.reviews = reviews;
        this._catalogueCard = new IndustrySolutionClass(image, alt, type, `/services/industry/${type.toLowerCase()}`, type.toLowerCase());
        this.heroImage = heroImage;

        this.localizationKey = type.toLowerCase();
    }

    /**
     * Getter for the catalogue card. 
     * @return IndustrySolutionClass representation of the catalogue entry
     */
    get catalogueCard(): IndustrySolutionClass {
        return this._catalogueCard;
    }
}

/**
 * A function to create dummy features
 */
export function dummyFeatures():FeatureClass[] {
    let f1 = new FeatureClass("pepicons-print:truck", "Feature Bullet", "Considering all types of transportation, we carefully plan and arrange the optimal transport solution to any place in the world.", "/contact", "Consult Us for Free >");
    let f2 = new FeatureClass("pepicons-print:airplane", "Feature Bullet", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Ut et massa mi. Aliquam in hendrerit urna.", "/contact", "Consult Us for Free >");
    let f3 = new FeatureClass("solar:box-bold", "Feature Bullet", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Ut et massa mi. Aliquam in hendrerit urna.", "/contact", "Consult Us for Free >");

    return [f1,f2,f3,f1,f2];
}

/**
 * A function to create dummy benefits
 */
export function dummyBenefits():BenefitClass[] {
    let b1 = new BenefitClass("International Partners", "Solutions to all problems", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.", "/images/gray.png", "alt", "Explore services >", "/services");

    return [b1, b1];
}

/**
 * A function to create dummy reviews
 */
export function dummyReviews():ReviewClass[] {
    let r1 = new ReviewClass("\"Honest, dedicated work...\"", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.", "/images/companies/prax-logo.png", "alt", "Praxidike - IT Team");

    return [r1, r1];
}