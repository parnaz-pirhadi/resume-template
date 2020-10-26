import AllConstant from "../constants/AllConstant";

const initialState = {
  loading: true
};
const initialAction = { type: 'initial state' };

const aboutReducer = (state = initialState, action = initialAction) => {
  switch (action.type) {
  case AllConstant.ABOUT_DATA:
    return {
      ...state,
      loading: true
    };
  case AllConstant.ABOUT_DATA_SUCCESS:
    return {
      ...state,
      loading: false,
      aboutData: action.payload.response.data
    };
  case AllConstant.ABOUT_DATA_ERROR:
    return {
      ...state,
      loading: false
    };
  case AllConstant.ABOUT_DATA_CANCEL:
    return {
      ...state,
      loading: false
    };

  default:
    return state;
  }
};

export default aboutReducer;
