import { handleUrlLog } from '../lib/amplitude-utils'
import daysFromNow from '../lib/days-from-now'
import calculateStatus from '../lib/calculate-status'

const Mer = props => {
  const { lastDay } = props
  const days = daysFromNow(lastDay)
  const status = calculateStatus(days)
  return (
    <div className='bg-white border px-4 py-4 mb-4 border border-navGra40'>
      <p className='mb-2'>
        <strong>Ønsker du mer veiledning?</strong>
      </p>
      <ul>
        <li className='mb-2'><a href='https://www.nav.no/dagpenger' data-status={status} className='underline text-navBla' target='_blank' rel='noopener noreferrer' onClick={handleUrlLog}>Mer om dagpenger</a></li>
        <li className='mb-2'><a href='https://veiledearbeidssoker.nav.no/mistet-jobben?sprak=nb' data-status={status} className='underline text-navBla' target='_blank' rel='noopener noreferrer' onClick={handleUrlLog}>Gå til veileder for deg som har mistet jobben eller sagt opp</a></li>
        <li className='mb-2'><a href='https://veiledearbeidssoker.nav.no/permittert?sprak=nb' data-status={status} className='underline text-navBla' target='_blank' rel='noopener noreferrer' onClick={handleUrlLog}>Gå til veileder for deg som er permittert</a></li>
        <li className='mb-2'><a href='https://veiledearbeidssoker.nav.no/bytte-jobb?sprak=nb' data-status={status} className='underline text-navBla' target='_blank' rel='noopener noreferrer' onClick={handleUrlLog}>Gå til veileder for deg som vil bytte jobb</a></li>
        <li className='mb-2'><a href='https://veiledearbeidssoker.nav.no/ung-lite-erfaring?sprak=nb' data-status={status} className='underline text-navBla' target='_blank' rel='noopener noreferrer' onClick={handleUrlLog}>Gå til veileder for deg som er ung</a></li>
        <li className='mb-2'><a href='https://veiledearbeidssoker.nav.no/utenfor-arbeidslivet-lenge?sprak=nb' data-status={status} className='underline text-navBla' target='_blank' rel='noopener noreferrer' onClick={handleUrlLog}>Gå til veileder for deg som har stått utenfor arbeidslivet lenge</a></li>
      </ul>
    </div>
  )
}

export default Mer
