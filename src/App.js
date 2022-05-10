import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Wallet from './components/Wallet';
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/wallet" element={<Wallet/>} />
        </Routes>
      </div>
    </BrowserRouter>
      );
}

export default App;
