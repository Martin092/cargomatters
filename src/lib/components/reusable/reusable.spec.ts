import { describe, it, expect } from 'vitest';
import {render, screen} from '@testing-library/svelte';

import Feature from "./Feature.svelte";
import {FeatureClass} from "../../typescript/feature";

describe('Feature component', () => {
    it('renders', () => {

        let testFeature = new FeatureClass("-","Feature", "desc", "/", "Home");

        render(Feature, {feature: testFeature});

        const heading = screen.getByText("Feature");

        expect(heading).toBeTruthy();

    });

    it('renders correct link', async () => {

        let testFeature = new FeatureClass("-","Feature", "desc", "/", "Home");

        render(Feature, {feature: testFeature});

        const link = screen.getByText("Home");

        expect(link).toBeTruthy();
    });
});