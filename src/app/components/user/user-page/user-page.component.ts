import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAccounts } from 'src/app/model/iaccounts';
import { IUser } from 'src/app/model/iuser';
import { BankService } from 'src/app/services/bank.service';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
    constructor(private route: ActivatedRoute, private bankService: BankService,private dataservice:DataService,private router:Router) { }
    user: IUser = {} as IUser;
    accounts: IAccounts[] = [] as IAccounts[];
    userId: string | null = "";
    id: number = 0;
    public errorMessage: string | null = null;
    selectedOption: string = "";
    accountsCheck: boolean = true;

    ngOnInit() {
        this.route.paramMap.subscribe((param) => {
            this.userId = param.get('id');
            if (this.userId != null) {
                this.id = parseInt(this.userId);
                this.bankService.getUserById(this.id).subscribe(
                    (data) => {
                        this.setDetails(data);
                        console.log(this.user);
                        console.log(this.accounts);
                        if (this.accounts === null || this.accounts.length === 0) {
                            this.accountsCheck = false;
                        } else {
                            this.accountsCheck = true;
                        }
                    },
                    (err)=>{
                        this.errorMessage = err
                    }
                )
            }
        });
    }

    setDetails(data: IUser): void {
        this.user.id = data.id;
        this.user.firstName = data.firstName;
        this.user.lastName = data.lastName;
        this.user.username = data.username;
        this.user.password = data.password;
        this.user.account = data.account;
        this.accounts = data.account;
    }

    onSelectedChange(option: string) {
        this.selectedOption = option;
    }


    onSubmit(){
        this.dataservice.accountRequest(this.user).subscribe((data)=>{
          this.router.navigate(['/']).then();
        })
      }
}
