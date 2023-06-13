import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddData from './Components/AddData'
import RetrieveData from './Components/RetrieveData';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/add" element={<AddData />}></Route>
        <Route path="/find" element={<RetrieveData />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
