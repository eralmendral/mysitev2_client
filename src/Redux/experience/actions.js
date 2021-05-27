import ExperienceActionTypes from './actiontypes'

export const fetchExperienceStart = () => ({
    type: ExperienceActionTypes.FETCH_EXPERIENCE_START
});

export const fetchExperienceSuccess = (experience) => ({
    type: ExperienceActionTypes.FETCH_EXPERIENCE_SUCCESSS,
    payload: experience
});

export const fetchExperienceFailure = (error) => ({
    type: ExperienceActionTypes.FETCH_EXPERIENCE_FAILURE,
    payload: error
});

