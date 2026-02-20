// Import StrictMode from React
// StrictMode is used to detect potential problems in application
// It helps in development mode only
// It does NOT affect production
import { StrictMode } from "react";



// Import createRoot from react-dom/client
// createRoot is used to render React application into HTML DOM
// It is part of React 18 (new rendering method)
import { createRoot } from "react-dom/client";



// Import global CSS file
// This file contains Tailwind CSS and custom styles
import "./index.css";



// Import BrowserRouter
// BrowserRouter enables routing in React application
// It allows navigation between pages without refreshing
// Example:
// / → Home page
// /chat → Chat page
import { BrowserRouter } from "react-router-dom";



// Import AppRoutes
// This file contains all route definitions
// Example:
// "/" → Join page
// "/chat" → Chat page
import AppRoutes from "./config/Routes.jsx";



// Import Toaster
// Toaster is used to show notification messages
// Example:
// success message
// error message
import { Toaster } from "react-hot-toast";



// Import ChatProvider
// ChatProvider is Context Provider
// It stores global data like:

// roomId
// currentUser
// connection status

import { ChatProvider } from "./context/ChatContext.jsx";




// createRoot connects React with HTML file

createRoot(document.getElementById("root")).render(

  // StrictMode wrapper
  // Helps identify problems during development
  <StrictMode>


    {/* BrowserRouter enables routing */}
    <BrowserRouter>


      {/* Toaster used to show popup messages */}
      <Toaster position="top-center" />



      {/* ChatProvider provides global state */}
      {/* All components inside this can access chat data */}
      <ChatProvider>



        {/* AppRoutes contains all page routes */}
        <AppRoutes />


      </ChatProvider>


    </BrowserRouter>


  </StrictMode>

);