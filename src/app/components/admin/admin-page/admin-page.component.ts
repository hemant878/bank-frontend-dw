import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAdmin } from 'src/app/model/iadmin';
import { IUser } from 'src/app/model/iuser';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  constructor(private route : ActivatedRoute, private bankService: BankService){}
    admin : IAdmin = {} as IAdmin;
    users : IUser[] = []  as [];
    adminId : string | null = "";
    id : number = 0;
    public errorMessage: string | null = null;

    ngOnInit() {
        this.route.paramMap.subscribe((param) => {
            this.adminId = param.get('id');
            if (this.adminId != null) {
                this.id = parseInt(this.adminId);
                this.bankService.getAdminById(this.id).subscribe(
                    (data)=>{
                        this.setDetails(data);
                        this.bankService.getAllUsers().subscribe(
                            (data)=>{
                                this.users = data
                            },
                            (err)=>{
                                this.errorMessage = err;
                            }
                        )
                    },
                    (err)=>{
                        this.errorMessage = err;
                    }
                )
            }
        });
    }

    setDetails(data: IAdmin): void {
        this.admin.id = data.id;
        this.admin.username = data.username;
        this.admin.password = data.password;
    }
}
