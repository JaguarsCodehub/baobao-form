'use client';
import React from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import { redirect, useRouter } from 'next/navigation';
import MaxWidthWrapper from './max-width-wrapper';
import { auth } from '@clerk/nextjs/server';
import { useUser } from '@clerk/nextjs';

const ADMIN_PASSWORD = '123456';

const FormSchema = z.object({
  pin: z
    .string()
    .length(6, {
      message: 'Your one-time password must be exactly 6 characters.',
    })
    .refine((val) => val === ADMIN_PASSWORD, {
      message: 'The code you entered is incorrect.',
    }),
});

const CodeComponent = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: '',
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-black'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    router.push('/sign-up');
  };

  return (
    <div className='flex flex-col p-12 bg-black h-screen items-center justify-center'>
      <div className=''>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=''>
            <FormField
              control={form.control}
              name='pin'
              render={({ field }) => (
                <FormItem className=''>
                  <FormLabel className='text-5xl mb-8 text-white'>
                    Add your secret Code
                  </FormLabel>
                  <FormControl>
                    <InputOTP
                      className='bg-white text-black rounded-lg'
                      maxLength={6}
                      {...field}
                    >
                      <InputOTPGroup className='rounded-md text-6xl border border-white text-black'>
                        <InputOTPSlot
                          index={0}
                          className=' border border-white text-white'
                        />
                        <InputOTPSlot
                          index={1}
                          className=' border border-white text-white'
                        />
                        <InputOTPSlot
                          index={2}
                          className=' border border-white text-white'
                        />
                        <InputOTPSlot
                          index={3}
                          className=' border border-white text-white'
                        />
                        <InputOTPSlot
                          index={4}
                          className=' border border-white text-white'
                        />
                        <InputOTPSlot
                          index={5}
                          className=' border border-white text-white'
                        />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  {/* <FormDescription className='py-4 text-xl'>
                    Please enter the one-time password sent to your phone.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='flex flex-shrink mt-8'>
              <Button
                className='bg-white text-black hover:bg-green-500 hover:text-white rounded-md w-full'
                type='submit'
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CodeComponent;
