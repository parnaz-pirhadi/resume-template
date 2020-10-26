import allConstants from "../constants/AllConstant";
import AllApi from "../api/AllApi";
import { dispatchAsync } from '../../src/ReduxDispatcher';


const fetchAboutData = () => dispatch => {
    dispatchAsync(AllApi.fetchAboutData(), dispatch, {
      request: allConstants.ABOUT_DATA,
      success: allConstants.ABOUT_DATA_SUCCESS,
      failure: allConstants.ABOUT_DATA_ERROR,
      cancel: allConstants.ABOUT_DATA_CANCEL
    });
  };

  
export { fetchAboutData };
