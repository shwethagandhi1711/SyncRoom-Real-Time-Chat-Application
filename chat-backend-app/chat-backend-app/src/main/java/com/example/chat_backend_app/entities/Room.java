package com.example.chat_backend_app.entities;


// Lombok annotation
// Automatically creates constructor with all variables
// Example:
// Room(String id, String roomId, List<Message> messages)
import lombok.AllArgsConstructor;


// Automatically creates Getter methods
// Example:
// getId()
// getRoomId()
// getMessages()
import lombok.Getter;


// Automatically creates Empty constructor
// Required by Spring Boot and MongoDB
// Example:
// Room()
import lombok.NoArgsConstructor;


// Automatically creates Setter methods
// Example:
// setId()
// setRoomId()
// setMessages()
import lombok.Setter;


// Marks this field as Primary Key in MongoDB
// MongoDB uses this as unique identifier
import org.springframework.data.annotation.Id;


// Marks this class as MongoDB Document (Collection)
// Means this class will be stored in MongoDB
// collection = "rooms" → MongoDB collection name
import org.springframework.data.mongodb.core.mapping.Document;


// Used to store list of messages
import java.util.ArrayList;
import java.util.List;



// This class represents Chat Room
// This class will be stored as collection in MongoDB

@Document(collection = "rooms")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Room {


    // This is Primary Key

    // MongoDB automatically generates unique id

    // Example:
    // "65f8a9c123abc456"

    @Id
    private String id;



    // This is custom Room ID

    // This is used by users to join room

    // Example:
    // "room123"

    private String roomId;



    // This stores all messages of this room

    // List<Message> → multiple messages

    // Example:
    // [
    //   {sender: "Shwetha", content: "Hello"},
    //   {sender: "John", content: "Hi"}
    // ]

    // new ArrayList<>() → creates empty list initially

    private List<Message> messages = new ArrayList<>();


}