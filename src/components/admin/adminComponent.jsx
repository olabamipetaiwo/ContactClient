import React,{Fragment,useContext,useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';


const Admin =() => {
  const authContext = useContext(AuthContext);
  const {loadUser} = authContext;
 
   useEffect(() => {  
     loadUser();
     // eslint-disable-next-line
  },[]);



  return (
    <Fragment>
       <div className="row">
           <h2>Admin  Page</h2>
       </div>
    </Fragment>
  );
}

export default Admin;
