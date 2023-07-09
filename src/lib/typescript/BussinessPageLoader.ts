import type {BusinessPage} from "$lib/typescript/businessPage";
import type {IndustrySolutionClass} from "$lib/typescript/industrySolutions";
import type {BusinessDao} from "$lib/typescript/businessDao";
import type {PagesDatabase} from "$lib/typescript/PagesDatabase";

export class BusinessPageLoader implements BusinessDao {
    private pagesDatabase:PagesDatabase;

    constructor(pagesDatabase:PagesDatabase) {
        this.pagesDatabase = pagesDatabase;
    }

    public getPage(type:string):BusinessPage|null {
        let res = this.pagesDatabase.getPage(type);
        return (res) ? res: null;
    }

    public getCatalogue():IndustrySolutionClass[] {
        let res:IndustrySolutionClass[] = [];

        this.pagesDatabase.pages.forEach((value: BusinessPage, key:string) => {
            res.push(value.catalogueCard);
        });

        return res;
    }
}