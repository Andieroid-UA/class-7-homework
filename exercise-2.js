//Create a facade between implementation of fetch and the api inside of GetUsers
function getUsers() {
    return getFetch('https://jsonplaceholder.typicode.com/users')
}

function getUserPosts(userId) {
    return getFetch('https://jsonplaceholder.typicode.com/posts', {
        userId: userId
    })
}

getUsers().then(users => {
    users.forEach(user => {
        getUserPosts(user.id).then(posts => {
            console.log(user.name)
            console.log(posts.length)
        })
    })
})

// function getFetch(url, params = {}) {
//     const query = Object.entries(params).map(param => {
//         return `${param[0]}=${param[1]}`
//     }).join('&')
//     return fetch(`${url}?${queryString}`, {
//         method: 'GET',
//         headers: {"Content-type": "application/json"}
//     }).then(res => res.json())
// }

//Less ugly
function getFetch(url, params = {}) {
    return axios({
        url: url,
        method: 'GET',
        params: params
    }).then(res => res.data)
}

/*
//Clean, nice code
function getUsers() {
    return getFetch('https://jsonplaceholder.typicode.com/users')
}

function getUserPosts(userId) {
    return getFetch('https://jsonplaceholder.typicode.com/posts', {
        userId: userId
    })
}

getUsers().then(users => {
    users.forEach(user => {
        getUserPosts(user.id).then(posts => {
            console.log(user.name)
            console.log(posts.length)
        })
    })
})

//Ugly code
{ userId: 1 }
{[userId, 1]}
function getFetch(url, params = {}) {
    const query = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}`
    }).join('&')
    return fetch(`${url}?${queryString}`, {
        method: 'GET',
        headers: {"Content-type": "application/json"}
    }).then(res => res.json())
}


///Starter Code/////////////////////////////////////

function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
        headers: { "Content-type": "application/json" }
    }).then(res => res.json())
}

function getUserPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
        method: 'GET',
        headers: {"Content-type": "application/json"}
    }).then(res => res.json())
}

getUsers().then(users => {
    users.forEach(user => {
        getUserPosts(user.id).then(posts => {
            console.log(user.name)
            console.log(posts.length)
        })
    })
})
*/
