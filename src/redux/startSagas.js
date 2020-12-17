import { notesSaga } from "./notes/sagas";
import { todosSaga } from "./todos";

export const startSagas = (sagaMiddleware) => {
  [todosSaga].forEach(sagaMiddleware.run);
  [notesSaga].forEach(sagaMiddleware.run);
};
