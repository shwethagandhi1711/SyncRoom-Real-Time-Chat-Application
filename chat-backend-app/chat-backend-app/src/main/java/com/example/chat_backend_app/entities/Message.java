package com.example.chat_backend_app.entities;

// Lombok annotation
// Creates constructor with ALL variables
// Example:
// Message(String sender, String content, LocalDateTime timeStamp)
import lombok.AllArgsConstructor;


// Creates EMPTY constructor
// Required by Spring Boot and MongoDB for object creation
// Example:
// Message()
import lombok.NoArgsConstructor;


// Creates Getter methods automatically
// Example:
// getSender()
// getContent()
// getTimeStamp()
import lombok.Getter;


// Creates Setter methods automatically
// Example:
// setSender()
// setContent()
// setTimeStamp()
import lombok.Setter;


// Used to store date and time
// Example: 2026-02-19 10:30:45
import java.time.LocalDateTime;



// This class represents a Chat Message
// It is used to store message details inside Room document (MongoDB)

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Message {


    // Stores sender name

    // Example:
    // "Shwetha"

    private String sender;



    // Stores actual message content

    // Example:
    // "Hello how are you?"

    private String content;



    // Stores message sending time

    // Example:
    // 2026-02-19T10:30:45

    private LocalDateTime timeStamp;



    // Custom Constructor

    // This constructor automatically sets current time

    // Used when creating new message

    // Example:
    // Message msg = new Message("Shwetha", "Hello");

    public Message(String sender, String content) {

        // Assign sender name
        this.sender = sender;

        // Assign message content
        this.content = content;

        // Automatically assign current date and time
        this.timeStamp = LocalDateTime.now();
    }


}