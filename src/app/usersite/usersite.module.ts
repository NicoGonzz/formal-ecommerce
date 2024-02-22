import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersiteComponent } from './usersite.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    UsersiteComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    UsersiteComponent
  ]
})
export class UsersiteModule { }
