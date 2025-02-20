/**
 * @import {HafasClient} from "../typedoc/hafas-client"
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