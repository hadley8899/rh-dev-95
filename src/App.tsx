import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/win95.css/assets/win95.css';
import './index.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from "./components/Navbar.tsx";
import ScrollingFacts from "./components/ScrollingFacts.tsx";

function App() {
    return (
        <Router>
            <div className="windows-scrollbar">
                <Navbar/>
                <ScrollingFacts/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;