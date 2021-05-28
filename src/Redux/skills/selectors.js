import { createSelector } from 'reselect';

const selectSkills = (state) => state.hasOwnProperty('skills') && state.skills ? state.skills : {};

export const selectSkillList = createSelector([selectSkills], skill => skill.skills);
export const selectSkillLoading = createSelector([selectSkills], skill => skill.skillsFetching);
export const selectSkill =  (skillId) => createSelector([selectSkills], skill => skill.skills[skillId])

export const selectAllSkillCount = createSelector([selectSkills], skill => skill ? Object.keys(skill.skills).length : 0);

