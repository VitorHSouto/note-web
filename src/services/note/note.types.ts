import { Toolbar } from "ngx-editor";

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

export const defaultToolbarOptions: Toolbar = [
  ['bold', 'italic'],
  ['underline', 'strike'],
  ['code', 'blockquote'],
  ['ordered_list', 'bullet_list'],
  [{ heading: ['h1', 'h2', 'h3', 'h4'] }],
  ['link', 'image'],
  ['text_color', 'background_color'],
  ['align_left', 'align_center', 'align_right', 'align_justify'],
]; 
