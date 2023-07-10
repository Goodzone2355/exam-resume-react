import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Components/Form/Form";
import Resume from "./Components/Resume/Resume";

function App() {
    return (
        <>
            <Header />
            <Router>
                <Routes>
                    <Route path="" element={<Form />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
