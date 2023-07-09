import type {BusinessPage, IndustrySolutionClass} from "./index";

export interface BusinessDao {
    getPage(type:string):BusinessPage|null;
    getCatalogue():IndustrySolutionClass[];
}