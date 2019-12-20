import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/loginUser';

class LogInComp extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        const userData = {
            username: this.state.username,
            password: this.state.password
        }

        event.preventDefault();
        if (
            !(this.state.username === "" || this.state.pasword === "")
        ) {
            event.preventDefault();
            this.props.loginUser(userData);
        } else {
            console.log("ERROR CAMPO VACÍO")
        }
    }
    render() {
        return (
            <div className="logIn-div">
                <form onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br />
                    <label>Password: </label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br /><br />
                    <input type="submit" value="LOG IN" className="button" />
                </form>
                    <a href="http://localhost:5000/login/google" className="button button-cities">LOG IN WITH GOOGLE</a>
            </div>
        )

    }
}

LogInComp.propTypes = {
    logUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    console.log(state)
    return ({ users: state.users.users })
}

export default connect(mapStateToProps, { loginUser })(LogInComp);