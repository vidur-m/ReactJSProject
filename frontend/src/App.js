//import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Welcome from './Components/Welcome';
import Stats from './Components/Stats';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <section className = "hero">
      <Router>
        <div className="App">
          <header className="App-header">
            <Nav />
            <Routes>
              <Route path="/" element={<Navigate to="/welcome" />} />
              <Route path="/welcome" element={<Welcome/>}/>
              <Route path="/stats" element={<Stats/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
            </Routes>
          </header>
        </div>
      </Router>
    </section>
  );
}

export default App;
