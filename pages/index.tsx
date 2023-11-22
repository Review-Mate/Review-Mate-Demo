import Seo from '@/components/Seo';
import AllTrip from '@/components/landing/allTrip';
import DuringTrip from '@/components/landing/duringTrip/duringTrip';
import PostTrip from '@/components/landing/postTrip';
import PreTrip from '@/components/landing/preTrip/preTrip';
import ReviewAnalysis from '@/components/landing/reviewAnalysis/reviewAnalysis';
import StartTrip from '@/components/landing/startTrip';

export const landingStyle = 'py-24';

export default function Home() {
  return (
    <main className='flex flex-col items-center w-[100vw] absolute left-0'>
      <div className='invisible xl:visible absolute top-0 left-[120px] w-[1px] h-full border z-10' />
      <div className='invisible xl:visible absolute -top-[150px] left-[120px] w-[1px] h-[150px] border z-10' />
      <Seo title='ReviewMate|Home' />
      <StartTrip />
      <ReviewAnalysis />
      <PreTrip />
      <DuringTrip />
      <PostTrip />
      <AllTrip />
    </main>
  );
}
