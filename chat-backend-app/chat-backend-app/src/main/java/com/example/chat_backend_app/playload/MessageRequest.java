package com.example.chat_backend_app.playload;

// Lombok annotation
// Automatically creates setter methods for all variables
// Example: setContent(), setSender(), setRoomId()
import lombok.Setter;


// Automatically creates getter methods
// Example: getContent(), getSender(), getRoomId()
import lombok.Getter;


// Automatically creates constructor with ALL fields
// Example:
// MessageRequest(String content, String sender, String roomId)
import lombok.AllArgsConstructor;


// Automatically creates EMPTY constructor
// Example:
// MessageRequest()
import lombok.NoArgsConstructor;


// This class is used to receive message data from frontend
// It acts as DTO (Data Transfer Object)

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MessageRequest {


    // This variable stores actual chat message

    // Example:
    // "Hello how are you?"

    private String content;



    // This variable stores sender name

    // Example:
    // "Shwetha"

    private String sender;



    // This variable stores Room ID

    // This tells which chat room message belongs to

    // Example:
    // "room123"

    private String roomId;


}