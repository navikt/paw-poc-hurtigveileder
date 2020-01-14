import { handleUrlLog } from '../lib/amplitude-utils'

export default () => {
  return (
    <footer className='w-screen bg-navBrun flex justify-center'>
      <div className='container text-center pt-5 pb-2'>
        <a href='https://www.nav.no' className='text-white hover:text-blue-600'>NAV</a>
        <ul className='block'>
          <li className='py-2 mx-4 md:inline-block'><a href='https://www.nav.no/person/kontakt-oss' className='text-white hover:text-blue-600' onClick={handleUrlLog}>Kontakt oss</a></li>
          <li className='py-2 mx-4 md:inline-block'><a href='https://www.nav.no/no/NAV+og+samfunn/Kontakt+NAV/Brukerstotte+nav+no/Tilgjengelighet' className='text-white hover:text-blue-600' onClick={handleUrlLog}>Tilgjengelighet</a></li>
          <li className='py-2 mx-4 md:inline-block'><a href='https://www.nav.no/personvern' className='text-white hover:text-blue-600' onClick={handleUrlLog}>Personvernerklæring - cookies</a></li>
          <li className='py-2 mx-4 md:inline-block'><a href='https://www.nav.no/no/rss' className='text-white hover:text-blue-600' onClick={handleUrlLog}>Nyheter som RSS</a></li>
        </ul>
        <p className='text-copyright'>
            Arbeids- og velferdsetaten 2020
        </p>
      </div>
    </footer>
  )
}
