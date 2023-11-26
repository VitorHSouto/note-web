import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SignInComponent } from './sign-in.component';
import { signInRoutes } from './sign-in.routing';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(signInRoutes)
  ]
})
export class SignInModule { }
