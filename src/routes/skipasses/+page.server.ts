import type { PageServerLoad } from './$types';

export const load = (async ({fetch}) => {
    const res = await fetch('https://wsdot.wa.gov/Traffic/api/MountainPassConditions/MountainPassConditionsREST.svc/GetMountainPassConditionsAsJson?AccessCode=daa137b1-730c-405c-8acd-17921c8db8ef')
    const data = await res.json();
    
    return {
        status: 200,
        passes: data
    };
}) satisfies PageServerLoad;