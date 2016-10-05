# generator-tap
[![NPM version][npm-image]][npm-url] [![Dependency Status][david-dm-image]][david-dm-url] [![Dev Dependency Status][david-dm-dev-image]][david-dm-dev-url] [![NSP Status][nsp-image]][nsp-url]

[yeoman generator][yeoman-getting-started-url] that sets up [tap][tap-url], and optionally, [sinon][sinon-url], in the target project

adds the following npm scripts to the `package.json` file:

```json
"scripts": {
  "cover:browser": "npm test -- --coverage-report=lcov",
  "cover:cli": "npm test -- --cov",
  "cover:travis": "npm test -- --coverage-report=lcov --no-browser",
  "test": "tap test/**/*.test.js --reporter spec"
}
```

<small><i>note: the generator will not overwrite a test script if it already exists in a package.json file, unless it’s the default `echo \"Error: no test specified\" && exit 1` script</i></small>

## installation
```bash
npm install -g generator-tap
```

## use
```bash
yo tap
```

## license
[MIT License][mit-license]

[david-dm-image]: https://david-dm.org/dan-nl/generator-tap.svg
[david-dm-url]: https://david-dm.org/dan-nl/generator-tap
[david-dm-dev-image]: https://david-dm.org/dan-nl/generator-tap/dev-status.svg
[david-dm-dev-url]: https://david-dm.org/dan-nl/generator-tap?type=dev
[mit-license]: https://raw.githubusercontent.com/dan-nl/generator-tap/master/license.txt
[npm-image]: https://img.shields.io/npm/v/generator-tap.svg
[npm-url]: https://www.npmjs.com/package/generator-tap
[nsp-image]: https://nodesecurity.io/orgs/githubdan-nl/projects/e4bc37fa-27bc-4339-b43d-390e48c0a427/badge
[nsp-url]: https://nodesecurity.io/orgs/githubdan-nl/projects/e4bc37fa-27bc-4339-b43d-390e48c0a427
[sinon-url]: http://sinonjs.org/
[tap-url]: http://www.node-tap.org/
[yeoman-getting-started-url]: http://yeoman.io/authoring/index.html
