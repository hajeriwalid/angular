import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';



@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css'],
  providers: [BookService]
})


export class ListBooksComponent implements OnInit {

  title: String = "hello world from Listof Books";

  constructor(private bookService: BookService) { }

  listofBooks = this.bookService.getBooks().then(listofBooks => this.listofBooks = listofBooks);

  selectedBook: Book;

  onSelect(book: Book): void {
    this.selectedBook = book;
  }


  ngOnInit() {
  }

}
