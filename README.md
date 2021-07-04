## What is it?

- Just want to build a simple typescript + Babel + Webpack template for Simple Node.js Toy Project.
- I will be use it someday... when it done. if you are looking for some configuration of this specs, feel free to use it for reference. but it is not a fine one. you must know it.
- The main plan of ths project is making up 4 scripts (start, eslint, build:dev, build:prod)

<br/><br/>

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
yarn start  // entry point is src/index.ts
```

<br/>


## Webpack : TODO

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

## eslint, prettier (airbnb-base style)

```
/* do eslint */
yarn eslint         // with prettier
yarn eslint:fix     // auto format code

/* install */
npx install-peerdeps --dev eslint-config-airbnb-base
```



<br/><br/>

## TODO LIST

* webpack-dev-server config
* clearly separate webpack's dev and prod command
