import { CarResults, Filters, Hero } from '@/components';
import NoResults from '@/components/NoResults';
import { HomeProps } from '@/types';
import { fetchCars } from '@/utils';

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        <Filters />
        {!isDataEmpty ? <CarResults searchParams={searchParams} allCars={allCars} /> : <NoResults />}
      </div>
    </main>
  );
}
