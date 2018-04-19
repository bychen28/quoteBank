import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { AllComponent } from './all/all.component';
import { EditComponent } from './edit/edit.component';
import { HttpService } from './http.service';
import { ViewQuoteComponent } from './view-quote/view-quote.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';


@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    AllComponent,
    EditComponent,
    ViewQuoteComponent,
    NewQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
