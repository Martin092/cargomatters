import type {BusinessPage} from "./componentClasses/businessPage";

/**
 * Singleton PageDatabase class to store the business pages. Used for the naive
 * server implementation of loading the business page information dynamically
 * using only the keyword of the business. Could be disregarded if switched for
 * a headless CMS.
 */
export class PagesDatabase implements HashMapPagesDatabase {
    private static instance: PagesDatabase;
    private _pages:Map<string, BusinessPage>;

    /**
     * A private instructor to create a PagesDatabase if one is
     * not yet created. Singleton approach is used to ensure
     * that a single 'database' class is used.
     */
    private constructor() {
        this._pages = new Map<string, BusinessPage>();
    }

    /**
     * Get instance of the PagesDatabase singleton.
     */
    public static getInstance():PagesDatabase {
        if (!PagesDatabase.instance) {
            PagesDatabase.instance = new PagesDatabase();
        }

        return PagesDatabase.instance;
    }

    /**
     * Add a page to the database by providing a BusinessPage class
     * @param page the page to be added as a BusinessPage class
     */
    public addPage(page:BusinessPage):void {
        this._pages.set(page.type.toLowerCase(), page);
    }

    /**
     * Get a page from the database
     * @param type the type keyword of the page e.g. aerospace, military etc.
     * @return a business page if found inside the hashmap, otherwise undefined
     */
    public getPage(type:string):BusinessPage|undefined {
        return this._pages.get(type.toLowerCase());
    }

    /**
     * Get all the business pages inside the hash map database
     * @return an array of all saved business pages
     */
    getPages(): BusinessPage[] {
        let res:BusinessPage[] = [];

        this._pages.forEach((value:BusinessPage) => {
            res.push(value);
        })

        return res;
    }
}

/**
 * Interface for Pages Database that uses hashmap
 */
export interface HashMapPagesDatabase {

    /**
     * Add a page to the database by providing a BusinessPage class
     * @param page the page to be added as a BusinessPage class
     */
    addPage(page:BusinessPage):void;

    /**
     * Get a page from the database
     * @param type the type keyword of the page e.g. aerospace, military etc.
     * @return a business page if found inside the hashmap, otherwise undefined
     */
    getPage(type:string):BusinessPage|undefined;

    /**
     * Get all the business pages inside the hash map database
     * @return an array of all saved business pages
     */
    getPages():BusinessPage[];
}