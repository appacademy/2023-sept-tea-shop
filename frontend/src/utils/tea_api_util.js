

// we are gonna write a request 

// GET => go get something
// PUTS => update something
// POST => create something

export const postTea = (tea) =>{
    // debugger
    return fetch('http://localhost:5173/api/teas', {
        method: 'POST',
        body: JSON.stringify(tea),
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}




// PATCH => update a part of something
// DELETE => remove something from database

export const deleteTea = (teaId) =>{
    // debugger
    return fetch(`http://localhost:5173/api/teas/${teaId}`, {
        method: 'DELETE',
        // body: JSON.stringify(tea),
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}

