import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const request = {
			user: {
				first: data.get('firstName'),
				last: data.get('lastName'),
				email: data.get('email')
			},
			details: {
				date: data.get('date') as unknown as number,
				details: data.get('details'),
				location: data.get('location'),
				style: data.get('style'),
				additional: data.get('additional')
			}
		};

		const req = await fetch('https://api.cal.com/v2/bookings', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'cal-api-version': '2024-08-13'
			},
			body: JSON.stringify({
				start: new Date(request.details.date * 1000).toISOString(),
				attendee: {
					name: `${request.user.first} ${request.user.last}`,
					timeZone: 'America/Los_Angeles',
					email: request.user.email
				},
				eventTypeId: 3254996,
				bookingFieldsResponses: {
					area: request.details.location,
					style: request.details.style,
					title: request.details.details,
					notes: request.details.additional
				}
			})
		});
		const res = (await req).json();
		if (res)
		return redirect(303, '/hire/thank-you');
	}
} satisfies Actions;
