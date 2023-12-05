import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './modules/main/main.component';
import { HeaderComponent } from './modules/main/components/header/header.component';
import { FooterComponent } from './modules/main/components/footer/footer.component';
import { ListQueriesComponent } from './modules/main/components/list-queries/list-queries.component';
import { AskQueriesComponent } from './modules/main/components/ask-queries/ask-queries.component';
import { EditAnsQueriesComponent } from './modules/main/components/list-queries/components/edit-ans-queries/edit-ans-queries.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ListQueriesComponent,
    AskQueriesComponent,
    EditAnsQueriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
