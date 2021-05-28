import ProjectActionTypes from './actiontypes';

const initialState = {
  projects: [],
  projectsFetching: false,
  projectsFetchError: null
}

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProjectActionTypes.FETCH_PROJECTS_START:
      return {
        ...state,
        projectsFetching: true
      }
    case ProjectActionTypes.FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        projectsFetching: false,
        projectsFetchError: action.payload
      }
    case ProjectActionTypes.FETCH_PROJECTS_SUCCESS:
      console.log('debug success', action.payload)
      return {
        ...state,
        projectsFetching: false,
        projects: action.payload
      }
    default:
      return state
  }
}