import { all } from "@redux-saga/core/effects";
import { watchLogin, watchLogout } from "./User";
import { watchGetTicket} from "./Ticket"

export default function* rootSaga() {
    yield all([
      watchLogin(),
      watchLogout(),
      watchGetTicket(),
    ]);
  }