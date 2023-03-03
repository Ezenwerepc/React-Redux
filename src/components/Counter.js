import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from './Store/counter';
const Counter = () => {
  const dispatch = useDispatch();
 const counter = useSelector((state)=>state.counter.counter);
 const show = useSelector((state)=>state.counter.showCounter);

 const incrementHandler = () =>{
  dispatch(counterActions.increment());
  ///dispatch({type: 'increment'})
}

 const decrementHandler = () =>{
  dispatch(counterActions.decrement());
  //dispatch({type: 'decrement'})
}

const increaseBy5Handler = () =>{  
  dispatch(counterActions.increase(5));
  //dispatch({type: 'increaseBy5', amount: 5})
}
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
    //dispatch({type: 'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
        <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseBy5Handler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
