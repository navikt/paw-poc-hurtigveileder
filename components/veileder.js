import { useEffect } from 'react'
import { amplitudeLogger } from '../lib/amplitude-utils'
import daysFromNow from '../lib/days-from-now'
import prettyPrintDate from '../lib/pretty-print-date'
import Arbeidsplassen from './arbeidsplassen'
import Dagpenger from './dagpenger'
import Dokumentasjon from './dokumentasjon'
import Mer from './mer'
import Tilbakemelding from './tilbakemelding'

const Veileder = props => {
  const { lastDay, setShowVeileder } = props
  const days = daysFromNow(lastDay)

  const handleClick = () => {
    setShowVeileder(false)
  }

  useEffect(() => {
    amplitudeLogger('visning')
    amplitudeLogger('dager-i-forkant', { days })
  })

  return (
    <>
      <Dagpenger lastDay={lastDay} setShowVeileder={setShowVeileder}/>
      <Dokumentasjon />
      <Arbeidsplassen />
      <Tilbakemelding />
      <Mer />
    </>
  )
}

export default Veileder
