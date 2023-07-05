import { CustomFilter, SearchBar } from '@/components';
import { fuels, yearsOfProduction } from '@/constants';

const Filters = () => {
  return (
    <div className='home__filters'>
      <SearchBar />
      <div className='home__filter-container'>
        <CustomFilter title='fuel' options={fuels} />
        <CustomFilter title='year' options={yearsOfProduction} />
      </div>
    </div>
  );
};

export default Filters;
