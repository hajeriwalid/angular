import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';


import { AppComponent } from './app.component';
import { SearchItemsComponent } from './search-items/search-items.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

RouterModule.forRoot([
  {
    path: 'listbooks',
    component: ListBooksComponent
  }
])

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
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      {
        path: 'listbooks',
        component: ListBooksComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
