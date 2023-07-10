import type {BusinessPage} from "./componentClasses/businessPage";

/**
 * Singleton PageDatabase class to store the business pages. Used for the naive
 * server implementation of loading the business page information dynamically
 * using only the keyword of the business. Could be disregarded if switched for
 * a headless CMS.
 */
export class PagesDatabase {
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
     */
    public getPage(type:string):BusinessPage|undefined {
        return this._pages.get(type.toLowerCase());
    }

    /**
     * A getter method for a reference to the hashmap database implementation
     * @return the database hashmap
     */
    get pages(): Map<string, BusinessPage> {
        return this._pages;
    }
}