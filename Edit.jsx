
import { useParams } from "react-router";
import BackendUrl from "../Backendurl/BackendUrl";
import axios from "axios";
import { useEffect, useState } from "react";
const Edit = () => {

const {id} = useParams();
const [mydata, setMydata] = useState({});

const loadData = async () => {
    const api =`${BackendUrl}students/editshow/?sid=${id}`
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
}



useEffect(()=>{
    loadData();
 } ,[])


 const handilInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setMydata(val =>({...val, [name]:value}));
    console.log(mydata);
    
}



 const dataSave = async() => {

    const api =`${BackendUrl}students/editsave`;
    const response = await axios.post(api, mydata);
    console.log(response.data);
     setMydata(response.data);
      loadData();
    
 }

  return (

    <div>
      <h2>Edit</h2> <h1>{id}</h1>


    enter name:  <input type="text" name="name" value={mydata.name} onChange={handilInput} /> <br />
    enter roll no:  <input type="text" name="rollno" value={mydata.rollno} onChange={handilInput} /> <br />
    enter fess:  <input type="text" name="fess" value={mydata.fess} onChange={handilInput} /> <br />
    enter city:  <input type="text" name="city" value={mydata.city} onChange={handilInput}/> <br />
    <button onClick={dataSave}>data save</button>
    
    </div>
  );
};

export default Edit;