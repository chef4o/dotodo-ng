import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:3030/jsonstore/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers = async () => {
    return this.http.get<any>(baseUrl);
  };

  //   findUserById = async (id) => {
  //     const response = await request.get(`${baseUrl}/${id}`);
  //   };

  //   findUserByEmail = async (email) => {
  //     const user = await getAllUsers();
  //     return user.find((user) => user.email === email);
  //   };

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
