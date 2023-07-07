import {expect, test} from '@playwright/test';

test('one can toggle navigation on mobile', async ({ page }) => {
	await page.setViewportSize({width: 412, height: 883});
	await page.goto('/');

	const toggle = page.getByTestId("toggle-nav");
	const dropdown = page.getByTestId("nav-dropdown");

	await expect(await dropdown.isVisible()).toBe(false);
	await toggle.click();
	await expect(dropdown).toBeVisible()
	await toggle.click();
	await expect(await dropdown.isVisible()).toBe(false);
});

test('correct navigation appears in wider screens', async ({ page }) => {
	await page.setViewportSize({width: 810, height: 1080});
	await page.goto('/');

	const wideNav = page.getByTestId("wide-screen-nav");

	await expect(wideNav).toBeVisible();
	await expect(await page.getByTestId("mobile-nav").isVisible()).toBe(false);
});

test('correct navigation appears on mobile screens', async ({ page }) => {
	await page.setViewportSize({width: 410, height: 688});
	await page.goto('/');

	const mobileNav = page.getByTestId("mobile-nav");

	await expect(mobileNav).toBeVisible();
	await expect(await page.getByTestId("wide-screen-nav").isVisible()).toBe(false);
});

test('hero image does not appear on mobile', async ({ page }) => {
	await page.setViewportSize({width: 410, height: 688});
	await page.goto('/');

	await expect(await page.getByTestId("xl-hero").isVisible()).toBe(false);
});
