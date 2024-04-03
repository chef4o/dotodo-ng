import { AbstractControl, ValidationErrors } from "@angular/forms";

const EMAIL_REGEX = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

export const emailValidator = (control: AbstractControl): ValidationErrors | null => {
    const email = control.value;
    if (!email) {
        return null;
    } else if (!EMAIL_REGEX.test(email)) {
        return { email: 'Invalid email' };
    } else {
        return null;
    }
};