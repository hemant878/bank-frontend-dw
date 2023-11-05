import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAdmin } from 'src/app/model/iadmin';
import { BankService } from 'src/app/services/bank.service';

@Injectable({
    providedIn: 'root'
})
@Component({
    selector: 'app-admin-login',
    templateUrl: './admin-login.component.html',
    styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
    constructor(private bankService: BankService, private router: Router) { }
    adminLoginForm!: FormGroup;
    admin: IAdmin = {} as IAdmin;
    username: string = "";
    password: string = "";
    public errorMessage: string | null = null;
    id: string | undefined = "";
    
    ngOnInit(): void {
        this.adminLoginForm = new FormGroup({
            'username': new FormControl(null, [Validators.required]),
            'password': new FormControl(null, [Validators.required]),
        })
    }

    onSubmit() {
        this.username = this.adminLoginForm.get('username')?.value;
        this.password = this.adminLoginForm.get('password')?.value;
        console.log(this.username, this.password);

        this.bankService.getAdminByUsernameAndPassword(this.username, this.password).subscribe(
            (data)=> {
                if (data != null) {
                    this.setDetails(data);
                    console.log(this.admin);
                    this.router.navigate(["/admin/", this.admin.id]);
                } else {
                    this.router.navigate(["af"]);
                }
            },
            (err)=>{
                this.errorMessage = err;
            }
        )
    }

    setDetails(data: IAdmin): void {
        this.admin.id = data.id;
        this.admin.username = data.username;
        this.admin.password = data.password;
    }
}
