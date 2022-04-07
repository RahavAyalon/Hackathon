import './App.css';
import Filtering from './Filtering';
import Main from './Main';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Navbar';
function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Routes>
          <Route exact path="/filtering" element={<Filtering />} />
          <Route exact path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
