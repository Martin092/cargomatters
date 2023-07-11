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