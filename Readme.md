# Node project Setup

 - ## Install Node.js
    1. install node.js or check version    `node -v`
    2. create project folder `npm init`
    3. create index.js file and add some code
    4. add in package.json file
        ```
        "scripts": {
            "start": "index.js"
            }
    5. terminal command - `npm start`

- ## Git and Github
    1. install git and open gitbash type - `git init` ,  `git add .` ,  `git commit -m "Feat: node setup"`
    2. Goto github, create folder, type on gitbash - `git remote add origin https://xxxx.git`, `git branch -M main`, `git push origin main`
    3. create `.gitignore` file and add 
    ```
    node_modules
    dist
    ```
   
- ## Husky
    1. `npm i husky lint-staged -D`  then type => `npx husky init`
    2. `.husky/pre-commit` file is created that executes before git commit command. 
  

- ## TypeScript
    1. npm i typescript -D
    2. npx tsc --init
    3. npm install  @types/node nodemon ts-node -D
    4. modify `package.json`
    ```
    "scripts": {
        "start": "node ./dist/index.js",
        "dev":"nodemon ./src/index.ts",
        "dist": "npx tsc"
  }
- ## Commit lint
    1.   npm i @commitlint/cli @commitlint/config-conventional -D 
    2.  echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
    3.  echo "npx --no -- commitlint --edit `$1" > .husky/commit-msg
    4.
    5.

- ## ESlint- tslint
    1.  ``npm install --save-dev eslint @eslint/js typescript typescript-eslint``
    2.  Create `eslint.config.mjs` at root of project then add 
        ```
      //@ts-check

        import eslint from "@eslint/js";
        import tseslint from "typescript-eslint";

        export default tseslint.config({
        ignores: ["**/build/**", "**/dist/**"],
            languageOptions: {
                parserOptions: {
                 project: "./tsconfig.json",
                tsconfigRootDir: import.meta.dirname,
        },
        },
        files: ["**/*.ts"],
        rules: {
        "no-console": "error",
        quotes: ["error", "single", {allowTemplateLiterals: true}],
        },
        extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
        });

        ```
    3.  
    4.
    5.