import { onAuthStateChanged } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import NavBar from '../components/NavBar';
import { useUserState } from '../context/UserContext';
import Constants from '../utils/Constants';
import { useNavigate } from 'react-router-dom';

const StudentHomeScreen = () => {
  

  return (
    <div>
      <NavBar
        to={'Students'}
        primaryButton={{ slug: 'login', label: 'Sign In' }}
        secondaryButton={{ slug: 'register', label: 'Create Account' }}
        mainLinks={[{ slug: 'courses', label: 'Top Courses' }]}
      />
    </div>
  );
};

export default StudentHomeScreen;
