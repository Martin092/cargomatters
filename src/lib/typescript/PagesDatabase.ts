import type {BusinessPage} from "$lib/typescript/businessPage";

export class PagesDatabase {
    private static instance: PagesDatabase;

    private _pages:Map<string, BusinessPage>;

    private constructor() {
        this._pages = new Map<string, BusinessPage>();
    }

    public static getInstance():PagesDatabase {
        if (!PagesDatabase.instance) {
            PagesDatabase.instance = new PagesDatabase();
        }

        return PagesDatabase.instance;
    }

    public addPage(page:BusinessPage):void {
        this._pages.set(page.type.toLowerCase(), page);
    }

    public getPage(type:string):BusinessPage|undefined {
        return this._pages.get(type);
    }

    get pages(): Map<string, BusinessPage> {
        return this._pages;
    }
}