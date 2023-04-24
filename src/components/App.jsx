import { Component } from "react"
import { nanoid } from 'nanoid'


export class App extends Component {

  state = {
    contacts: [],
    name: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(event.currentTarget.name.value);
    
    this.props.onSubmit(() => {
      this.setState({ name: event.currentTarget.name.value });
      console.log(this.state.name);
      this.state.contacts(...this.state.contacts, { name: this.state.name, id: nanoid() });
    })
    console.log(this.state.contacts);
    this.setState({ name: '' });
  }

  render() {
    const id = nanoid()

    return (
      <div>
        <p>Phonebook</p>
        <p>Name</p>
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <input type="submit" value="Add contact" />
        </form>
        
        <p>Contacts</p>
        <ul>
          {this.state.contacts.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>

      </div>
    );
  }
};

export default App;