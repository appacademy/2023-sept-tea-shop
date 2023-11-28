import { csrfFetch } from "./csrf";

export const getTeas = () => (
	csrfFetch('/api/teas')
);

export const getTea = teaId => (
	csrfFetch(`/api/teas/${teaId}`)
);

export const postTea = tea => (
	csrfFetch('/api/teas', {
		method: 'POST',
		body: JSON.stringify(tea)
	})
);

export const deleteTea = teaId => (
	csrfFetch(`/api/teas/${teaId}`, {
		method: 'DELETE'
	})
);