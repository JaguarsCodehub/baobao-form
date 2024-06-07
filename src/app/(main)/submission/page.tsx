'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Form } from '@/types';
import { Badge } from '@/components/ui/badge';
import { redirect, useRouter } from 'next/navigation';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';

const SubmissionsPage = () => {
  const router = useRouter();
  const [form, setForm] = useState<Form | null>(null);

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const res = await axios.get('/api/forms');
        setForm(res.data[0]);
      } catch (error) {
        console.error('Error fetching form:', error);
      }
    };

    fetchForm();
  }, []);

  const handleCardClick = () => {
    router.push(`/form`);
  };

  return (
    <div className='relative h-full w-full bg-black'>
      <div className='bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]  min-h-screen flex flex-col  text-left items-center justify-center'>
        <Image
          src='/images/HERO.png'
          alt='HERO'
          width={600}
          height={400}
          className=' lg:inline -mb-12 opacity-50 -z-2'
        />

        {form ? (
          <div
            className='max-w-lg w-full m-12 p-12 bg-zinc-800/40 rounded-lg shadow-2xl hover:shadow-3xl cursor-pointer transform transition-transform z-10'
            // onClick={() => handleCardClick(form.id)}
          >
            <h1 className='text-2xl lg:text-3xl font-extrabold mb-8 text-center text-white'>
              Your Submission
            </h1>
            <div className='text-center space-y-6 bg-zinc-800/40'>
              <div className='flex flex-col items-center text-left bg-zinc-500/30 p-4 rounded-lg shadow-inner'>
                <svg
                  className='w-5 h-5 text-white mb-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M16 7a4 4 0 01-8 0M12 14v6m0 0H9m3 0h3m4-6H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v11a2 2 0 01-2 2z'
                  ></path>
                </svg>
                <h2 className='text-lg text-gray-300'>Email Address</h2>
                <p className='text-2xl font-semibold text-white'>{form.name}</p>
              </div>
              <div className='flex flex-col bg-zinc-500/30 p-4 rounded-lg shadow-inner'>
                <h2 className='text-lg text-gray-300'>Wallet Address</h2>
                <p className='line-clamp-1 text-xl font-semibold text-white'>
                  {form.walletAddress}
                </p>
              </div>
              <div className='flex flex-col bg-zinc-500/30 p-4 rounded-lg shadow-inner'>
                <h2 className='text-lg text-gray-300'>Your TwitterHandle</h2>
                <p className='line-clamp-1 text-xl font-semibold text-white'>
                  {form.twitterHandle}
                </p>
              </div>
              <div className='flex flex-col items-center bg-zinc-500/30 p-4 rounded-lg shadow-inner'>
                <h2 className='text-xl text-gray-300'>Status</h2>
                <Badge
                  className={`text-lg px-8 rounded-sm mt-4 ${
                    form.status === 'pending'
                      ? 'bg-rose-500'
                      : form.status === 'approved'
                      ? 'bg-green-500'
                      : 'bg-red-500'
                  } text-white`}
                >
                  {form.status}
                </Badge>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className='flex flex-col'>
              <p className='text-4xl font-bold text-white'>
                No Submissions Yet
              </p>
              <Button
                onClick={handleCardClick}
                className='flex mt-6 cursor-pointer items-center text-black bg-white hover:bg-stone-400 hover:text-black'
              >
                Fill the Form
                <ArrowRight className='ml-1.5 h-5 w-5 text-black' />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SubmissionsPage;
