import { createSelector } from 'reselect';

const selectExperience = (state) => state.hasOwnProperty('experience') && state.experience ? state.experience : {};

export const selectExperienceList = createSelector([selectExperience], experience => experience.experience);
export const selectExperienceLoading = createSelector([selectExperience], experience => experience.experienceFetching);
