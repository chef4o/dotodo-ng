import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { INote } from '../shared/interfaces/note';

const baseUrl = environment.apiUrl + '/users';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private http: HttpClient) {}

  getAllNotes(userId: string) {
    return this.http.get<INote>(`${baseUrl}/${userId}/notes`);
  }

}
