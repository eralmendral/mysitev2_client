import { combineReducers } from 'redux';
import { projectReducer } from './projects/reducer'
import { experienceReducer } from './experience/reducer'

const rootReducer = combineReducers({
    projects: projectReducer,
    experience: experienceReducer
})

export default rootReducer;