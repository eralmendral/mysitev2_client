import ExperienceActionTypes from './actiontypes';

const initialState = {
  experience: [],
  experienceFetching: false,
  experienceFetchError: null
}

export const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ExperienceActionTypes.FETCH_EXPERIENCE_START:
      return {
        ...state,
        experienceFetching: true
      }
    case ExperienceActionTypes.FETCH_EXPERIENCE_FAILURE:
      return {
        ...state,
        experienceFetching: false,
        experienceFetchError: action.payload
      }
    case ExperienceActionTypes.FETCH_EXPERIENCE_SUCCESSS:
      return {
        ...state,
        experienceFetching: false,
        experience: action.payload
      }
    default:
      return state
  }
}