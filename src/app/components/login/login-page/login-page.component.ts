import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/model/iuser';
import { BankService } from 'src/app/services/bank.service';

@Injectable({
    providedIn: 'root'
})
@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
    constructor(private bankService: BankService, private router : Router) { }
    userLoginForm!: FormGroup;
    user: IUser = {} as IUser;
    username: string = "";
    password: string = "";
    public errorMessage: string | null = null;
    id: string | undefined = "";

    ngOnInit(): void {
        this.userLoginForm = new FormGroup({
            'username': new FormControl(null, [Validators.required]),
            'password': new FormControl(null, [Validators.required]),
        })
    }

    onSubmit() {
        this.username = this.userLoginForm.get('username')?.value;
        this.password = this.userLoginForm.get('password')?.value;
        console.log(this.username, this.password);
        this.bankService.getUserByUsernameAndPassword(this.username, this.password).subscribe(
            (data)=> {
                if (data != null) {
                    this.setDetails(data);
                    console.log(this.user);
                    this.router.navigate(["/user/", this.user.id]);
                } else {
                    this.router.navigate(["af"]);
                }
            },
            (err)=>{
                this.errorMessage = err;
            }
        )
    }

    setDetails(data: IUser): void {
        this.user.id = data.id;
        this.user.firstName = data.firstName;
        this.user.lastName = data.lastName;
        this.user.username = data.username;
        this.user.password = data.password;
        this.user.account = data.account;
    }
}



