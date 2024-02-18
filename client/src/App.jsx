import Login from "./components/Login.jsx";
import Client from "./pages/Client.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin.jsx";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/client" element={<Client/>}></Route>
                    <Route path="/admin" element={<Admin/>}></Route>

                </Routes>
            </Router>
        </div>
    );
}

export default App;
