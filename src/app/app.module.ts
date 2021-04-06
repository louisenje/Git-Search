import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ToggleComponent } from './toggle/toggle.component';
import { UserDetDirective } from './user-det.directive';
import { DateCountPipe } from './date-count.pipe';
import{ ServiceRequestService } from './service-http/service-request.service';
import { RouterModule,Routes } from '@angular/router';

const routes:Routes =[
  {path: 'input-name',component:UserDetailsComponent},
  {path: 'search-details',component:ToggleComponent},
  {path:'',redirectTo:'/search-details',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    ToggleComponent,
    UserDetDirective,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ServiceRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
