import {createSelector} from 'reselect';

const selectLocations = state => state.locations;

export const selectCurrentLocations = createSelector(
  [selectLocations],
  (locations)=> locations.location
)
