import React, { Component } from 'react';
import firebase from '../../firebase';


class Modal extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            clients: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log("This is working")
        const clientRef = firebase.database().ref('clients');
        const client = {
            name: this.state.name,
            email: this.state.email
        }
        clientRef.push(client);
        this.setState({
            name: '',
            email: ''
        });
    }

    render() {
        return (
            <section className='add-item'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Young Bill" />
                    <input type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="HadToBeYou@gmail.com" />
                    <button onSubmit={this.handleSubmit}>Submit</button>
                </form>
            </section>
        )
    }
}
export default Modal;