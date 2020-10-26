import { combineReducers } from 'redux';
import aboutReducer from './AboutReducer';
import expertiseReducer from './ExpertiseReducer';
import skillsReducer from './SkillsReducer';
import experienceReducer from './ExperienceReducer';
import educationReducer from './EducationReducer';
import contactReducer from './ContactReducer'


const reducers = combineReducers({
    aboutReducer,expertiseReducer,skillsReducer,experienceReducer,educationReducer,contactReducer
});

export default reducers;
