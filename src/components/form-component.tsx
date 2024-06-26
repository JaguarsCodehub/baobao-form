'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { z } from 'zod';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'This field has to be filled' })
    .email('This is not a valid email'),
  walletAddress: z.string().min(12, {
    message: 'Wallet Address must be at least 12 characters',
  }),
  twitterHandle: z.string().min(4, {
    message: 'Enter your valid Twitter handle',
  }),
  contributionReview: z.string().min(20, {
    message: 'Write your contribution to web3 in at least 20 characters',
  }),
});

export function ProfileForm() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      walletAddress: '',
      contributionReview: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);
      const response = await axios.post('/api/forms', data);
      router.push('/thankyou');
      console.log(response);
    } catch (error) {
      console.error('Error in submitting form', error);
      alert('Failed to submit form');
    } finally {
      setIsSubmitting(false);
    }
    console.log(data);
  };

  return (
    <div className=' relative h-full w-full bg-white'>
      <div className='bg-black min-h-screen flex flex-col  text-left items-center justify-center'>
        <Image
          src='/images/HERO.png'
          alt='HERO'
          width={1000}
          height={600}
          className='hidden lg:inline -mb-72'
        />

        <Card className='mx-auto mt-20 lg:mt-12 mb-24 animate-fadeIn lg:m-0'>
          <CardHeader className='text-center bg-black text-white rounded-t-xl'>
            <CardTitle className='font-medium text-xl lg:text-3xl'>
              Fill this form for whitelisting your account
            </CardTitle>
            {/* <CardDescription>You have 3 unread messages</CardDescription> */}
          </CardHeader>
          <CardContent className='p-8 bg-white rounded-b-lg shadow-lg'>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-8'
              >
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-xl font-semibold'>
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Enter your email address'
                          {...field}
                          className='rounded-lg border-solid border-black'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='walletAddress'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-xl font-semibold'>
                        Wallet Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Enter your wallet address'
                          {...field}
                          className='rounded-lg border-solid border-black'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='twitterHandle'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-xl font-semibold'>
                        Twitter Handle
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Enter your twitter handle'
                          {...field}
                          className='rounded-lg border-solid border-black'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='contributionReview'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-xl font-semibold'>
                        Why do you want to be whitelisted for BaoBao NFT ?
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Provide a brief explanation of why you are interested in being a part of BaoBao NFT'
                          {...field}
                          className='rounded-lg border-solid border-black'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormItem>
                  <FormControl className='flex items-center justify-center'>
                    <span className='text-gray-800 text-lg lg:text-2xl text-center items-center justify-center  font-normal  '>
                      Join us on Twitter
                      <SocialIcon
                        url='https://x.com'
                        style={{ width: 20, height: 20, marginLeft: 4 }}
                        href='https://x.com/WOWbaobaoXYZ'
                      />{' '}
                      and Discord{' '}
                      <SocialIcon
                        url='https://discord.com'
                        style={{ width: 20, height: 20, marginLeft: 4 }}
                        href='https://discord.gg/WnQ5D7ycDf'
                      />
                    </span>
                  </FormControl>
                  <span className='flex items-center justify-center'>
                    turn on notifications.
                  </span>
                </FormItem>

                <Button
                  type='submit'
                  className='w-full py-3 bg-gradient-to-r bg-rose-500 text-white font-semibold rounded-lg shadow-md hover:from-rose-500 hover:to-red-700 transition duration-300'
                  disabled={isSubmitting}
                  onClick={() => {
                    toast({
                      title: 'Your Form was Submitted',
                      description:
                        'We will verify your details and connect with you soon!',
                    });
                  }}
                >
                  {isSubmitting ? 'Submitting Form....' : 'Submit'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
