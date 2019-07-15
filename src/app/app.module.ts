import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { CRUDComponent } from './crud/crud.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { AddFormComponent } from './add-form/add-form.component';
import { InfoTableComponent } from './info-table/info-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    CRUDComponent,
    EditFormComponent,
    AddFormComponent,
    InfoTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
