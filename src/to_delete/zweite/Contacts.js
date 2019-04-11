import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     contacts: [
  //       {
  //         id: 1,
  //         name: 'John Doe',
  //         email: 'jdoe@gmail.com',
  //         phone: '555-555-5555'
  //       },
  //       {
  //         id: 2,
  //         name: 'Karen Williams',
  //         email: 'kwilliams@gmail.com',
  //         phone: '222-222-2222'
  //       },
  //       {
  //         id: 3,
  //         name: 'Henry Johnson',
  //         email: 'hjohnson@gmail.com',
  //         phone: '111-111-111'
  //       }
  //     ]
  //   };
  // }

  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Karen Williams',
        email: 'kwilliams@gmail.com',
        phone: '222-222-2222'
      },
      {
        id: 3,
        name: 'Henry Johnson',
        email: 'hjohnson@gmail.com',
        phone: '111-111-111'
      }
    ]
  };

  deleteContact = id => {
    // console.log(id);
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          // <h1 key={contact.id}>{contact.name}</h1>
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
            // name={contact.name}
            // email={contact.email}
            // phone={contact.phone}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
