import RepustateMain from './components/RepustateMain';
import Signin from './components/Signin';
import {Route,Routes} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/*' element={<RepustateMain/>} />
        <Route path='/Signin' element={<Signin/>} />
        <Route path='/Signup' element={<Login/>} />
        <Route path='/Home' element={<Home/>} />

       </Routes>
       
    </div>
  );
}
export default App;
