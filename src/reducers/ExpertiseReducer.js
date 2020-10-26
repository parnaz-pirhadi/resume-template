import AllConstant from "../constants/AllConstant";

const initialState = {
  loading: true
};
const initialAction = { type: 'initial state' };

const aboutReducer = (state = initialState, action = initialAction) => {
  switch (action.type) {
  case AllConstant.EXPERTISE_DATA:
    return {
      ...state,
      loading: true
    };
  case AllConstant.EXPERTISE_DATA_SUCCESS:
    return {
      ...state,
      loading: false,
      expertiseData: action.payload.response.data
    };
  case AllConstant.EXPERTISE_DATA_ERROR:
    return {
      ...state,
      loading: false
    };
  case AllConstant.EXPERTISE_DATA_CANCEL:
    return {
      ...state,
      loading: false
    };

  default:
    return state;
  }
};

export default aboutReducer;
