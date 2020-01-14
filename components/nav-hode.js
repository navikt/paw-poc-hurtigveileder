export default () => {
  return (
    <header className='bg-white mb-5'>
      <div className='flex flex-col'>
        <div className='py-4 flex justify-center border-b border-gray-400'>
          <a href='https://www.nav.no' title='Hjem'>
            <img src='https://appres.nav.no/_public/beta.nav.no/images/logo.png?_ts=1512923c9b0' alt='NAV-logo' />
          </a>
        </div>
        <div className='w-screen text-center bg-blue-100 py-10 border-b-4 border-blue-400'>
          <h1 className='text-4xl font-semibold'>Hurtigveileder</h1>
        </div>
      </div>
    </header>
  )
}
