import type { Book } from "../../types/Book";

import css from "./BookListItem.module.css";

interface Props {
  book: Book;
  onDelete: (id: Book["id"]) => void;
}

export const BookListItem = ({ book, onDelete }: Props) => {
  return (
    <li className={css.bookListItem}>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.year}</p>
      <p>{book.description}</p>
      <button onClick={() => onDelete(book.id)}>Delete</button>
    </li>
  );
};
