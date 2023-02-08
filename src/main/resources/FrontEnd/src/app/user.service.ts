import { Injectable } from "@angular/core";
import { User } from "./user";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "./environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiServerUrl = 'http://localhost:8181';

    constructor (private http: HttpClient) { }

    public getUser(): Observable<User[]> {
        return this.http.get<User[]>(`${this.apiServerUrl}/user/all`);
    }
    public getOneUser(id: number): Observable<User> {
        const url = `${this.apiServerUrl}/${id}`;
        return this.http.get<User>(url);
      }

    public addUser(user: User): Observable<User[]> {
        return this.http.post<User[]>(`${this.apiServerUrl}/user/add`, user);
    }

    public updateUser(user: User): Observable<User[]> {
        const url = `${this.apiServerUrl}/${user.id}`;
        return this.http.put<User[]>(url, user);
    }

    public deleteUser(user: User): Observable<User[]> {
        const url = `${this.apiServerUrl}/${user.id}`;
        return this.http.delete<User[]>(url);
    }
}
