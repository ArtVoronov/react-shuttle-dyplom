import { createSelector } from "reselect";

export const selectState = (state) => state;

export const selectNotes = createSelector(selectState, ({ notes }) => notes);
