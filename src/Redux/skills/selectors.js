import { createSelector } from 'reselect';

const selectSkills = (state) => state.hasOwnProperty('skills') && state.skills ? state.skills : {};

export const selectSkillList = createSelector([selectSkills], skill => skill.skills);
export const selectSkillLoading = createSelector([selectSkills], skill => skill.skillsFetching);
export const selectSkill = (skillId) => createSelector([selectSkills], skill => skill.skills[skillId])

export const selectAllSkillCount = createSelector([selectSkills], skill => skill ? Object.keys(skill.skills).length : 0);

export const selectSkillListFrontend = createSelector([selectSkills], skill => filterSkills(skill.skills, 'frontend'));
export const selectSkillListBackend = createSelector([selectSkills], skill => filterSkills(skill.skills, 'backend'));
export const selectSkillListDevops = createSelector([selectSkills], skill => filterSkills(skill.skills, 'devops'));
export const selectSkillListUiux = createSelector([selectSkills], skill => filterSkills(skill.skills, 'uiux'));

const filterSkills = (skills, type) => {
  let skillList = [];
   Object.keys(skills).filter((key, i) => {
      if(skills[key]['type'] === type) {
       skillList.push(skills[key])
      }
  })

  return skillList;
}