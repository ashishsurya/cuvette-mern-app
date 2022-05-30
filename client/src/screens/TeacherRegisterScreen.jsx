import React, { useState, useEffect } from 'react';
import CustomForm from '../components/CustomForm';
import CustomInput from '../components/CustomInput';
import CustomFormBtn from '../components/CustomFormBtn';

const TeacherRegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confPass, setConfPass] = useState('');

  function registerTeacher(e) {
    e.preventDefault();
  }

  return (
    <CustomForm
      altLink={'/teacher/login'}
      altLinkText={'Sign In'}
      forWho={'Teachers'}
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
      <CustomFormBtn label='Register' onClick={registerTeacher} />
    </CustomForm>
  );
};

export default TeacherRegisterScreen;
