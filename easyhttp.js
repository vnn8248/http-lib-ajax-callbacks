class EasyHTTP {

    // HTTP GET request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    // HTTP POST request
    async post(url, data) {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json();
        return resData;
    }

    // HTTP PUT request
    async put(url, data) {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json();
        return resData;
    }

    // HTTP Delete request
    async delete(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
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