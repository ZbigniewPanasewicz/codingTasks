# YMAA Event Submission Form

This project provides a simple web form for submitting information about upcoming YMAA (Yang's Martial Arts Association) events. The form allows users to input details about the event, including title, description, category, date, time, location, website, organizer information, cost, and relevant tags. Users can also upload an image file (JPG, JPEG, or PNG) related to the event.

## Features

- **User-friendly Form:** Easy-to-use interface for entering event information.
- **Image Upload:** Allows uploading an image file (JPG, JPEG, or PNG) up to a certain size limit (defined in your server's PHP configuration).
- **Input Validation:** Basic client-side and server-side validation to ensure data integrity and prevent common errors.
- **Email Notification:** Sends an email with the submitted event details and attached image to a specified recipient.
- **Error Handling:** Provides clear error messages for invalid input or file upload issues.

## Technologies Used

- **Frontend:** HTML, CSS (with `stylesheet.css`)
- **Backend:** PHP 
- **Email:** PHPMailer

## Installation

### Prerequisites

- **Web Server:** You'll need a web server (e.g., Apache, Nginx) with PHP installed.
- **PHP:** PHP version 7.0 or higher is required.
- **PHP Extensions:** Ensure the following PHP extensions are enabled:
    - `json` (usually enabled by default)
    - `mbstring` (usually enabled by default)
    - `openssl` (for encrypted email connections)
- **SMTP Server:** You'll need access to an SMTP server to send emails. This could be your own mail server or a third-party service (e.g., Gmail, SendGrid).

### Steps

1. **Clone or Download the Repository:**
   - Clone the repository using Git:
     ```bash
     git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
     ```
   - Or download the ZIP file and extract it to your web server's document root.

2. **Install PHPMailer:**
   - **Option 1: Using Composer (Recommended):**
      - If you have Composer installed on your server, navigate to your project directory in the terminal and run:
        ```bash
        composer require phpmailer/phpmailer
        ```
   - **Option 2: Manual Download:**
      - Download the PHPMailer library from GitHub: [https://github.com/PHPMailer/PHPMailer](https://github.com/PHPMailer/PHPMailer).
      - Extract the files to a `PHPMailer` folder in your project directory.

3. **Configure Email Settings in `display.php`:**
   - Open `display.php` in a text editor.
   - Find the section where you create a new `PHPMailer` instance.
   - Replace the placeholder values (`your_smtp_host`, `your_email_username`, `your_email_password`, etc.) with your actual SMTP server credentials.
   - Update `your_email_address` with the email address you want the event notification to be sent from.
   - Update `recipient_email_address` with the email address where you want to receive the notifications.

4. **Create "uploads" Folder:**
   - Create a folder named `uploads` in the same directory as your `display.php` file.

5. **Set File Permissions:**
   - Ensure that the `uploads` folder has write permissions (e.g., 755) so the PHP script can save uploaded files there.

## Usage

1. **Open the Form:** Open the HTML file (e.g., `index.html`) in your web browser.
2. **Fill Out the Form:** Enter the event details and choose an image to upload (optional).
3. **Submit the Form:** Click the "Submit" button.
4. **Check Email:** If successful, you should receive an email with the submitted event details and the attached image.

## Additional Notes

- This form includes basic input validation and file type restrictions for security.
- For production environments, consider adding more robust validation and security measures.
- This project is a basic template and can be easily customized to fit your specific needs.
