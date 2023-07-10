import type {Stat} from "../index";

/**
 * Data structure used to load information into the WideSolution component
 */
export class WidesolutionClass {
    icon: string;
    subTitle: string;
    title: string;
    description: string;
    stats: Stat[];

    /**
     *
     * @param icon an icon that represents the solution
     * @param subTitle a subtitle that goes over the main one
     * @param title the title(type) of the solution
     * @param description a short description of the solution
     * @param stats an array of stats to support the credibility of the solution
     */
    constructor(icon:string, subTitle:string, title:string, description:string, stats:Stat[]){
        this.icon = icon;
        this.subTitle = subTitle;
        this.title = title;
        this.description = description;
        this.stats = stats;
    }

}