import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { INote } from '../interfaces/note';

const baseUrl = environment.apiUrl + '/users';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private http: HttpClient) {}

  getAllNotes(userId: string) {
    return this.http.get<INote>(`${baseUrl}/${userId}/notes`);
  }

  // export const getSomeNotesByDueDateDesc = async (userId, numberOfResults) => {
  //   const response = await getAllNotes(userId);

  //   const sortedNotes = Object.values(response).sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));

  //   return sortedNotes.slice(-numberOfResults);
  // }

  // export const deleteNote = async (userID, id) => {
  //   const response = await request.remove(
  //     `${baseUrl}/${userID}/notes/${id}`
  //   );

  //   return response;
  // };

  // export const addNote = async (userID, body) => {
  //   const response = request.post(`${baseUrl}/${userID}/notes/`, body);

  //   return response;
  // };
}
