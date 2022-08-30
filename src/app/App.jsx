import './App.scss';
import AppHeader from '../components/appHeader/AppHeader';
import NavBar from '../components/navBar/NavBar';
import RoomsList from '../components/roomsList/RoomsList';

function App() {
  return (
    <div className='app'> 
      <NavBar/>
      <AppHeader/>
      <RoomsList/>
    </div>
  );
}

export default App;
