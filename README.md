<!-- This README is maintained by Docturnal. Your additions and deletions are kept. -->

<a href="https://excalidraw.com/" target="_blank" rel="noopener">
  <picture>
    <source media="(prefers-color-scheme: dark)" alt="Excalidraw" srcset="https://excalidraw.nyc3.cdn.digitaloceanspaces.com/github/excalidraw_github_cover_2_dark.png" />
    <img alt="Excalidraw" src="https://excalidraw.nyc3.cdn.digitaloceanspaces.com/github/excalidraw_github_cover_2.png" />
  </picture>
</a>

<h4 align="center">
  <a href="https://excalidraw.com">Excalidraw Editor</a> |
  <a href="https://plus.excalidraw.com/blog">Blog</a> |
  <a href="https://docs.excalidraw.com">Documentation</a> |
  <a href="https://plus.excalidraw.com">Excalidraw+</a>
</h4>

<div align="center">
  <h2>
    An open source virtual hand-drawn style whiteboard. </br>
    Collaborative and end-to-end encrypted. </br>
  <br />
  </h2>
</div>

<br />
<p align="center">
  <a href="https://github.com/excalidraw/excalidraw/blob/master/LICENSE">
    <img alt="Excalidraw is released under the MIT license." src="https://img.shields.io/badge/license-MIT-blue.svg"  /></a>
  <a href="https://www.npmjs.com/package/@excalidraw/excalidraw">
    <img alt="npm downloads/month" src="https://img.shields.io/npm/dm/@excalidraw/excalidraw"  /></a>
  <a href="https://docs.excalidraw.com/docs/introduction/contributing">
    <img alt="PRs welcome!" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat"  /></a>
  <a href="https://discord.gg/UexuTaE">
    <img alt="Chat on Discord" src="https://img.shields.io/discord/723672430744174682?color=738ad6&label=Chat%20on%20Discord&logo=discord&logoColor=ffffff&widget=false"/></a>
  <a href="https://deepwiki.com/excalidraw/excalidraw">
    <img alt="Ask DeepWiki" src="https://deepwiki.com/badge.svg" /></a>
  <a href="https://twitter.com/excalidraw">
    <img alt="Follow Excalidraw on Twitter" src="https://img.shields.io/twitter/follow/excalidraw.svg?label=follow+@excalidraw&style=social&logo=twitter"/></a>
</p>

<div align="center">
  <figure>
    <a href="https://excalidraw.com" target="_blank" rel="noopener">
      <img src="https://excalidraw.nyc3.cdn.digitaloceanspaces.com/github%2Fproduct_showcase.png" alt="Product showcase" />
    </a>
    <figcaption>
      <p align="center">
        Create beautiful hand-drawn like diagrams, wireframes, or whatever you like.
      </p>
    </figcaption>
  </figure>
</div>

## Features

The Excalidraw editor (npm package) supports:

- 💯&nbsp;Free & open-source.
- 🎨&nbsp;Infinite, canvas-based whiteboard.
- ✍️&nbsp;Hand-drawn like style.
- 🌓&nbsp;Dark mode.
- 🏗️&nbsp;Customizable.
- 📷&nbsp;Image support.
- 😀&nbsp;Shape libraries support.
- 🌐&nbsp;Localization (i18n) support.
- 🖼️&nbsp;Export to PNG, SVG & clipboard.
- 💾&nbsp;Open format - export drawings as an `.excalidraw` json file.
- ⚒️&nbsp;Wide range of tools - rectangle, circle, diamond, arrow, line, free-draw, eraser...
- ➡️&nbsp;Arrow-binding & labeled arrows.
- 🔙&nbsp;Undo / Redo.
- 🔍&nbsp;Zoom and panning support.

## Architecture

The layers in excalidraw-monorepo work together to provide a comprehensive development environment. Here's a brief overview of each layer:

