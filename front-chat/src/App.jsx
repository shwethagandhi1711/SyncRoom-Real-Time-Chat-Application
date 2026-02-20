// Import React library
// Required to create React components
import React from "react";


// Import CSS file
// Used to apply styling to this component
import "./App.css";


// Import Toaster component from react-hot-toast library
// Used to show popup notifications (success, error, etc.)
import { Toaster } from "react-hot-toast";


// Import JoinCreateChat component
// This component contains UI for joining or creating chat room
import JoinCreateChat from "./components/JoinCreateChat";



// This is App component
// It is the ROOT component of React application

function App() {

  return (

    // Main container div

    <div>


      {/* 
        Toaster component is used to display notifications

        position="top-right"
        → notification will appear at top right corner

        reverseOrder={false}
        → notifications will appear in normal order
      */}

      <Toaster position="top-right" reverseOrder={false} />



      {/* 
        JoinCreateChat component is called here

        This component will show:

        - Join Room
        - Create Room

        UI and functionality handled inside JoinCreateChat
      */}

      <JoinCreateChat />



    </div>

  );

}


// Export App component
// So it can be used in index.js

export default App;