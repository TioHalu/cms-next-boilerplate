# Boilerplate and Starter CMS with Next JS 14+, Tailwind CSS, TypeScript and Ant Design 5x

🚀 Boilerplate and Starter for Next.js, Tailwind CSS and TypeScript ⚡️ Made with developer experience first: Next.js (app routing), TypeScript, ESLint, Prettier, Husky, Lint-Staged, Jest, React Testing Library, PostCSS, Tailwind CSS, Storybook, Plop, Validation.

![Cover](https://svgshare.com/i/idk.svg)

## 🚀 Features

Developer experience first:

- [Next.js](https://nextjs.org) for Static Site Generator
- [Ant Design](https://ant.design/) for Base UI
- Type checking [TypeScript](https://www.typescriptlang.org)
- Integrate with [Tailwind CSS](https://tailwindcss.com)
- [Storybook](https://storybook.js.org) for components documentation and can testing
- Strict Mode for TypeScript and React 18
- Linter with [ESLint](https://eslint.org)
- Code Formatter with [Prettier](https://prettier.io)
- [Husky](https://typicode.github.io/husky/#/) for Git Hooks
- [Lint-staged](https://github.com/okonet/lint-staged) for running linters on Git staged files
- Testing with [Jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/) and [Playwright](https://playwright.dev)
- Absolute Imports using `@` prefix
- NextJS custom layouts
- [T3 env](https://env.t3.gg/) Manage your environment variables with ease
- Message convention for git
- Commit Convention [commitizen](https://github.com/commitizen/cz-cli) for commit using cli (question & answer)
- Maximize lighthouse score
- Analyze Template using [Bundle Analyze](https://www.npmjs.com/package/@next/bundle-analyzer)
- Components generation with [Plop](https://plopjs.com/) and [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) convention
- Generate branching pre-release & release (dev, sit, uat)

## 📅 Plans

- [next-pwa](https://github.com/shadowwalker/next-pwa)
- Use [SWR](https://swr.vercel.app) for Integration API
- Implementation [Redux](https://redux.js.org) from [reference](https://blog.logrocket.com/use-redux-next-js/)
- Customize Layout top sider and left sider with ease & responsive
- Generate Page without feature
- Generate CRUD Page/Feature
- Component [ChartJS](https://www.chartjs.org)
- Util for [JSZip](https://stuk.github.io/jszip/)
- Util for [SheetJS](https://sheetjs.com)
- Generated CHANGELOG with [standard-version](https://www.npmjs.com/package/standard-version)

## 🧪 Testing

All tests are collocated with the source code inside the same directory. So, it makes it easier to find them. Coverage threshold is set to `70%`. In the `.jest` folder there is a custom provider for the all tests.

## ℹ️ How To Use

To use this template you can simply click in [Use this template](https://github.com/technokrat96/cms-next-boilerplate) or create your Next.js app based on this template by running:

```bash
npx create-next-app -e https://github.com/technokrat96/cms-next-boilerplate
```

After clone

```bash
npm install
```

After add git remote, make sure master branch is **master**, to generate branch initial

```bash
npm run initial-branch
```

## 🚀 Deploy to production

You can see the results locally in production mode with:

```shell
npm run build
```

```shell
npm run start
```

## ⚙️ Generating components

```bash
npm run generate Button
```

Result (if you chose an atom component):

```
└── components
      └── atoms
        └── Button
          ├── index.ts
          ├── Button.stories.tsx
          ├── Button.test.tsx
          └── Button.tsx
```

## 😡 Git Rules & Branch Initial

Please using **`master`** for name master branch

### Git Flow

```
GIT Repo
    └── master
          └── * release/dev
          |       └── * pre-release/dev
          |                 └── feature/<branch feature>
          |                 └── bug-fix/<branch bug fix>
          |                 └── hot-fix/<branch hot fix>
          └── * relasee/sit
          |       └── * pre-release/sit
          |                 └── bug-fix/<branch bug fix>
          |                     (PR / MR to pre-release/dev too)
          |                 └── hot-fix/<branch hot fix>
          |                     (PR / MR to pre-release/dev too)
          └── * relase/uat
                  └── * pre-release/uat
                            └── bug-fix/<branch bug fix>
                                (PR / MR to pre-release/dev only)
                            └── hot-fix/<branch hot fix>
                                (PR / MR to pre-release/dev only)
```

### Git Message : [Conventional Message](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)

- Commit Message must be Started with :
    - feat
      - scope :
        - new-feat
        - continue-feat
    - fix
    - build
    - chore
    - docs
    - style
    - refactor
    - perf
    - test
    - ci
