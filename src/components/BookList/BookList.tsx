import { useMutation, useQueryClient } from "@tanstack/react-query";

import type { Book } from "../../types/Book";

import { BookListItem } from "../BookListItem/BookListItem";
import { deleteBook } from "../../sevices/booksApi";

import css from "./BookList.module.css";

interface Props {
  books: Book[];
}

export const BookList = ({ books }: Props) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteBook,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });

  const handleDelete = (id: Book["id"]) => {
    mutate(id);
  };

  return (
    <ul className={css.bookList}>
      {books.map(book => (
        <BookListItem
          key={book.id}
          book={book}
          onDelete={() => handleDelete(book.id)}
        />
      ))}
    </ul>
  );
};
