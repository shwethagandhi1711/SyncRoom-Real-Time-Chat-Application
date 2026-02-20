// Import httpClient

// httpClient is Axios instance

// It contains:

// baseURL → http://localhost:8080
// default configs

// It helps to send HTTP requests to backend

import { httpClient } from "../config/AxiosHelper";



// =======================================================
// CREATE ROOM API
// =======================================================

// This function is used to create new chat room

// async → because API call takes time

// roomDetail → contains roomId

// Example:
// "room123"

export const createRoomApi = async (roomDetail) => {


  // Send POST request to backend

  // URL:
  // http://localhost:8080/api/v1/rooms

  // roomDetail → sent as request body


  // headers:
  // Content-Type: text/plain

  // Because backend expects plain text, not JSON

  const respone = await httpClient.post(

    `/api/v1/rooms`,   // API endpoint

    roomDetail,        // Request body

    {
      headers: {

        // Tell backend data is plain text

        "Content-Type": "text/plain",

      },

    }

  );


  // return response data

  // Example response:
  // {
  //   id: "123",
  //   roomId: "room123",
  //   messages: []
  // }

  return respone.data;

};



// =======================================================
// JOIN ROOM API
// =======================================================

// This function is used to join existing room

// roomId → room identifier

// Example:
// "room123"

export const joinChatApi = async (roomId) => {


  // Send GET request

  // URL:
  // http://localhost:8080/api/v1/rooms/room123

  const response = await httpClient.get(

    `/api/v1/rooms/${roomId}`

  );


  // return room details

  return response.data;

};




// =======================================================
// GET MESSAGES API
// =======================================================

// This function is used to get messages of room

// roomId → which room messages

// size → number of messages

// page → page number

// default:
// size = 50
// page = 0


export const getMessagess = async (

  roomId,

  size = 50,

  page = 0

) => {


  // Send GET request

  // URL Example:

  // http://localhost:8080/api/v1/rooms/room123/messages?size=50&page=0


  const response = await httpClient.get(

    `/api/v1/rooms/${roomId}/messages?size=${size}&page=${page}`

  );


  // return messages list

  return response.data;

};