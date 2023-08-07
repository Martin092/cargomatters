/**
 * Data structure used to load information into the Member component
 */
export class Member {
    image: string;
    localizationKey: string;

    /**
     *
     * @param image an image of the member
     * @param localizationKey the 
     */
    constructor(image:string, localizationKey:string){
        this.image = image;
        this.localizationKey = localizationKey;
    }
}