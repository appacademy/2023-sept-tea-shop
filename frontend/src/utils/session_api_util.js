import { csrfFetch } from "./csrf";

export const postSession = user => (
  csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify(user)
  })
);

export const deleteSession = () => (
  csrfFetch('/api/session', {
    method: 'DELETE'
  })
);