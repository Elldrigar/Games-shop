import React from 'react';
import './sign-in.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>Mam już konto</h2>
        <span className='subtitle'>Zaloguj się podając email i hasło</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            label='Hasło'
            required
          />
          <div className='buttons-container'>
            <CustomButton type='submit'> Zaloguj</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Użyj Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
