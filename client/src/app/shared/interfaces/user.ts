export interface IUser {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    password: string,
    dateOfBirth: Date,
    phoneNumber: string,
    createdAt: Date,
    updatedAt: Date,
    imageUrl: string,
    address: {
      streetNumber: string,
      street: string,
      city: string,
      country: string
    },
    friends: string[],
    notes: string[],
    checklists: string[],
    events: string[]
}