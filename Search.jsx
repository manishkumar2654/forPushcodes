import { useState } from "react";
import BackendUrl from "../Backendurl/BackendUrl";
import axios from "axios";


const Search = () => {
    const [rno, setRno] = useState("");
    const [mydata, setMydata] = useState([]);

    const handilSubmit = async() => {
        const api = `${BackendUrl}students/searchdata/?rno=${rno}` 
        const response = await axios.get(api);  //get se query string banani padti hai
        console.log(response.data);
        setMydata(response.data);
    }

const ans = mydata.map((item) => {
  return(
    <>
    <tr>
      <td>{item.rollno}</td>
      <td>{item.name}</td>
      <td>{item.city}</td>
      <td>{item.fess}</td>
    </tr>
    
    
    </>
  )
})


  return (
    <div>
      <h2>Search</h2>
      Enter Rollno : <input type="text" value={rno}  onChange={(e) => {
        setRno(e.target.value)
        console.log(e.target.value );
        
        }} />

        <button onClick={handilSubmit}>search data</button>



        <div>

          {ans}
        </div>
    </div>
  );
};

export default Search;