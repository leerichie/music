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

    public addUser(user: User): Observable<User[]> {
        return this.http.post<User[]>(`${this.apiServerUrl}/user/add`, user);
    }

    public updateUser(user: User): Observable<User[]> {
        return this.http.put<User[]>(`${this.apiServerUrl}/user/update`, user);
    }

    public deleteUser(userId: number): Observable<void[]> {
        return this.http.delete<void[]>(`${this.apiServerUrl}/user/delete/$(userId)`);
    }
}
