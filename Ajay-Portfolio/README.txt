AJAY PORTFOLIO - EMAILJS SETUP

1. Open index.html with VS Code Live Server.
2. Create an account at https://www.emailjs.com/
3. Add/connect your Gmail service in Email Services.
4. Create an EmailJS template with these variables:
   {{name}}
   {{email}}
   {{title}}
   {{message}}
5. Set the template recipient (To Email) to the Gmail address where you want to receive messages.
6. Copy your EmailJS Public Key, Service ID and Template ID.
7. Open script.js and replace:
   YOUR_PUBLIC_KEY
   YOUR_SERVICE_ID
   YOUR_TEMPLATE_ID
8. Save the file and test the Contact form.

IMPORTANT: Never put your Gmail password in this project.

The contact form fields use these names:
name, email, title, message

If email does not arrive, check your Gmail Spam folder and the EmailJS dashboard logs.
