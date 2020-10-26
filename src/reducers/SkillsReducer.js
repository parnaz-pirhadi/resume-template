import AllConstant from "../constants/AllConstant";

const initialState = {
  loading: true
};
const initialAction = { type: 'initial state' };

const skillsReducer = (state = initialState, action = initialAction) => {
  switch (action.type) {
  case AllConstant.SKILLS_DATA:
    return {
      ...state,
      loading: true
    };
  case AllConstant.SKILLS_DATA_SUCCESS:
    return {
      ...state,
      loading: false,
      skillsData: action.payload.response.data
    };
  case AllConstant.SKILLS_DATA_ERROR:
    return {
      ...state,
      loading: false
    };
  case AllConstant.SKILLS_DATA_CANCEL:
    return {
      ...state,
      loading: false
    };

  default:
    return state;
  }
};

export default skillsReducer;
