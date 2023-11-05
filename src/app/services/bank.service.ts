import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IUser } from '../model/iuser';
import { IAdmin } from '../model/iadmin';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private url : string = "http://localhost:8081/bank";

  constructor(private http : HttpClient) { }

  //get user by username and password
  public getUserByUsernameAndPassword(username:string, password:string):Observable<IUser>{
    let dataUrl = `${this.url}/user/username/${username}/password/${password}`;
    return this.http.get<IUser>(dataUrl).pipe(catchError(this.handleError));
  }

  //get admin by username and password
  public getAdminByUsernameAndPassword(username:string, password:string):Observable<IAdmin>{
    let dataUrl = `${this.url}/admin/username/${username}/password/${password}`;
    return this.http.get<IAdmin>(dataUrl).pipe(catchError(this.handleError));
  }

  //get all users
  public getAllUsers():Observable<IUser[]>{
    let dataUrl = `${this.url}/users`;
    return this.http.get<IUser[]>(dataUrl).pipe(catchError(this.handleError));
  }

  //get admin by id
  public getAdminById(id: number):Observable<IAdmin>{
    let dataUrl = `${this.url}/admin/${id}`;
    return this.http.get<IAdmin>(dataUrl).pipe(catchError(this.handleError));
  }

  //get user by id
  public getUserById(id: number):Observable<IUser>{
    let dataUrl = `${this.url}/user/${id}`;
    return this.http.get<IUser>(dataUrl).pipe(catchError(this.handleError));
  }

  public handleError(error:HttpErrorResponse){
    let errorMessage:string='';
    if(error.error instanceof ErrorEvent){
      //client error
      errorMessage=`Error :${error.error.message}`;
    }
    else{
      //server error
      errorMessage=`Status :${error.status}`;
    }
    return throwError(errorMessage);
  }
}
