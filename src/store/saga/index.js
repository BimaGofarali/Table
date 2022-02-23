import { all } from "@redux-saga/core/effects";
import { watchLogin, watchLogout } from "./User";
import { watchGetDetail} from "./Detail"

export default function* rootSaga() {
    yield all([
      watchLogin(),
      watchLogout(),
      watchGetDetail(),
    ]);
  }