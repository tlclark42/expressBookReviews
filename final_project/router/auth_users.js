const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
if (username === 'user' && password === 'password') {
    req.session.user = username;  // Store user information in session
    res.send('Logged in successfully');
  } else {
    res.send('Invalid credentials');
  }
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  //Write your code here
  const user = req.body.user;
    if (!user) {
        return res.status(404).json({ message: "Body Empty" });
    }

    
    // Generate JWT access token
    let accessToken = jwt.sign({
        data: user
    }, 'access', { expiresIn: 60 * 60 });
    // Store access token in session
    req.session.authorization = {
        accessToken
    }
    return res.status(200).send("User successfully logged in");
  //return res.status(300).json({message: "Yet to be implemented"});
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  //return res.status(300).json({message: "Yet to be implemented"});
   // Extract isbn parameter and find users with matching isbn
    const email = req.params.isbn;
    let filtered_users = books.filter((user) => user.isbn === isbn);
    
    if (filtered_users.length > 0) {
        // Select the first matching user and update attributes if provided
        let filtered_user = filtered_users[0];
        
         // Extract and update DOB if provided
        
        let reviews = req.query.reviews;    
        if (reviews) {
            filtered_user.reviews = reviews;
        }
        
        /*
        Include similar code here for updating other attributes as needed
        */
        
        // Replace old user entry with updated user
        books = books.filter((user) => user.isbn != isbn);
        books.push(filtered_user);
        
        // Send success message indicating the user has been updated
        res.send(`Book with the isbn ${isbn} updated.`);
    } else {
        // Send error message if no user found
        res.send("Unable to find book!");
    }
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
