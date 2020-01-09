import { amplitudeLogger } from '../lib/amplitude-utils'

const Mer = () => {
  const handleClick = event => {
    const url = event.target.href
    amplitudeLogger('link', { url })
  }

  return (
    <div className='bg-white border px-4 py-4 mb-4 cursor-pointer'>
      <h2 className='text-2xl'>Mer veiledning</h2>
      <p>
        Ønsker du mer veiledning kan gå til vår utvidede veileder.
      </p>
      <ul>
        <li><a href='https://veiledearbeidssoker.nav.no/mistet-jobben?sprak=nb' className='underline' target='_blank' rel='noopener noreferrer' onClick={handleClick}>Gå til veileder for deg som har mistet jobben eller sagt opp</a></li>
        <li><a href='https://veiledearbeidssoker.nav.no/permittert?sprak=nb' className='underline' target='_blank' rel='noopener noreferrer' onClick={handleClick}>Gå til veileder for deg som er permittert</a></li>
        <li><a href='https://veiledearbeidssoker.nav.no/bytte-jobb?sprak=nb' className='underline' target='_blank' rel='noopener noreferrer' onClick={handleClick}>Gå til veileder for deg som vil bytte jobb</a></li>
        <li><a href='https://veiledearbeidssoker.nav.no/ung-lite-erfaring?sprak=nb' className='underline' target='_blank' rel='noopener noreferrer' onClick={handleClick}>Gå til veileder for deg som er ung</a></li>
        <li><a href='https://veiledearbeidssoker.nav.no/utenfor-arbeidslivet-lenge?sprak=nb' className='underline' target='_blank' rel='noopener noreferrer' onClick={handleClick}>Gå til veileder for deg som har stått utenfor arbeidslivet lenge</a></li>
      </ul>
    </div>
  )
}

export default Mer
