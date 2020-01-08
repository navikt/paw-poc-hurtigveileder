import Arbeidsplassen from './arbeidsplassen'
import Dagpenger from './dagpenger'
import Dokumentasjon from './dokumentasjon'
import Registrering from './registrering'
import Tilbakemelding from './tilbakemelding'

const Veileder = props => {
  const { lastDay } = props
  return (
    <>
      <Registrering lastDay={lastDay} />
      <Dokumentasjon />
      <Arbeidsplassen />
      <Dagpenger lastDay={lastDay} />
      <Tilbakemelding />
    </>
  )
}

export default Veileder
