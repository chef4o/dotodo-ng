import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./profile.component";

const routes : Routes = [
    {
        path: '', 
        pathMatch: 'full', 
        component: ProfileComponent
    }
]

export const ProfileRoutingModule = RouterModule.forChild(routes);