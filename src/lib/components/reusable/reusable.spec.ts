import {describe, it, expect, beforeEach} from 'vitest';
import {cleanup, render, screen} from '@testing-library/svelte';
import '@testing-library/jest-dom'

import {Feature, Benefit, MainSolutions, EmergencyService} from "./index";
import {FeatureClass} from "../../typescript/feature";
import {BenefitClass} from "../../typescript/benefit";
import {MainSolution} from "../../typescript/mainSolution";
import {EmergencyServiceClass} from "../../typescript/emergencyService";
import {Stat} from "../../typescript/Stats";

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
            new MainSolution("image", "alt", "Industrial", "lorem", ["bullet1", "bullet2"], "/");

        render(MainSolutions, {mainSolution: testSolution});
        const link = screen.getByText("See all Industrial solutions");

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
            new MainSolution("image", "alt", "Industrial", "lorem", ["bullet1", "bullet2"], "/");

        render(MainSolutions, {mainSolution: testSolution});
        const bullet1 = screen.getByText("bullet1");
        const bullet2 = screen.getByText("bullet2");

        expect(bullet1).toBeTruthy();
        expect(bullet2).toBeTruthy();
    });
});

test('testing', () => {
    let stat1 = new Stat(12, "flights");
    let stat2 = new Stat(13, "trucks");

    let stats:Stat[] = [stat1, stat2];

    let testEmergency =
        new EmergencyServiceClass("/", "alt", "/", "fast", "title", "none", stats);

    render(EmergencyService, {emergency: testEmergency});

    const title = screen.getByText("title");
    const subT = screen.getByText("fast");

    expect(title).toBeTruthy();
    expect(subT).toBeTruthy();

    cleanup();
})

test('testing2', () => {
    let stat1 = new Stat(12, "flights");
    let stat2 = new Stat(13, "trucks");

    let stats:Stat[] = [stat1, stat2];

    let testEmergency =
        new EmergencyServiceClass("/", "alt", "/", "fast", "title", "none", stats);

    render(EmergencyService, {emergency: testEmergency});

    expect(screen.getByText("12")).toBeTruthy();
    expect(screen.getByText("flights")).toBeTruthy();
    expect(screen.getByText("13")).toBeTruthy();
    expect(screen.getByText("trucks")).toBeTruthy();

    cleanup();
})

describe('Emergency Solution component', () => {
    // it('renders odd stats correctly', async () => {
    //     let stat1 = new Stat(12, "flights");
    //     let stat2 = new Stat(13, "trucks");
    //     let stat3 = new Stat(10, "planes");
    //
    //     let stats:Stat[] = [stat1, stat2, stat3];
    //
    //     let testEmergency =
    //         new EmergencyServiceClass("/", "alt", "/", "fast", "title", "none", stats);
    //
    //     render(EmergencyService, {emergency: testEmergency});
    //
    //     expect(screen.getByText("12")).toBeTruthy();
    //     expect(screen.getByText("flights")).toBeTruthy();
    //     expect(screen.getByText("13")).toBeTruthy();
    //     expect(screen.getByText("trucks")).toBeTruthy();
    //     expect(screen.getByText("10")).toBeTruthy();
    //     expect(screen.getByText("planes")).toBeTruthy();
    // });
    //
    // it('renders when there are no stats', async () => {
    //     let testEmergency =
    //         new EmergencyServiceClass("/", "alt", "/", "fast", "title", "none", []);
    //
    //     render(EmergencyService, {emergency: testEmergency});
    //
    //     const title = screen.getByText("title");
    //     const subT = screen.getByText("fast");
    //
    //     expect(title).toBeTruthy();
    //     expect(subT).toBeTruthy();
    // });
});