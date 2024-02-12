import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IChecklist } from '../interfaces/checklist';

const baseUrl = environment.apiUrl + '/users';

@Injectable({
  providedIn: 'root',
})
export class ChecklistService {
  constructor(private http: HttpClient) {}

  getAllChecklists(userID: string) {
    return this.http.get<IChecklist>(`${baseUrl}/${userID}/checklists`);
  }

  // export const getCheckListByUserAndId = async (userID, id) => {
  //   const response = await request.get(`${baseUrl}/${userID}/checklists/${id}`);

  //   return Object.values(response);
  // };

  // export const deleteChecklist = async (userID, id) => {
  //   const response = await request.remove(
  //     `${baseUrl}/${userID}/checklists/${id}`
  //   );

  //   return response;
  // };

  // export const addChecklist = async (userID, body) => {
  //   const response = request.post(`${baseUrl}/${userID}/checklists/`, body);

  //   return response;
  // };

  // export const editChecklist = async (userID, body) => {
  //   const response = request.put(`${baseUrl}/${userID}/checklists/`, body);

  //   return response;
  // };

  // export const getCheckListData = async (userID, checklistId, elementId) => {
  //   const response = await request.get(
  //     `${baseUrl}/${userID}/checklists/${checklistId}/elements/${elementId}`
  //   );

  //   return response;
  // };

  // export const editChecklistItem = async (
  //   userID,
  //   checklistId,
  //   elementId,
  //   body
  // ) => {
  //   const response = await request.put(
  //     `${baseUrl}/${userID}/checklists/${checklistId}/elements/${elementId}`,
  //     body
  //   );

  //   return response;
  // };

  // export const addChecklistItem = async (
  //   userID,
  //   checklistId,
  //   elementId,
  //   body
  // ) => {
  //   const response = request.post(
  //     `${baseUrl}/${userID}/checklists/${checklistId}/elements/${elementId}`,
  //     body
  //   );

  //   return response;
  // };

  // export const deleteChecklistItem = async (userID, checklistId, elementId) => {
  //   const response = await request.remove(
  //     `${baseUrl}/${userID}/checklists/${checklistId}/elements/${elementId}`
  //   );

  //   return response;
  // };

  // export const getSomeChecklistsByDueDateDesc = async (
  //   userId,
  //   numberOfResults
  // ) => {
  //   const response = await getAllChecklists(userId);

  //   return response.slice(-numberOfResults);
  // };
}
