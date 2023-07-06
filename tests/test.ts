import {expect, test} from '@playwright/test';

test('one can toggle navigation on mobile', async ({ page }) => {
	await page.setViewportSize({width: 412, height: 883});
	await page.goto('/');

	const toggle = page.getByTestId("toggle-nav");
	const dropdown = page.getByTestId("nav-dropdown");

	await toggle.click();
	await expect(dropdown).toBeVisible()
});

test('correct navigation appears in wider screens', async ({ page }) => {
	await page.setViewportSize({width: 810, height: 1080});
	await page.goto('/');

	const wideNav = page.getByTestId("wide-screen-nav");

	await expect(wideNav).toBeVisible()
});

test('correct navigation appears on mobile screens', async ({ page }) => {
	await page.setViewportSize({width: 410, height: 688});
	await page.goto('/');

	const mobileNav = page.getByTestId("mobile-nav");

	await expect(mobileNav).toBeVisible()
});
