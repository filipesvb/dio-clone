import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import Signup from './pages/Signup';
import Feed from './pages/Feed';
import { Teste } from './pages/Teste';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/teste' element={<Teste />}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/feed' element={<Feed></Feed>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
