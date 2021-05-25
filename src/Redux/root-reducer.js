import { combineReducers } from 'redux';
import { projectReducer } from './projects/reducer'

const rootReducer = combineReducers({
    projects: projectReducer,
})

export default rootReducer;