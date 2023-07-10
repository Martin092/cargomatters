import type {BusinessPage} from "./componentClasses/businessPage";
import type {IndustrySolutionClass} from "./componentClasses/industrySolutions";
import type {BusinessDao} from "./businessDao";
import type {HashMapPagesDatabase} from "./PagesDatabase";

/**
 * Implementation (port) for the BusinessDao adapter. Utilizes a page database
 * of class PageDatabase which uses a private hash map with all pages
 */
export class BusinessPageLoader implements BusinessDao {
    private pagesDatabase:HashMapPagesDatabase;

    /**
     * Generate BusinessPageLoader - a port for the BusinessDao adapter
     * @param pagesDatabase - the 'database' with the pages. Allows for
     * dependency injection for mocking.
     */
    constructor(pagesDatabase:HashMapPagesDatabase) {
        this.pagesDatabase = pagesDatabase;
    }

    /**
     * Get the page information as a BusinessPage class or null
     * by the type keyword of the business.
     * @param type the type keyword of the business e.g. aerospace, military etc.
     * @return the business page information as a BusinessPage class or null if that
     * business is not found in the database
     */
    public getPage(type:string):BusinessPage|null {
        let res = this.pagesDatabase.getPage(type);
        return (res) ? res: null;
    }

    /**
     * Get the catalogue of all industrial solutions to load them on
     * the logistic & business solutions page.
     * @return a catalogue with all business solutions in the database
     */
    public getCatalogue():IndustrySolutionClass[] {
        let res:IndustrySolutionClass[] = [];

        this.pagesDatabase.getPages().forEach((page: BusinessPage) => {
            res.push(page.catalogueCard);
        });

        return res;
    }
}