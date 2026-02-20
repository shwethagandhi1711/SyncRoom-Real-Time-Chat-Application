package com.example.chat_backend_app.controllers;


// Import Message Entity
// Used to create and store chat message
import com.example.chat_backend_app.entities.Message;


// Import Room Entity
// Used to store messages inside room
import com.example.chat_backend_app.entities.Room;


// Import DTO class
// Used to receive data from frontend
import com.example.chat_backend_app.playload.MessageRequest;


// Import Repository
// Used to communicate with MongoDB
import com.example.chat_backend_app.repositories.RoomRepository;


// Used to extract roomId from URL
// Example: /sendMessage/room123 → room123 extracted
import org.springframework.messaging.handler.annotation.DestinationVariable;


// Used to receive message from client
// Example: /app/sendMessage/room123
import org.springframework.messaging.handler.annotation.MessageMapping;


// Used to send message to subscribed clients
// Example: /topic/room/room123
import org.springframework.messaging.handler.annotation.SendTo;


// Marks this class as Controller
// Handles WebSocket requests
import org.springframework.stereotype.Controller;


// Allows frontend to connect (CORS)
// Frontend URL allowed: http://localhost:5173
import org.springframework.web.bind.annotation.CrossOrigin;


// Used to receive JSON data from frontend
import org.springframework.web.bind.annotation.RequestBody;


// Used to store current date and time
import java.time.LocalDateTime;



// Controller class handles chat messaging logic

@Controller

// Allow requests from frontend
@CrossOrigin("http://localhost:5173")

public class ChatController {



    // Repository object used to access MongoDB

    private RoomRepository roomRepository;



    // Constructor Injection

    // Spring automatically injects RoomRepository

    public ChatController(RoomRepository roomRepository) {

        this.roomRepository = roomRepository;
    }




    // This method handles sending and receiving messages

    // MessageMapping means:

    // Client sends message to:

    // /app/sendMessage/roomId

    // Example:
    // /app/sendMessage/room123


    @MessageMapping("/sendMessage/{roomId}")



    // SendTo means:

    // Server sends message to:

    // /topic/room/roomId

    // All subscribed clients receive message

    // Example:
    // /topic/room/room123

    @SendTo("/topic/room/{roomId}")



    public Message sendMessage(

            // Extract roomId from URL

            // Example:
            // /sendMessage/room123 → roomId = room123

            @DestinationVariable String roomId,



            // Receive message from frontend

            // Example JSON:
            // {
            //   "content": "Hello",
            //   "sender": "Shwetha",
            //   "roomId": "room123"
            // }

            @RequestBody MessageRequest request
    ) {



        // Find room from database using roomId

        Room room = roomRepository.findByRoomId(request.getRoomId());



        // Create new Message object

        Message message = new Message();



        // Set message content

        message.setContent(request.getContent());



        // Set sender name

        message.setSender(request.getSender());



        // Set current time

        message.setTimeStamp(LocalDateTime.now());



        // Check room exists or not

        if (room != null) {



            // Add message to room message list

            room.getMessages().add(message);



            // Save updated room to MongoDB

            roomRepository.save(room);

        }

        else {

            // Throw error if room not found

            throw new RuntimeException("room not found !!");

        }



        // Return message

        // This message will be sent to subscribed clients

        return message;


    }

}