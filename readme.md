# Typescript-Packages

This repository contains a monorepo for typescript packages. It uses [lerna](https://github.com/lerna/lerna) to handle the magic for packages in one solution.

To work with this repository you need access to the private repo. It might work without access and only using public npm since the packages used in this repo are not from the private npm repo.

## Getting started

To get started with the repo:

```sh
git clone git@github.com:jertje260/typescript-packages.git && cd typescript-packages
npm install
```

This will install all the packages & setup lerna's linking for the local packages.

## Run tests

The test runner (jest) will run all tests when running:

```sh
npm test
```

## Compile typescript

Since this project depends on typescript, there is a compile step which compiles the typescript to js and outputs it into the dist folder of each package.

```sh
npm run compile
```

## Clean dist folders

To clean up the output from previous builds, run the following command:

```sh
npm run clean
```

Running the tests for a specific package also works, go to the package dir and run `npm test` there.

## Updating versions

```sh
npm run version-packages
```

This will open up `Lerna CLI` which will help you update the versions of packages.

## Pushing new packages

This is setup in the build agent with the `azure-pipelines-release.yml`, but if you wanted to, you could run:

```sh
npm run publish-packages
```

This expects that you have run the following commands:

```sh
npm run clean && npm run compile
```
