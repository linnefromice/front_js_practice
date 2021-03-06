# front_js_practice

- [フロントエンドのコーディング課題６選-このフロントエンドの課題、実装できますか？ - Qiita](https://qiita.com/baby-degu/items/d68e52a0727248ba2750)
- [2020 年のフロントエンドマスターになりたければこの 9 プロジェクトを作れ - Qiita](https://qiita.com/rana_kualu/items/915345b8f3f870cfe2aa)
- [JavaScript 30 — Build 30 things with vanilla JS in 30 days with 30 tutorials](https://javascript30.com/)

## react-api-mirage

Practice using mock server.
Using MirageJS for mock server with react.

- React ... A JavaScript library for building user interfaces
- MirageJS ... An API mocking library for frontend developers

## gatsby-api

Try some apis with Gatsby.

- NyTimes API
- Marvel API

## gatsby-material-ui-marvelapi

Practice design using material-ui & api using marvel api.

## react-fluentui

[dev.to - Getting started with Microsoft Fluent UI and React.js by building a fintech dashboard](https://dev.to/duomly/getting-started-with-microsoft-fluent-ui-and-react-js-by-building-a-fintech-dashboard-6li)

- yarn add @fluentui/react
- yarn add @uifabric/react-cards

# nextjs-blog

- Reference
  - https://nextjs.org/learn/excel/typescript/setup
- Command
  - initilizing
    - `npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/basics-final"`
  - add typescript
    - `touch tsconfig.json`
    - `yarn add --dev typescript @types/react @types/node`

# react-parcel

- Reference
  - http://kasheight.hatenablog.jp/entry/2019/12/01/190858
- Command
  - yarn init -y
  - yarn add react react-dom
  - yarn add --dev parcel-bundler
  - gibo dump Node VisualStudioCode >> .gitignore
  - yarn start

# nextjs_credit_card_form

- Reference
  - https://github.com/muhammederdem/vue-interactive-paycard
  - https://medium.com/@vladymyr.pylypchatin/the-simple-way-to-use-scoped-and-global-scss-with-next-js-67cdb2d0c676
  - 両面カードのサンプル
    - https://codepen.io/Ossoona/pen/GJmvmJ
    - https://qiita.com/yyzzyykk/items/b5a23a28e73e42bcc5a5
- Command
  - npx create-next-app --example with-typescript nextjs_credit_card_form
  - cd nextjs_credit_card_form
  - yarn add @zeit/next-sass node-sass

# react-chat-example

- Reference
  - https://codetree.dev/react-websocket-chat-application/
- Command
  - npx create-react-app react-chat-example --typescript
  - npm i express express-ws

# react-redux-01

- Reference
  - https://qiita.com/ragnar1904/items/72631e4476f94057c630
- Command
  - npx create-react-app react-redux-01 --template typescript
  - cd react-redux-01
  - yarn add redux react-redux
  - yarn add --dev @types/react-redux
  - yarn add --dev husky lint-staged prettier

# react-redux-02

- Purpose
  - Task management
- Command
  - npx create-react-app react-redux-02 --template typescript
  - cd react-redux-02
  - yarn add redux react-redux
  - yarn add --dev node-sass @types/react-redux husky lint-staged prettier

# next-redux-spectrum-01

- Purpose
  - Design Framework ... Spectrum
  - State Management Framework ... Redux
  - Base ... Next
- Command
  - npx create-next-app --example with-typescript next-redux-spectrum-01
  - cd next-redux-spectrum-01
  - yarn add redux react-redux @reduxjs/toolkit redux-logger
  - yarn add --dev @types/react-redux @types/redux-logger
  - yarn add @adobe/react-spectrum
  - yarn add next-compose-plugins @zeit/next-css next-transpile-modules
  - yarn add @spectrum-icons/workflow

# storybook-tutorial

- Reference
  - [Storybook for React tutorial | Storybook Tutorials](https://www.learnstorybook.com/intro-to-storybook/react/en/get-started/)
  - [React で Storybook チュートリアルをやってみました。 - Qiita](https://qiita.com/fufujimoto/items/112fafc332df8bf3a55d)
  - [GraphQL & React tutorial (part 1/6)](https://www.chromatic.com/blog/graphql-react-tutorial-part-1-6/)
- Command
  - npx create-react-app storybook-tutorial
  - npx -p @storybook/cli sb init
  - npx degit chromaui/learnstorybook-code/public/font public/font
  - npx degit chromaui/learnstorybook-code/public/icon public/icon

# next_01

- Reference
  - [Getting started with Tailwind CSS in Next.js | Akhila Ariyachandra](https://akhilaariyachandra.com/getting-started-with-tailwind-css-in-next-js/)
  - [Documentation Home - Apollo Basics - Apollo GraphQL Docs](https://www.apollographql.com/docs/)
- Command
  - npx create-next-app --example with-typescript next-01
  - setting tailwindcss
    - yarn add tailwindcss postcss-preset-env --dev
    - npx tailwindcss init
    - mkdir -p src/styles
    - touch src/styles/index.css
    - touch pages/\_app.js
  - setting graphql
    - yarn add @apollo/client graphql
  - setting for using dotenv
    - yarn add dotenv-webpack --dev

# next_02

- Reference
  - [Refactoring landing page with React, NextJS & TailwindCSS - DEV](https://dev.to/dkapanidis/refactoring-landing-page-with-react-nextjs-tailwindcss-2hk8)
- Command
  - npx create-next-app next_02 --use-npm --example https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss
  - gibo dump VisualStudio Node > .gitignore
  - yarn add typescript @types/react @types/node --dev

# next_03

- Command
  - npx create-next-app --example with-typescript next_03
  - gibo dump VisualStudio Node > .gitignore
  - yarn add @material-ui/core
  - yarn add --dev @storybook/react ts-loader css-loader babel-preset-react-app babel-plugin-react-require

# tailwind_01

- Reference
  - [TailwindCSS 入門 ~ Utility First + デザインシステムの構築 ~ - Qiita](https://qiita.com/oedkty/items/68461080515ec1012980)
  - [最小手数で始める Tailwind CSS - メドピア開発者ブログ](https://tech.medpeer.co.jp/entry/better-tailwind-css)
- Command
  - yarn init -y
  - yarn add tailwindcss
  - npx tailswindcss init
  - gibo dump VisualStudio Node > .gitignore
  - touch tailwind.css
  - mkdir public
  - touch public/index.html
  - yarn build:css
  - npx http-server ./public

# react-recoil-01

- Reference
  - [Getting Started | Recoil](https://recoiljs.org/docs/introduction/getting-started)
- Command
  - npx create-react-app react-recoil-01
  - yarn add recoil

# react-recoil-02

- Reference
  - [Intro | Recoil](https://recoiljs.org/docs/basic-tutorial/intro)
- Command
  - npx create-react-app react-recoil-02
  - yarn add recoil

# react-design-pattern-01

- Reference
  - [綺麗なReactコンポーネント設計でモノリシックなコンポーネントを爆殺する - Qiita](https://qiita.com/teradonburi/items/6828635d2e70dba6637d)
  - [Parcel](https://parceljs.org/)
- Command
  - Setup
    - yarn init -y
    - gibo dump VisualStudio Node > .gitignore
    - yarn add react react-dom @types/react @types/react-dom
    - yarn add --dev parcel-bundler typescript
    - yarn start
  - Setting TestTool
    - yarn add jest ts-jest @types/jest babel-jest react-test-renderer @testing-library/react @testing-library/react-hooks
  - Setting StoryBook
    - yarn add --dev @storybook/cli
    - npx -p @storybook/cli sb init
    - npx start-storybook -p 6006
