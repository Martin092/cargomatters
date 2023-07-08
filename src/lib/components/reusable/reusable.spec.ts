import { describe, it, expect, afterEach } from 'vitest';
import {cleanup, render, screen} from '@testing-library/svelte';

import Feature from "./Feature.svelte";
import {FeatureClass} from "../../typescript/feature";


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