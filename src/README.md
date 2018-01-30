# Ascii Store Architecture

- Angular 1
- Webpack
- ES6 (with Babel support)
- Bootstrap 4
- SASS

## Angular 1
I feel comfortable with A1 and I tried to avoid angular things, just using it to manage the view scaffold but all logic for action on events are coded in pure javascript.

## Webpack
Allows to modularize the code almost automatically and gives a nice way to abstract styles, js and html in the same component without requiring or having a lot of different files with the same.

## ES6
Is nice to write JS with the new syntax. And to avoid failing build all the bundles are generated using Babel to transpile to ES5.

## Bootstrap 4
Because it's a nice grid system which have already almost everything done. For this I'm using a Bootstrap-Webpack boilerplate just to test how it works. Also, a good base to have a Mobile Ready app.

## SASS
Since B4 requires SASS is just simpler to add a new loader to Webpack and use SASS for all the styles instead pure CSS. Also, the advantage to use variables and mixins.
