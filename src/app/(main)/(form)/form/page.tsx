'use client';
import { ProfileForm } from '@/components/form-component';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Form = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  return (
    <div className=''>
      <div className='items-center justify-center'>
        <ProfileForm />
      </div>
    </div>
  );
};

export default Form;
