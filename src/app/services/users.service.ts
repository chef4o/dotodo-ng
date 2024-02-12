import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IUser } from '../interfaces/user';

const baseUrl = environment.apiUrl + '/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<IUser[]>(baseUrl);
  }

  getUserById(id: string) {
    return this.http.get<IUser>(`${baseUrl}/${id}`);
  }

  getUserByEmail(email: string) {
    const user = this.getAllUsers();
    // filter user by email
  }

  //   findUserByUsername = async (username) => {
  //     const user = await getAllUsers();

  //     return user.find((user) => user.username === username);
  //   };

  //   deleteUser = async (userId) => {
  //     const response = await request.remove(`${baseUrl}/${userId}`);

  //     return response;
  //   };

  //   addUser = async (body) => {
  //     const response = request.post(baseUrl, body);

  //     return response;
  //   };

  //   editUser = async (body) => {
  //     const response = request.put(baseUrl, body);

  //     return response;
  //   };

  //   userExists = async (username, email) => {
  //     const existingUsername = await findUserByUsername(username);
  //     const existingEmail = await findUserByEmail(email);

  //     return {
  //       withUsername: !!existingUsername,
  //       withEmail: !!existingEmail,
  //     };
  //   };
}
