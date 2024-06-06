import MaxWidthWrapper from '@/components/max-width-wrapper';
import { SignUp } from '@clerk/nextjs';
import Image from 'next/image';
import { dark } from '@clerk/themes';

export default function Page() {
  return (
    <div className='flex flex-col items-center justify-center p-12'>
      {/* <Image
        src='/images/HERO.png'
        alt='HERO'
        width={1000}
        height={600}
        className='hidden lg:inline -mb-72'
      /> */}
      <SignUp />
    </div>
  );
}
