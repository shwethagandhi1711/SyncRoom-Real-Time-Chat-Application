import React, { useState } from "react";

// Import chat icon image
// This image is displayed at top of join/create room page
import chatIcon from "../assets/chat.png";


// Import toast from react-hot-toast
// toast is used to show popup messages like:
// success message
// error message
import toast from "react-hot-toast";


// Import API functions
// createRoomApi → used to create new chat room
// joinChatApi → used to join existing chat room
import { createRoomApi, joinChatApi } from "../services/RoomService";


// Import custom hook (Context API)
// This is used to store global chat data like:
// roomId
// current user
// connection status
import useChatContext from "../context/ChatContext";


// Import navigation hook
// Used to move from one page to another
// Example: navigate("/chat")
import { useNavigate } from "react-router";



// Main Functional Component
const JoinCreateChat = () => {


  // useState is used to store form input values

  // detail object stores:
  // roomId → room id entered by user
  // userName → username entered by user

  const [detail, setDetail] = useState({
    roomId: "",
    userName: "",
  });



  // Getting values and functions from Context API

  // roomId → current room id
  // userName → current user
  // setRoomId → function to set room id
  // setCurrentUser → function to set username
  // setConnected → function to set connection status

  const { roomId, userName, setRoomId, setCurrentUser, setConnected } =
    useChatContext();



  // useNavigate hook used to move between pages

  const navigate = useNavigate();




  // Function to handle input change

  function handleFormInputChange(event) {

    // event.target.name → input field name
    // event.target.value → input field value

    // Spread operator used to keep existing values
    // and update only changed value

    setDetail({
      ...detail,
      [event.target.name]: event.target.value,
    });
  }




  // Function to validate form

  function validateForm() {


    // Check if roomId OR userName is empty

    if (detail.roomId === "" || detail.userName === "") {


      // Show error message

      toast.error("Invalid Input !!");


      return false;
    }


    return true;
  }




  // Function to join existing chat room

  async function joinChat() {


    // First validate form

    if (validateForm()) {


      // Try block used to handle success

      try {


        // Call backend API to join room

        const room = await joinChatApi(detail.roomId);



        // Show success message

        toast.success("joined..");



        // Store username in Context

        setCurrentUser(detail.userName);



        // Store room id in Context

        setRoomId(room.roomId);



        // Set connection status true

        setConnected(true);



        // Navigate to chat page

        navigate("/chat");


      } catch (error) {


        // Handle errors


        if (error.status == 400) {

          toast.error(error.response.data);

        } else {

          toast.error("Error in joining room");

        }


        console.log(error);
      }
    }
  }




  // Function to create new room

  async function createRoom() {


    // Validate form

    if (validateForm()) {


      console.log(detail);



      // Try block

      try {


        // Call backend API to create room

        const response = await createRoomApi(detail.roomId);



        console.log(response);



        // Show success message

        toast.success("Room Created Successfully !!");



        // Store username

        setCurrentUser(detail.userName);



        // Store room id

        setRoomId(response.roomId);



        // Set connection status

        setConnected(true);



        // Navigate to chat page

        navigate("/chat");



      } catch (error) {


        console.log(error);



        if (error.status == 400) {

          toast.error("Room  already exists !!");

        } else {

          toast("Error in creating room");

        }
      }
    }
  }




  // UI PART (RETURN)

  return (


    // Full screen container

    <div className="min-h-screen flex items-center justify-center ">


      {/* Main Card */}

      <div className="p-10 dark:border-gray-700 border w-full flex flex-col gap-5 max-w-md rounded dark:bg-gray-900 shadow">


        {/* Chat Icon */}

        <div>

          <img src={chatIcon} className="w-24 mx-auto" />

        </div>




        {/* Heading */}

        <h1 className="text-2xl font-semibold text-center ">

          Join Room / Create Room ..

        </h1>





        {/* Username Input */}

        <div className="">


          <label htmlFor="name" className="block font-medium mb-2">

            Your name

          </label>



          <input

            onChange={handleFormInputChange}

            value={detail.userName}

            type="text"

            id="name"

            name="userName"

            placeholder="Enter the name"


            className="w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"

          />

        </div>





        {/* Room ID Input */}

        <div className="">


          <label htmlFor="name" className="block font-medium mb-2">

            Room ID / New Room ID

          </label>



          <input

            name="roomId"

            onChange={handleFormInputChange}

            value={detail.roomId}

            type="text"

            id="name"

            placeholder="Enter the room id"


            className="w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"

          />

        </div>





        {/* Buttons */}

        <div className="flex justify-center gap-2 mt-4">


          {/* Join Room Button */}

          <button

            onClick={joinChat}

            className="px-3 py-2 dark:bg-blue-500 hover:dark:bg-blue-800 rounded-full"

          >

            Join Room

          </button>




          {/* Create Room Button */}

          <button

            onClick={createRoom}

            className="px-3 py-2 dark:bg-orange-500 hover:dark:bg-orange-800 rounded-full"

          >

            Create Room

          </button>



        </div>


      </div>


    </div>

  );

};


// Export component

export default JoinCreateChat;