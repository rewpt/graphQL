import React from 'react';
import BookList from './components/BookList';
import { useQuery, gql } from '@apollo/client';

function App() {
  return (
    <div className="App" id="main">
      <h1>My reading list</h1>
      <BookList />
    </div>
  );
}

export default App;
