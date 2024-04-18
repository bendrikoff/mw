import logo from './logo.svg';
import './App.css';
import WorkPlace from './pages/WorkPlace';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import MainPage from "./pages/MainPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<MainPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
