import { csrfFetch } from "./csrf";

export const postUser = user => (
  csrfFetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(user)
  })
);