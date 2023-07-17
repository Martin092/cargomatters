import type { FeatureClass } from "./feature";

/**
 * Data structure used to load information into the ReviewClass component
 */
export class TransportServiceClass{
    title: string;
    subtitle: string;
    description: string;
    features: FeatureClass[];

    /**
     *
     * @param title type transport service
     * @param subtitle a smaller subtitle that goes under the main one
     * @param description a short description of the service
     * @param features an array of all the features that this service has
     */
    constructor(title:string, subtitle:string, description:string, features:FeatureClass[]){
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.features = features;
    }
}