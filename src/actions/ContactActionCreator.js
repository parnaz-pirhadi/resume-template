import allConstants from "../constants/AllConstant";
import AllApi from "../api/AllApi";
import { dispatchAsync } from '../../src/ReduxDispatcher';


const fetchContactData = () => dispatch => {
    dispatchAsync(AllApi.fetchContactData(), dispatch, {
      request: allConstants.CONTACT_DATA,
      success: allConstants.CONTACT_DATA_SUCCESS,
      failure: allConstants.CONTACT_DATA_ERROR,
      cancel: allConstants.CONTACT_DATA_CANCEL
    });
  };

  
export { fetchContactData };
