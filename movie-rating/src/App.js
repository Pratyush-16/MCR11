
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Watchlist from './pages/Watchlist';
import SingleMovie from './pages/SingleMovie';


function App() {
  return (
    <div className="App">
      
   <Routes>
    <Route path="/"  element={<Home/>}  />
    <Route path="/starred"  element={<Starred/>}  />
    <Route path="/watchlist"  element={<Watchlist/>}  />
    <Route path="/movies/:movieID"  element={<SingleMovie/>}  />

   </Routes>
    </div>
  );
}

export default App;
