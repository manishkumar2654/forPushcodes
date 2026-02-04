import {useDispatch, useSelector} from "react-redux";

const App = () => {

  const dispatch = useDispatch();
  const count = useSelector((state)=>state.counter.value);



  return (
    <div>
      <h2>{count}</h2>

      <button onClick={()=>{

      }}>increment</button>

      <button onClick={()=>{

      }}>decrement</button>
    </div>
  );
};

export default App;