import { useEffect } from 'react'
import { amplitudeLogger } from '../lib/amplitude-utils'
import daysFromNow from '../lib/days-from-now'
import Arbeidsplassen from './arbeidsplassen'
import DagpengerOgRegistrering from './dagpenger-og-registrering'
import Dokumentasjon from './dokumentasjon'
import Mer from './mer'
import Tilbakemelding from './tilbakemelding'

const Veileder = props => {
  const { lastDay, setShowVeileder } = props
  const days = daysFromNow(lastDay)

  useEffect(() => {
    amplitudeLogger('visning')
    amplitudeLogger('dager-i-forkant', { days })
  })

  return (
    <>
      <DagpengerOgRegistrering lastDay={lastDay} setShowVeileder={setShowVeileder} />
      <Dokumentasjon lastDay={lastDay} />
      <Arbeidsplassen lastDay={lastDay} />
      <Tilbakemelding lastDay={lastDay} />
      <Mer lastDay={lastDay} />
    </>
  )
}

export default Veileder
