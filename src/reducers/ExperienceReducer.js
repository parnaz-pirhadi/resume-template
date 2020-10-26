import AllConstant from "../constants/AllConstant";

const initialState = {
  loading: true
};
const initialAction = { type: 'initial state' };

const experienceReducer = (state = initialState, action = initialAction) => {
  switch (action.type) {
  case AllConstant.EXPERIENCE_DATA:
    return {
      ...state,
      loading: true
    };
  case AllConstant.EXPERIENCE_DATA_SUCCESS:
    return {
      ...state,
      loading: false,
      experienceData: action.payload.response.data
    };
  case AllConstant.EXPERIENCE_DATA_ERROR:
    return {
      ...state,
      loading: false
    };
  case AllConstant.EXPERIENCE_DATA_CANCEL:
    return {
      ...state,
      loading: false
    };

  default:
    return state;
  }
};

export default experienceReducer;
