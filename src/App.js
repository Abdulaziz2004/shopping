import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components';
import Bag from './pages/Bag';
import Sidebar from './components/Sidebar';
import BagComponents from './components/Bag';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Products from './pages/Products';
import Discription from './pages/Discription';

function App() {
  
  const [bag, setBag] = useState(JSON.parse(localStorage.getItem("bag")) || []);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://142.93.229.148/products")
    .then(res => setProducts(res.data))
  }, [])

  const addtobag = (data) => {
    setBag([...bag, data])
    localStorage.setItem("bag", JSON.stringify([...bag, data]))
  }

  return (
    <Wrapper>
        <Sidebar/>
      <Routes>
        <Route path='/' element={<Products elements={products} addtobag={addtobag}/>}/>
        <Route path='/bag' element={<Bag element={Bag}/>}/>
        <Route path='/disscription/:id' element={<Discription />}/>
      </Routes>
        <BagComponents elements={bag}/>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 72px 1fr 300px;
  gap: 30px;
  padding: 30px;
`
