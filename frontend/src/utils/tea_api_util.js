export const getTeas = () => (
    fetch('/api/teas', {
        headers: {
            'Accept': 'application/json'
        }
    })
);

export const getTea = teaId => (
    fetch(`/api/teas/${teaId}`, {
        headers: {
            'Accept': 'application/json'
        }
    })
);

export const postTea = tea => (
    fetch('/api/teas', {
        method: 'POST',
        body: JSON.stringify(tea),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
);

export const deleteTea = teaId => (
    fetch(`/api/teas/${teaId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
);