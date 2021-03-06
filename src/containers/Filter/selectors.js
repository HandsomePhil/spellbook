import { createSelector } from 'reselect';

const selectClassesState = state => state.classes;
const selectSchoolsState = state => state.schools;

export function selectSortedFilter(type) {
  return createSelector(
    [selectClassesState, selectSchoolsState],
    (classes, schools) => {
      const filters = {
        classes: classes,
        school: schools,
      };
      return filters[type].sort();
    }
  );
}
