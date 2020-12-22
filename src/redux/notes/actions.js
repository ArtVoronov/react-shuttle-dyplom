import { createActions } from "redux-actions";
import { identity } from "../utils";

export const {
  notesFetch,
  notesFetchRequest,
  notesFetchSuccess,
  notesFetchError,

  notesAdd,
  notesAddRequest,
  notesAddSuccess,
  notesAddError,

  notesEdit,
  notesEditRequest,
  notesEditSuccess,
  notesEditError,

  notesRemove,
  notesRemoveRequest,
  notesRemoveSuccess,
  notesRemoveError,

  notesComplite,
  notesCompliteRequest,
  notesCompliteSuccess,
  notesCompliteError,
} = createActions({
  NOTES_FETCH: identity,
  NOTES_FETCH_REQUEST: identity,
  NOTES_FETCH_SUCCESS: identity,
  NOTES_FETCH_ERROR: identity,

  NOTES_ADD: identity,
  NOTES_ADD_REQUEST: identity,
  NOTES_ADD_SUCCESS: identity,
  NOTES_ADD_ERROR: identity,

  NOTES_EDIT: identity,
  NOTES_EDIT_REQUEST: identity,
  NOTES_EDIT_SUCCESS: identity,
  NOTES_EDIT_ERROR: identity,

  NOTES_REMOVE: identity,
  NOTES_REMOVE_REQUEST: identity,
  NOTES_REMOVE_SUCCESS: identity,
  NOTES_REMOVE_ERROR: identity,

  NOTES_COMPLITE: identity,
  NOTES_COMPLITE_REQUEST: identity,
  NOTES_COMPLITE_SUCCESS: identity,
  NOTES_COMPLITE_ERROR: identity,
});
