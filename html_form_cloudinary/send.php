<?php
error_reporting(E_ALL); // Enable all error reporting for development

// Set email addresses
$recipient_email = "your@email.com";
$cc_email = "other@email.com";
$sender_email = "sender@email.com";
$subject = "FORM Subject";

// Retrieve and sanitize form data
$title = isset($_POST['title']) ? htmlspecialchars($_POST['title']) : '';
$description = isset($_POST['description']) ? htmlspecialchars($_POST['description'])   
 : '';
$category = isset($_POST['category']) ? htmlspecialchars($_POST['category']) : '';
$date = isset($_POST['date']) ? htmlspecialchars($_POST['date']) : '';
$time = isset($_POST['time']) ? htmlspecialchars($_POST['time']) : '';
$location = isset($_POST['location']) ? htmlspecialchars($_POST['location']) : '';
$website = isset($_POST['website']) ? htmlspecialchars($_POST['website']) : '';
$organizer = isset($_POST['organizer']) ? htmlspecialchars($_POST['organizer']) : '';
$contact = isset($_POST['contact']) ? htmlspecialchars($_POST['contact']) : '';
$cost = isset($_POST['cost']) ? htmlspecialchars($_POST['cost']) : '';
$TAGS = isset($_POST['TAGS']) ? htmlspecialchars($_POST['TAGS']) : '';

// Get Cloudinary URL (assuming it's sent from the form)
$cloudinary_url = isset($_POST['cloudinary_url']) ? $_POST['cloudinary_url'] : '';

// Boundary for multipart email (optional if no direct file attachments)
$boundary = md5(time());

// Headers for multipart email 
$headers = "From: $sender_email\r\n";
$headers .= "Cc: $cc_email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

// Construct the email body
$message_body = "--$boundary\r\n";
$message_body .= "Content-Type: text/plain; charset=UTF-8\r\n";
$message_body .= "Content-Transfer-Encoding:   
 7bit\r\n\r\n";

$message_body   
 .= "New Event Submitted \n\n";
$message_body .= "Event Title: $title \n";
$message_body .= "Event Description: $description \n";
$message_body .= "Event Category: $category \n";
$message_body .= "Event Date: $date \n";
$message_body .= "Event Time: $time \n";
$message_body .= "Event Location: $location \n";
$message_body .= "Event Website: $website \n";
$message_body .= "Event Organizer: $organizer \n";
$message_body .= "Event Contact: $contact \n";
$message_body .= "Event Cost: $cost \n";
$message_body .= "Event TAGs: $TAGS \n";
$message_body .= "Event File: $cloudinary_url \n"; // Include Cloudinary URL

// No file attachment part needed since using Cloudinary

$message_body .= "--$boundary--"; 

// Send the email
if (mail($recipient_email, $subject, $message_body, $headers)) {
    echo "Email sent successfully with Cloudinary URL!";
} else {
    echo "Error sending email.";
    // Consider adding more robust error handling and logging here
}
?>











Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini AppsOpens in a new window

