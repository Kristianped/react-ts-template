import { useAppDispatch, useAppSelector } from '@/store/hooks.ts';
import { decrement, increment, selectCount } from '@/store/slice/counterSlice.ts';

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);

  return (
    <div className='d-flex align-items-center justify-content-center'>
      <div className='container py-6 px-4 text-center'>
        <div className='align-items-center justify-content-center'>
          <button className='theme-danger btn-solid btn-lg' onClick={() => dispatch(decrement())}>
            -
          </button>
          <span className='font-monospace fs-lg fw-semibold px-6' aria-label='count'>
            {count}
          </span>
          <button className='theme-success btn-solid btn-lg' onClick={() => dispatch(increment())}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
