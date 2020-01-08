import amplitude from 'amplitude-js'
import isProduction from './is-production'
import { AMPLITUDE_ENDPOINT, AMPLITUDE_API_KEY_TEST, AMPLITUDE_API_KEY_PROD } from '../config'
const apiKey = isProduction() ? AMPLITUDE_API_KEY_PROD : AMPLITUDE_API_KEY_TEST
const config = {
  apiEndpoint: AMPLITUDE_ENDPOINT,
  saveEvents: true,
  includeUtm: true,
  includeReferrer: true,
  trackingOptions: {
     city: false,
     ip_address: false, 
  }
}

amplitude.getInstance().init(apiKey, undefined, config)

export function amplitudeLogger (name, values) {
  amplitude.logEvent(name, values)
}
