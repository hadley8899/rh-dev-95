import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/win95.css/assets/win95.css';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import DesktopShell from './components/DesktopShell';

function App() {
    return (
        <Router>
            <DesktopShell/>
        </Router>
    );
}

export default App;
