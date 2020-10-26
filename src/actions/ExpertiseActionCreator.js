import allConstants from "../constants/AllConstant";
import AllApi from "../api/AllApi";
import { dispatchAsync } from '../../src/ReduxDispatcher';


const fetchExpertiseData = () => dispatch => {
    dispatchAsync(AllApi.fetchExpertiseData(), dispatch, {
      request: allConstants.EXPERTISE_DATA,
      success: allConstants.EXPERTISE_DATA_SUCCESS,
      failure: allConstants.EXPERTISE_DATA_ERROR,
      cancel: allConstants.EXPERTISE_DATA_CANCEL
    });
  };

  
export { fetchExpertiseData };
