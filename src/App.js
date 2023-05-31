import './App.css';
import React from 'react';
import SearchPage from './components/SearchPage';
import Home from './components/Home';
import Login from './components/Login';
import {Routes , Route } from "react-router-dom";


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  
  return (
    <div>
      <p>{!data ? "Loading..." : data}</p>
      <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/search" element = {<SearchPage/>}/>
                <Route path = "/login" element = {<Login />}/>
      </Routes>
      </div>
  );
}
export default App;
