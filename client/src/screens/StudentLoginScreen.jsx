import { useState } from 'react';
import CustomForm from '../components/CustomForm';
import CustomFormBtn from '../components/CustomFormBtn';
import CustomInput from '../components/CustomInput';

const StudentLoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function studentLogin(e) {
    e.preventDefault();
    console.log({ email, password });
  }

  return (
    <CustomForm
      altLink={'/student/register'}
      altLinkText={'Create Account'}
      forWho={'Students'}
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
      <CustomFormBtn label={'Login now'} onClick={studentLogin} />
    </CustomForm>
  );
};

export default StudentLoginScreen;
