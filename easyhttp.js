class EasyHTTP {

    // HTTP GET request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })

    }

    // HTTP POST request
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }

    // HTTP PUT request
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }

    // HTTP Delete request
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(res => res.json())
            .then(data => resolve("Resource deleted."))
            .catch(err => reject(err))
        })
    }
}


// // Initializing new XHR method
// function easyHTTP() {
//     this.http = new XMLHttpRequest();
// }

// // Make an HTTP GET request
// easyHTTP.prototype.get = function(url, callback) {
//     this.http.open("GET", url, true);

//     let that = this;

//     this.http.onload = function() {
//         if (that.http.status === 200) {
//             callback(null, that.http.responseText);
//         } else {
//             callback("Error" + that.http.status);
//         }
//     };


//     this.http.send();
// }

// // Make an HTTP POST request

// easyHTTP.prototype.post = function(url, data, callback) {
//     this.http.open("POST", url, true);

//     this.http.setRequestHeader("Content-type", "application/json");

//     let that = this;
//     this.http.onload = function() {
//         callback(null, that.http.responseText);
//     }

//     this.http.send(JSON.stringify(data));
// }


// // Make an HTTP PUT request
// easyHTTP.prototype.put = function(url, data, callback) {
//     this.http.open("PUT", url, true);

//     this.http.setRequestHeader("Content-type", "application/json");

//     let that = this;
//     this.http.onload = function() {
//         callback(null, that.http.responseText);
//     }

//     this.http.send(JSON.stringify(data));
// }
// // Make an HTTP DELETE request
// easyHTTP.prototype.delete = function(url, callback) {
//     this.http.open("DELETE", url, true);

//     let that = this;
//     this.http.onload = function() {
//         if (that.http.status === 200) {
//             callback(null, "Post Deleted.");
//         } else {
//             callback("Error:" + that.http.status);
//         }
//     }

//     this.http.send();
// }