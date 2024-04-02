# Docs for hafas-client types

This repo hosts the documentation of the TypeScript [definitions](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/hafas-client/index.d.ts) for the JavaScript [hafas-client](https://github.com/public-transport/hafas-client) library.

The documentation is generated using [TypeDoc](https://typedoc.org/).

## Workflow

* A new minor version is pushed on [hafas-client]((https://github.com/public-transport/hafas-client)).
* A new TypeScript declaration file is created on the branch [add-types-in-jsdoc](https://github.com/bergmannjg/hafas-client/tree/add-types-in-jsdoc) (see [readme](https://github.com/bergmannjg/hafas-client/blob/add-types-in-jsdoc/typescript-readme.md)).
* The new TypeScript declaration file is published on [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/hafas-client).
* The documentation is recreated on this repo with the [ghpages](.github/workflows/ghpages.yml) workflow.
