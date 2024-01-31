import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetapiComponent } from './getapi/getapi.component';
import { HttpClientModule } from '@angular/common/http';
import { GetapiWithButtonComponent } from './getapi-with-button/getapi-with-button.component';
import { PostapiComponent } from './postapi/postapi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
import { DeleteapiserviceService } from './deleteapiservice.service';
import { UpdateapiComponent } from './updateapi/updateapi.component';
import { EmailsenderComponent } from './emailsender/emailsender.component';
import { EmailserviceService } from './emailservice.service';

@NgModule({
  declarations: [
    AppComponent,
  
    GetapiComponent,
    GetapiWithButtonComponent,
    PostapiComponent,
    DeleteComponent,
    UpdateapiComponent,
    EmailsenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DeleteapiserviceService,EmailserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
