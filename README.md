# E-Learning-Platform
A backend API for an E-Learning Platform built with Node.js, Express.js, MongoDB, and tested using Postman. It allows user authentication, course management, and category-based access to learning content.

## 🚀 Technologies Used

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework for Node.js
- **MongoDB** – NoSQL database for storing data
- **Mongoose** – MongoDB ODM for Node.js
- **Postman** – API testing and debugging tool

💾 Database

> MongoDB is used as the backend database.
> Collections: users, courses, categories.

Run the Server:

> nodemon app.js
      or
> node app.js


🔌 API Endpoints
Method	       Endpoint	               Description
GET	         /categories	          Get all categories
POST	       /categories	          Add a new category
GET	         /courses	               List all courses
POST	      /auth/register	         Register new user
POST	      /auth/login	                Login user

✅ Features

> RESTful API structure

> Modular route handling

> CRUD operations for categories & courses

> Connected to MongoDB via Mongoose

> Tested using Postman

