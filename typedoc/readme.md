Documentation of the [hafas-client](https://www.npmjs.com/package/hafas-client) Api generated from the [@types/hafas-client](https://www.npmjs.com/package/@types/hafas-client) declaration file.

## TypeScript Example

TypeScript app using hafas-client npm packages (see [HafasClient](./interfaces/HafasClient.html) interface)

```ts
import { HafasClient, Stop, Station, Location } from 'hafas-client';
import { createClient } from 'hafas-client';
import { profile as dbProfile } from 'hafas-client/p/db/index.js';

const client: HafasClient = createClient(dbProfile, 'agent');

const locations = (name?: string) => {
    name && client.locations(name, { results: 3, linesOfStops: true })
        .then(result => {
            result.forEach((s: Station | Stop | Location) => { console.log(s.type, s.id, s.name); });
        })
        .catch(console.error);
}

const args = process.argv.slice(1);

locations(args[1]);
```

## JavaScript Example

JvasScript app using hafas-client npm packages (see [HafasClient](./interfaces/HafasClient.html) interface)
with type information via [JsDoc annotations](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html).

```js
/**
 * @import {HafasClient} from "hafas-client"
 */
import { createClient } from 'hafas-client';
import { profile as dbProfile } from 'hafas-client/p/db/index.js';

/** @type {HafasClient} */
const client = createClient(dbProfile, 'agent');

/**
 * @param {string | undefined} name
 * @returns { void }
 */
const locations = (name) => {
    name && client.locations(name, { results: 3, linesOfStops: true })
        .then(result => {
            result.forEach(s => { console.log(s.type, s.id, s.name); });
        })
        .catch(console.error);
}

const args = process.argv.slice(1);

locations(args[1]);
```

Typechecking this JvasScript file can be done with

```sh
tsc -p tsconfig-js.json
```

using a config file like 

```json
{
    "compilerOptions": {
        "checkJs": true,
        "noEmit": true,
        "strict": true
    },
    "include": [
        "index.js"
    ]
}
```

## Installation

```sh
npm install hafas-client
npm install -D @types/hafas-client
npm install -D typescript
```
