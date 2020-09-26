import { Book } from './book.interface';

export interface BookState {
  booksList: Book[];
  selectedBook: Book;
  isLoading: boolean;
  loadError: string;
}
