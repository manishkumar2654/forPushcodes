import { useState } from "react";
import BackendUrl from "./BackendUrl";
import axios from "axios";

const Create = () => {
  const [mydata, setMydata] = useState({});

  const onchangefun = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setMydata((val) => ({ ...val, [name]: value }));
    console.log(mydata);
  };

  const handilSubmit = async () => {
    const api = `${BackendUrl}students/datacreate`;
    const response = await axios.post(api, mydata);
    console.log(response.data);
  };

  return (
    <div>
      <h2>Create</h2>
      Enter Name: <input type="text" name="name" onChange={onchangefun} />
      <br />
      Enter id: <input type="text" name="stuid" onChange={onchangefun} />
      
      <button onClick={handilSubmit}>save</button>
    </div>
  );
};

export default Create;
