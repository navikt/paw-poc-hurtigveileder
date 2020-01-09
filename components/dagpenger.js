import { amplitudeLogger } from '../lib/amplitude-utils'
import calculateDay from '../lib/calculate-day'
import prettyPrintDate from '../lib/pretty-print-date'

const DagpengeLink = () => {
  const handleClick = event => {
    const url = event.target.href
    amplitudeLogger('link', { url })
  }
  return (
    <li><a href='https://www.nav.no/soknader/nb/person/arbeid/dagpenger' className='underline' target='_blank' rel='noopener noreferrer' onClick={handleClick}>Gå til dagpengesøknad</a></li>
  )
}

const Dagpenger = props => {
  const { lastDay } = props
  const firstDay = calculateDay(lastDay, 6)
  const now = new Date()
  const handleClick = event => {
    const url = event.target.href
    amplitudeLogger('link', { url })
    return true
  }
  return (
    <div className='rounded border px-4 py-4 mb-4'>
      <h2 className='text-2xl'>Søk om Dagpenger</h2>
      <p>
        Du bør søke om dagpenger <strong>{firstDay <= now ? 'nå' : prettyPrintDate(firstDay)}</strong>
      </p>
      <ul>
        {firstDay <= now ? <DagpengeLink /> : null}
        <li><a href='https://www.nav.no/arbeid/dagpenger/kalkulator' className='underline' target='_blank' rel='noopener noreferrer' onClick={handleClick}>Gå til dagpengekalkulatoren</a></li>
        <li><a href='https://www.nav.no/no/person/arbeid/dagpenger-ved-arbeidsloshet-og-permittering/dagpenger-nar-du-er-arbeidsledig' className='underline' target='_blank' rel='noopener noreferrer' onClick={handleClick}>Gå til dagpengesiden</a></li>
      </ul>
    </div>
  )
}

export default Dagpenger
