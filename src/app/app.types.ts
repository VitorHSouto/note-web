import { Route } from "@angular/router";

export const routes: Route[] = [
    {
        path: 'notes',
        loadChildren:  () => import('../data/note/notes.module').then(m => m.NotesModule)
    },
    { 
        path: '**', 
        redirectTo: 'notes', 
        pathMatch: 'full' 
    },
]  