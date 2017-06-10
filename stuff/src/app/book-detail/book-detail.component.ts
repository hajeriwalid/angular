import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  providers: [BookService]
})


//Always export the component class because you'll always import it elsewhere.
export class BookDetailComponent implements OnInit {

  
  constructor(private bookService: BookService) { }

  //book: Book;

  ngOnInit() {
  }

  @Input() book: Book;

/*
  save(): void{
    this.bookService.update(this.book).then(() => this.goBack() );
  }

  delete(book): void{
    this.bookService.delete(this.book).then(() => this.goBack() );
  }
*/

}
