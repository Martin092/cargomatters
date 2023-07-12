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

//------------------test buttons in the header------------------

// test('Home button goes where it should', async ({ page }) => {
//     await page.setViewportSize({width: 810, height: 1080});
//     await page.goto('/');

//     const home = page.getByTestId("home-button");
//     home.click();
//     console.log(page.url() + " is the title");

//     await expect(page).toHaveURL(/^https?:\/\/[^\/]+\/$/);
// });

test('About us button goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/');

    const aboutUs = page.getByTestId("about-us-button");
    aboutUs.click();

    await expect(page).toHaveURL(/\/about$/);
});

test('Services button goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/');

    const services = page.getByTestId("services-button");
    services.click();

    await expect(page).toHaveURL(/\/services$/);
});

test('Emergency button goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/');

    const emergency = page.getByTestId("emergency-button");
    emergency.click();

    await expect(page).toHaveURL(/\/emergency$/);
});

test('Consult us button goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/');

    const consultUs = page.getByTestId("consult-us-button");
    consultUs.click();

    await expect(page).toHaveURL(/\/contact$/);
});


//------------------test buttons in the hero section------------------

test('Consult us button in hero goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/');

    const consultUs = page.getByTestId("consult-us-hero-button");
    consultUs.click();

    await expect(page).toHaveURL(/\/contact$/);
});

test('Emergency button in hero goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/');

    const consultUs = page.getByTestId("emergency-hero-button");
    consultUs.click();

    await expect(page).toHaveURL(/\/emergency$/);
});

//------------------test buttons in the features section------------------

test('Consult us link in features section goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/');

    const consultUs = page.getByTestId("consult-us-link").first();
    consultUs.click();

    await expect(page).toHaveURL(/\/contact$/);
});

//------------------test buttons in the benefits section------------------

test('Link in Benefits section goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/');

    const button = page.getByTestId("explore-services-button").first();
    button.click();

    await expect(page).toHaveURL(/\/services$/);
});

//------------------test buttons in the benefits section------------------

test('Consult us link in CTA section goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/');

    const button = page.getByTestId("home-cta-bottom");
    button.click();

    await expect(page).toHaveURL(/\/contact$/);
});

//------------------test buttons in the footer section------------------

test('Terms of use link in footer section goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/');

    const button = page.getByTestId("terms-of-use-button");
    button.click();

    await expect(page).toHaveURL(/\/termsofservice$/);
});

test('Privacy policy in footer section goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/');

    const button = page.getByTestId("privacy-policy-button");
    button.click();

    await expect(page).toHaveURL(/\/privacy$/);
});

test('Transport services in footer section goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/');

    const button = page.getByTestId("transport-services-footer");
    button.click();

    await expect(page).toHaveURL(/\/services\/transport$/);
});

test('Logistical services in footer section goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/');

    const button = page.getByTestId("logistical-services-footer");
    button.click();

    await expect(page).toHaveURL(/\/services\/industry$/);
});

test('Contact us in footer section goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/');

    const button = page.getByTestId("contact-us-footer");
    button.click();

    await expect(page).toHaveURL(/\/contact$/);
});

test('About us in footer section goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/');

    const button = page.getByTestId("about-us-footer");
    button.click();

    await expect(page).toHaveURL(/\/about$/);
});
