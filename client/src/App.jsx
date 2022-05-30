import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import StudentHomeScreen from './screens/StudentHomeScreen';
import StudentLoginScreen from './screens/StudentLoginScreen';
import StudentRegisterScreen from './screens/StudentRegisterScreen';
import TeacherHomeScreen from './screens/TeacherHomeScreen';
import TeacherLoginScreen from './screens/TeacherLoginScreen';
import TeacherRegisterScreen from './screens/TeacherRegisterScreen';

function App() {
  return (
    <div className='font-inter max-w-6xl mx-auto'>
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
