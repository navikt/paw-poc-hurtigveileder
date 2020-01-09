import { useEffect } from 'react'
import { amplitudeLogger } from '../lib/amplitude-utils'
import daysFromNow from '../lib/days-from-now'
import Arbeidsplassen from './arbeidsplassen'
import Dagpenger from './dagpenger'
import Dokumentasjon from './dokumentasjon'
import Mer from './mer'
import Registrering from './registrering'
import Tilbakemelding from './tilbakemelding'

const Veileder = props => {
  const { lastDay } = props
  const days = daysFromNow(lastDay)

  useEffect(() => {
    amplitudeLogger('visning')
    amplitudeLogger('dager-i-forkant', { days })
  })

  return (
    <>
      <Registrering lastDay={lastDay} />
      <Dagpenger lastDay={lastDay} />
      <Dokumentasjon />
      <Arbeidsplassen />
      <Tilbakemelding />
      <Mer />
    </>
  )
}

export default Veileder
