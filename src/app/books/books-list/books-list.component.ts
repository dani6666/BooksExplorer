import { AfterContentInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Book } from '@booksexplorerapp/models/book.interface';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { SelectDirective } from 'src/app/shared/select.directive';
import { BooksItemComponent } from '../books-item/books-item.component';
import { BooksService } from '../books.service';

@Component({
  selector: 'cn-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit, AfterContentInit {

  @ViewChildren(BooksItemComponent) bookItems: QueryList<BooksItemComponent>;

  @ViewChild('searchInput', { static: true }) input: ElementRef;
    books$: Observable<Book[]>;
    isLoading$;
  constructor(private booksService: BooksService) {
    this.books$ = booksService.booksList$;
    this.isLoading$ = booksService.isLoading$;
    this.booksService.fetchBooks();
  }

  ngOnInit(): void {
    fromEvent(this.input.nativeElement, 'input')
    .pipe(
      debounceTime(400),
      map((ev: Event) => (ev.target as HTMLInputElement).value))
    .subscribe(q => this.booksService.fetchBooks(q));
  }

  ngAfterContentInit() {
    // this.bookItems.changes.subscribe(c => console.log(c))
  }



  toggleAllDescriptions() {
    this.bookItems.forEach(b => b.showDescription = !b.showDescription);
  }

}
