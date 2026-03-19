import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../../sevices/booksApi";

import { BookList } from "../BookList/BookList";

export const App = () => {
  const {
    data: books,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
    retry: 1,
  });

  return (
    <>
      <h1>Book List</h1>
      {books && books.length > 0 && <BookList books={books}></BookList>}
      {isLoading && <p>LOADING...</p>}
      {isError && <p>It`s an error..</p>}
    </>
  );
};
