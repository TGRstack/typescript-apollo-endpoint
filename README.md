<p align='center'>
  <h1 align='center'>TS-service | skeleton | TGRstack</h1>
</p>

[![TypeScript](https://img.shields.io/badge/TypeScript-3.0.1-blue.svg?style=flat-square)](https://github.com/Microsoft/TypeScript)
[![WebPack](https://img.shields.io/badge/WebPack-4.12.2-blue.svg?style=flat-square)](https://github.com/webpack/webpack/)
[![Node](https://img.shields.io/badge/Node-11.4.0-blue.svg?style=flat-square)](https://nodejs.org/en/)

[![TSLint](https://img.shields.io/badge/TS_Lint-5.11.0-8400ff.svg?style=flat-square)](https://github.com/palantir/tslint/)
[![TS-Jest](https://img.shields.io/badge/TS_Jest-22.4.6-8400ff.svg?style=flat-square)](https://github.com/kulshekhar/ts-jest)

[![NPS friendly](https://img.shields.io/badge/NPS-friendly-brightgreen.svg?style=flat-square)](https://github.com/kentcdodds/nps)
[![Commitizen friendly](https://img.shields.io/badge/Commitizen-friendly-brightgreen.svg?style=flat-square)](https://commitizen.github.io/cz-cli/)
[![Semver friendly](https://img.shields.io/badge/SemVer-friendly-brightgreen.svg?style=flat-square)](https://docs.npmjs.com/about-semantic-versioning)

## Packages

```bash
  "devDependencies": {
    "@tgrx/tslint-config-tgr": "5.0.0", # TGR - tslint settings for minimial clutter
```

## Using TS-Service as an upstream for other Skeletons

The main reason for this repo is to use as an upstream for other [service-skeletons](#) like: [TGR-Fullstack](#), [TG-API](#), and [TR-Storybook](#). There are also [module-skeletons](#) the key difference being exportable/consumable.

```text
skeleton-ts-service         - the root service (this)
├── skeleton-tr-api         - graphql api service
├── skeleton-tgr-fullstack  - fullstack service
└── skeleton-tr-storybook   - storybook service designed to consume React & TS modules
```

## Developing a TS-Service

After you've cloned this repo and ran `npm i -D`, do the following:

in your **terminal**:

```bash
$ nps ss                # Start the dev server
```

### Commands

```bash
* nps                   # Executes all the tooling
* nps help              # Displays all available commands
* nps commit            # Creates a commit, don't use `git commit -m ...`
* nps build             # Builds the module
* nps lint              # Lint checks the module
* nps test              # Test checks the module
```


## Stack

<!-- - [TS-Module](https://github.com/Falieson/2018-typescript-module) -->

### Docs

- [HowTo make a TS Module w/ Declarations](http://www.tgrstack.com/#ts-module_articles)
- [TS-React-App](https://github.com/TGRstack/react-app)
- [TS-GraphqL-Endpoint](https://github.com/Falieson/2018-typescript-graphql-endpoint)


### File Structure

```text
src/
├── middlewares/  - third-party HOC functionality (apollo, loggers, routers)
└── modules/      - first-party modules (co-developed)
    └── some-lib  - pre-cursor to extracting a module
├── service/      - service initialization (express, apollo, storybook)
├── types/        - ts modules, common, interfaces
├── utils/        - useful functions
└── stack.ts      - import service & middlewares
```

### Features

#### Core

- [x] 🚀  ES2018+ support syntax that is stage-3 or later in the TC39 process.
- [x] 🎛  Preconfigured to support development and optimized production builds
- [x] 🎶  `typescript` incremental returns reducing development bugs

#### Utils

- [x] 🎮  `nps` node-package-scripts removes the limitation of package.json enabling JS & //comments .  Modify `/package-scripts.js` and use `nps <command>` instead of `npm run <command>`.
- [x] 🙌  `commitizen` to help us generate beautifully formatted and consistent commit messages.
- [x] 😹  `cz-emoji` is a plugin for commitizen that adds emoji to the commit template.
- [x] 🏆  `standard-version` is a replacement for `npm version` with automatic CHANGELOG generation
- [ ] ✅  `commitlint` validates commit messages to follow commitizen patterns

#### Style

- [x] 🚦  `tslint` configured for strict, consistent, code style
- [ ] 🚦 2019 `eslint` replacing TSLint
- [ ] 🚦  `ts-prettier` for some of that code-consistancy that's missing from tslint
- [ ] 🚦  `SonarTS` Static code analyzer detects bugs and suspicious patterns

#### Tests

- [x] 🎭 `jest` as the test framework.
- [x] 🎭 `ts-jest` configured to test TS files, uses tsconfig.jest.json, and skip babel.
- [x] 🎭 `enzyme`  makes it easier to assert, manipulate, and traverse components.

#### Build (w/ Webpack)

- [x] 📦  All source is bundled using Webpack v4
- [x] 🌟  webpack for dev, prod, common
- [x] 🚦  `ts-loader` for compiling typescript
- [x] 💦  babel-loader for additional polyfills (browser support)
- [ ] 😎  HappyPack
- [ ] 🤖  Auto generated Vendor DLL for smooth development experiences
- [ ] 🍃  Tree-shaking
