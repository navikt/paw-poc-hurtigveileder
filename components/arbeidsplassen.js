import { amplitudeLogger } from '../lib/amplitude-utils'

const Arbeidsplassen = props => {
  const handleClick = event => {
    amplitudeLogger('hurtigveileder.click', { goto: 'arbeidsplassen.no' })
  }

  return (
    <div className='rounded border px-4 py-4 mb-4'>
      <h2 className='text-2xl'>Legg inn CV på arbeidsplassen.no</h2>
      <p>
        På <a href='https://arbeidsplassen.nav.no/' className="underline" target='_blank' rel='noopener noreferrer' onClick={handleClick}>arbeidsplassen.no</a> finner du mange ledige stillinger.<br />
        Det er også enkelt å registrere CVen din slik at arbeidsgivere også kan finne deg.
      </p>
    </div>
  )
}

export default Arbeidsplassen
