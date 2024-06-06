'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Form } from '@/types';
import { currentUser } from '@clerk/nextjs/server';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const SubmissionsPage = () => {
  const [forms, setForms] = useState<Form[]>([]);

  useEffect(() => {
    const fetchForms = async () => {
      const res = await axios.get('/api/forms');
      setForms(res.data);
    };

    fetchForms();
  }, []);

  return (
    <div>
      <div className='flex items-center mt-12 justify-center'>
        <h1 className=' text-3xl lg:text-6xl'>Your Submissions</h1>
      </div>

      <div className='px-24 mt-8 rounded-md border'>
        <Input
          placeholder='Filter forms...'
          // value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
          // onChange={(event) =>
          //   table.getColumn('email')?.setFilterValue(event.target.value)
          // }
          className='max-w-sm mb-12 mt-12 border-black'
        />
        <div className='rounded-md border'>
          <Table className='rounded-4xl border border-b-black border-l-black border-t-black border-r-black'>
            <TableCaption>A list of your recent forms.</TableCaption>
            <TableHeader className='bg-stone-800 rounded-2xl'>
              <TableRow>
                {/* <TableHead className='w-[100px]'>Id</TableHead> */}
                <TableHead className='text-white'>Name</TableHead>
                <TableHead className='text-white'>Wallet Address</TableHead>
                <TableHead className='text-right bg-green-400 text-white'>
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {forms.map((form) => (
                <TableRow key={form.id}>
                  {/* <TableCell className='font-medium'>{form.id}</TableCell> */}
                  <TableCell>{form.name}</TableCell>
                  <TableCell>{form.walletAddress}</TableCell>
                  <TableCell className='text-right text-xl'>
                    {form.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              {/* <TableRow>
              <TableCell colSpan={3}>Total Forms</TableCell>
              <TableCell className='text-right'>
                <Badge>Your Form is yet to be verified</Badge>
              </TableCell>
            </TableRow> */}
            </TableFooter>
          </Table>
        </div>
      </div>

      {/* {forms.length > 0 ? (
        <ul>
          {forms.map((form) => (
            <li key={form.id}>
              {form.name} - {form.status}
            </li>
          ))}
        </ul>
      ) : (
        <p>No submissions yet.</p>
      )} */}
    </div>
  );
};

export default SubmissionsPage;
