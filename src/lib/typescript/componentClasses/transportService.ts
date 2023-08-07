/**
 * Data structure used to load information into the ReviewClass component
 */
export class TransportServiceClass{
    type:"air"|"road"|"rail"|"sea";
    featureKeys: string[];

    /**
     * Construct a transport service class for the TransportComponent
     * @param type the type of the transport. Can be air, rail, road or sea. Used to load text using the sveltekit-i18n
     * @param featureKeys the localization keys of the features that will be loaded in this component
     */
    constructor(type:"air"|"road"|"rail"|"sea", featureKeys:string[]){
        this.type = type;
        this.featureKeys = featureKeys;
    }
}