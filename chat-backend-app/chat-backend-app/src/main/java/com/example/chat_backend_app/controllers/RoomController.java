package com.example.chat_backend_app.controllers;


// Import Message entity
// Used to return messages of a room
import com.example.chat_backend_app.entities.Message;


// Import Room entity
// Used to create and fetch chat rooms
import com.example.chat_backend_app.entities.Room;


// Import Repository
// Used to communicate with MongoDB
import com.example.chat_backend_app.repositories.RoomRepository;


// Used to return HTTP response with status and body
// Example: 200 OK, 201 CREATED, 400 BAD REQUEST
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


// Marks this class as REST Controller
// Used for handling REST API requests
// Returns JSON response automatically
import org.springframework.web.bind.annotation.*;


// Used to store list of messages
import java.util.List;



// Marks this class as REST Controller
// Base URL: http://localhost:8080/api/v1/rooms

@RestController

@RequestMapping("/api/v1/rooms")

// Allow frontend connection
@CrossOrigin("http://localhost:5173")

public class RoomController {



    // Repository object to access database

    private RoomRepository roomRepository;



    // Constructor Injection
    // Spring automatically injects RoomRepository

    public RoomController(RoomRepository roomRepository) {

        this.roomRepository = roomRepository;

    }



    // ============================================
    // CREATE ROOM API
    // ============================================

    // POST Request:
    // http://localhost:8080/api/v1/rooms

    // Request Body:
    // room123

    @PostMapping

    public ResponseEntity<?> createRoom(@RequestBody String roomId) {



        // Check if room already exists

        if (roomRepository.findByRoomId(roomId) != null) {

            // If exists, return error

            return ResponseEntity
                    .badRequest()
                    .body("Room already exists!");

        }



        // Create new Room object

        Room room = new Room();



        // Set roomId

        room.setRoomId(roomId);



        // Save room in MongoDB

        Room savedRoom = roomRepository.save(room);



        // Return response with status 201 CREATED

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(room);

    }




    // ============================================
    // JOIN ROOM API
    // ============================================

    // GET Request:
    // http://localhost:8080/api/v1/rooms/room123

    @GetMapping("/{roomId}")

    public ResponseEntity<?> joinRoom(

            // Extract roomId from URL

            @PathVariable String roomId

    ) {



        // Find room in MongoDB

        Room room = roomRepository.findByRoomId(roomId);



        // If room not exists

        if (room == null) {

            return ResponseEntity
                    .badRequest()
                    .body("Room not found!!");

        }



        // Return room details

        return ResponseEntity.ok(room);

    }




    // ============================================
    // GET MESSAGES API
    // ============================================

    // GET Request:
    // http://localhost:8080/api/v1/rooms/room123/messages

    // With pagination:
    // ?page=0&size=20

    @GetMapping("/{roomId}/messages")

    public ResponseEntity<List<Message>> getMessages(

            // Extract roomId from URL

            @PathVariable String roomId,



            // Page number (default = 0)

            @RequestParam(value = "page", defaultValue = "0", required = false)
            int page,



            // Number of messages per page (default = 20)

            @RequestParam(value = "size", defaultValue = "20", required = false)
            int size

    ) {



        // Find room

        Room room = roomRepository.findByRoomId(roomId);



        // If room not exists

        if (room == null) {

            return ResponseEntity
                    .badRequest()
                    .build();

        }



        // Get all messages

        List<Message> messages = room.getMessages();



        // Pagination Logic


        // Calculate start index

        int start = Math.max(0, messages.size() - (page + 1) * size);



        // Calculate end index

        int end = Math.min(messages.size(), start + size);



        // Get paginated messages

        List<Message> paginatedMessages = messages.subList(start, end);



        // Return messages

        return ResponseEntity.ok(paginatedMessages);

    }



}