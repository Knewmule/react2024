import React,{Component,useMemo} from 'react';
import classes from './Counter.module.css';
import { useSelector,useDispatch,connect } from 'react-redux';

const Counter = (props) => {
  const dispatch = useMemo()

  const Counter = useSelector(state => state.counter)
  const incrementHandler = () =>{
    dispatch({type:'increment'})
  }
  const decrementHandler = () =>{
    dispatch({type:'decrement'})
  }
  const toggleCounterHandler = () => {};

  const sqo = () =>{

    if(Counter !== undefined){
      return(
        <main className={classes.counter}>
    <h1>Redux Counter</h1>
    <div className={classes.value}>-- { Counter} --</div>
    <div>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
    </div>
    <button onClick={toggleCounterHandler}>Toggle Counter</button>
  </main>
      )
    }else{
      return(
        <p>Error Returned</p>
      );
    }
  }
  return (
    sqo
  );
};

// class Counter extends Component{


//   render(){
//     <main className={classes.counter}>
//     <h1>Redux Counter</h1>
//     <div className={classes.value}>-- { counter} --</div>
//     <div>
//       <button onClick={incrementHandler}>increment</button>
//       <button onClick={decrementHandler}>decrement</button>
//     </div>
//     <button onClick={toggleCounterHandler}>Toggle Counter</button>
//   </main>
//   }
// }


const mapStateToProps = state => {
  return {
    counter: state.counter
  };
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

