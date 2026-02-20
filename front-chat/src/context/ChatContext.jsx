// Import required React hooks

// createContext → used to create global context

// useContext → used to access context data

// useState → used to store state values

import { createContext, useContext, useState } from "react";



// Create Context

// ChatContext is used to store global chat data

// It allows data sharing between components

// Example:
// RoomId
// Username
// Connection status

const ChatContext = createContext();




// Create Provider Component

// ChatProvider is used to wrap entire app

// It provides global data to all child components

export const ChatProvider = ({ children }) => {



  // Store Room ID

  // Example:
  // "room123"

  const [roomId, setRoomId] = useState("");




  // Store current user name

  // Example:
  // "Shwetha"

  const [currentUser, setCurrentUser] = useState("");




  // Store connection status

  // true → connected
  // false → not connected

  const [connected, setConnected] = useState(false);




  // Provide data to all components

  return (

    <ChatContext.Provider

      value={{

        // Data

        roomId,
        currentUser,
        connected,


        // Functions to update data

        setRoomId,
        setCurrentUser,
        setConnected,

      }}

    >

      {/* children means all components inside ChatProvider */}

      {children}

    </ChatContext.Provider>

  );

};




// Custom Hook

// This hook is used to access ChatContext easily

// Instead of writing:

// useContext(ChatContext)

// we write:

// useChatContext()


const useChatContext = () => useContext(ChatContext);



// Export custom hook

export default useChatContext;