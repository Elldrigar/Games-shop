import React from 'react';
import './sign-in.scss';
import FormInput from '../form-input/form-input';

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
        <h2>Mam już konto</h2>
        <span>Zaloguj się podając email i hasło</span>

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
          <input type='submit' value='Potwierdź' />
        </form>
      </div>
    );
  }
}

export default SignIn;
