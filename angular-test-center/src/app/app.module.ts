import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import { NavbarComponent } from './navbar/navbar.component';
import { UsListComponent } from './us-list/us-list.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { UsEditComponent } from './us-edit/us-edit.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [ 
  { path: '',  redirectTo: '/us-list',  pathMatch: 'full'},
  { path: 'us-list', component: UsListComponent },
  { path: 'us-edit', component:UsEditComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsListComponent,
    UsEditComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenuModule,
    ButtonModule,
    InputTextModule,
    PanelModule,
    DropdownModule,
    InputTextareaModule,
    CalendarModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
