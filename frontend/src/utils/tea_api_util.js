import { csrfFetch } from "./csrf";

export const getTeas = () => (
	csrfFetch('/api/teas')
);

export const getTea = teaId => (
	csrfFetch(`/api/teas/${teaId}`)
);

// do not need to stringify formData
export const postTea = tea => (
	csrfFetch('/api/teas', {
		method: 'POST',
		body: tea
	})
);

export const deleteTea = teaId => (
	csrfFetch(`/api/teas/${teaId}`, {
		method: 'DELETE'
	})
);