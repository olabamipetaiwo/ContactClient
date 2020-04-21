import React,{Fragment,useContext,useEffect} from 'react';
import Contacts from "../contacts/contactsComponent";
import ContactForm from "../contacts/contactFormComponent";
import ContactsFilter from '../contacts/contactsFilterComponent';

import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const Home =() => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  
  const {loadUser,user} = authContext;
  const {loadContacts} = contactContext;

 
   useEffect(() => {  
     loadUser();
     //eslint-disable-next-line
  },[]);

  useEffect(() => {
      loadContacts(localStorage.userId);
      //eslint-disable-next-line
  },[]);

  const mainDiv = (
      <Fragment>
        <div className="row">
       
          <div className="col-sm-7">
          <h2  className="mb2 text-primary text-center">Welcome {(user != null) ? user.email : 'WebsiteUser'}</h2>
              <ContactsFilter />
              <Contacts />
          </div>
          <div className="col-sm-5">
            <ContactForm />
          </div>
          
        </div>
    </Fragment>
  );

  const prepDiv =(
      <Fragment>
        <div className="row">
        <h2  className="mb2 text-primary text-center">Welcome {(user != null) ? user.email : 'WebsiteUser'}</h2>
          <div className="col-sm-6">
         
            <ContactForm />
          </div>   
        </div>
    </Fragment>
  );

  return (
    <div>
         { (user != null) ? mainDiv : prepDiv}
    </div>
  );
}

export default Home;
