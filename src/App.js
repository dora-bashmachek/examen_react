import {Routes, Route} from 'react-router-dom'
import Converse from './components/converse/converse';
import Vans from './components/vans/vans';
import Jordan from './components/jordan/jordan';
import Login from './components/login/login';
// import Search from './components/search/search';
//import './App.css';
import Main from './components/main/main';


const App =()=> {  
  return(  
    <div> 
      <Routes>
        <Route path="/"element={<Login/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/converse" element={<Converse/>}/>     
        <Route path="/vans" element={<Vans/>}/>      
        <Route path="/jordan" element={<Jordan/>}/> 
      </Routes>
      
      
{/* <div className='login'> <Login/> </div> */}
{/* <div className='search'> <Search/> </div>  */}
  </div> 
  ) 
} 

export default App;

  










// import HomePage from './HomePage';
// import Loginn from './loginn';
// import {Routes, Route} from 'react-router-dom'
// import {Link} from 'react-router-dom'
      {/* <Routes> 
      <Route path="/" element={<HomePage/>}/> 
      <Route path="/login" element={<Loginn/>}/> 
      </Routes> 
      
      <ul>
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/login">login</Link></li>
      </ul> */}