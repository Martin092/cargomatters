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

test('Consult us now for free in footer section goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/');

    const button = page.getByTestId("consult-us-for-free");
    button.click();

    await expect(page).toHaveURL(/\/contact$/);
});


//----------------------------------------------------------------------
//------------------test about us page----------------------------------

test('Explore services in about us page goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/about');

    const button = page.getByTestId("explore-services-button").first();
    button.click();

    await expect(page).toHaveURL(/\/services$/);
});

//----------------------------------------------------------------------
//------------------test services us page-------------------------------

test('See all transport solutions in services goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/services');

    const elements = await page.$$('[data-testid="see-all-solutions"]');
    elements[0].click();

    await expect(page).toHaveURL(/\/services\/transport$/);
});

test('See all logistics solutions in services goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/services');

    const elements = await page.$$('[data-testid="see-all-solutions"]');
    elements[1].click();

    await expect(page).toHaveURL(/\/services\/industry$/);
});

test('Explore work proccess component in services page goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/services');

    const button = page.getByTestId("services-main-bottom");
    button.click();

    await expect(page).toHaveURL(/\/contact$/);
});

test('CTA in services page goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/services');

    const button = page.getByTestId("home-cta-bottom");
    button.click();

    await expect(page).toHaveURL(/\/contact$/);
});


//----------------------------------------------------------------------
//------------------test emergency page---------------------------------

test('Browse emergency solutions in emergency page goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/emergency');

    const button = page.getByTestId("emergency-solutions");
    button.click();

    await expect(page).toHaveURL(/\/services\/transport\/emergency$/);
});

//----------------------------------------------------------------------
//------------------test contact us page---------------------------------

test('Emergency button in contact us page goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/contact');

    const button = page.getByTestId("emergent-care-button");
    button.click();

    await expect(page).toHaveURL(/\/emergency$/);
});

//----------------------------------------------------------------------
//------------------test transport page---------------------------------

test('Emergency button in transport page goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/services/transport');

    const button = page.getByTestId("emergent-care");
    button.click();

    await expect(page).toHaveURL(/\/emergency$/);
});

test('More info button in transport page goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/services/transport');

    const button = page.getByTestId("more-info-button1");
    button.click();

    await expect(page).toHaveURL(/\/services\/transport\/emergency$/);
});

test('All transport buttons in transport page goes to the correct page', async ({ page }) => {
    await page.setViewportSize({width: 810, height: 1080});
    await page.goto('/services/transport');

    const elementss = await page.$$('[data-testid="transport-contact-button"]');

    for(let i = 0; i < elementss.length; i++){
        const elements = await page.$$('[data-testid="transport-contact-button"]');
        await elements[i].waitForElementState('visible');
        await elements[i].click();
        await expect(page).toHaveURL(/\/contact$/);
        await page.goBack();
    }
});

//----------------------------------------------------------------------
//------------------test industries page--------------------------------

// ste mu eba maikata twa prosto ne moga da go naprawq da raboti
//dolnite dwa testa bi trqbwalo da prawqt edno i susto nesto ama ne bachkat

// test('Industries in industries page go to the correct page', async ({ page }) => {
//     await page.setViewportSize({width: 810, height: 1080});
//     await page.goto('/services/industry');

//     const all = await page.$$('[data-testid="industry-solution"]');
    
    
//     for(let i = 0; i < all.length; i++){
//         const elements = await page.$$('[data-testid="industry-solution"]');
//         await elements[i].waitForElementState('visible');

//         const titles = await page.$$('[data-testid="industry-title"]');
//         await elements[i].click();

//         let title = await titles[i].innerText();
//         let a = title.split(" ")[0].toLowerCase();
//         console.log(a);

//         var regex = new RegExp("\/services\/industry\/" + a + "$");
//         await expect(page).toHaveURL(regex);
        
//         await page.goBack();
//     }

//  });

// test('Industries in industries page go to the correct page', async ({ page }) => {
//     await page.setViewportSize({width: 810, height: 1080});
//     await page.goto('/services/industry');

//     const all = await page.$$('[data-testid="industry-solution"]');
    
    
//     for(let i = 0; i < all.length; i++){
//         let elements = page.locator("industry-solution");
        
//         let current = elements.nth(i);

        
//         const titles = await page.$$('[data-testid="industry-title"]');
//         await current.click();

//         let title = await titles[i].innerText();
//         let a = title.split(" ")[0].toLowerCase();
//         console.log(a);

//         var regex = new RegExp("\/services\/industry\/" + a + "$");
//         await expect(page).toHaveURL(regex);
        
//         await page.goBack();
//     }
//  });


