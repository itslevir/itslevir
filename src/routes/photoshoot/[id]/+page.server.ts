import { connect } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	await connect();

	const { id } = params;
	const Photoshoot = (await import('$lib/models/Photoshoot')).Photoshoot;
	const photoshoot = await Photoshoot.findById(id).lean();

	return { photoshoot };
};
