import type {BusinessPage} from "$lib/typescript/businessPage";
import type {IndustrySolutionClass} from "$lib/typescript/industrySolutions";

export class BusinessDao {
    pages:Map<string, BusinessPage>;

    constructor(pages:Map<string, BusinessPage>) {
        this.pages = pages;
    }

    public getPage(type:string):BusinessPage|null {
        let res = this.pages.get(type);
        return (res) ? res: null;
    }

    public getCatalogue():IndustrySolutionClass[] {
        let res:IndustrySolutionClass[] = [];

        this.pages.forEach((value: BusinessPage, key:string) => {
            res.push(value.catalogueCard);
        });

        return res;
    }
}