export class FeatureClass {
    icon: string;
    title: string;
    description: string;
    link: string;
    linkText: string;


    constructor(icon: string, title: string, description: string, link: string, linkText: string) {
        this.icon = icon;
        this.title = title;
        this.description = description;
        this.link = link;
        this.linkText = linkText;
    }
}