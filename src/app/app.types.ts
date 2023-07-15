import { Route } from "@angular/router";

export const routes: Route[] = [
    {
        path: 'note',
        loadChildren:  () => import('../data/note/notes.module').then(m => m.NotesModule)
    }
]  