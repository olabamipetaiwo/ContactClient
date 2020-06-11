import React,{Fragment,useContext} from 'react';
import ContactItem from './contactItemComponent';
import {TransitionGroup} from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';

const Contacts =() => {
    const contactContext = useContext(ContactContext);
    const {contacts,filtered} = contactContext;

    if(contacts.length === 0) {
      return <h4 className="text-primary">Please add a contact</h4>
    }else {
      return (
        <Fragment>
          <TransitionGroup> 
              <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      filtered != null ?
                        filtered.map((contact,index) => (
                            <ContactItem key={index} contact={contact} />
                        )):
                        contacts.map((contact,index) => (
                          <ContactItem key={index} contact={contact} />
                         ))
                    }
                    </tbody>
                    
                  </table>
                  
               </TransitionGroup>
        </Fragment>
      );
    }

}

export default Contacts;
