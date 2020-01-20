import { useEffect } from 'react'
import { amplitudeLogger } from '../lib/amplitude-utils'
import daysFromNow from '../lib/days-from-now'
import calculateStatus from '../lib/calculate-status'
import Arbeidsplassen from './arbeidsplassen'
import DagpengerOgRegistrering from './dagpenger-og-registrering'
import Dokumentasjon from './dokumentasjon'
import Mer from './mer'
import Tilbakemelding from './tilbakemelding'

const Veileder = props => {
  const { lastDay, setShowVeileder, arbeidsplassenSvar } = props
  const days = daysFromNow(lastDay)
  const status = calculateStatus(days)
  const showArbeidsplassen = arbeidsplassenSvar !== 'ja'

  useEffect(() => {
    amplitudeLogger('visning', { status })
    amplitudeLogger('dager-i-forkant', { days, status })
  })

  return (
    <>
      <DagpengerOgRegistrering lastDay={lastDay} setShowVeileder={setShowVeileder} />
      <Dokumentasjon lastDay={lastDay} />
      {showArbeidsplassen ? <Arbeidsplassen lastDay={lastDay} /> : null}
      <Tilbakemelding lastDay={lastDay} />
      <Mer lastDay={lastDay} />
    </>
  )
}

export default Veileder
