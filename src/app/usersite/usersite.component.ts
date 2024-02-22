import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usersite',
  templateUrl: './usersite.component.html',
  styleUrl: './usersite.component.scss'
})
export class UsersiteComponent {
  constructor(private fb: FormBuilder){}
  formulario!: FormGroup;
  passwordVisible = false;

  ngOnInit(): void {
      this.formulario = this.fb.group({
        email: ["",[Validators.email,Validators.required]],
        password: ["",[Validators.required]]
      })
  }
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  onSubmit(_datos: any){
    console.log(_datos.value);
}
}
