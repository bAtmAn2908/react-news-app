import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Categories/Home';
import { Corona } from './Components/Categories/Corona';
import { World } from './Components/Categories/World';
import { Gujarat } from './Components/Categories/Gujarat';
import { Ahmedabad } from './Components/Categories/Ahmedabad';
import { Business } from './Components/Categories/Business';
import { Technology } from './Components/Categories/Technology';
import { Others } from './Components/Categories/Others';
import { Home2 } from './Components/Categories/Home2';
import { Home3 } from './Components/Categories/Home3';
import { Corona2 } from './Components/Categories/Corona2';
import { Corona3 } from './Components/Categories/Corona3';
import { World2 } from './Components/Categories/World2';
import { World3 } from './Components/Categories/World3';
import { Gujarat2 } from './Components/Categories/Gujarat2';
import { Gujarat3 } from './Components/Categories/Gujarat3';
import { Ahmedabad2 } from './Components/Categories/Ahmedabad2';
import { Ahmedabad3 } from './Components/Categories/Ahmedabad3';
import { Business2 } from './Components/Categories/Business2';
import { Business3 } from './Components/Categories/Business3';
import { Technology2 } from './Components/Categories/Technology2';
import { Technology3 } from './Components/Categories/Technology3';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home2' element={<Home2/>}/>
        <Route path='/home3' element={<Home3/>}/>  
        <Route path='/corona' element={<Corona/>}/>
        <Route path='/corona2' element={<Corona2/>}/>
        <Route path='/corona3' element={<Corona3/>}/>
        <Route path='/world' element={<World/>}/>
        <Route path='/world2' element={<World2/>}/>
        <Route path='/world3' element={<World3/>}/>
        <Route path='/gujarat' element={<Gujarat/>}/>
        <Route path='/gujarat2' element={<Gujarat2/>}/>
        <Route path='/gujarat3' element={<Gujarat3/>}/>
        <Route path='/ahm' element={<Ahmedabad/>}/>
        <Route path='/ahm2' element={<Ahmedabad2/>}/>
        <Route path='/ahm3' element={<Ahmedabad3/>}/>
        <Route path='/bus' element={<Business/>}/>
        <Route path='/bus2' element={<Business2/>}/>
        <Route path='/bus3' element={<Business3/>}/>
        <Route path='/tech' element={<Technology/>}/>
        <Route path='/tech2' element={<Technology2/>}/>
        <Route path='/tech3' element={<Technology3/>}/>
        <Route path='/others' element={<Others/>}/>
        {/* <Route path='/corona' element={<Category id={"https://timenews.co.in/wp-json/wp/v2/posts?categories=833"}/>}/>
        <Route path='/world' element={<Category id={"https://timenews.co.in/wp-json/wp/v2/posts?categories=24"}/>}/>
        <Route path='/guj' element={<Category id={"https://timenews.co.in/wp-json/wp/v2/posts?categories=11"}/>}/>
        <Route path='/ahm' element={<Category id={"https://timenews.co.in/wp-json/wp/v2/posts?categories=3"}/>}/>
        <Route path='/bus' element={<Category id={"https://timenews.co.in/wp-json/wp/v2/posts?categories=7"}/>}/>
        <Route path='/tech' element={<Category id={"https://timenews.co.in/wp-json/wp/v2/posts?categories=8"}/>}/>
        <Route path='/others' element={<Category id={"https://timenews.co.in/wp-json/wp/v2/posts?categories=6"}/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
