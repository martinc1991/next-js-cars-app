import { CarProps, FilterProps } from '@/types';
import CarCard from './CarCard';
import ShowMore from './ShowMore';

interface CarResultsProps {
  searchParams: FilterProps;
  allCars: CarProps[];
}

const CarResults = ({ searchParams, allCars }: CarResultsProps) => {
  return (
    <section>
      <div className='home__cars-wrapper'>
        {allCars?.map((car) => (
          <CarCard car={car} />
        ))}
      </div>
      <ShowMore pageNumber={(searchParams.limit || 10) / 10} isNext={(searchParams.limit || 10) > allCars.length} />
    </section>
  );
};

export default CarResults;
