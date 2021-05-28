import SkillActionTypes from './actiontypes'

export const fetchSkillsStart = () => ({
    type: SkillActionTypes.FETCH_SKILLS_START
});

export const fetchSkillsSuccess = (skills) => ({
    type: SkillActionTypes.FETCH_SKILLS_SUCCESS,
    payload: skills
});

export const fetchSkillsFailure = (error) => ({
    type: SkillActionTypes.FETCH_SKILLS_FAILURE,
    payload: error
});