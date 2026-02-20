// Import React
// Required to create React component

import React from "react";



// Import Routes and Route from react-router

// Routes → container for all routes

// Route → defines individual route

// Used for navigation between pages without reloading browser

import { Routes, Route } from "react-router";



// Import App component

// This will be loaded when user visits "/"

import App from "../App";



// Import ChatPage component

// This will be loaded when user visits "/chat"

import ChatPage from "../components/ChatPage";




// Create AppRoutes component

// This component defines all application routes

const AppRoutes = () => {

  return (

    // Routes container

    <Routes>



      {/* 
         Route 1: Home Page

         URL:
         http://localhost:5173/

         element={<App />}

         means load App component
      */}

      <Route path="/" element={<App />} />




      {/* 
         Route 2: Chat Page

         URL:
         http://localhost:5173/chat

         element={<ChatPage />}

         loads ChatPage component
      */}

      <Route path="/chat" element={<ChatPage />} />




      {/* 
         Route 3: About Page

         URL:
         http://localhost:5173/about

         Displays simple text
      */}

      <Route path="/about" element={<h1>This is about page</h1>} />




      {/* 
         Route 4: 404 Page

         path="*" means

         If URL not found

         Example:
         /abc
         /xyz

         Show 404 error message
      */}

      <Route path="*" element={<h1>404 Page Not Found</h1>} />



    </Routes>

  );

};



// Export component

export default AppRoutes;