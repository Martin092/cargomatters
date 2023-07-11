import type {BusinessPage, IndustrySolutionClass} from "./index";

/**
 * Adapter interface for loading business pages
 */
export interface BusinessDao {

    /**
     * Get the page information as a BusinessPage class or null
     * by the type keyword of the business.
     * @param type the type keyword of the business e.g. aerospace, military etc.
     * @return the business page information as a BusinessPage class or null if that
     * business is not found in the database
     */
    getPage(type:string):BusinessPage|null;

    /**
     * Get the catalogue of all industrial solutions to load them on
     * the logistic & business solutions page.
     * @return a catalogue with all business solutions in the database
     */
    getCatalogue():IndustrySolutionClass[];
}