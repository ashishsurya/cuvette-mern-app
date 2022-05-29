import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import StudentHomeScreen from './screens/StudentHomeScreen';
import TeacherHomeScreen from './screens/TeacherHomeScreen';

function App() {

  return (
    <div className='font-inter max-w-6xl mx-auto'>
      <Routes>
        <Route path='' element={<HomeScreen />} />
        <Route path='student' element={<StudentHomeScreen />} />
        <Route path='teacher' element={<TeacherHomeScreen />}/>
        
      </Routes>
    </div>
  );
}

export default App;
