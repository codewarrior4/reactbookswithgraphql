import React from 'react'
import {gql,useQuery } from '@apollo/client'
import { getBooksQuery } from '../queries/queries';

const BookList = () => {
    const { loading, error, data } = useQuery(getBooksQuery);

    const displayBooks= () =>{
        if(loading){
            return (<div>Loading Books</div>)
        }
        if(error){
            return (<div>`An Error Occurred! ${error.message}`</div>)

        }
        if (data){
            return data.books.map(book =>{
                return(
                    <li key={book.id}>{book.name}</li>
                )
            })
        }
    }
    
    


    return (
        <>
            <ul id="book-list">
                {displayBooks()}
            </ul>
        </>
    )
}

export default BookList
