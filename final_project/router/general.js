const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  res.send(JSON.stringify({users}, null, 4));
  //return res.status(300).json({message: "Yet to be implemented"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
   // Extract the isbn parameter from the request URL
   const isbn = req.params.isbn;
   // Filter the users array to find books whose isbn matches the extracted email parameter
   let filtered_users = users.filter((user) => user.isbn === isbn);
   // Send the filtered_users array as the response to the client
   res.send(filtered_users);
  //return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
   // Extract the author parameter from the request URL
   const author = req.params.author;
   // Filter the users array to find books whose author matches the extracted email parameter
   let filtered_users = users.filter((user) => user.author === author);
   // Send the filtered_users array as the response to the client
   res.send(filtered_users);
 // return res.status(300).json({message: "Yet to be implemented"});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
   // Extract the author parameter from the request URL
   const title = req.params.title;
   // Filter the users array to find books whose title matches the extracted email parameter
   let filtered_users = users.filter((user) => user.author === title);
   // Send the filtered_users array as the response to the client
   res.send(filtered_users);
  //return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
   // Extract the review parameter from the request URL
   const isbn = req.params.isbn;
   // Filter the users array to find reviews whose isbn matches the extracted email parameter
   let filtered_users = users.filter((user) => user.isbn === isbn);
   // Send the filtered_users array as the response to the client
   res.send(filtered_users);
  //return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
