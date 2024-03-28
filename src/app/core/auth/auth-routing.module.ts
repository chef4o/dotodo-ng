import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { LogoutComponent } from "./logout/logout.component";

const routes: Routes = [
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthComponent,
                data: { title: 'Access DOTODO' }
            },
            {
                path: 'register',
                component: AuthComponent,
                data: { title: 'Sign-up with DOTODO' }
            },
            {
                path: 'logout',
                component: LogoutComponent
            }
        ]
    }
];

export const AuthRoutingModule = RouterModule.forChild(routes);