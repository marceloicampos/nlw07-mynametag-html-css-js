// Listen for submissions on GitHub username input form
gitHubForm.addEventListener('submit', e => {
    // Prevent default form submission action
    e.preventDefault()

    // Get the GitHub username input field on the DOM
    let usernameInput = document.getElementById('usernameInput')

    // Get the value of the GitHub username input field
    let gitHubUsername = usernameInput.value

    // Get tag input type submit
    let bInput = document.getElementById('bInput')

    // Run GitHub API function, passing in the GitHub username

    // Disable the input type submit
    bInput.disabled = true

    // Clear the input type text
    usernameInput = document.getElementById('usernameInput').value = ''

    requestUser(gitHubUsername)
})

function requestUser(username) {
    // Create new XMLHttpRequest object
    const xhr = new XMLHttpRequest()

    // GitHub endpoint, dynamically passing in specified username
    const url = `https://api.github.com/users/${username}`

    // Open a new connection, using a GET request via URL endpoint
    // Providing 3 arguments (GET/POST, The URL, Async True/False)
    xhr.open('GET', url, true)

    // When request is received
    // Process it here
    xhr.onload = function () {
        // Parse API data into JSON
        const data = JSON.parse(this.response)

        // Get the ul with id of of userRepos
        let ul = document.getElementById('user')

        // Create variable that will create li's to be added to ul
        let li = document.createElement('li')

        // Create the html markup for each li
        li.innerHTML = `
                <img src="${data.html_url}.png" alt="avatar"/>
                <p>${data.name}</p>
                <p><a href="${data.html_url}" target="_blank">${data.login}</a></p>
                <p>${data.bio}</p>
            `

        // Append each li to the ul
        ul.appendChild(li)
    }

    // Send the request to the server
    xhr.send()
}

// function requestUser(username) {
//     // Create new XMLHttpRequest object
//     const xhr = new XMLHttpRequest()

//     // GitHub endpoint, dynamically passing in specified username
//     const url = `https://api.github.com/users/${username}`

//     // Open a new connection, using a GET request via URL endpoint
//     // Providing 3 arguments (GET/POST, The URL, Async True/False)
//     xhr.open('GET', url, true)

//     // When request is received
//     // Process it here
//     xhr.onload = function () {
//         // Parse API data into JSON
//         const data = JSON.parse(this.response)

//         // Log the response
//         console.log(data)

//         // Log the user name
//         console.log('Name:', data.name)

//         // Log the repo user login
//         console.log('Login:', data.login)

//         // Log the html url
//         console.log('URL:', data.html_url)

//         // Log the bio
//         console.log('Bio:', data.bio)
//     }

//     // Send the request to the server
//     xhr.send()
// }

// // Call function passing in 'marceloicampos' as GitHub username
// requestUser('marceloicampos')
