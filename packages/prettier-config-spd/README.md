# prettier-config-spd

To use `prettier-config-spd`, first install the package:

`yarn add @headforwards-spd/prettier-config-spd`

then add a `.prettierrc.js` file which extends SPD config:

```javascript
module.exports = {
  ...require('@headforwards-spd/prettier-config-spd'),
};
```
