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