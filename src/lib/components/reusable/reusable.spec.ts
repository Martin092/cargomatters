import {describe, it, expect, beforeEach, beforeAll} from "vitest";
import {cleanup, render, screen} from '@testing-library/svelte';
import {loadTranslations, setLocale} from "$lib/translations";

import {Feature, Benefit, MainSolutions} from "./index";
import {FeatureClass, BenefitClass, MainSolution} from "$lib/typescript";


/**
 * Before any test is run, the translations must be loaded
 * and the locale shall be set to english
 */
beforeAll( async() => {
    await loadTranslations('en');
    await setLocale('en');
})

describe('Feature component', () => {
    beforeEach(() => {
        cleanup();
    });

    it('renders correct link and proper localization', async () => {

        let testFeature = new FeatureClass("dummy","/");

        render(Feature, {feature: testFeature});
        const link = screen.getByText("Dummy link");

        expect(link).toBeTruthy();
    });
});

describe('Benefit component', () => {
    beforeEach(() => cleanup());

    it('renders correct link', async () => {
        let testBenefit = new BenefitClass("dummy", "/some/image", "/");

        render(Benefit, {benefit: testBenefit});
        const link = screen.getByText("Explore services");

        expect(link).toBeTruthy();
    });
});

describe('Main Solutions Service component', () => {
    beforeEach(() => cleanup());

    it('renders correctly', async () => {
        let testSolution =
            new MainSolution("image", "alt", "Industrial", "lorem", ["bullet1", "bullet2"], "/");

        render(MainSolutions, {mainSolution: testSolution});
        const title = screen.getByText("Industrial Solutions");
        const link = screen.getByText("See all Industrial solutions >");

        expect(title).toBeTruthy();
        expect(link).toBeTruthy();
    });

    it('renders all bullets', async () => {
        let testSolution =
            new MainSolution("image", "alt", "Industrial", "lorem", ["bullet1", "bullet2"], "/");

        const {getAllByText} = render(MainSolutions, {mainSolution: testSolution});
        const bullet1 = getAllByText("bullet1");
        const bullet2 = getAllByText("bullet2");

        expect(bullet1).toBeTruthy();
        expect(bullet1.length).toBe(2);
        expect(bullet2).toBeTruthy();
        expect(bullet2.length).toBe(2);
    });
});