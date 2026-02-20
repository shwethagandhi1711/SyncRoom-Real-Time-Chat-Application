# SyncRoom-Real-Time-Chat-Application

# 📌 Project Overview

The SyncRoom-Real-Time Chat Application is a full-stack web application that enables multiple users to communicate instantly through chat rooms. Users can create a new room or join an existing room and exchange messages in real time. The application uses WebSocket technology for instant message delivery and MongoDB for storing chat history.

---

# 🎯 Project Objectives

* To enable real-time communication between multiple users
  
* To implement WebSocket-based messaging
  
* To allow users to create and join chat rooms
  
* To store chat messages for future access
  
* To provide a responsive and user-friendly interface

---

# 🧑‍💻 Technology Stack

## Frontend

* React JS

* React Router
  
* Axios
  
* SockJS
  
* STOMP.js

## Backend

* Spring Boot
  
* Spring WebSocket
  
* Spring Data MongoDB
  
* STOMP Protocol

## Database

* MongoDB

## Tools

* VS Code
  
* IntelliJ IDEA

---

# 🧩 Core Modules Description

## 1. Room Management Module

* Create a new chat room
  
* Join an existing chat room
  
* Validate room availability

## 2. Messaging Module

* Send messages
  
* Receive messages in real time
  
* Display message timestamp

## 3. WebSocket Communication Module

* Establish WebSocket connection
  
* Subscribe to chat room
  
* Broadcast messages

## 4. Message Storage Module

* Store messages in MongoDB
  
* Retrieve previous messages
  
* Display chat history

## 5. User Interface Module

* User input form
  
* Chat display interface
  
* Real-time message updates

---

# 🏗️ Workflow and Architecture

## Workflow

1. User enters username and room ID
  
2. User creates or joins room
   
3. WebSocket connection is established
   
4. User sends message
  
5. Backend receives message
  
6. Message stored in MongoDB
   
7. Message broadcast to all users in room
   
8. Users receive message instantly

---

## Architecture Diagram

```id="arch001"
Frontend (React)
       │
       │ WebSocket (SockJS + STOMP)
       ▼
Backend (Spring Boot)
       │
       ▼
Database (MongoDB)
```

---

# 🗄️ Database Design

## Database Name

chatapp

## Collection Name

rooms

## Room Document Structure

```json id="db001"
{
  "id": "MongoDB_ID",
  "roomId": "room123",
  "messages": [
    {
      "sender": "User1",
      "content": "Hello",
      "timeStamp": "2026-02-20T10:30:00"
    }
  ]
}
```

---

# ⚙️ Installation and Setup

## Prerequisites

* Java 17 or higher
* Node.js and npm
* MongoDB

---

## Step 1: Clone Repository

```bash id="inst001"
git clone https://github.com/shwethagandhi1711/SyncRoom-Real-Time-Chat-Application.git
cd realtime-chat-app
```

---

## Step 2: Start MongoDB

Make sure MongoDB is running:

```id="inst002"
mongodb://localhost:27017/chatapp
```

---

## Step 3: Run Backend

```bash id="inst003"
cd chat-backend-app
mvn spring-boot:run
```

Backend runs on:

```id="inst004"
http://localhost:8080
```

---

## Step 4: Run Frontend

```bash id="inst005"
cd front-chat
npm install
npm run dev
```

Frontend runs on:

```id="inst006"
http://localhost:5173
```

---

# ▶️ How to Use

1. Open browser and go to:

```id="use001"
http://localhost:5173
```

2. Enter your name

3. Enter room ID

4. Click:

* Create Room
  or
* Join Room

5. Start chatting in real time

6. Click Leave Room to exit

---

# 🌐 REST API Endpoints

## Create Room

POST

```id="api001"
/api/v1/rooms
```

Body:

```id="api002"
roomId
```

---

## Join Room

GET

```id="api003"
/api/v1/rooms/{roomId}
```

---

## Get Messages

GET

```id="api004"
/api/v1/rooms/{roomId}/messages
```

---

# 🗄️ Output

Refer sync_room_real_time_chat folder for output screenshots.

---

# ✅ Advantages

* Real-time communication
* Fast message delivery
* Stores chat history
* Supports multiple users
* Simple and user-friendly interface

---

# 🔮 Future Enhancements

* User authentication and authorization
* Private chat between users
* File and image sharing
* Typing indicator
* Online/offline status
* Message delete and edit
* Notifications

---

# 📌 Conclusion

The Real-Time Chat Application successfully demonstrates the implementation of real-time messaging using WebSocket technology. It integrates React frontend, Spring Boot backend, and MongoDB database to provide a scalable and efficient chat system. The application ensures instant message delivery, persistent storage, and smooth user experience, making it a strong example of a modern full-stack real-time web application.

---
