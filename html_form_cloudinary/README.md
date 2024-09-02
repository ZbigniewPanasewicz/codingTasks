This repository contains the HTML form and PHP backend for submitting events to a designated email address. It utilizes Cloudinary for file uploads.

How it works
HTML Form (index.html):

The form allows users to input details about an event, including title, description, category, date, time, location, website, organizer, contact, cost, and tags.
A Cloudinary upload widget is integrated to allow users to upload a file associated with the event (e.g., a flyer or poster).
PHP Backend (send.php):

This script receives the form data via POST.
It sanitizes the input to prevent security vulnerabilities.
The Cloudinary URL of the uploaded file is included in the email.
The event details are formatted into a plain text email and sent to the specified email address.
Setup
Cloudinary Integration:

Create a Cloudinary account and obtain your cloudName and uploadPreset.
Replace the placeholders in the HTML form's JavaScript with your actual Cloudinary credentials.
PHP Configuration:

Ensure your server has PHP installed and configured to send emails.
Update the $recipient_email, $cc_email, and $sender_email variables in send.php with the correct email addresses.
File Structure:

Place index.html and send.php in the same directory on your web server.
If you have a custom CSS file (styles.css), also place it in the same directory.
Usage
Open index.html in a web browser.
Fill out the form with event details.
Use the Cloudinary upload widget to upload a file.
Click the "SUBMIT" button.
If successful, you will see a confirmation message, and the email will be sent.
Important Notes
This is a basic implementation for demonstration purposes. Consider adding more robust error handling, validation, and security measures for production use.
You may want to customize the email template in send.php to match your specific needs.
Make sure to test the form thoroughly before deploying it to a live environment.