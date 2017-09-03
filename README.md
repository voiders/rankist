# rankist
the best place to found and create ranking lists

> the best place to found and create ranking lists

## Commands

```bash
# build for production
npm run build

# development mode
npm run dev

# run unit tests
npm run test

# serve the bundled dist folder in production mode
npm run serve
```

## Polyfills

By default we only polyfill `window.Promise` and `Object.assign`. You can add more polyfills in `./src/polyfills.js`.

## Code splitting

As webpack supports both [dynamic import](https://webpack.js.org/guides/code-splitting-async/#dynamic-import-import-) and [`require.ensure`](https://webpack.js.org/guides/code-splitting-async/#require-ensure-) syntax, we would recommend you to stick to `require.ensure` for now because of [performance issue](https://github.com/webpack/webpack/issues/4636).

## Analyze bundle size

Run `npm run report` to get a report of bundle size which helps you:

- Realize what's really inside your bundle
- Find out what modules make up the most of it's size
- Find modules that got there by mistake
- Optimize it!


## Test

You can use [AVA](https://github.com/avajs/ava) to run tests, basically the default setup is based on AVA's offical [Vue.js recipe](https://github.com/avajs/ava/blob/master/docs/recipes/vue.md).

Check out `./test/test.js` for an example test case, and `./test/helpers/setup.js` for how we transform `.vue` and `.js` files.

## Progress Web App

Your app is now offline-ready (only in production bundle), which means you can visit it without network.

Here we use a default [manifest.json](./static/manifest.json) to configurure your pwa, for example, to enable *Add to Home Screen* feature on Android. It will be copied directly to `./dist/manifest.json`.


For all the available options, please head to [poi-preset-offline](https://github.com/egoist/poi/tree/master/packages/poi-preset-offline#api).

---

This project is generated by [create-vue-app](https://github.com/egoist/create-vue-app).
