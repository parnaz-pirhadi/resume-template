import allConstants from "../constants/AllConstant";
import AllApi from "../api/AllApi";
import { dispatchAsync } from '../../src/ReduxDispatcher';


const fetchEducationData = () => dispatch => {
    dispatchAsync(AllApi.fetchEducationData(), dispatch, {
      request: allConstants.EDUCATION_DATA,
      success: allConstants.EDUCATION_DATA_SUCCESS,
      failure: allConstants.EDUCATION_DATA_ERROR,
      cancel: allConstants.EDUCATION_DATA_CANCEL
    });
  };

  
export { fetchEducationData };
