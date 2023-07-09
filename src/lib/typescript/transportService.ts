import type { FeatureClass } from "./feature";

export class TransportServiceClass{
    title: string;
    subtitle: string;
    description: string;
    features: FeatureClass[];
    linkText: string;
    link: string;

    constructor(title:string, subtitle:string, description:string, features:FeatureClass[], linkText:string, link:string){
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.features = features;
        this.linkText = linkText;
        this.link = link;
    }
}