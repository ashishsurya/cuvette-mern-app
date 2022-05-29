import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';

const HomeScreen = () => {
  return (
    <div>
      <NavBar
        primaryButton={{ slug: 'student', label: 'Student' }}
        secondaryButton={{ slug: 'teacher', label: 'Teacher' }}
      />
      <Hero />
    </div>
  );
};

export default HomeScreen;