<!-- docturnal:layers -->
| Part | Description | Details |
| --- | --- | --- |
| [Top Level](docs/top-level.md) | Manages linting and tests for the project. |  |
| [Docs](docs/docs.md) | This folder contains configuration files for the project's documentation, including presets for Babel, configuration for Docusaurus, and sidebar settings. |  |
| [With Nextjs](docs/with-nextjs.md) | Configures Next.js for the project. |  |
| [With Script in Browser](docs/with-script-in-browser.md) | This folder contains example files for a web application using React and Excalidraw, including components and utilities. |  |
| [Excalidraw App](docs/excalidraw-app.md) | This folder contains the main application files for the Excalidraw project, including the main entry point, custom stats, iframe export, Jotai store, constants, bug issue template, collaboration debug, and Sentry configuration. | [Components](docs/excalidraw-app/components.md), [Data](docs/excalidraw-app/data.md), [Tests](docs/excalidraw-app/tests.md) |
| [Packages](docs/packages.md) | This folder contains various utility and helper functions used throughout the Excalidraw application, including analytics tracking, drawing trails, clipboard operations, and more. | [Excalidraw Common](docs/packages/excalidraw-common.md), [Excalidraw Common Tests](docs/packages/excalidraw-common-tests.md), [Excalidraw Element](docs/packages/excalidraw-element.md), [Excalidraw Element Tests](docs/packages/excalidraw-element-tests.md), [Excalidraw](docs/packages/excalidraw.md), [Excalidraw Tests](docs/packages/excalidraw-tests.md), [Excalidraw Fractional Indexing](docs/packages/excalidraw-fractional-indexing.md), [Excalidraw Laser Pointer](docs/packages/excalidraw-laser-pointer.md), [Excalidraw Math](docs/packages/excalidraw-math.md), [Excalidraw Math Tests](docs/packages/excalidraw-math-tests.md), [Excalidraw Utilities](docs/packages/excalidraw-utilities.md), [Excalidraw Utilities Tests](docs/packages/excalidraw-utilities-tests.md) |
| [Public](docs/public.md) | Manages the service worker for the public directory. |  |
| [Scripts](docs/scripts.md) | This folder contains scripts used for building, packaging, and releasing the software project. |  |
<!-- /docturnal:layers -->

## Excalidraw.com

