export interface Note {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  active?: boolean;
  title?: string;
  content?: string;
}

export type NoteView = Note & {
  formattedDate?: string
}

export interface CreateNoteRequest {
  title?: string;
  content?: string;
}
