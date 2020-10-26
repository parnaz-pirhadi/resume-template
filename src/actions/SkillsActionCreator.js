import allConstants from "../constants/AllConstant";
import AllApi from "../api/AllApi";
import { dispatchAsync } from '../../src/ReduxDispatcher';


const fetchSkillsData = () => dispatch => {
    dispatchAsync(AllApi.fetchSkillsData(), dispatch, {
      request: allConstants.SKILLS_DATA,
      success: allConstants.SKILLS_DATA_SUCCESS,
      failure: allConstants.SKILLS_DATA_ERROR,
      cancel: allConstants.SKILLS_DATA_CANCEL
    });
  };

  
export { fetchSkillsData };
