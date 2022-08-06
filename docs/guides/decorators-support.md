---
sidebar_position: 2
---

# Decorators Support

You will need to Add the Following options to the Typescript compiler configurations
```json title="$project_directory/tsconfig.json"
{
  "compilerOptions": {
    ...
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
    ...
  }
}
```

In Some Cases you'll need more setup. It depends on your project setup and the used framework:
- Babel.js: [@babel/plugin-proposal-decorators](https://babeljs.io/docs/en/babel-plugin-proposal-decorators)
- Next.js: [Legacy Decorators](https://nextjs.org/docs/advanced-features/compiler#legacy-decorators)
  - Depending on your compiler configuration you might need to configure Babel.js also in NEXT.JS
- Create-React-App:
  - Make sure you have react-app-rewired and customize-cra installed so you can override webpack and babel configs.
  - Install [@babel/plugin-proposal-decorators](https://babeljs.io/docs/en/babel-plugin-proposal-decorators).
  - and update your config-overrides.js file:
```javascript
const { override, addBabelPlugin } = require("customize-cra");
const pluginProposalDecorators = require("@babel/plugin-proposal-decorators");

module.exports = override(  
    addBabelPlugin(pluginProposalDecorators)
);
```