interface CarDetailsRowProps {
  category: string;
  value: string | number;
}

const CarDetailsRow = (props: CarDetailsRowProps) => {
  return (
    <div className='flex justify-between gap-5 w-full text-right' key={props.category}>
      <h4 className='text-grey capitalize'>{props.category}</h4>
      <p className='text-black-100 font-semibold'>{props.value.toString().toUpperCase()}</p>
    </div>
  );
};

export default CarDetailsRow;
