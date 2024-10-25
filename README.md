<h1>Contact Management System API </h1><br />
A RESTful API for managing contacts, complete with user authentication, advanced contact features, and file handling capabilities.

<h1>Project Overview<h1><br />
This API allows users to manage a contact list with the following functionalities:<br />
User Authentication with JWT<br />
Contact Management (CRUD operations)<br />
Bulk Uploads via CSV/Excel files<br />
Timezone and date handling for timestamps<br />

Features
User Authentication

Registration, login, and email verification
Password reset with one-time code
Contact Management

<p>CRUD operations with sorting, filtering, and soft delete
Batch processing for multiple contacts
File Handling</p>

CSV/Excel file upload for bulk contact creation
Download contact data as CSV/Excel
Date-Time and Timezone Support

Store timestamps in UTC and convert to user’s timezone

Installation
Clone the repository:

git clone https://github.com/YASHWANTH2601/cms
cd contact-management-system
Install dependencies:

npm install
Set up the Environment Variables (see Environment Variables).

Start the MongoDB service (or use MongoDB Atlas if using a cloud database).

Environment Variables
Create a .env file in the root directory with the following variables:

MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
EMAIL_HOST=smtp.your-email-provider.com
EMAIL_PORT=587
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password

API Documentation
The API documentation is provided via Postman.

Download Postman Collection: Postman Collection Link

Endpoints Overview:

Authentication:
POST /api/register – Register a new user
POST /api/login – Login a user
POST /api/verify-email – Verify email
Contacts:
POST /api/contacts – Create a new contact
GET /api/contacts – List all contacts with filters
PUT /api/contacts/:id – Update a contact
DELETE /api/contacts/:id – Soft delete a contact

Database Setup & Migrations
Initialize the Database:

Connect to MongoDB by setting MONGODB_URI in .env file.
The database schema and indexes will be created automatically on the first run.
Migrations (Optional):

Use MongoDB's built-in mongo shell or a tool like Mongoose for advanced schema migrations if needed.
