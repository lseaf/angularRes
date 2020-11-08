import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from "@angular/router";
import { AuthService } from './core/auth.service';
import { TodoComponent } from './todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path : 'login',
        component : LoginComponent
      },
      {
        path : 'todo',
        component : TodoComponent
      },
      {
        path : '',
        redirectTo : 'todo',
        pathMatch : 'full'
      }
    ])
  ],
  providers: [
    { 
      provide : 'auth',
      useClass : AuthService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }