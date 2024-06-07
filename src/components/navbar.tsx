'use client';
import Link from 'next/link';
import MaxWidthWrapper from './max-width-wrapper';
import { Button, buttonVariants } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { SignOutButton, useAuth, useUser } from '@clerk/nextjs';
import { ModeToggle } from './modals/toggle-mode';
import Image from 'next/image';

const Navbar = () => {
  const { user } = useUser();

  const isAdmin = false;
  // const isAdmin = (user?.primaryEmailAddress = process.env.ADMIN_EMAIL);

  return (
    <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-zinc-900 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
          <Link href='/' className=' font-semibold no-underline'>
            {/* <Image src='/images/logo.png' width={50} height={10} alt='' /> */}
            <Image src='/images/HERO.png' width={150} height={14} alt='' />
          </Link>

          <div className='h-full flex items-center space-x-4'>
            {user ? (
              <>
                <div className='text-white'>
                  <SignOutButton />
                </div>

                {isAdmin ? (
                  <Link
                    href='/dashboard'
                    className={buttonVariants({
                      size: 'sm',
                      variant: 'ghost',
                    })}
                  >
                    Dashboard ✨
                  </Link>
                ) : null}
                <Link
                  href='/submission'
                  className={buttonVariants({
                    size: 'sm',
                    className: 'sm:flex items-center gap-1 no-underline',
                  })}
                >
                  <Button className='bg-white text-black hover:bg-white'>
                    View Status
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link
                  href='/api/auth/register'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}
                >
                  Sign up
                </Link>

                <Link
                  href='/api/auth/login'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}
                >
                  Login
                </Link>

                <div className='h-8 w-px bg-zinc-200 hidden sm:block' />
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
