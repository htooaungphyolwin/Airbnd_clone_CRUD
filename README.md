# Airbnb Clone Project

This project is a simple Airbnb clone built using **Express.js**, **MongoDB**, and **Mongoose**. It allows users to create, read, update, and delete (CRUD) listings for properties. The application is designed to mimic basic functionality similar to Airbnb, where users can view property listings, add new listings, edit existing ones, and delete listings.

---

## **Features**

- **Create Listings**: Users can add new property listings with details such as title, description, price, and location.
- **View Listings**: All listings are displayed on the homepage, and users can click on a listing to view its details.
- **Edit Listings**: Users can update the details of existing listings.
- **Delete Listings**: Users can remove listings from the database.
- **Responsive Design**: The application uses EJS templates for rendering views and supports basic styling with CSS.

---

## **Technologies Used**

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose for ODM)
- **Frontend**: EJS (Embedded JavaScript templates)
- **Styling**: CSS
- **Other Tools**:
  - `method-override`: To handle PUT and DELETE requests in HTML forms.
  - `ejs-mate`: For EJS layout support.

---

## **Setup Instructions**

### **Prerequisites**

1. **Node.js**: Make sure Node.js is installed on your machine. You can download it from [here](https://nodejs.org/).
2. **MongoDB**: Install MongoDB locally or use a cloud-based MongoDB service like MongoDB Atlas.
3. **Git**: Install Git to clone the repository.

### **Steps to Run the Project**

1. **Clone the Repository**:

```bash
   git clone https://github.com/htooaungphyolwin/Airbnd_clone_CRUD.git
   cd Airbnd_clone_CRUD
```

2. **Install Dependencies**:

```bash
npm install
Set Up MongoDB:
```
3. **Set Up MongoDB**:

- Start your local MongoDB server or configure a cloud-based MongoDB connection.

- Update the MongoDB connection string in the main() function in app.js:

```javascript
await mongoose.connect("mongodb://127.0.0.1:27017/airbnb");
```

4. **Run the Application**:

```bash
node app.js
```

- The server will start on port 3000. Open your browser and navigate to http://localhost:3000.

## Folder Structure

```
airbnb-clone/
├── models/
│   └── listing.js          # Mongoose model for listings
├── views/
│   ├── listings/           # EJS templates for listings
│   │   ├── index.ejs       # List all listings
│   │   ├── new.ejs         # Form to create a new listing
│   │   ├── show.ejs        # Show details of a single listing
│   │   └── edit.ejs        # Form to edit a listing
│   └── includes/           # Partial EJS templates (e.g., header, footer)
|   └── layouts/            # EJS-mate boilerplate 
├── public/
│   └── css/                # CSS files for styling
├── app.js                  # Main application file
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

##Routes

| HTTP Method | Route                | Description                          |
|-------------|----------------------|--------------------------------------|
| GET         | `/`                  | Home page (displays "Hello World").  |
| GET         | `/listings`          | List all property listings.          |
| GET         | `/listings/new`      | Display form to create a new listing.|
| POST        | `/listings`          | Create a new listing.                |
| GET         | `/listings/:id`      | Show details of a specific listing.  |
| GET         | `/listings/:id/edit` | Display form to edit a listing.      |
| PUT         | `/listings/:id`      | Update a specific listing.           |
| DELETE      | `/listings/:id`      | Delete a specific listing.           |

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bugfix.

3. Commit your changes and push them to your fork.

4. Submit a pull request with a detailed description of your changes.

## Acknowledgments

- Inspired by Airbnb's functionality.
- Built with the help of Express.js and Mongoose documentation.

## Contact
For any questions or feedback, feel free to reach out.
