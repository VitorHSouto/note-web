export interface Note {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    active?: boolean;
    content?: string;
}

export type NoteView = Note & {
    formattedDate?: string
}