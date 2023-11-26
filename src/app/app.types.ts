import { Route } from "@angular/router";
import { AuthGuard } from "src/auths/auth.guard";

export const routes: Route[] = [
    {
        path: 'login',
        loadChildren:  () => import('../data/sign-in/sign-in.module').then(m => m.SignInModule)
    },
    {
        path: 'notes',
        loadChildren:  () => import('../data/note/notes.module').then(m => m.NotesModule), 
        canActivate: [AuthGuard]
    },
    // { 
    //     path: '**', 
    //     redirectTo: 'notes', 
    //     pathMatch: 'full' 
    // },
]  