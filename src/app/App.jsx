import './App.scss';
import AppHeader from '../components/appHeader/AppHeader';
import NavBar from '../components/navBar/NavBar';

function App() {
  return (
    <div className='app'> 
      <NavBar/>
      <AppHeader/>
    </div>
  );
}

export default App;
