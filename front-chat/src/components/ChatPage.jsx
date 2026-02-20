import React, { useEffect, useRef, useState } from "react";


// Import icons
// MdAttachFile → attachment icon
// MdSend → send icon

import { MdAttachFile, MdSend } from "react-icons/md";


// Import Chat Context
// Used to access global chat data

import useChatContext from "../context/ChatContext";


// Import navigation hook

import { useNavigate } from "react-router";


// Import SockJS
// SockJS creates WebSocket connection between frontend and backend

import SockJS from "sockjs-client";


// Import STOMP protocol
// STOMP is messaging protocol over WebSocket

import { Stomp } from "@stomp/stompjs";


// Import toast for notification

import toast from "react-hot-toast";


// Import backend base URL

import { baseURL } from "../config/AxiosHelper";


// Import API to load old messages

import { getMessagess } from "../services/RoomService";


// Import timeAgo helper
// Used to display time like:
// 2 minutes ago

import { timeAgo } from "../config/helper";





const ChatPage = () => {



  // Get global chat values from Context

  const {
    roomId,
    currentUser,
    connected,
    setConnected,
    setRoomId,
    setCurrentUser,
  } = useChatContext();




  // Navigation hook

  const navigate = useNavigate();




  // useEffect runs when component loads

  useEffect(() => {


    // If user is not connected

    // redirect to home page

    if (!connected) {

      navigate("/");

    }

  }, [connected, roomId, currentUser]);





  // State to store all messages

  const [messages, setMessages] = useState([]);




  // State to store current input message

  const [input, setInput] = useState("");




  // useRef for input box

  const inputRef = useRef(null);




  // useRef for chat box
  // Used for scrolling

  const chatBoxRef = useRef(null);




  // State to store stomp client

  const [stompClient, setStompClient] = useState(null);




  // Load old messages when page loads

  useEffect(() => {


    async function loadMessages() {

      try {


        // Call backend API

        const messages = await getMessagess(roomId);


        // Store messages in state

        setMessages(messages);


      } catch (error) {}

    }


    // Only load when connected

    if (connected) {

      loadMessages();

    }

  }, []);





  // Scroll automatically when new message arrives

  useEffect(() => {

    if (chatBoxRef.current) {

      chatBoxRef.current.scroll({

        top: chatBoxRef.current.scrollHeight,

        behavior: "smooth",

      });

    }

  }, [messages]);






  // Connect to WebSocket

  useEffect(() => {



    const connectWebSocket = () => {


      // Create SockJS connection

      const sock = new SockJS(`${baseURL}/chat`);




      // Create STOMP client

      const client = Stomp.over(sock);




      // Connect to server

      client.connect({}, () => {


        // Save stomp client

        setStompClient(client);




        // Show success message

        toast.success("connected");




        // Subscribe to room

        client.subscribe(`/topic/room/${roomId}`, (message) => {

          console.log(message);




          // Convert JSON string to object

          const newMessage = JSON.parse(message.body);




          // Add message to list

          setMessages((prev) => [...prev, newMessage]);

        });

      });

    };




    if (connected) {

      connectWebSocket();

    }



  }, [roomId]);







  // Function to send message

  const sendMessage = async () => {


    // Check conditions

    if (stompClient && connected && input.trim()) {


      console.log(input);




      // Create message object

      const message = {

        sender: currentUser,

        content: input,

        roomId: roomId,

      };




      // Send message to backend

      stompClient.send(

        `/app/sendMessage/${roomId}`,

        {},

        JSON.stringify(message)

      );




      // Clear input box

      setInput("");

    }

  };






  // Logout function

  function handleLogout() {


    // Disconnect websocket

    stompClient.disconnect();




    // Reset context values

    setConnected(false);

    setRoomId("");

    setCurrentUser("");




    // Go to home page

    navigate("/");

  }






  // UI PART

  return (

    <div className="">



      {/* Header */}

      <header className="dark:border-gray-700 fixed w-full dark:bg-gray-900 py-5 shadow flex justify-around items-center">



        {/* Room ID */}

        <div>

          <h1 className="text-xl font-semibold">

            Room : <span>{roomId}</span>

          </h1>

        </div>




        {/* Username */}

        <div>

          <h1 className="text-xl font-semibold">

            User : <span>{currentUser}</span>

          </h1>

        </div>




        {/* Leave Button */}

        <div>

          <button

            onClick={handleLogout}

            className="dark:bg-red-500 dark:hover:bg-red-700 px-3 py-2 rounded-full"

          >

            Leave Room

          </button>

        </div>


      </header>






      {/* Chat messages area */}

      <main

        ref={chatBoxRef}

        className="py-20 px-10 w-2/3 dark:bg-slate-600 mx-auto h-screen overflow-auto "

      >


        {messages.map((message, index) => (

          <div

            key={index}

            className={`flex ${

              message.sender === currentUser

                ? "justify-end"

                : "justify-start"

            } `}

          >




            {/* Message bubble */}

            <div

              className={`my-2 ${

                message.sender === currentUser

                  ? "bg-green-800"

                  : "bg-gray-800"

              } p-2 max-w-xs rounded`}

            >



              <div className="flex flex-row gap-2">


                {/* Avatar */}

                <img

                  className="h-10 w-10"

                  src={"https://avatar.iran.liara.run/public/43"}

                  alt=""

                />




                {/* Message details */}

                <div className="flex flex-col gap-1">


                  <p className="text-sm font-bold">

                    {message.sender}

                  </p>




                  <p>

                    {message.content}

                  </p>




                  {/* Time */}

                  <p className="text-xs text-gray-400">

                    {timeAgo(message.timeStamp)}

                  </p>


                </div>

              </div>

            </div>

          </div>

        ))}

      </main>






      {/* Message Input Area */}

      <div className="fixed bottom-4 w-full h-16 ">


        <div className="h-full pr-10 gap-4 flex items-center justify-between rounded-full w-1/2 mx-auto dark:bg-gray-900">


          {/* Input */}

          <input

            value={input}

            onChange={(e) => {

              setInput(e.target.value);

            }}

            onKeyDown={(e) => {


              // Send message on Enter key

              if (e.key === "Enter") {

                sendMessage();

              }

            }}

            type="text"

            placeholder="Type your message here..."

            className="w-full dark:border-gray-600 dark:bg-gray-800 px-5 py-2 rounded-full h-full focus:outline-none"

          />




          {/* Buttons */}

          <div className="flex gap-1">


            {/* Attachment button */}

            <button className="dark:bg-purple-600 h-10 w-10 flex justify-center items-center rounded-full">

              <MdAttachFile size={20} />

            </button>




            {/* Send button */}

            <button

              onClick={sendMessage}

              className="dark:bg-green-600 h-10 w-10 flex justify-center items-center rounded-full"

            >

              <MdSend size={20} />

            </button>



          </div>


        </div>

      </div>

    </div>

  );

};



export default ChatPage;