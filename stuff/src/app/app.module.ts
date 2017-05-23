import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchItemsComponent } from './search-items/search-items.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ListBooksComponent } from './list-books/list-books.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchItemsComponent,
    BookDetailComponent,
    ListBooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
