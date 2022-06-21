import {locationTypes} from './location.types'

const INITIAL_STATE = {
  location: []
};

const locationReducer = (state = INITIAL_STATE, action) =>{
  switch (action.type) {
    case locationTypes.GET_LOCATIONS_DATA:
      return {
        ...state,
        location: action.payload
      }
    default:
      return state
  }
}

export default locationReducer
