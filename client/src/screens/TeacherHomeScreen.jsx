import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';

const TeacherHomeScreen = () => {
  return (
    <div>
      <NavBar
        to={"Teachers"}
        primaryButton={{ slug: 'login', label: 'Sign In' }}
        secondaryButton={{ slug: 'register', label: 'Create Account' }}
      />
    </div>
  );
};

export default TeacherHomeScreen;
