# cargo-matters dev build

This is the development repo of the Cargo Matters company website.

## Used Frameworks, Languages and Software

This project uses [SvelteKit](https://kit.svelte.dev/). A good grasp of Svelte is recommended.

Additionally it makes use of:
- [TypeScript](https://www.typescriptlang.org/) instead of JavaScript
- [Skeleton](https://www.skeleton.dev/docs/get-started) for global styling and component library
- [TailwindCss](https://tailwindcss.com/) for element styling
- [SASS](https://sass-lang.com/) for detailed styling. SCSS syntax is used.
- [Vitest](https://vitest.dev/) for unit tests. `v8-istanbul` is used for coverage
- [Playwright](https://playwright.dev/) for end-to-end tests

SvelteKit uses Vite and not Webpack. Furthermore, this project runs on NodeJS.

## Installing and developing

To install this project on your own machine for development you must have NodeJS installed.

```shell
git clone #REPO ADDRESS GOES HERE
cd cargomatters-dev
npm install 
```

To host the website locally run:
```shell
npm run dev
```

To run tests:
```shell
npm run test            # run e2e playwright tests
npm run test:unit       # run vitest unit tests
npm run coverage:unit   # run coverage report for unit tests
```

The coverage report is outputted inside the `/tests/coverage` folder after the coverage report is ran. 

## Structure

This project follows the standard SvelteKit [project structure](https://kit.svelte.dev/docs/project-structure). 
Unit tests are situated inside the `$lib` folder they test. Usually a single file tests multiple classes/methods. End-to-end tests are lcoated inside the `/test` folder. 

Additionally, use of indices is present in almost all folders.

### Structure of the `$lib` folder

#### `components` folder

This folder holds the components used in the website. Components that are located in `$lib/components/` like Footer and Header are global components that are used on every single page or inside the `+layout.svelte`. `reusable` holds components that are not meant to be placed inside a page alone. Usually those methods are reused in multiple different parent components. The rest of the folders contain components which are almost all exclusively used on single route/page. 

**Make sure to read the SvelteDoc (in-file documentation) of each component to better understand where it is used**

#### `server` folder

This folder holds the back-end of this application. Code in this folder is almost exclusively functional i.e. there are no class/interface declaration.

#### `typescript` folder

All classes and interfaces are declared in this folder. All classes, methods and functions are well documented with TSDoc.

### Structure of the `static` folder

`/fonts` holds the fonts used in the website. `images` holds the images used in the website.

### Other interesting files
- `app.postcss`: the global styles for the typography inside the website. Refer to the web design documentation.
- `theme.postcss`: the global theme used everywhere in the website. This includes design tokens used by tailwind