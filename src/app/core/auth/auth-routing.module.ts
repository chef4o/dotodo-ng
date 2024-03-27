import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { LogoutComponent } from "./logout/logout.component";

const routes: Routes = [
    {
        path: 'auth/login',
        component: AuthComponent
    },
    {
        path: 'auth/register',
        component: AuthComponent
    }, 
    {
        path: 'auth/logout',
        component: LogoutComponent
    }
]

export const AuthRoutingModule = RouterModule.forChild(routes);