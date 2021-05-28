import SkillActionTypes from './actiontypes';

const initialState = {
  skills: [],
  skillsFetching: false,
  skillsFetchError: null
}

export const skillReducer = (state = initialState, action) => {
  switch (action.type) {
    case SkillActionTypes.FETCH_SKILLS_START:
      return {
        ...state,
        skillsFetching: true
      }
    case SkillActionTypes.FETCH_SKILLS_FAILURE:
      return {
        ...state,
        skillsFetching: false,
        skillsFetchError: action.payload
      }
    case SkillActionTypes.FETCH_SKILLS_SUCCESS:
      console.log('debug success', action.payload)
      return {
        ...state,
        skillsFetching: false,
        skills: action.payload
      }
    default:
      return state
  }
}