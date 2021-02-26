# SPD Coding Standards

## [Lerna](https://github.com/lerna/lerna#about)

Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.

### Commands

#### `yarn lerna-bootstrap`

Bootstrap the packages in the current Lerna repo. Installs all of their dependencies and links any cross-dependencies.

#### `yarn lerna-publish`

Publish packages that have changed since the last release

## Packages

- [eslint-config-spd](packages/eslint-config-spd/README.md) - javascript eslint rules
- [eslint-config-spd-ts](packages/eslint-config-spd-ts/README.md) - typescript eslint rules
- [prettier-config-spd](packages/prettier-config-spd/README.md)
- [stylelint-config-spd](packages/stylelint-config-spd/README.md)
- [eslint-config-spd-gts](packages/eslint-config-spd-gts/README.md) - [gts](https://github.com/google/gts) eslint rules with typescript overrides removed
