import { Component } from "react"
import { nanoid } from "nanoid";

import { PhoneForm } from './Form/PhoneForm'
import{ ContactList } from './ContactsList/ContactsList'
import { FilterField } from './FilterField/FilterField'


export class App extends Component {

  
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', tel: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', tel: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', tel: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', tel: '227-91-26'},
  ],
  filter: '',
}



  addContact = newContact => {
    const { contacts } = this.state;
    console.log(contacts)
    console.log(newContact)
    const isExist = contacts.some( contact => contact.name.toLowerCase() === newContact.name.toLowerCase());
    console.log(isExist)

    if (isExist) {
    alert(`${newContact.name} is already in contacts.`);
  return
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts,
      { id: nanoid(), ...newContact }],
    }));
    
  };

  

  changeFilter = evt => {
    console.log(evt)
    this.setState({
      filter: evt.target.value
    })
  }


  render() {

    const { contacts, filter } = this.state;

    const visibleContact = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
      <div>
        <h1>Phonebook</h1>
        <PhoneForm
          onAdd={this.addContact}
        />
        <h2>Contacts</h2>
        <FilterField
          filter={filter}
          onChangeFilter={this.changeFilter}
          />
        <ContactList
          contacts={visibleContact} />
      </div>
    )
  
  }

};
