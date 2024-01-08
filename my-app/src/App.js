import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './project/navbar';
import Home from './project/Home';
import About from './project/About';
import Contact from './project/Contact';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Form from './component/form';
function App() {
  return (
    <div className="App">
          {/* <img src='./image/aboutimg.jpg'alt='no'></img> */}
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about/' element={<About/>}/>
        <Route path='contact/' element={<Contact/>}/>
       </Routes>
      {/* <Form/> */}
    </div>
  );
}

export default App;
