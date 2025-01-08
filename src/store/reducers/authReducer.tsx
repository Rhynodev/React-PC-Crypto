

const initialState = {
  customer: {},
  register:{}
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        customer: action.payload?.data?.data || {},
      };
      case "REGISTER":
        return {
          ...state,
          register: action.payload?.data?.data || {},
        };
    default:
      return state;
  }
}
