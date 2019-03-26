Node v11.10.1
NPM v6.7.0

This is a pure web component based Development Env utilizing - Webpack 4, TypeScript, VanillaJS, SCSS

This development Env does not utilize ReactJS or Angular - Data Binding is done with Template Literal Strings

Typescript/Webpack-cli

"typescript": "^3.2.1"
"webpack": "^4.26.1"

npm install

local API using json-server & express server: 
https://github.com/typicode/json-server
https://github.com/typicode/json-server/issues/253

OLD - to run local JSON server CMD: node server/server.js - http://localhost:3000/api
NEW - API data end point connects to a Microsoft Azure cloud based API. No need to run a local Express API server

PRODUCTION BUILD: npm run build - compress code / remove comments / remove console logs / uglifyJS / compile sass to css / PWA implementation
DEV BUILD: npm start - hot reload of viewer / compile sass to css

PWA: Removed for development. If PWA is to be enabled for production set "Hash: false" in HtmlWebpackPlugin() in webpack.common.js

WEBPACK STRUCTURE:
    webpack.common - includes development compling for dev and prod
    webpack.dev - all development modules needed for development env
    webpack.prod - all development modules needed to compile code for production

Dev Structure:
- src folder
    index.html
    index.ts
    styles.scss
    - styles folder
        sassFILES.scss
    - services folder
        requestService
        service
    - components folder
        - component.ts
- server folder
    db.json
    server.js#   w e b p a c k 4 - D e v e l o p m e n t E n v  
 