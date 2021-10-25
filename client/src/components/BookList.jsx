import React from 'react'
import {gql,useQuery, } from '@apollo/client'

const getBooksQuery = gql`
    {
         books{
            name
            id
        }
    }
`
const BookList = () => {
    const { loading, error, data } = useQuery(getBooksQuery);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log(data)
    return (
        <>
            <ul id="book-list">
                <li>Books</li>
                <li>Books 2</li>
            </ul>
        </>
    )
}

export default BookList
