import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '@booksexplorerapp/models/book.interface';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';

@Component({
  selector: 'cn-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.scss']
})
export class BooksDetailsComponent implements OnInit {

  bookDetails$: Observable<Book>;
  isLoading$: Observable<boolean>;

  constructor(private route: ActivatedRoute, private booksService: BooksService) {
    this.bookDetails$ = this.booksService.selectedBook$;
    this.isLoading$ = this.booksService.isLoading$;
    this.booksService.fetchBookById(route.snapshot.params.id);
   }

  ngOnInit(): void {
  }

}
