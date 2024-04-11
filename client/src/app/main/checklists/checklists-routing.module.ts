import { RouterModule, Routes } from "@angular/router";
import { ChecklistsComponent } from "./checklists.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full', 
        component: ChecklistsComponent
    }
]

export const ChecklistsRoutingModule = RouterModule.forChild(routes);