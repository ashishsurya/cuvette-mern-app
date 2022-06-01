import Snackbar from '@mui/material/Snackbar';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { useSnackBarState } from './context/SnackBarContext';
import { useUserState } from './context/UserContext';
import HomeScreen from './screens/HomeScreen';
import { useLocalStorage } from 'react-haiku';

import StudentHomeScreen from './screens/StudentHomeScreen';
import StudentLoginScreen from './screens/StudentLoginScreen';
import StudentRegisterScreen from './screens/StudentRegisterScreen';
import TeacherHomeScreen from './screens/TeacherHomeScreen';
import TeacherLoginScreen from './screens/TeacherLoginScreen';
import TeacherRegisterScreen from './screens/TeacherRegisterScreen';
import Constants from './utils/Constants';

function App() {
  const [{ show, message }, snackBarDispatch] = useSnackBarState();
  const [{ user }, userDispatch] = useUserState();
  const [userType, setUserType] = useLocalStorage('userType');

  console.log({ show, message });
  console.log(user);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(userType)
    onAuthStateChanged(auth, function (user) {
      if (user && userType === 'student') {
        console.log('INTO THE IF IN USEEFFCET');
        userDispatch({ type: Constants.SIGN_IN, payload: user });
        navigate('/student/app');
      }
    });
  }, []);

  return (
    <div className='font-inter max-w-6xl mx-auto'>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={show}
        autoHideDuration={5000}
        onClose={() => {
          snackBarDispatch({ type: Constants.CLOSE_SNACKBAR });
        }}
        message={message}
      />

      <Routes>
        <Route path='' element={<HomeScreen />} />
        <Route path='student' element={<StudentHomeScreen />} />
        <Route path='teacher' element={<TeacherHomeScreen />} />
        <Route path='teacher/register' element={<TeacherRegisterScreen />} />
        <Route path='student/register' element={<StudentRegisterScreen />} />
        <Route path='teacher/login' element={<TeacherLoginScreen />} />
        <Route path='student/login' element={<StudentLoginScreen />} />
      </Routes>
    </div>
  );
}

export default App;
