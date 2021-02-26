# SPD Coding Standards

## npm Registry

`@headforwards-spd/standards` packages are published to the [npm package registry](https://www.npmjs.com/settings/headforwards-spd/packages)

To publish updated packages, first [create an access token](https://docs.npmjs.com/creating-and-viewing-access-tokens),

then in `~/.npmrc` add:

```
//registry.npmjs.org/:\_authToken=<AUTH_TOKEN_HERE>
```

## [Lerna](https://github.com/lerna/lerna#about)

Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.

### Commands

#### `yarn lerna-bootstrap`

Bootstrap the packages in the current Lerna repo. Installs all of their dependencies and links any cross-dependencies.

#### `yarn lerna-publish`

Publish packages that have changed since the last release

## Packages

- [eslint-config-spd](packages/eslint-config-spd/README.md) - javascript eslint rules
- [eslint-config-spd-ts](packages/eslint-config-spd-ts/README.md) - typescript eslint rules
- [eslint-config-spd-angular](packages/eslint-config-spd-angular/README.md) - typescript eslint rules for angular
- [prettier-config-spd](packages/prettier-config-spd/README.md)
- [stylelint-config-spd](packages/stylelint-config-spd/README.md)
- [eslint-config-spd-gts](packages/eslint-config-spd-gts/README.md) - [gts](https://github.com/google/gts) eslint rules with typescript overrides removed
