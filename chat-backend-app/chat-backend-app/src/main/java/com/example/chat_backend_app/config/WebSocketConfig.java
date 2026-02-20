package com.example.chat_backend_app.config;

// Marks this class as a Spring Configuration class.
// Spring will read this class and apply the configurations defined here.
import org.springframework.context.annotation.Configuration;

// Used to configure message broker options like topics and prefixes.
import org.springframework.messaging.simp.config.MessageBrokerRegistry;

// Enables WebSocket message handling and activates message broker.
// This is REQUIRED to use WebSocket with STOMP in Spring Boot.
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;

// Used to register WebSocket endpoints (connection URLs).
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;

// Interface that provides methods to configure WebSocket message handling.
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;


@Configuration  // Tells Spring that this is a configuration class
@EnableWebSocketMessageBroker // Enables WebSocket + Message Broker + STOMP
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {


    // This method is used to configure Message Broker
    // Message Broker is responsible for sending messages from server to clients
    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {

        // enableSimpleBroker enables a simple in-memory message broker
        // "/topic" is used for sending messages from server → client

        // Example:
        // Server sends message → /topic/messages
        // Client subscribes → /topic/messages

        config.enableSimpleBroker("/topic");


        // This prefix is used for messages coming from client → server

        // Example:
        // Client sends message → /app/chat
        // Server handles using:
        // @MessageMapping("/chat")

        config.setApplicationDestinationPrefixes("/app");

    }



    // This method is used to register WebSocket connection endpoint
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {

        registry.addEndpoint("/chat")

                // This is the URL where WebSocket connection is established

                // Example frontend connection:
                // const socket = new SockJS("http://localhost:8080/chat");

                // Allow frontend running on this origin to connect
                .setAllowedOrigins("http://localhost:5173")

                // Enables SockJS fallback
                // SockJS helps if browser does not support WebSocket
                // It uses alternative protocols like HTTP polling

                .withSockJS();
    }


}