import React, { Component } from "react";
import styles from './Form.module.css';
import PropTypes from 'prop-types';

const initialState = {
    number: '',
    name: ''
}
export default class Form extends Component{

    state = { ...initialState };


    onHandleChange = e => {
        const { name, value } = e.target;
    this.setState({[name]: value})
    }
    
    onHandleSubmit = e => {
        e.preventDefault();
        this.props.addContact(this.state);
        this.setState({ ...initialState })
    }





    render() {
        const { name, number } = this.state;
        console.log(number)
        return <>
            <form onSubmit={this.onHandleSubmit} action="">
                <label className={styles.label} htmlFor="name">Name</label>
            <input onChange={this.onHandleChange}
            type="text"
                    name="name"
                    value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
        <label className={styles.label} htmlFor="number">Number</label>
                <input onChange={this.onHandleChange}
  type="tel"
                    name="number"
                    value={number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
                /><button className={styles.btn} type="submit">Add</button></form>
        </>


    }

}
Form.propTypes = {
    addContact: PropTypes.func.isRequired
}