import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ToggleComponent } from './toggle/toggle.component';
import { UserDetDirective } from './user-det.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    ToggleComponent,
    UserDetDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
