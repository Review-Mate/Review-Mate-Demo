import Seo from '@/components/Seo';
import ReviewAnalysis from '@/components/landing/reviewAnalysis/reviewAnalysis';
import StartTrip from '@/components/landing/startTrip';

export default function Home() {
  return (
    <main className='flex flex-col items-center w-[100vw] absolute left-0'>
      <Seo title='ReviewMate|Home' />
      <StartTrip />
      <ReviewAnalysis />
    </main>
  );
}
