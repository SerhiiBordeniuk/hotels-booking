import AppHeader from "../components/appHeader/AppHeader";
import NavBar from "../components/navBar/NavBar";
import RoomsList from "../components/roomsList/RoomsList";
import PaymentForm from "../components/paymentForm/PaymentForm";

function App() {
    return (
        <div className="app">
            <NavBar />
            {/* <AppHeader/>
            <RoomsList/> */}
            <PaymentForm/>
        </div>
    );
}

export default App;
