import React from 'react'
import {ApolloClient,ApolloProvider,InMemoryCache} from "@apollo/client";
import BookList from './components/BookList'
import AddBook from './components/AddBook';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri:"http://localhost:4000/graphql"
})
const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App" id="main">
        <h1>Warrior's Reading List</h1>

        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  )
}

export default App
