const Innhold = () => {
  return (
    <div>
      Registrer deg
    </div>
  )
}

const Registrering = props => {
  const { lastDay } = props
  const now = new Date
  return lastDay <= now ? <Innhold /> : null
}

export default Registrering
