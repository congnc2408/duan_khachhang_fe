import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoleSearch } from 'src/app/_model/role-search';

const AUTH_API = 'http://localhost:8084/api';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    }),
  };

constructor(
  private http: HttpClient,
) { }


  search(data, page, pageSize){
    const url = AUTH_API + `/role/search/roles/search?page=${page}&size=${pageSize}`;
    return this.http.post<any>(url, data,  this.httpOptions);
  }

  create(data){
    const url = AUTH_API + `/role/create/roles`;
    return this.http.post<any>(url, data,  this.httpOptions);
  }

  update(data){
    const url = AUTH_API + `/role/update/roles`;
    return this.http.post<any>(url, data,  this.httpOptions);
  }

  delete(data){
    const url = AUTH_API + `/role/delete/roles`;
    return this.http.post<any>(url, data,  this.httpOptions);
  }

  getAllFunction(){
    const url = AUTH_API + `/role/search/functions/get-all`;
    return this.http.post<any>(url, this.httpOptions);
  }

}
