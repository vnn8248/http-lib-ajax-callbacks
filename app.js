const http = new EasyHTTP;

// Get Users
// http.get("https://jsonplaceholder.typicode.com/users")
// .then(data => console.log(data))
// .catch(err => console.log(err))

// Create users
const data = {
    name: "Steve",
    user: "steveDoe",
    email: "sdoe@gmail.com"
}
// Post user
// http.post("https://jsonplaceholder.typicode.com/users", data)
// .then(data => console.log(data))
// .catch(err => console.log(err))


// Update user
// http.put("https://jsonplaceholder.typicode.com/users/5", data)
// .then(data => console.log(data))
// .catch(err => console.log(err))

// Delete user
http.delete("https://jsonplaceholder.typicode.com/users/10")
.then(data => console.log(`ID:${data.id} deleted.`))
.catch(err => console.log(err))
