// import logo from './logo.svg';
import {filterData, apiUrl} from './data.jsx';
// import './App.css';
import Filter from './components/Filter.jsx';
import Fetch from './components/Fetch.jsx';
import { useState } from 'react';


function App() {
  const [category, setCategory] = useState('All');

  return (
    <div className="App">
      <div className="heading">
        <h1>Top Courses</h1>
      </div>
      
      <div className="filter">
        <Filter filterData = {filterData} setCategory = {setCategory}></Filter>
      </div>

      <div className="cards">
        <Fetch apiUrl = {apiUrl} category = {category}></Fetch>
      </div>
    </div>
  );
}

export default App;
