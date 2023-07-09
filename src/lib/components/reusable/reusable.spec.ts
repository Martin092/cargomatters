import {describe, it, expect, beforeEach} from "vitest";
import {cleanup, render, screen} from '@testing-library/svelte';

import {Feature, Benefit, MainSolutions} from "./index";
import {FeatureClass, BenefitClass, MainSolution} from "../../typescript/index";

describe('Feature component', () => {
    beforeEach(() => cleanup());

    it('renders correct link', async () => {
        let testFeature = new FeatureClass("-","Feature", "desc", "/", "Home");

        render(Feature, {feature: testFeature});
        const link = screen.getByText("Home");

        expect(link).toBeTruthy();
    });
});

describe('Benefit component', () => {
    beforeEach(() => cleanup());

    it('renders correct link', async () => {
        let testBenefit = new BenefitClass("sub title", "title", "desc", "/", "alt", "Browse", "/");

        render(Benefit, {benefit: testBenefit});
        const link = screen.getByText("Browse");

        expect(link).toBeTruthy();
    });
});

describe('Main Solutions Service component', () => {
    beforeEach(() => cleanup());

    it('renders correct link', async () => {
        let testSolution =
            new MainSolution("image", "alt", "Transport", "lorem", ["bullet1", "bullet2"], "/");

        render(MainSolutions, {mainSolution: testSolution});
        const link = screen.getByText("See all Transport solutions >");

        expect(link).toBeTruthy();
    });

    it('renders correct heading', async () => {
        let testSolution =
            new MainSolution("image", "alt", "Industrial", "lorem", ["bullet1", "bullet2"], "/");

        render(MainSolutions, {mainSolution: testSolution});
        const link = screen.getByText("Industrial Solutions");

        expect(link).toBeTruthy();
    });

    it('renders all bullets', async () => {
        let testSolution =
            new MainSolution("image", "alt", "Industrial", "lorem", ["aa", "bb"], "/");

        const {getAllByText} = render(MainSolutions, {mainSolution: testSolution});
        const bullet1 = getAllByText("aa");
        const bullet2 = getAllByText("bb");

        expect(bullet1).toBeTruthy();
        expect(bullet1.length).toBe(2);
        expect(bullet2).toBeTruthy();
        expect(bullet2.length).toBe(2);
    });
});