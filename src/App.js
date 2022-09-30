import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ItemDetail from './pages/ItemDetail';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/item/:id' element={<ItemDetail></ItemDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
