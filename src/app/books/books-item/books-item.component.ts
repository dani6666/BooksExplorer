import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.interface';

@Component({
  selector: 'cn-books-item',
  templateUrl: './books-item.component.html',
  styleUrls: ['./books-item.component.scss']
})
export class BooksItemComponent implements OnInit {

  @Input() book: Book;

  showDescription = false;
  constructor() { }

  ngOnInit(): void {
  }

}
