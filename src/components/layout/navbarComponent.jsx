import React,{Fragment,useContext} from 'react';
import { Link }  from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';


const NavBar =() => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const {isAuthenticated,logOut,token,isAdmin} = authContext;
  const {clearContacts} = contactContext;

  const onLogOut = () => {
    clearContacts();
    logOut();
  }

  const guestLinks = (
    <Fragment>
        <Link className="navbar-brand" to="/register">Register</Link>
        <Link className="navbar-brand" to="/login">Login</Link>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
       <Link className="navbar-brand" to="/">Home</Link>
       <Link className="navbar-brand" to="/about">About{isAdmin}</Link>
       <Link className="navbar-brand" to="/admin">test Admin</Link>
       <Link className="navbar-brand" onClick={onLogOut} to="#">Logout</Link>
    </Fragment>
  );

  const adminLinks = (
    <Fragment>
       <Link className="navbar-brand" to="/about">Dashboard</Link>
       <Link className="navbar-brand" to="/">test user</Link>
       <Link className="navbar-brand" onClick={onLogOut} to="#">Logout</Link>
    </Fragment>
  );

  



  return (
    <Fragment>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Contact Keeper</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                 {/* { (!token && !isAuthenticated ) ?  guestLinks : authLinks } */}
                 { (!token && !isAuthenticated ) &&  guestLinks }
                 { (token && isAuthenticated && !isAdmin ) && authLinks }
                 { (token && isAuthenticated && isAdmin ) && adminLinks }
              </div>
           </div>
</nav> 
    </Fragment>
  );
}

export default NavBar;
