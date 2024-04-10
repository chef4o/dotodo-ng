import { Routes } from "@angular/router";
import { ChecklistsComponent } from "./checklists.component";
import { ChklstComponent } from "./chklst/chklst.component";

const routes: Routes = [
    {
        path: 'checklists',
        component: ChecklistsComponent,
        children: [
            {
                path: ':id',
                component: ChklstComponent,
            }
        ],
    },
];