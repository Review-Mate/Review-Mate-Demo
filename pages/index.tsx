import Seo from '@/components/Seo';
import LandingMain from '@/components/landing/landingMain';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center w-full pt-12 lg:flex-row lg:justify-between'>
      <Seo title='ReviewMate|Home' />
      <LandingMain />
    </main>
  );
}
