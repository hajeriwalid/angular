import { Component, OnInit } from '@angular/core';
//import { Book } from '../book-detail/book';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  title: String = "hello world from Listof Books";
  listofBooks: any[] = ["Book one","Book two","Book three"]; 
  constructor() { }

  ngOnInit() {
  }

}
