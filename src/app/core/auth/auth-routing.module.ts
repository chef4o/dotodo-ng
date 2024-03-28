import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { LogoutComponent } from "./logout/logout.component";

const routes: Routes = [
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthComponent
            },
            {
                path: 'register',
                component: AuthComponent
            },
            {
                path: 'logout',
                component: LogoutComponent
            }
        ]
    }
];

export const AuthRoutingModule = RouterModule.forChild(routes);