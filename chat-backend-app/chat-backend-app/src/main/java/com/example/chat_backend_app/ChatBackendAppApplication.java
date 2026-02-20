package com.example.chat_backend_app;

// This is the main Spring Boot starter class package
// All components inside this package and sub-packages
// will be automatically scanned by Spring Boot



// Import SpringApplication class
// This class is used to launch the Spring Boot application
import org.springframework.boot.SpringApplication;


// Import SpringBootApplication annotation
// This is the main annotation that enables Spring Boot features
import org.springframework.boot.autoconfigure.SpringBootApplication;



// @SpringBootApplication is a combination of 3 important annotations:

// 1. @Configuration
// Marks this class as a configuration class
// It contains bean definitions


// 2. @EnableAutoConfiguration
// Automatically configures Spring Boot based on dependencies
// Example:
// If MongoDB dependency present → configures MongoDB automatically
// If WebSocket dependency present → configures WebSocket automatically


// 3. @ComponentScan
// Scans all components in this package and sub-packages
// Example:
// Controllers
// Services
// Repositories

@SpringBootApplication
public class ChatBackendAppApplication {



    // This is the main method
    // This is the entry point of your Spring Boot application

    public static void main(String[] args) {



        // SpringApplication.run() starts the Spring Boot application


        // What happens internally:


        // Step 1:
        // Spring Boot starts application


        // Step 2:
        // Creates Spring Container (IOC Container)


        // Step 3:
        // Scans all components
        // Controllers
        // Repositories
        // Config classes


        // Step 4:
        // Connects MongoDB


        // Step 5:
        // Starts embedded server (Tomcat)


        // Step 6:
        // Application runs on default port 8080



        SpringApplication.run(ChatBackendAppApplication.class, args);

    }

}