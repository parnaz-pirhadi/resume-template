import allConstants from "../constants/AllConstant";
import AllApi from "../api/AllApi";
import { dispatchAsync } from '../../src/ReduxDispatcher';


const fetchExperienceData = () => dispatch => {
    dispatchAsync(AllApi.fetchExperienceData(), dispatch, {
      request: allConstants.EXPERIENCE_DATA,
      success: allConstants.EXPERIENCE_DATA_SUCCESS,
      failure: allConstants.EXPERIENCE_DATA_ERROR,
      cancel: allConstants.EXPERIENCE_DATA_CANCEL
    });
  };

  
export { fetchExperienceData };
