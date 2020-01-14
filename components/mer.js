import { handleUrlLog } from '../lib/amplitude-utils'

const Mer = () => {
  return (
    <div className='bg-white border px-4 py-4 mb-4'>
      <p className='mb-2'>
        <strong>Ønsker du mer veiledning?</strong>
      </p>
      <ul>
        <li className='mb-2'><a href='https://www.nav.no/dagpenger' className='underline text-blue-600' target='_blank' rel='noopener noreferrer' onClick={handleUrlLog}>Mer om dagpenger</a></li>
        <li className='mb-2'><a href='https://veiledearbeidssoker.nav.no/mistet-jobben?sprak=nb' className='underline text-blue-600' target='_blank' rel='noopener noreferrer' onClick={handleUrlLog}>Gå til veileder for deg som har mistet jobben eller sagt opp</a></li>
        <li className='mb-2'><a href='https://veiledearbeidssoker.nav.no/permittert?sprak=nb' className='underline text-blue-600' target='_blank' rel='noopener noreferrer' onClick={handleUrlLog}>Gå til veileder for deg som er permittert</a></li>
        <li className='mb-2'><a href='https://veiledearbeidssoker.nav.no/bytte-jobb?sprak=nb' className='underline text-blue-600' target='_blank' rel='noopener noreferrer' onClick={handleUrlLog}>Gå til veileder for deg som vil bytte jobb</a></li>
        <li className='mb-2'><a href='https://veiledearbeidssoker.nav.no/ung-lite-erfaring?sprak=nb' className='underline text-blue-600' target='_blank' rel='noopener noreferrer' onClick={handleUrlLog}>Gå til veileder for deg som er ung</a></li>
        <li className='mb-2'><a href='https://veiledearbeidssoker.nav.no/utenfor-arbeidslivet-lenge?sprak=nb' className='underline text-blue-600' target='_blank' rel='noopener noreferrer' onClick={handleUrlLog}>Gå til veileder for deg som har stått utenfor arbeidslivet lenge</a></li>
      </ul>
    </div>
  )
}

export default Mer
