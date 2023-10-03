
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from"./components/ItemListContainer/itemListContainer";
import DetalleContainer from './components/DetalleContainer/DetalleContainer';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
        
          <NavBar />
          
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categotyId' element={<ItemListContainer greeting={"Nuestras remeras"}/>}/>
            <Route path='/item/:itemId' element={<DetalleContainer/>}/>
            <Route path='/' element={<h1>error 404</h1>}/>
          </Routes>
        </BrowserRouter>
       
    </div>
    
   
  );
}

export default App;
