import './App.css';
import SearchPage from './components/SearchPage';
import Home from './components/Home';
import {Routes , Route } from "react-router-dom";

function App() {
  return (
      <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/search" element = {<SearchPage/>}/>
      </Routes>
  );
}
export default App;
