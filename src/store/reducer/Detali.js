import {GET_TIKET_BEGIN, GET_TIKET_SUCCESS, GET_TIKET_FAIL} from "../action/type"


const initialState = {
    listTicket: [],
    loading: false,
    error: null,
  };

  const ticket = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
        case GET_TIKET_BEGIN:
            return {
                ...state,
                loading: true,
            };
        case GET_TIKET_SUCCESS:
            return {
                ...state,
                listTicket: payload,
                loading: false,
                error: null,
            };
        case GET_TIKET_FAIL:
            return {
                ...state,
                loading: false,
                error: error,
            }
        default :
            return {
                ...state,
            };
    }
}

export default ticket;