import {describe, it, expect} from "vitest";
import {Stat} from "../index";

describe("Statistic Number Shortener Method", () => {
    it('should return 0 for negative values', function () {
        let actual = Stat.shortenNumber(-32);
        expect(actual).toBe("0");
    });

    it('should return the number as is if it is less than 1000', function () {
        expect(Stat.shortenNumber(348)).toBe("348");
        expect(Stat.shortenNumber(92)).toBe("92");
        expect(Stat.shortenNumber(999)).toBe("999");
        expect(Stat.shortenNumber(0)).toBe("0");
    });

    it('should shorten numbers le to 1000', function () {
        expect(Stat.shortenNumber(42912)).toBe("43k");
        expect(Stat.shortenNumber(538734)).toBe("539k");
        expect(Stat.shortenNumber(22345678)).toBe("22m");
    });

    it('should shorten numbers and add .5 if they are thousands or millions', function () {
        expect(Stat.shortenNumber(1500)).toBe("1.5k");
        expect(Stat.shortenNumber(1734)).toBe("1.7k");
        expect(Stat.shortenNumber(1000)).toBe("1.0k");
        expect(Stat.shortenNumber(2345678)).toBe("2.3m");
    });
});