import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import HomePage from "./pages/Home/Home.page";
import LoginPage from "./pages/Login/login.page";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
