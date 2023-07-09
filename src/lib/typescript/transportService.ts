import type { FeatureClass } from "./feature";

export class TransportServiceClass{
    title: string;
    subtitle: string;
    description: string;
    features: FeatureClass[];

    constructor(title:string, subtitle:string, description:string, features:FeatureClass[]){
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.features = features;
    }
}