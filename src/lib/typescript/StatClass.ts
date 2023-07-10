/**
 * Class for a Statistic used in components and pages
 * Field `number` is of type String because it can be rendered
 * in a shortened format that includes chars e.g. 401 234 to 401k
 */
export class Stat {
    private readonly _number:string
    private readonly _statistic:string

    /**
     * Stat constructor that shortens the given number if necessary
     * @param num the number to be set as integer. Could be of a shortened form - 40k etc.
     * @param statistic the statistic information displayed usually below the number
     */
    constructor(num: number, statistic: string) {
        this._number = Stat.shortenNumber(num);
        this._statistic = statistic;
    }

    /**
     * Number shortener used to display big numbers in a shortened format
     * @param num must be non-negative integer that is smaller than 10^12 - one trillion
     */
    public static shortenNumber(num:number):string {
        return num.toString();
    }

    /**
     * Getter for the number field. Returns string.
     */
    get number(): string {
        return this._number;
    }

    /**
     * Getter for the statistics field. Returns string.
     */
    get statistic(): string {
        return this._statistic;
    }
}