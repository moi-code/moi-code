import React, { Component } from 'react';
import { connect } from 'react-redux';
import './login.css';
import { MoiInput } from '../../src/components/common';
import { loginTextChange } from './../../src/actions';
class Login extends Component {
  render() {
    const { email, password, loginTextChange } = this.props;
    return (
      <div className='h-100 form mx-auto d-flex flex-column justify-content-center'>
        <form className='mt-5 p-5 mx-auto border border-dark bg-white'>
          <MoiInput
            label='Email'
            onChangeText={value =>
              loginTextChange({ prop: 'email', value })
            }
            value={email}
            type='email'
            className='form-control'
            id='loginEmail'
            placeholder='Email@Email.com'
          />
          <MoiInput
            label='Password'
            onChangeText={value =>
              loginTextChange({ prop: 'email', value })
            }
            value={password}
            type='password'
            className='form-control'
            id='loginPassword'
            placeholder='Password'
          />
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  email: state.AuthReducer.email,
  password: state.AuthReducer.password
});
export default connect(mapStateToProps, { loginTextChange })(Login);
