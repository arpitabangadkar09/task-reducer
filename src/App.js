import React from 'react';
import './App.css';

 import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Home from './Components/Home/Home';
import UserPage from './Components/UserPage/UserPage';
 import Menu from './Components/Menu/Menu';

// import Header from './Components/Header/Header';

function App() {
  return (
   <>

 <React.Fragment> 
    <BrowserRouter>
         <Menu />
            
             <Routes> 
            <Route path="/" Component={Home } />
            <Route path="/UserPage" Component={UserPage } />
           </Routes>
    </BrowserRouter>
     </React.Fragment>  
       {/* <Home />
       <UserPage /> */}
  
   </>
  
  
    
  
   
    
  );
}

export default App;
