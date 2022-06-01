import React, { useState, useEffect } from 'react';
import CustomForm from '../components/CustomForm';
import CustomInput from '../components/CustomInput';
import CustomFormBtn from '../components/CustomFormBtn';
import { useSnackBarState } from '../context/SnackBarContext';
import { useUserState } from '../context/UserContext';
import { useLocalStorage } from 'react-haiku';
import { useNavigate } from 'react-router-dom';
import Constants from '../utils/Constants';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';

const StudentRegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confPass, setConfPass] = useState('');

  const [userType, setUserType] = useLocalStorage('userType');
  const [snackBarState, snackBarDispatch] = useSnackBarState();
  const [userState, userDispatch] = useUserState();
  const navigate = useNavigate();

  async function registerStudent(e) {
    e.preventDefault();

    if (!email || !firstName || !lastName || !password || !confPass) {
      snackBarDispatch({
        type: Constants.SHOW_SNACKBAR,
        payload: '❌❌ Please fill all the fields',
      });
      return;
    }

    if (password !== confPass) {
      snackBarDispatch({
        type: Constants.SHOW_SNACKBAR,
        payload: 'Check your passwords again',
      });
      return;
    }

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        userDispatch({ type: Constants.SIGN_IN, payload: user });
        setUserType('student');
        navigate('/student/app');
      })
      .catch((err) => {
        alert(err.message);
      });

    // updating user's display name

    updateProfile(auth.currentUser, {
      displayName: firstName.trim() + lastName.trim(),
    });
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
