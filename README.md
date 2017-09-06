# Metamorphose [![Build Status](https://travis-ci.org/padupuy/metamorphose-institut.svg?branch=master)](https://travis-ci.org/padupuy/metamorphose-institut)
Site web de l'institut Métamorphose Lyon 9.

## Setup
L'environnement de développement front est basé sur le boilerplate Blendid (anciennement connu sous le nom de Gulp Starter).

https://github.com/vigetlabs/blendid
#### Node.js
Blendid requiert au minimum la version 6 de node.js

https://github.com/creationix/nvm/blob/master/README.md
 
#### Yarn
Yarn est un package manager, qui a été développé dans le but de corriger certains problèmes rencontrés avec NPM (rapidité, sécurité, ...)

https://yarnpkg.com/en/docs/install
 
## Commandes
Pour installer toutes les dépendances :
```
yarn install
```

Pour compiler / watcher via Browsersync :
```
yarn run blendid
```

Pour compiler les fichiers en production :
```
yarn run blendid -- build
```

## Dépendances
- Blendid
- PostCSS (cssnext, import, nested)
- Bootstrap
