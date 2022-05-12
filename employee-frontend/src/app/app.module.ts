import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeformComponent } from './pages/employeeform/employeeform.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeetableComponent } from './pages/employeetable/employeetable.component';
import { ModalComponent } from './pages/modal/modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeformComponent,
    EmployeetableComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
