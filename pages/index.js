import { useState } from 'react'
import DayPicker from 'react-day-picker'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import 'react-day-picker/lib/style.css'

const Veileder = dynamic(
  () => import('../components/veileder'),
  { ssr: false }
)

function Home () {
  const [lastDay, setLastDay] = useState('')
  const [showVeileder, setShowVeileder] = useState(false)
  const handleDateChange = date => {
    setLastDay(date)
    setShowVeileder(true)
  }
  const Calendar = () => {
    return (
      <div className='bg-white px-4 py-4'>
        <DayPicker onDayClick={handleDateChange} />
        <p className="mt-2"><strong>Oppgi siste dag du får lønn for</strong></p>
      </div>
    )
  }
  return (
    <>
      <Head>
        <meta name='description' content='Hurtigveileder for deg som har mistet jobbben og skal registrere deg som arbeidssøker.' />
        <title>Hurtigveileder - arbeidssøkerregistrering - mistet jobben</title>
      </Head>
      <div className='container mx-auto px-4 py-4'>
        <h1 className='text-4xl'>
          Hurtigveileder
        </h1>
        {showVeileder ? <Veileder lastDay={lastDay} setShowVeileder={setShowVeileder} /> : <Calendar />}
      </div>
    </>
  )
}

export default Home
