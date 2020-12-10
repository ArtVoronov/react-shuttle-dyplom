import { todosSaga } from "./todos";

export const startSagas = (sagaMiddleware) => {
  [todosSaga].forEach(sagaMiddleware.run);
};
