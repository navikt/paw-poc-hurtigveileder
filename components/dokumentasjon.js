import { handleUrlLog } from '../lib/amplitude-utils'
import daysFromNow from '../lib/days-from-now'
import calculateStatus from '../lib/calculate-status'

const Dokumentasjon = props => {
  const { lastDay } = props
  const days = daysFromNow(lastDay)
  const status = calculateStatus(days)

  return (
    <div className='bg-white border px-4 py-4 mb-4 border border-navGra40'>
      <p className='mb-2'>
        <a href='https://www.nav.no/no/person/arbeid/dagpenger-ved-arbeidsloshet-og-permittering/dagpenger-nar-du-er-arbeidsledig/dagpengervedlegg' data-status={status} className='underline text-navBla' target='_blank' rel='noopener noreferrer' onClick={handleUrlLog}>Du må levere dokumentasjon når du søker om dagpenger.</a>
      </p>
      <p>
        Opplysningene vi trenger vil ofte stå i arbeidsavtalen og oppsigelsen din.
      </p>
    </div>
  )
}

export default Dokumentasjon
