
## This Bareborn Project Spec

- yarn (package manager)

- tsc (type checker)

- babel (ES6 transpiler)

- webpack (bundler)

- eslint (code grammer checker)

- prettier (code formatter)

<br/><br/>

## Babel
```
yarn start
```

<br/>


## Webpack 

```
yarn bundle:dev -> dev 
yarn bundle:prod -> prod
```

in this project, not include html-loader, style-loader, css-loader etc except babel-loader <br/>
it's for Node.js project
<br/>

## tsc

```
yarn type-check
```

this commnad do check types of *.ts files, not do transpile.<br/>
<br/>

## eslint, prettier

```
/* do eslint */
yarn eslint         // include prettier
yarn eslint:fix     // auto format code

/* install */
npx install-peerdeps --dev eslint-config-airbnb-base
```