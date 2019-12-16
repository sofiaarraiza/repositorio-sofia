import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUser } from '../actions/createUser';

class CreateAccountComp extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            profile: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        const newUser = {
            username: this.state.username,
            password: this.state.password,
            profile: this.state.profile
        }

        event.preventDefault();

        if (
            !(newUser.username === "" || newUser.pasword === "" || newUser.profile === "")
        ) {
            event.preventDefault();
            this.props.createUser(newUser);
        } else {
            console.log("ERROR CAMPO VACÍO")
        }
    }

    render() {
        return (
            <div className="createAccount-div" >
                <form onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br />
                    <label>Password: </label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br />
                    <label>Profile Picture (URL): </label>
                    <input type="text" name="profile" value={this.state.profile} onChange={this.handleChange} /><br />
                    <input type="submit" value="CREATE ACCOUNT" className="button" />
                </form>
            </div>
        )
    }
}


CreateAccountComp.propTypes = {
    createUSer: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return ({ users: state.users.users })
}

export default connect(mapStateToProps, { createUser })(CreateAccountComp);