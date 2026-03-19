import axios from "axios";
import type { Book } from "../types/Book";

const BASE_URL = "https://6971cf4a32c6bacb12c49096.mockapi.io";

const booksApi = axios.create({
  baseURL: BASE_URL,
});

export const getBooks = async () => {
  const { data } = await booksApi.get<Book[]>("/books");
  return data.filter(book => book.id != "67");
};

export const deleteBook = async (id: Book["id"]) => {
  const { data } = await booksApi.delete<Book>(`/books/${id}`);
  return data;
};
