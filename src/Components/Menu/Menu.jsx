import React from 'react';



const Menu = () => {
     return(
       <>
              {/* <NavLink to="/"> Home </NavLink>
            <NavLink to="/UserPage"> UserPage </NavLink>  */}
              <br /> 
            <a ClassName = "active-class1" href = "/"> Home </a>
           <a  ClassName = "active-class2" href = "/UserPage"> UserPage </a> 
       </>
     );
};

export default Menu;