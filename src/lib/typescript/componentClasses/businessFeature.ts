/**
 * Class for information about a BusinessFeature. Used in parallel with the BusinessFeature
 * reusable component to render a feature usually inside a business specific page
 */
export class BusinessFeatureClass {
    icon: string;
    link: string;
    localizationKey: string;

    /**
     * Constructor for a FeatureClass
     * @param icon the icon of to be prepended on the issue. Should be a valid Iconify icon
     * @param link the link to where this feature should lead to.
     * @param localizationKey the localization key of the feature used to find the feature's translation
     * MUST BE OF FORMAT {businessKeyword}.features.{featureKeyword}
     */
    constructor(icon: string, link: string, localizationKey:string) {
        this.icon = icon;
        this.link = link;
        this.localizationKey = localizationKey;
    }
}