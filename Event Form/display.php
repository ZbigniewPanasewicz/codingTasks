<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylesheet.css">
    <title>Display Event Information</title>
</head>
<body>
    <div class="container">
    <form action="display.php" method="POST" enctype="multipart/form-data">
    

        <h2>Event Information:</h2>

        <?php
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';



        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Sanitize input (example with htmlspecialchars)
            $title = htmlspecialchars($_POST["event-title"]);
            $description = htmlspecialchars($_POST["event-description"]);
            $category = isset($_POST['category']) ? htmlspecialchars($_POST['category']) : "Not selected";
            $date = htmlspecialchars($_POST["event-date"]);
            $time = htmlspecialchars($_POST["event-time"]);
            $location = htmlspecialchars($_POST["event-location"]);
            $website = htmlspecialchars($_POST["event-website"]);
            $organizer = htmlspecialchars($_POST["event-organizer"]);
            $organizer_contact = htmlspecialchars($_POST["event-organizer-contact"]);
            $cost = htmlspecialchars($_POST["event-cost"]);
            $tags = htmlspecialchars($_POST["event-TAGS"]);

          // Handle file upload (if a file was selected)
          if (isset($_FILES['event-file']) && $_FILES['event-file']['error'] === UPLOAD_ERR_OK) {
            $fileName = $_FILES['event-file']['name'];
            $tmpFilePath = $_FILES['event-file']['tmp_name'];
            $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
    
            // Allowed file types
            $allowedExtensions = array('jpg', 'jpeg', 'png');
    
            if (in_array($fileExtension, $allowedExtensions)) {
                $destinationPath = 'uploads/' . $fileName;
                if (move_uploaded_file($tmpFilePath, $destinationPath)) {
                    // File uploaded successfully
                } else {
                    $errors[] = "Error uploading file.";
                }
            } else {
                $errors[] = "Invalid file type. Only JPG, JPEG, and PNG files are allowed.";
            }
        } else {
            // Handle file upload errors (optional)
            switch ($_FILES['event-file']['error']) {
                case UPLOAD_ERR_INI_SIZE:
                case UPLOAD_ERR_FORM_SIZE:
                    $errors[] = "File size exceeds allowed limit.";
                    break;
                case UPLOAD_ERR_PARTIAL:
                    $errors[] = "File was only partially uploaded.";
                    break;
                case UPLOAD_ERR_NO_TMP_DIR:
                    $errors[] = "Missing a temporary folder.";
                    break;
                case UPLOAD_ERR_CANT_WRITE:
                    $errors[] = "Failed to write file to disk.";
                    break;
                //  UPLOAD_ERR_NO_FILE is handled elsewhere
                default:
                    $errors[] = "Unknown file upload error.";
                    break;
            }
        }
            // Display errors or data
            if (!empty($errors)) {
                echo "<ul>";
                foreach ($errors as $error) {
                    echo "<li>$error</li>";
                }
                echo "</ul>";
            } else {
                // Display the sanitized data (replace with database insertion)
                echo "<h2>Event Details:</h2>";
                echo "<p><strong>Title:</strong> $title</p>"; 
                echo "<p><strong>Description:</strong> $description</p>";
                echo "<p><strong>Category:</strong> $category</p>";
                echo "<p><strong>Date:</strong> $date</p>";
                echo "<p><strong>Start Time:</strong> $time</p>";
                echo "<p><strong>Location:</strong> $location</p>";
                echo "<p><strong>Website:</strong> $website</p>";
                echo "<p><strong>Organizer:</strong> $organizer</p>";
                echo "<p><strong>Contact:</strong> $organizer_contact</p>"; // Corrected variable name
                echo "<p><strong>Cost:</strong> $cost</p>";
                echo "<p><strong>Tags:</strong> $tags</p>";
           // Display the filename here after Tags -- MOVED HERE
           if (isset($fileName)) {
            echo "<p><strong>File:</strong> $fileName</p>"; 
        }
    }
} else {
    echo "<p>No data submitted.</p>";
}

if (!empty($errors)) {
    // ... (error display logic) ...
} else {
    // Email Sending Logic
    $mail = new PHPMailer(true); // Enable exceptions

    try {
        // Server settings (configure these based on your email setup)
        $mail->isSMTP();
        $mail->Host = 'your_smtp_host'; // Replace with your SMTP host
        $mail->SMTPAuth = true;
        $mail->Username = 'your_email_username'; // Replace with your email username
        $mail->Password = 'your_email_password'; // Replace with your email password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Or PHPMailer::ENCRYPTION_STARTTLS
        $mail->Port = 465; // Or 587 if using STARTTLS

        // Recipients
        $mail->setFrom('your_email_address', 'Your Name'); // Replace with your email
        $mail->addAddress('recipient_email_address'); // Replace with recipient's email

        // Content
        $mail->isHTML(false); // Set email format to HTML (or true if you want HTML)
        $mail->Subject = 'New YMAA Event: ' . $title;

        // Compose email body
        $body = "Event Title: $title\n\n";
        $body .= "Description: $description\n\n";
        $body .= "Category: $category\n\n";
        $body .= "Event date: $date\n\n";
        $body .= "Event time: $time\n\n";
        $body .= "Event location: $location\n\n";
        $body .= "Event website: $website\n\n";
        $body .= "Event Organizer: $organizer\n\n";
        $body .= "Organizer contact: $organizer_contact\n\n";
        $body .= "Event cost: $cost\n\n";
        $body .= "Event TAGS: $tags\n\n";


        $mail->Body = $body;
    
        // Add file attachment (if it was uploaded)
        if (isset($destinationPath)) {
            $mail->addAttachment($destinationPath, $fileName); 
        }
    
        $mail->send();
        echo '<h2>Event Submitted Successfully!</h2>';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}

?>
<button type="button" onclick="history.back()">Back</button>
<button type="submit">Submit</button>
</form></div>
</body>
</html>