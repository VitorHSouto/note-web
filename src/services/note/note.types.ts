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

export const defaultCreateNoteRequest : CreateNoteRequest = {
  title: "Nota teste",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit inventore, assumenda officiis doloremque quod perferendis! Sit dolor ad eum sequi, provident dignissimos fugit quis quia quae cum nostrum earum magnam?"
}
