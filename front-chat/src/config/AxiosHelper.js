// Importing axios library
// Axios is a popular HTTP client used to send API requests
// like GET, POST, PUT, DELETE from frontend to backend
import axios from "axios";


// Creating and exporting a constant variable called baseURL
// This stores the main backend server URL
// All API requests will use this URL as starting point
// Example:
// http://localhost:8080/users
// http://localhost:8080/chat
export const baseURL = "http://localhost:8080";


// Creating a custom axios instance called httpClient
// axios.create() is used to configure axios with default settings
// This avoids repeating baseURL again and again
export const httpClient = axios.create({

  // Setting default baseURL for all API calls
  // Now every request automatically starts with this URL
  baseURL: baseURL,

});


// Now you can use httpClient like this:

// Example 1: GET request
// httpClient.get("/users")
// Actual URL → http://localhost:8080/users


// Example 2: POST request
// httpClient.post("/chat", data)
// Actual URL → http://localhost:8080/chat


// Example 3: DELETE request
// httpClient.delete("/user/1")
// Actual URL → http://localhost:8080/user/1