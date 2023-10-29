import { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  change = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  submit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form className={css.form} onSubmit={this.submit}>
        <h1 className={css.formTitle}>Phonebook</h1>
        <span className={css.formName}>Name</span>
        <input
          className={css.nameInput}
          type="text"
          name="name"
          title="Input Name"
          required
          onChange={this.change}
          value={name}
        />
        <span className={css.formName}>Number</span>
        <input
          className={css.numberInput}
          type="tel"
          name="number"
          title="Input Number"
          required
          onChange={this.change}
          value={number}
        />
        <button className={css.buttonAdd} type="submit">Add contact</button>
      </form>
    );
  }
}
