export const INC = "artirma";
export const DEC = "azaltma";
export const CLR = "sifirlama";

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return { count: state.count + 1 };

    case DEC:
      return { count: state.count > 0 ? state.count - 1 : state.count };

    case CLR:
      return { count: 0 };

    default:
      return state;
  }
};