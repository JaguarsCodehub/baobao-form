import CodeComponent from '@/components/code-component';
import LandingPage from '@/components/landing-page';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default function Home() {
  return (
    <div>
      <CodeComponent />
      {/* <LandingPage /> */}
    </div>
  );
}
