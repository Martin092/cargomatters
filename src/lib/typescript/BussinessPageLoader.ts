import type {BusinessPage} from "./businessPage";
import type {IndustrySolutionClass} from "./industrySolutions";
import type {BusinessDao} from "./businessDao";
import type {PagesDatabase} from "./PagesDatabase";

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