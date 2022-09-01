import NavBar from "../components/navBar/NavBar";
import PaymentPage from "../pages/PaymentPage";
import RoomsPage from "../pages/RoomsPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="app">
                {/* <NavBar /> */}
                <Routes>
                    <Route path="/" element={<RoomsPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
