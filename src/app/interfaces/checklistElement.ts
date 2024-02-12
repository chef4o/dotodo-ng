export interface IChecklistItem {
    _id: string,
    position: number,
    content: string,
    dueDate: Date,
    status: string,
    note: string
}