import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }});
        setBooks(response.data.books);
      } catch (error) {
        console.error("Error Encountered : ", error.message);
      }
    };
    getBooks()
  }, []);

  return (
    <>
    <div>
      <ul>
        {books.map((book) => (
          <div className="container">
            <div className="box">
            <h1>{book.title}</h1>
              <div className='img'>
                <img src={book.imageLinks.thumbnail} alt="" />
              </div>
              <div className='text'>
                <p>{book.description}</p>
              </div>
            </div>
            <div className="author">
              <p>{book.authors.join(",")}</p>
            </div>
          </div>
          
        ))}
      </ul>
    </div>
    </>
  )
}

export default App;