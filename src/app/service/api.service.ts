import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const ADD_URL = 'http://localhost:1337/addEmployee';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  addEmployee(payload: any) {
    return this.http.post(ADD_URL, payload)
  }
  getEmployee() {
    return this.http.get(ADD_URL)
  }
  updateEmployee(id: number,payload: {}) {
    return this.http.put(ADD_URL + '/' + id, payload);
  }
  deleteEmployee(id: number) {
    console.log(ADD_URL + '/' + id);
    return this.http.delete(ADD_URL + '/' + id);
  }
}
