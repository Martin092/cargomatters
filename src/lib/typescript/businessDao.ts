import type {BusinessPage} from "$lib/typescript/businessPage";
import type {IndustrySolutionClass} from "$lib/typescript/industrySolutions";

export interface BusinessDao {
    getPage(type:string):BusinessPage|null;
    getCatalogue():IndustrySolutionClass[];
}