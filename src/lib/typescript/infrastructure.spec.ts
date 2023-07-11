import {describe, it, expect, beforeEach, vi} from "vitest";
import type {HashMapPagesDatabase, BusinessPage} from "./index";
import {BusinessPageBuilder, BusinessPageLoader} from "./index";

describe("BusinessPageLoader Port unit tests", () => {
    let mocked:MockedPageDb;
    let bpl:BusinessPageLoader;

    beforeEach(() => {
        vi.resetAllMocks();
        mocked = new MockedPageDb();
        bpl = new BusinessPageLoader(mocked);
    });

    it('should get a page successfully if it exists', function () {
        let spy = vi.spyOn(mocked, 'getPage');

        let actual = bpl.getPage("hiphop");

        expect(actual).not.toBe(null);
        expect(spy).toHaveBeenCalledOnce();

    });

    it('should return null if a page does not exist', function () {
        let spy = vi.spyOn(mocked, 'getPage');

        let actual = bpl.getPage("does not exist");

        expect(actual).toBe(null);
        expect(spy).toHaveBeenCalledOnce();
    });

    it('should return correct array of saved pages', function () {
        let spy = vi.spyOn(mocked, 'getPages');

        let actual = bpl.getCatalogue();

        expect(actual).toHaveLength(1);
        expect(spy).toHaveBeenCalledOnce();
    });
});


/**
 * A Mocked version of the PageDatabase class
 */
class MockedPageDb implements HashMapPagesDatabase {
    basicBusinessPage = new BusinessPageBuilder()
        .setKeywordTitle("hiphop")
        .withImage("gray", "alt")
        .withSubTitle("subtitle").build();

    /**
     * Mocked implementation of the addPage method
     */
    addPage(page: BusinessPage) {}

    /**
     * Mocked implementation of the getPage method
     */
    getPage(type: string): BusinessPage | undefined {
        if (type === "hiphop")
            return this.basicBusinessPage;
        return undefined;
    }

    /**
     * Mocked implementation of the getPages method
     */
    getPages():BusinessPage[] {
        return [this.basicBusinessPage];
    }
}
