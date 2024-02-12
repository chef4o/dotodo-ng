export interface IChecklist {
    _id: string,
    type: string,
    title: string,
    elements: string[],
    sharedWith: string [],
    isArchived: boolean,
    dueDate: Date
  }