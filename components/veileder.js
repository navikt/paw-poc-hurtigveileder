import { useEffect } from 'react'
import { amplitudeLogger } from '../lib/amplitude-utils'
import daysFromNow from '../lib/days-from-now'
import prettyPrintDate from '../lib/pretty-print-date'
import Arbeidsplassen from './arbeidsplassen'
import Dagpenger from './dagpenger'
import Dokumentasjon from './dokumentasjon'
import Mer from './mer'
import Registrering from './registrering'
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
      <div className='px-4 py-4 mb-4'>
        Din siste dag med lønn {days > 0 ? 'er' : 'var'} <strong>{prettyPrintDate(lastDay)}</strong>.<br />
        Her er hva du bør gjøre fremover.<br/>
        <button className="border-2 border-blue-500 mt-2 px-2 py-2 text-l" onClick={handleClick}>Jeg vil sette ny dato</button>
      </div>
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
