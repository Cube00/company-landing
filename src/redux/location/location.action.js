import {locationTypes} from './location.types'

export const getLocationData = (locations) =>({
    type: locationTypes.GET_LOCATIONS_DATA,
    payload: locations
})
