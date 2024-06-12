/* eslint-disable @next/next/no-img-element */
'use client';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import React, { useEffect } from 'react';
import { runFireworks } from '@/lib/runFireworks';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SocialIcon } from 'react-social-icons';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ThankYou = () => {
  const router = useRouter();

  useEffect(() => {
    runFireworks();
  }, []);

  const shareOnTwitter = () => {
    const text = encodeURIComponent(
      'I just applied for the @wowBaoBaoXYZ NFT Whitelist !'
    );
    const url = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <div className='relative h-full w-full bg-black'>
      <div className='bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]  min-h-screen flex flex-col  text-left items-center justify-center'>
        <Image
          src='/images/HERO.png'
          alt='HERO'
          width={600}
          height={400}
          className='hidden lg:inline -mb-32 opacity-50'
        />

        <MaxWidthWrapper className='p-6 md:p-12 items-center justify-center flex'>
          <div className='bg-zinc-800/50 rounded-lg shadow-lg w-fit text-center p-6 md:p-12'>
            <h1 className='text-3xl md:text-4xl font-bold text-white mb-6 '>
              Your application has been submitted
            </h1>
            <p className='text-lg md:text-xl font-semibold text-gray-200 mt-8'>
              Please check back later to see if you are approved.
            </p>
            <p className='text-lg md:text-xl text-gray-200 mb-4'>
              Our team is currently reviewing it.
            </p>

            {/* <div className='flex justify-center mb-8'>
            <img
              src='check-mark.png'
              alt='Check Mark'
              className='w-12 h-12'
            />
          </div> */}
            <div className='flex justify-center'>
              <Button
                onClick={shareOnTwitter}
                className='mt-12 p-4 text-xl bg-blue-400 text-white rounded-md hover:bg-white hover:text-black'
              >
                Share on Twitter
                <SocialIcon
                  url='https://x.com'
                  style={{
                    width: 20,
                    height: 20,
                    marginLeft: 12,
                  }}
                  href='https://x.com/catcentsio'
                />
              </Button>
              <Button
                onClick={() => router.push('/submission')}
                className='ml-4 mt-12 p-4 text-xl bg-purple-500 text-white rounded-md hover:bg-white hover:text-black'
              >
                Join Discord Channel
                <SocialIcon
                  url='https://discord.com'
                  style={{
                    width: 20,
                    height: 20,
                    marginLeft: 12,
                  }}
                  href='https://x.com/catcentsio'
                />
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default ThankYou;

<div className='relative h-full w-full bg-white'>
  <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]'></div>
</div>;
