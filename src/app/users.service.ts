import { Injectable } from '@angular/core';
import { RequestData, Userdata } from './userdata';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  url = 'https://reqres.in/api/users';

  async getAllUsers(): Promise<RequestData> {
    const response = await fetch(this.url);

    if(!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const data = await response.json();
    console.log(data);
    return data ?? [];
  }
  
  async getUsersById(id: number): Promise<Userdata> {
    const response = await fetch (`${this.url}/${id}`);
    console.log(response.status);

    if(response.status === 404) {
      console.log('fail');
    }

    const data = await response.json().then((res) => res.data);
    console.log(data);
    return data ?? [];
  }

  async getPage(page:number): Promise<RequestData> {
    const response = await fetch(`${this.url}?page=${page}`);

    if(!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const data = await response.json();
    console.log(data);
    return data ?? [];
  }
}
