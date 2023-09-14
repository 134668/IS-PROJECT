<?php
include('connect.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = $_POST["first_name"];
    $first_name = $_POST["first_name"];
    $first_name = $_POST["first_name"];
    
    // Retrieve other form field values (second name, email, username, etc.)

    // You should also validate and sanitize user inputs here

    // Insert the user data into the database
    $sql = "INSERT INTO users (first_name, second_name, email, username, password, licence_number) 
            VALUES ('$first_name', '$second_name', '$email', '$username', '$password', '$licence_number')";

    if ($conn->query($sql) === TRUE) {
        // Registration was successful
        echo "Registration successful!";
    } else {
        // Handle database insertion error
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
}
?>






