import { amplitudeLogger } from '../lib/amplitude-utils'

const Dokumentasjon = props => {
  const handleClick = event => {
    const url = event.target.href
    amplitudeLogger('link', { url })
  }

  return (
    <div className='bg-white border px-4 py-4 mb-4'>
      <h2 className='text-2xl'>Dokumentasjon</h2>
      <p>
        Det er viktig at arbeidsgiveren din dokumenterer at du ikke lenger er i arbeid.<br />
        De fleste opplysninger finnes arbeidsavtalen og oppsigelsen din.<br />
        Det er lurt å skaffe sluttattest mens du fortsatt er i arbeid.
      </p>
      <ul>
        <li><a href='' className='underline' target='_blank' rel='noopener noreferrer' onClick={handleClick} /></li>
      </ul>
    </div>
  )
}

export default Dokumentasjon