The app hosted at [excalidraw.com](https://excalidraw.com) is a minimal showcase of what you can build with Excalidraw. Its [source code](https://github.com/excalidraw/excalidraw/tree/master/excalidraw-app) is part of this repository as well, and the app features:

- 📡&nbsp;PWA support (works offline).
- 🤼&nbsp;Real-time collaboration.
- 🔒&nbsp;End-to-end encryption.
- 💾&nbsp;Local-first support (autosaves to the browser).
- 🔗&nbsp;Shareable links (export to a readonly link you can share with others).

We'll be adding these features as drop-in plugins for the npm package in the future.

## Quick start

**Note:** following instructions are for installing the Excalidraw [npm package](https://www.npmjs.com/package/@excalidraw/excalidraw) when integrating Excalidraw into your own app. To run the repository locally for development, please refer to our [Development Guide](https://docs.excalidraw.com/docs/introduction/development).

Use `npm` or `yarn` to install the package.

```bash
npm install react react-dom @excalidraw/excalidraw
# or
yarn add react react-dom @excalidraw/excalidraw
```

Check out our [documentation](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/installation) for more details!

### Available scripts

<!-- docturnal:scripts -->
| Command | Runs |
| --- | --- |
| `yarn build-node` | `node ./scripts/build-node.js` |
| `yarn build:app:docker` | `yarn --cwd ./excalidraw-app build:app:docker` |
| `yarn build:app` | `yarn --cwd ./excalidraw-app build:app` |
| `yarn build:common` | `yarn --cwd ./packages/common build:esm` |
| `yarn build:element` | `yarn --cwd ./packages/element build:esm` |
| `yarn build:excalidraw` | `yarn --cwd ./packages/excalidraw build:esm` |
| `yarn build:math` | `yarn --cwd ./packages/math build:esm` |
| `yarn build:fractional-indexing` | `yarn --cwd ./packages/fractional-indexing build:esm` |
| `yarn build:laser-pointer` | `yarn --cwd ./packages/laser-pointer build:esm` |
| `yarn build:packages` | `yarn build:common && yarn build:fractional-indexing && yarn build:laser-pointer && yarn build:math && yarn build:element && yarn build:excalidraw` |
| `yarn build:version` | `yarn --cwd ./excalidraw-app build:version` |
| `yarn build` | `yarn --cwd ./excalidraw-app build` |
| `yarn build:preview` | `yarn --cwd ./excalidraw-app build:preview` |
| `yarn start` | `yarn --cwd ./excalidraw-app start` |
| `yarn start:production` | `yarn --cwd ./excalidraw-app start:production` |
| `yarn start:example` | `yarn build:packages && yarn --cwd ./examples/with-script-in-browser start` |
| `yarn test:all` | `yarn test:typecheck && yarn test:code && yarn test:other && yarn test:app --watch=false` |
| `yarn test:app` | `vitest` |
| `yarn test:code` | `eslint --max-warnings=0 --ext .js,.ts,.tsx .` |
| `yarn test:other` | `yarn prettier --list-different` |
| `yarn test:typecheck` | `tsc` |
| `yarn test:update` | `yarn test:app --update --watch=false` |
| `yarn test` | `yarn test:app` |
| `yarn test:coverage` | `vitest --coverage` |
| `yarn test:coverage:watch` | `vitest --coverage --watch` |
| `yarn test:ui` | `yarn test --ui --coverage.enabled=true` |
| `yarn fix:code` | `yarn test:code --fix` |
| `yarn fix:other` | `yarn prettier --write` |
| `yarn fix` | `yarn fix:other && yarn fix:code` |
| `yarn locales-coverage` | `node scripts/build-locales-coverage.js` |
| `yarn locales-coverage:description` | `node scripts/locales-coverage-description.js` |
| `yarn prepare` | `husky install` |
| `yarn prettier` | `prettier "**/*.{css,scss,json,md,html,yml}" --ignore-path=.eslintignore` |
| `yarn release` | `node scripts/release.js` |
| `yarn release:test` | `node scripts/release.js --tag=test` |
| `yarn release:next` | `node scripts/release.js --tag=next` |
| `yarn release:latest` | `node scripts/release.js --tag=latest` |
| `yarn rm:build` | `rimraf --glob excalidraw-app/build excalidraw-app/dist excalidraw-app/dev-dist packages/*/dist packages/*/build examples/*/build examples/*/dist` |
| `yarn rm:node_modules` | `rimraf --glob node_modules excalidraw-app/node_modules packages/*/node_modules` |
| `yarn clean-install` | `yarn rm:node_modules && yarn install` |
<!-- /docturnal:scripts -->

## Project structure

<!-- docturnal:tree -->
```text
.
├── dev-docs/
│   ├── docs/
│   │   ├── @excalidraw/
│   │   ├── assets/
│   │   ├── codebase/
│   │   └── introduction/
│   ├── src/
│   │   ├── components/
│   │   ├── css/
│   │   ├── pages/
│   │   └── theme/
│   └── static/
│       └── img/
├── examples/
│   ├── with-nextjs/
│   │   ├── public/
│   │   └── src/
│   └── with-script-in-browser/
│       ├── components/
│       └── public/
├── excalidraw-app/
│   ├── app-language/
│   ├── collab/
│   ├── components/
│   ├── data/
│   ├── share/
│   └── tests/
│       └── __snapshots__/
├── firebase-project/
├── packages/
│   ├── common/
│   │   ├── src/
│   │   └── tests/
│   ├── element/
│   │   ├── src/
│   │   └── tests/
│   ├── excalidraw/
│   │   ├── actions/
│   │   ├── charts/
│   │   ├── components/
│   │   ├── context/
│   │   ├── css/
│   │   ├── data/
│   │   ├── eraser/
│   │   ├── fonts/
│   │   ├── hooks/
│   │   ├── lasso/
│   │   ├── locales/
│   │   ├── renderer/
│   │   ├── scene/
│   │   ├── subset/
│   │   ├── tests/
│   │   └── wysiwyg/
│   ├── fractional-indexing/
│   │   └── src/
│   ├── laser-pointer/
│   │   └── src/
│   ├── math/
│   │   ├── src/
│   │   └── tests/
│   └── utils/
│       ├── src/
│       └── tests/
├── public/
│   └── screenshots/
├── scripts/
│   ├── wasm/
│   └── woff2/
│       └── assets/
├── .dockerignore
├── .editorconfig
├── .env.development
├── .env.production
├── .env.test
├── .eslintignore
├── .eslintrc.json
├── .gitattributes
├── .gitignore
└── ...
```
<!-- /docturnal:tree -->

## Contributing

- Missing something or found a bug? [Report here](https://github.com/excalidraw/excalidraw/issues).
- Want to contribute? Check out our [contribution guide](https://docs.excalidraw.com/docs/introduction/contributing) or let us know on [Discord](https://discord.gg/UexuTaE).
- Want to help with translations? See the [translation guide](https://docs.excalidraw.com/docs/introduction/contributing#translating).

## Integrations

- [VScode extension](https://marketplace.visualstudio.com/items?itemName=pomdtr.excalidraw-editor)
- [npm package](https://www.npmjs.com/package/@excalidraw/excalidraw)

## Who's integrating Excalidraw

[Google Cloud](https://googlecloudcheatsheet.withgoogle.com/architecture) • [Meta](https://meta.com/) • [CodeSandbox](https://codesandbox.io/) • [Obsidian Excalidraw](https://github.com/zsviczian/obsidian-excalidraw-plugin) • [Replit](https://replit.com/) • [Slite](https://slite.com/) • [Notion](https://notion.so/) • [HackerRank](https://www.hackerrank.com/) • and many others

## Sponsors & support

If you like the project, you can become a sponsor at [Open Collective](https://opencollective.com/excalidraw) or use [Excalidraw+](https://plus.excalidraw.com/).

## Thank you for supporting Excalidraw

[<img src="https://opencollective.com/excalidraw/tiers/sponsors/0/avatar.svg?avatarHeight=120"/>](https://opencollective.com/excalidraw/tiers/sponsors/0/website) [<img src="https://opencollective.com/excalidraw/tiers/sponsors/1/avatar.svg?avatarHeight=120"/>](https://opencollective.com/excalidraw/tiers/sponsors/1/website) [<img src="https://opencollective.com/excalidraw/tiers/sponsors/2/avatar.svg?avatarHeight=120"/>](https://opencollective.com/excalidraw/tiers/sponsors/2/website) [<img src="https://opencollective.com/excalidraw/tiers/sponsors/3/avatar.svg?avatarHeight=120"/>](https://opencollective.com/excalidraw/tiers/sponsors/3/website) [<img src="https://opencollective.com/excalidraw/tiers/sponsors/4/avatar.svg?avatarHeight=120"/>](https://opencollective.com/excalidraw/tiers/sponsors/4/website) [<img src="https://opencollective.com/excalidraw/tiers/sponsors/5/avatar.svg?avatarHeight=120"/>](https://opencollective.com/excalidraw/tiers/sponsors/5/website) [<img src="https://opencollective.com/excalidraw/tiers/sponsors/6/avatar.svg?avatarHeight=120"/>](https://opencollective.com/excalidraw/tiers/sponsors/6/website) [<img src="https://opencollective.com/excalidraw/tiers/sponsors/7/avatar.svg?avatarHeight=120"/>](https://opencollective.com/excalidraw/tiers/sponsors/7/website) [<img src="https://opencollective.com/excalidraw/tiers/sponsors/8/avatar.svg?avatarHeight=120"/>](https://opencollective.com/excalidraw/tiers/sponsors/8/website) [<img src="https://opencollective.com/excalidraw/tiers/sponsors/9/avatar.svg?avatarHeight=120"/>](https://opencollective.com/excalidraw/tiers/sponsors/9/website) [<img src="https://opencollective.com/excalidraw/tiers/sponsors/10/avatar.svg?avatarHeight=120"/>](https://opencollective.com/excalidraw/tiers/sponsors/10/website)

<a href="https://opencollective.com/excalidraw#category-CONTRIBUTE" target="_blank"><img src="https://opencollective.com/excalidraw/tiers/backers.svg?avatarHeight=32"/></a>

Last but not least, we're thankful to these companies for offering their services for free:

[![Vercel](./.github/assets/vercel.svg)](https://vercel.com) [![Sentry](./.github/assets/sentry.svg)](https://sentry.io) [![Crowdin](./.github/assets/crowdin.svg)](https://crowdin.com)
