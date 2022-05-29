import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';

const StudentHomeScreen = () => {
  return (
    <div>
      <NavBar
        to={"Students"}
        primaryButton={{ slug: 'login', label: 'Sign In' }}
        secondaryButton={{ slug: 'register', label: 'Create Account' }}
        mainLinks = {[{slug:"courses",label:"Top Courses"}]}
      />
    </div>
  );
};

export default StudentHomeScreen;
