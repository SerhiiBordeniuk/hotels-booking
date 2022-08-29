import './AppHeader.scss'

const AppHeader = () => {
  return(
    <header className="app__header">
        <div className='app__header__layout'>
          <div className="app__title">
          <h2>
            <span>Luxury</span> <br/>hotels
          </h2>
        </div>
        <nav className="app__menu">
          <ul>
            <li>Rooms</li>
            <li>Payment</li>
          </ul>
        </nav>
        </div>
      <h1 className="app__title__main">
        Welcome to <br/> luxury hotels
      </h1>
      <p className="app__header-text">
        Book your stay and enjoy Luxury redefined at the most affordable rates.
      </p>
      <p>Scroll</p>
    </header>
  )
}


export default AppHeader