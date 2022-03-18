import logo from './logo.svg';
import Home from './components/Home/Home'
import './App.css';
import { Link, Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
