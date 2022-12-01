import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { IntegerType } from 'mongodb';

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

type book = {
  name: string;
  id: number;
  author: string;
};

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <ul>
        {data.map((book: book) => {
          return <li>{book.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default BookList;
