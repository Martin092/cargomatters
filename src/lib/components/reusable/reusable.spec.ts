import { describe, it, expect, afterEach } from 'vitest';
import {cleanup, render, screen} from '@testing-library/svelte';

import {Feature, Benefit, MainSolutions} from "./index";
import {FeatureClass} from "../../typescript/feature";
import {BenefitClass} from "../../typescript/benefit";
import {MainSolution} from "../../typescript/mainSolution";


afterEach(() => {
    cleanup()
})

describe('Feature component', () => {
    it('renders correct link', async () => {
        let testFeature = new FeatureClass("-","Feature", "desc", "/", "Home");

        render(Feature, {feature: testFeature});
        const link = screen.getByText("Home");

        expect(link).toBeTruthy();
    });
});

describe('Benefit component', () => {
    it('renders correct link', async () => {
        let testBenefit = new BenefitClass("sub title", "title", "desc", "/", "alt", "Browse", "/");

        render(Benefit, {benefit: testBenefit});
        const link = screen.getByText("Browse");

        expect(link).toBeTruthy();
    });
});

describe('Main Solutions Service component', () => {
    it('renders correct link', async () => {
        let testSolution =
            new MainSolution("image", "alt", "Industrial", "lorem", ["bullet1", "bullet2"]);

        render(MainSolutions, {mainSolution: testSolution});
        const link = screen.getByText("See all Industrial solutions");

        expect(link).toBeTruthy();
    });

    it('renders correct heading', async () => {
        let testSolution =
            new MainSolution("image", "alt", "Industrial", "lorem", ["bullet1", "bullet2"]);

        render(MainSolutions, {mainSolution: testSolution});
        const link = screen.getByText("Industrial Solutions");

        expect(link).toBeTruthy();
    });

    it('renders all bullets', async () => {
        let testSolution =
            new MainSolution("image", "alt", "Industrial", "lorem", ["bullet1", "bullet2"]);

        render(MainSolutions, {mainSolution: testSolution});
        const bullet1 = screen.getByText("bullet1");
        const bullet2 = screen.getByText("bullet2");

        expect(bullet1).toBeTruthy();
        expect(bullet2).toBeTruthy();
    });
});