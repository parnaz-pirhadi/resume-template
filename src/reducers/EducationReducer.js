import AllConstant from "../constants/AllConstant";

const initialState = {
  loading: true
};
const initialAction = { type: 'initial state' };

const educationReducer = (state = initialState, action = initialAction) => {
  switch (action.type) {
  case AllConstant.EDUCATION_DATA:
    return {
      ...state,
      loading: true
    };
  case AllConstant.EDUCATION_DATA_SUCCESS:
    return {
      ...state,
      loading: false,
      educationData: action.payload.response.data
    };
  case AllConstant.EDUCATION_DATA_ERROR:
    return {
      ...state,
      loading: false
    };
  case AllConstant.EDUCATION_DATA_CANCEL:
    return {
      ...state,
      loading: false
    };

  default:
    return state;
  }
};

export default educationReducer;
