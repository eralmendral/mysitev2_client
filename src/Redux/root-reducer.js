import { combineReducers } from 'redux';
import { projectReducer } from './projects/reducer'
import { experienceReducer } from './experience/reducer'
import { skillReducer } from './skills/reducer'

const rootReducer = combineReducers({
    projects: projectReducer,
    experience: experienceReducer,
    skills: skillReducer
})

export default rootReducer;