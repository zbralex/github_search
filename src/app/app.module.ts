import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { SearchPersonService } from './services/search-person.service';
import { PersonTitlePipe } from './pipes/person-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PersonTitlePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [SearchPersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
