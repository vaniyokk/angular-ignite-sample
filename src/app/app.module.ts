import { IgxGridComponent } from 'igniteui-angular/grid/grid.component';
import { FormsModule, ReactiveFormsModule }          from '@angular/forms';
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
import { IgxGridModule, IgxDialogModule, IgxButtonModule, IgxCheckboxModule, IgxRippleModule, IgxLayoutModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxInputGroupModule } from 'igniteui-angular/main';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { InMemoryDataService }  from './in-memory-data.service';
import { DynamicFormComponent }         from './forms/dynamic-form/dynamic-form.component';
import { DynamicFormFieldComponent } from './forms/dynamic-form-field/dynamic-form-field.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    IgxDialogModule,
    IgxInputGroupModule,
    IgxGridModule.forRoot(),
    IgxNavigationDrawerModule,
    IgxNavbarModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxCheckboxModule,
    IgxButtonModule,
    IgxDialogModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    MessagesComponent,
    HeroSearchComponent,
    DynamicFormComponent,
    DynamicFormFieldComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
