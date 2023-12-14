import {describe, it, expect} from "vitest";
import {
    BenefitClass,
    BusinessPage,
    BusinessPageBuilder,
    IndustrySolutionClass,
    Member,
    Stat, TransportServiceClass, WideSolutionClass
} from "../index";
import {dummyBenefits, dummyFeatures, dummyReviews} from "./businessPage";

// describe("BusinessPageBuilder and BusinessPage", () => {
//     it('should work properly with all given basic methods', function () {

//         let b1 = new BusinessPageBuilder();
//         b1.setKeywordTitle("test")
//             .withDummyValues().withImage("/some/image", "alt")
//             .withHeroImage("/some/hero/image");

//         let actual = b1.build();

//         let expectedFeatures = dummyFeatures();
//         let expectedBenefits = dummyBenefits();
//         let expectedReviews = dummyReviews();

//         let expected =
//             new BusinessPage("test", expectedFeatures, expectedBenefits,
//                 expectedReviews, ["dummy","dummy","dummy","dummy"], "alt", "/some/image", "/some/hero/image");

//         expect(actual).toStrictEqual(expected);
//     });

//     it('should work properly with setters for array fields', function () {
//         let testBenefit =
//             new BenefitClass("test","/some/image","/");

//         let b1 = new BusinessPageBuilder();
//         b1.setKeywordTitle("test")
//             .withFeatures(dummyFeatures())
//             .addBenefits(dummyBenefits())
//             .withReviews(dummyReviews())
//             .withImage("/some/image", "alt")
//             .addBenefits([testBenefit])
//             .withHeroImage("/some/hero/image");

//         let actual = b1.build();

//         let expectedFeatures = dummyFeatures();
//         let expectedBenefits = dummyBenefits();
//         let expectedReviews = dummyReviews();

//         expectedBenefits.push(testBenefit);
//         let expected =
//             new BusinessPage("test", expectedFeatures, expectedBenefits,
//                 expectedReviews, [], "alt", "/some/image", "/some/hero/image");

//         expect(actual).toStrictEqual(expected);
//     });

//     it('should give correct catalogue card', function () {

//         let b1 = new BusinessPageBuilder();
//         b1.setKeywordTitle("test")
//             .withImage("/some/image", "alt");

//         let actual = b1.build().catalogueCard;

//         let expected =
//             new IndustrySolutionClass("/some/image", "alt", "test",
//                 "/services/industry/test", "test");

//         expect(actual).toStrictEqual(expected);
//     });
// })

describe("StatClass class", () => {
    it('should be created successfully by shortened constructor', function () {
        let actual:Stat = Stat.shortenedStatistic(23, "Things");
        expect(actual.number).toBe("23");
        expect(actual.statistic).toBe("Things");
    });

    it('should be created successfully by normal constructor', function () {
        let actual:Stat = Stat.normalStatistic("23%", "Things");
        expect(actual.number).toBe("23%");
        expect(actual.statistic).toBe("Things");
    });
})

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

    it('should return 0 for numbers le than 1 billion', function () {
        expect(Stat.shortenNumber(1000000000)).toBe("0");
    });
});

describe("Constructor methods", () => {
    it('it should compile', function () {
        let m = new Member("img", "1");
        let ts = new TransportServiceClass("air", ["dummy"]);
        let wc = new WideSolutionClass("img", "alt", "ceo", "name", []);

        expect(m.localizationKey).toBe("1");
        expect(ts.type).toBe("air");
        expect(wc.icon).toBe("img");
    });
})