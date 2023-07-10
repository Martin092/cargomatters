/**
 * Class for information about a Feature. Used in parallel with the Feature reusable component
 * to render a feature usually inside of feature lists or transport solutions
 */
export class FeatureClass {
    icon: string;
    title: string;
    description: string;
    link: string;
    linkText: string;

    /**
     * Constructor for a FeatureClass
     * @param icon the icon of to be prepended on the issue. Should be a valid Iconify icon
     * @param title the title of the feature
     * @param description a description of the feature written underneath the title
     * @param link the link to where this feature should lead to. Could be omitted if a transport feature
     * @param linkText the text of the link that should be rendered in the anchor tag
     */
    constructor(icon: string, title: string, description: string, link: string, linkText: string) {
        this.icon = icon;
        this.title = title;
        this.description = description;
        this.link = link;
        this.linkText = linkText;
    }

    /**
     * Create a transport feature that has no link and no link text. Useful for use inside
     * the transport solutions catalogue
     * @param icon the icon of to be prepended on the issue. Should be a valid Iconify icon
     * @param title the title of the feature
     * @param description a description of the feature written underneath the title
     * @constructor creates a new Feature class using the constructor
     */
    public static TransportFeature(icon: string, title: string, description: string) {
        return new FeatureClass(icon, title, description, "", "");
    }
}