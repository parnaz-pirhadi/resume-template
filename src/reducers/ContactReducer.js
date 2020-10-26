import AllConstant from "../constants/AllConstant";

const initialState = {
  loading: true
};
const initialAction = { type: 'initial state' };

const contactReducer = (state = initialState, action = initialAction) => {
  switch (action.type) {
  case AllConstant.CONTACT_DATA:
    return {
      ...state,
      loading: true
    };
  case AllConstant.CONTACT_DATA_SUCCESS:
    return {
      ...state,
      loading: false,
      contactData: action.payload.response.data
    };
  case AllConstant.CONTACT_DATA_ERROR:
    return {
      ...state,
      loading: false
    };
  case AllConstant.CONTACT_DATA_CANCEL:
    return {
      ...state,
      loading: false
    };

  default:
    return state;
  }
};

export default contactReducer;
