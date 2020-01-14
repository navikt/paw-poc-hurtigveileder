import { handleUrlLog } from '../lib/amplitude-utils'

const Dokumentasjon = props => {
  return (
    <div className='bg-white border px-4 py-4 mb-4'>
      <p className='mb-2'>
        <a href='https://www.nav.no/no/person/arbeid/dagpenger-ved-arbeidsloshet-og-permittering/dagpenger-nar-du-er-arbeidsledig/dagpengervedlegg' className='underline text-blue-600' target='_blank' rel='noopener noreferrer' onClick={handleUrlLog}>Du må levere dokumentasjon når du søker om dagpenger.</a>
      </p>
      <p>
        Opplysningene vi trenger vil ofte stå i arbeidsavtalen og oppsigelsen din.
      </p>
    </div>
  )
}

export default Dokumentasjon
