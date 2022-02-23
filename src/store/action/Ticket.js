import {GET_TIKET_BEGIN} from "./type"


export const getTicket = (offset = 0) => {
    return {
      type: GET_TIKET_BEGIN,
      offset
    };
  };