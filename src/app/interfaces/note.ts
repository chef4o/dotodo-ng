export interface INote {
    _id: string,
    position: number,
    title: string,
    content: string,
    isArchived: boolean,
    startDate: Date,
    dueDate: Date,
    completedOn: Date,
    trackProgress: string,
    sharedWith: string[]
}