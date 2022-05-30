import React, { useState, useEffect } from 'react';
import CustomForm from '../components/CustomForm';
import CustomFormBtn from '../components/CustomFormBtn';
import CustomInput from '../components/CustomInput';

const TeacherLoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function teacherLogin(e) {
    e.preventDefault();
  }

  return (
    <CustomForm
      altLink={'/teacher/register'}
      altLinkText={'Create Account'}
      forWho={'Teachers'}
      formTitle={'Sign In'}
    >
      <CustomInput
        type='email'
        id='email'
        value={email}
        setValue={setEmail}
        label='Email'
        placeHolder='Enter email address'
      />
      <CustomInput
        type='password'
        id='password'
        value={password}
        setValue={setPassword}
        label='Password'
        placeHolder='Enter password'
      />
      <CustomFormBtn label={'Login now'} onClick={teacherLogin} />
    </CustomForm>
  );
};

export default TeacherLoginScreen;
