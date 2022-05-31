import Snackbar from '@mui/material/Snackbar';
import { Route, Routes } from 'react-router-dom';
import { useSnackBarState } from './context/SnackBarContext';
import HomeScreen from './screens/HomeScreen';
import StudentHomeScreen from './screens/StudentHomeScreen';
import StudentLoginScreen from './screens/StudentLoginScreen';
import StudentRegisterScreen from './screens/StudentRegisterScreen';
import TeacherHomeScreen from './screens/TeacherHomeScreen';
import TeacherLoginScreen from './screens/TeacherLoginScreen';
import TeacherRegisterScreen from './screens/TeacherRegisterScreen';
import Constants from './utils/Constants';

function App() {
  const [{ show, message }, dispatch] = useSnackBarState();

  console.log({ show, message });

  return (
    <div className='font-inter max-w-6xl mx-auto'>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={show}
        autoHideDuration={3000}
        onClose={() => {
          dispatch({ type: Constants.CLOSE_SNACKBAR });
        }}
        message={message}
      />
      <button
        onClick={() => {
          dispatch({ type: Constants.SHOW_SNACKBAR, payload: 'fdvvfhgbvv' });
        }}
      >
        Show Snackbar
      </button>
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
