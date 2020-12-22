import { createSelector } from "reselect";

export const selectState = (state) => state;

export const selectNotes = createSelector(selectState, ({ notes }) => notes);
// export const selectLoadingNotes = createSelector(
//   selectState,
//   ({ notes }) => notes.loading
// );
