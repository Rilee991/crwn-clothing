import React, { Component } from 'react';

import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../form-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert('Password and Confirm Password is different. Please enter again!');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);

            createUserProfileDocument(user, { displayName });

            this.setState({
                displayName:'',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(err) {
            console.log(err);
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName' 
                        type='text'
                        value={displayName}
                        required
                        label='Display Name'
                        handleChange={this.handleChange}
                    />

                    <FormInput
                        name='email' 
                        type='email'
                        value={email}
                        required
                        label='Email'
                        handleChange={this.handleChange}
                    />

                    <FormInput
                        name='password' 
                        type='password' 
                        value={password} 
                        required
                        label='Password' 
                        onChange={this.handleChange}
                    />

                    <FormInput
                        name='confirmPassword' 
                        type='password' 
                        value={confirmPassword} 
                        required
                        label='Confirm Password'
                        onChange={this.handleChange}
                    />

                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;