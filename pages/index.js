import { useState } from 'react'
import DayPicker from 'react-day-picker'
import Veileder from '../components/veileder'
import 'react-day-picker/lib/style.css'

function Home () {
  const [lastDay, setLastDay] = useState('')
  const [showVeileder, setShowVeileder] = useState(false)
  const handleDateChange = date => {
    setLastDay(date)
    setShowVeileder(true)
  }
  return (
    <div className="container mx-auto px-4">
    <h1 >
      Hurtigveileder
    </h1>
    <p>Hvilken dato er din siste arbeidsdag?</p>
    <DayPicker onDayClick={handleDateChange} />
    { showVeileder ? <Veileder lastDay={lastDay} /> : null }
    </div>
  )
}

export default Home
