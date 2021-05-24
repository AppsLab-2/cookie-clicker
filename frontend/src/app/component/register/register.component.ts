import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  register(): void {
    if(this.loginGroup.valid) {
      this.authService.register(this.loginGroup.value)
      .subscribe(() => this.router.navigateByUrl("/login"));
    }
  }
}
