package com.example.chat_backend_app.repositories;

// Import Room entity class
// This is the document class mapped to MongoDB collection
import com.example.chat_backend_app.entities.Room;

// MongoRepository is provided by Spring Data MongoDB
// It provides built-in CRUD operations
// Example: save(), findById(), findAll(), delete(), etc.
import org.springframework.data.mongodb.repository.MongoRepository;



// This interface is used to interact with MongoDB database
// It acts as DAO (Data Access Object) layer

// MongoRepository<Room, String>

// Room → Entity class
// String → Type of Primary Key (@Id field)

public interface RoomRepository extends MongoRepository<Room, String> {


    // Custom Query Method

    // This method is used to find Room using roomId field

    // Spring automatically creates query based on method name

    // No need to write query manually

    // MongoDB Query created automatically:
    // db.room.find({ roomId: "value" })


    // Example use:
    // Room room = roomRepository.findByRoomId("abc123");


    // Returns:
    // Matching Room object


    // Method Naming Rule:
    // findBy + FieldName

    // Field Name must match entity field

    Room findByRoomId(String roomId);


}