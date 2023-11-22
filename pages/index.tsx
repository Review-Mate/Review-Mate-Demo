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
