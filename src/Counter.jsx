import './Counter.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Redux/Slices/CounterSlice';

function Counter() {
	const dispatch = useDispatch();
	const count = useSelector(state => state.counter.value);

	return (
		<div className="Counter">
			<div>{count}</div>
			<div>
				<button onClick={() => dispatch(decrement())}>- 1</button>
				<button onClick={() => dispatch(increment())}>+ 1</button>
			</div>
		</div>
	);
}

export default Counter;
