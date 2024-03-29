import { Routes } from "@angular/router";
import { ChecklistComponent } from "./checklist/checklist.component";

const routes: Routes = [
    {
        path: 'checklists',
        component: ChecklistComponent,
        children: [
            {
                path: ':id',
                component: ChecklistComponent,
            }
        ],
    },
];