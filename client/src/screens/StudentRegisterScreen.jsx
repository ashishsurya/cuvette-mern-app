import React, { useState, useEffect } from 'react';
import CustomForm from '../components/CustomForm';
import CustomInput from '../components/CustomInput';
import CustomFormBtn from '../components/CustomFormBtn';
import { useSnackBarState } from '../context/SnackBarContext';
import Constants from '../utils/Constants';

const StudentRegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confPass, setConfPass] = useState('');

  const [state, dispatch] = useSnackBarState();

  function registerStudent(e) {
    e.preventDefault();

    if (password !== confPass) {
      dispatch({
        type: Constants.SHOW_SNACKBAR,
        payload: 'Check your passwords again',
      });
      return;
    }
  }

  return (
    <CustomForm
      altLink={'/student/login'}
      altLinkText={'Sign In'}
      forWho={'Students'}
      formTitle={'Create Account'}
    >
      <div className='flex items-center gap-3'>
        <CustomInput
          id='first-name'
          label='First Name'
          placeHolder='Enter first name'
          setValue={setFirstName}
          type='text'
          value={firstName}
        />
        <CustomInput
          id='last-name'
          label='Last Name'
          placeHolder='Enter last name'
          setValue={setLastName}
          type='text'
          value={lastName}
        />
      </div>
      <CustomInput
        id='email'
        label='Email'
        placeHolder='Enter email address'
        setValue={setEmail}
        type='email'
        value={email}
      />
      <div className='flex items-center gap-3'>
        <CustomInput
          id='pass'
          label='Password'
          placeHolder='Enter password'
          setValue={setPassword}
          type='password'
          value={password}
        />
        <CustomInput
          id='conf-pass'
          label='Confirm Password'
          placeHolder='Re-enter your password'
          setValue={setConfPass}
          type='password'
          value={confPass}
        />
      </div>
      <CustomFormBtn label='Register' onClick={registerStudent} />
    </CustomForm>
  );
};

export default StudentRegisterScreen;
